const express=require('express')
const path=require('path')
const { dirname } = require('path')
const router=require('./Routes')
const app=express()
const cors=require('cors')

// app.use(cors)
app.use(cors({origin: 'http://localhost:5173',}));  
app.use(express.json())
app.use('/api',router)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'tasks.json'))
})

const port=4000 
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})