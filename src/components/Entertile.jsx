import React, { useState } from 'react'

const Entertile = () => {
  const [title,settitle]=useState()
  const [desc,setdesc]=useState()
  const entertask = async()=>{
    const newtask=  {
      id:Date.now(),
      title:title,
      description:desc,
      completed:false
    }
    try{
      const response= await fetch('http://localhost:4000/api/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(newtask)
      })
      if(!response.ok){
        console.log('not successful')
      }
      window.location.reload()
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>
        <div className='flex flex-col w-72 justify-center h-96'>
        <h1 className='self-center text-2xl'>ADD TASK</h1>
          <label htmlFor="taskInput" className='text-lg mb-3'>NAME</label>
          <input onChange={(e)=>settitle(e.target.value)}  type="text" className='h-10 shadow-lg text-ellipsis rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=''/>
          <label htmlFor="taskInput" className='text-lg my-3'>DESCRITION</label>
          <input onChange={(e)=>setdesc(e.target.value)}  type="text" className='shadow-lg h-24 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=' '/>
          <button onClick={entertask}  className='w-20 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl'  >ADD</button>
        </div>
    </div>
  )
}

export default Entertile