require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isAuth = async (req, res, next) => {
  try {
    // Access the token from the cookies
    const token = req.cookies.token;
    if (!token) {
      res.status(401); // 401 Unauthorized
      throw new Error('Authorization failed: No token provided');
    }

    // Verify the token
    const tokenVerify = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!tokenVerify) {
      res.status(401);
      throw new Error('Authorization failed: Invalid token');
    }

    // Find the user by ID from the token payload
    const user = await User.findById(tokenVerify._id).select('-password');
    if (!user) {
      res.status(404); // 404 Not Found
      throw new Error('User not found');
    }

    // Attach the user object to the request for future middleware or routes
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized', stack: error.message });
  }
};

module.exports = isAuth;
