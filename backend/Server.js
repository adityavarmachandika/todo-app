const express=require('express')
const path=require('path')
const { dirname } = require('path')
const router=require('./Routes')
const app=express()
const cors=require('cors')
const fs=require('fs')
// app.use(cors)
app.use(cors({origin: 'http://localhost:5173',}));  
app.use(express.json())

app.use('/api',router)
pathname=path.join(__dirname,'tasks.json')
app.get('/',(req,res)=>{
    res.sendFile(pathname)
})

app.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    fs.readFile(pathname,(err,data)=>{
        if(err) return res.status(500).send('error reading the task')
        try{
        const tasks=JSON.parse(data|| [])
        const task=tasks.find((t)=>t.id === id)
        if(task){
            res.json(task)
        }
        else{
            res.status(404).send('task not found')
        }
        }
        catch(error){
            res.status(500).send('error parsing the task')
        }
    })  
})
const port=4000 
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})