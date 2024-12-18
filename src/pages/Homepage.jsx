import React, { useEffect, useState } from 'react'
import Todotile from '../components/Todotile'
import tailwindConfig from '../../tailwind.config'
import { useAsyncError } from 'react-router-dom'
const Homepage = () => {
  const [alltasks,setalltasks]=useState([])
  const [title,settitle]=useState('')
  const [description,setdesc]=useState('')
  const [fromtodotile,setfromtodotile]=useState({})




  const taskdisplay=async ()=>{
    try{
      const response= await fetch('http://localhost:4000')
      if(response.ok){
        const alltasks=await response.json()
        setalltasks(alltasks)
      }
      else
      console.error('failed to fetch')
    }
    catch(error){
      console.log('error fetching',error)
    }
  }

  const handleaddtask= async ()=>{

    


    const newtask={
      id:Date.now(),
      title,
      description,
      completed:'false'
    }
    try{
      const met=(fromtodotile)?'PUT':'POST'
      const url=(!fromtodotile)?'http://localhost:4000/api/add':`http://localhost:4000/api/add/${fromtodotile.id}`
      const response= await fetch(url,{
        method:met,
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(newtask),
      })
      if(response.ok){
        taskdisplay()
        setdesc('')
        settitle('')
        setfromtodotile({})
      }
      else{
        alert('error')
      }
    }
    catch(error){
      console.log(error)
      alert("error loading the server")
  }
  }
  useEffect(() => {
    if (fromtodotile && Object.keys(fromtodotile).length > 0) {
      settitle(fromtodotile.title || '');
      setdesc(fromtodotile.description || '');
    }
    else{
      settitle('')
      setdesc('')
    }
  }, [fromtodotile]);
  useEffect(()=>{
    taskdisplay() 
  },[])
  return (
    <div className='font-bold'>
      <div className='m-9 text-center text-5xl font-bold'>TODO LIST</div>
      <div className='flex justify-around'>
        <div className='flex flex-col w-1/6'>
        <h1 className='self-center text-2xl'>ADD TASK</h1>
          <label htmlFor="taskInput" className='text-lg mb-3'>NAME</label>
          <input onChange={(e)=>settitle(e.target.value)} value={title} type="text" className='h-10 shadow-lg text-ellipsis rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=''/>
          <label htmlFor="taskInput" className='text-lg my-3'>DESCRITION</label>
          <input onChange={(e)=>setdesc(e.target.value)} value={description} type="text" className='shadow-lg h-24 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=' '/>
          <button  className='w-20 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl' onClick={handleaddtask} >ADD</button>
        </div>
      <div>
        {alltasks.map((singletask)=>(
          <Todotile key={singletask.id} id={singletask.id} title={singletask.title} desc={singletask.description} fromchild={setfromtodotile}/>
        ))}
      </div>
      </div>  

    </div>
  )
}

export default Homepage