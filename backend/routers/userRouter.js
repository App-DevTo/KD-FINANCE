const express = require('express')

const router = express.Router()


router.post('/register',(req,res)=>{

})
router.get('/users',(req,res)=>{
    res.send({"users":"No users available"})
})

module.exports = router