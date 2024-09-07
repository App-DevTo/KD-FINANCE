const express = require('express')
const user = require('./routers/userRouter')
const app = express()

app.use(user)
app.listen(4000,(req,res)=>{
    console.log('app running on port 4000')
})
