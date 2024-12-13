const express=require('express')
const path=require('path')
const { dirname } = require('path')

const app=express()
const filepath='./tasks.json'
app.get('/',(req,res)=>{
    res.sendfile(filepath)
})

const port=4000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})