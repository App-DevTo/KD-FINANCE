const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide the name']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'please provide the email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide a valid email']
    },
    password:{
        type:String,
        required:[true,'please provide the  password'],
        minLength:[6,'password must be of minimum length 6 characters'],
    },
    photo:{
        type:String,
        required:[true,'please provide a photo'],
        default:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    nin:{
        type:String,
    },
    phone:{
        type:String,
        default:'+256'
    },
    bio:{
        type:String,
        default:'Bio',
        maxLength:[250,'bio characters can be of maximum 250 characters']
    },
},{
    timestamps:true
})

userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('user',userSchema)

module.exports = User