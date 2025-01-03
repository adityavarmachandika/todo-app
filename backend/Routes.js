// import express,{router} from 'express'
const express=require('express')
const router = express.Router();
// const router=require('express.router')
// import fs from fs
const fs = require('fs');
const { request } = require('http');
const { data } = require('react-router-dom');

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


router.put('/add/edit/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the task ID from the request params
    const updatedTask = req.body; // The updated task data sent in the request body

    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the tasks');
        }

        try {
            const tasks = JSON.parse(data || '[]'); // Parse the tasks from the file

            // Find the index of the task with the given ID
            const index = tasks.findIndex((t) => t.id === id);
            if (index === -1) {
                return res.status(404).send('Task not found'); // Task doesn't exist
            }

            // Update the task at the found index
            tasks[index] = { ...tasks[index], ...updatedTask };

            // Write the updated tasks back to the file
            fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
                if (err) {
                    return res.status(500).send('Error saving the tasks');
                }
                res.status(200).send('Task updated successfully'); // Send success response
            });
        } catch (error) {
            return res.status(500).send('Error parsing the tasks');
        }
    });
});


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