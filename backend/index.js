const express = require('express')
const user = require('./routers/userRouter')
const mongoose = require('mongoose')
const app = express()

app.use(user)


mongoose.connect('mongodb://127.0.0.1/financeDB')
.then(()=>{
    console.log('connected to the database')
})
.catch(error=>{
    console.log('Failed to connect to the database')
})

app.listen(4000,(req,res)=>{
    console.log('app running on port 4000')
})
