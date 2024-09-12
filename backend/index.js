const express = require('express')
const user = require('./routes/userRoute')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
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
