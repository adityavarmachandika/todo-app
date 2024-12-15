// import express,{router} from 'express'
const express=require('express')
const router = express.Router();
// const router=require('express.router')
// import fs from fs
const fs = require('fs');

router.use(express.json())
const filePath='./tasks.json'


router.post('/add',(req,res)=>{
    const newtask=req.body
    fs.readFile(filePath,(err,data)=>{
        if(err) return res.status(500).send('error reading the tasks')
        const tasks=JSON.parse(data|| '[]')
        tasks.push(newtask)

        fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) return res.status(500).send('Error saving task.');
            res.status(201).send(newtask);
          })
    })
})


    router.delete('/deletetask/:id',(req,res)=>{
        const id=parseInt(req.params.id)
        if(isNaN(id))
            return res.status(400).json({ error: 'Invalid ID format' });
        fs.readFile(filePath,(err,data)=>{
            if(err) return res.status(500).send('error saving the tasks')
            const tasks=JSON.parse(data|| '[]')
        const index=tasks.findIndex((t)=>id===t.id)
        
        if (index !== -1) {
            tasks.splice(index, 1)
            fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Error saving updated tasks:', writeErr);
                    return res.status(500).json({ error: 'Error saving tasks' });
                }
                
                console.log(`Task with ID ${id} deleted successfully.`);
                return res.status(200).json({ message: `Task with ID ${id} deleted successfully.` });
              });
        } else {
            return res.status(404).json({ error: 'To-do not found' });
        }


        
    })
    })

module.exports=router;