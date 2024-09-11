require("dotenv").config();
const bcrypt = require("bcryptjs");
const crypto = require('crypto')
const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const User = require("../models/userModel");
const Token = require('../models/tokenModel')
const sendEmail = require('../utils/sendEmail')
const jwt = require("jsonwebtoken");
const isAuth = require('../middleWare/isAuth')
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { email, name, password } = req.body;

    // Check if all fields are provided
    if (!email || !name || !password) {
      res.status(400);
      throw new Error("Please fill in all the fields");
    }

    // Check if the password length is sufficient
    if (password.length < 7) {
      res.status(409);
      throw new Error("Password must be of minimum length six characters");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401);
      throw new Error("User already exists");
    }

    // Hash the password

    // Create the user
    const user = await User.create({
      name,
      email,
      password,
    });

    // If user creation is successful, send the user data as response
    if (user) {
      const { _id, name } = user;
      const token = jwt.sign({ _id, name }, process.env.TOKEN_SECRET, {
        expiresIn: "60s",
      });
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 1000 * 86400),
      });
      res.status(201).json({
        token: token,
      });
    } else {
      throw new Error("Failed to create a new user");
    }
  })
);

router.get(
  "/users",
  asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password");
    if (users.length === 0) {
      res.send({
        message: "No users available",
      });
    }
    res.send(users);
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Please provide password and email");
    }

    const user =await User.findOne({ email: email });
    if (!user) {
      res.status(404);
      throw new Error("User does not exist");
    }

    const { _id, name } = user;

    const passwordisCorrect = await bcrypt.compare(password, user.password);
    if (!passwordisCorrect) {
      res.status(400);
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ _id, name }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
      expires: new Date(Date.now() + 1000 * 86400),
    });
    res.status(201).json({
      token: token,
    });
  })
);

router.get('/logout',(req,res)=>{
    res.cookie("token", '', {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
        expires: new Date(0),
      });
      res.status(200).json({message:"succesfully logged out"})
})


router.get('/user',isAuth,asyncHandler(async(req,res)=>{
    const {user} = req
    if(!user){
        res.status(404)
        throw new Error('No user found')
    }
    res.status(200).json(user)
}))

router.get('/login-status',(req,res)=>{
    const token = req.cookies.token
    if(!token){
        res.json(false)
    }
    const verifyToken = jwt.verify(token,process.env.TOKEN_SECRET)
    if(!verifyToken){
        res.json(false)
    }
    res.json(true)
})

router.patch('/update-user',isAuth,asyncHandler(async(req,res)=>{
    
    const found_user = await User.findById(req.user._id)

    if(!found_user){
       res.status(400)
       throw new Error('User does not exist')
    }
    const {email,name,phone,photo,bio} = found_user
    found_user.email = email,
    found_user.name = req.body.name||name,
    found_user.phone = req.body.phone||phone,
    found_user.bio = req.body.bio||bio
    found_user.photo = req.body.photo||photo
    found_user.save()
                .then((user)=>{
                    res.json({message:"User updated successfully"})
                })
                .catch((err)=>{
                    req.json({
                        message:"Failed to update the user"
                    })
                });
}))


router.put("/change-password",isAuth,asyncHandler(async(req,res)=>{
    const id = req.user._id
    const {password,new_password,confirm_password} = req.body
    console.log(req.body)
    if(!password||!new_password||!confirm_password){
        res.status(400)
        throw new Error('please fill in the password fields')
    }

    if(new_password!==confirm_password){
        res.status(400)
        throw new Error('Password not matching')
    }

    const user = await User.findById(id)
    if(!user){
        res.status(400)
        throw new Error('user not found')
    }
    const verify_password = await bcrypt.compare(password,user.password)
    if(!verify_password){
        res.status(400)
        throw new Error('Invalid password')
    }
    user.password = new_password
    await user.save()
                .then(()=>{
                    res.json({
                        message:"Password changed sucessfully"
                    })
                })
                .catch((err)=>{
                    res.json({
                        message:"Password not changed ",
                        stack:err
                    })
                })
}))




router.post('/forgot-password',asyncHandler( async(req,res)=>{
const {email} = req.body
const user = await User.findOne({email})
if(!user){
  res.status(400)
  throw new Error('Email does not exist')
}

const tokenCheck = await Token.find({user_Id:user._id})
if (tokenCheck){
  Token.deleteOne({user_Id:user._id})
}


let reset_token = crypto.randomBytes(64).toString('hex')+user._id


const hash_token = crypto.createHash('sha256').update(reset_token).digest('hex')

const token = new Token({
  user_Id: user._id,
  token: hash_token,
  created_at:Date.now(),
  expires_at: Date.now()+(30*(60*1000))
})

await token.save()
            // .then(()=>{

            // })
            // .catch()
const user_url = `${process.env.URL}/${reset_token}`

const message = `
<h2>Hello ${user.name}</h2>
<p>please click the link below to reset your password</p>
<p>This link is valid for 30 minutes</p>
<a href=${user_url} clicktracking=off>${user_url}</a>


<p>Regards ....</p>
<p>Developers team</p>
`

const subject = ' No-reply-password reset Invent-app'
const send_to = user.email
const sent_from = process.env.EMAIL_USER

try {
  const emailSent = await sendEmail(subject, message, send_to, sent_from);
  if (!emailSent) {
    res.status(400);
    throw new Error('Unable to send the reset email');
  }
  res.status(200).json({
    message: "Reset link sent to your email"
  });

} catch (error) {
  console.error('Error sending email:', error); // Log the specific error for debugging
  res.status(400);
  throw new Error('Reset password failed, please try again later');
}

h

}))


router.post("/reset-password/:token",asyncHandler(async (req,res)=>{
  const user_token = req.params.token
  const {password,confirm_password} = req.body
  if (!password || !confirm_password){
    res.status(404)
    throw new Error('Please provide the password')
  }


  if (password !== confirm_password){
    res.status(404)
    throw new Error('Password not matching')
  }
  const hash_token = await crypto.createHash('sha256').update(user_token).digest('hex')
  found_token = await Token.findOne({token:hash_token,expires_at:{$gt:Date.now()}})
  if(!found_token){
    res.status(404)
    throw new Error('Invalid reset token')
  }
  const user = await User.findOne({_id:found_token.user_Id})
  if(!user){
    res.status(404)
    throw new Error('User not found')
  }
  user.password = password
  await user.save()
  res.send("password reset succefully")
}))



module.exports = router;
