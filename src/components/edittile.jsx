import React, { useContext, useEffect, useState } from 'react'
import { editcontext } from '../pages/Homepage'
const Edittile = () => {
  const {setedit , id}= useContext(editcontext)
  const [title,settitle]=useState('')
  const [desc,setdesc]=useState('')
  const geteditdata = async()=>{
    try{
      const res=await fetch(`http://localhost:4000/${id}`)
      if(!res.ok)
        console.log('not able to get data from backend')
      const data=await res.json()
      settitle(data.title)
      setdesc(data.description)
    }
    catch(error){
      console.log(error)
    }
  }


  const sendeditdata = async()=>{
    const editeddata= {
      title:title,
      description:desc
    }
    try{
      const res= await fetch(`http://localhost:4000/api/add/edit/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        } ,
        body:JSON.stringify(editeddata)
      })
      if(!res.ok)
        console.log('negitive response from the server')
      settitle('')
      setdesc('')
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect (()=>{
    geteditdata()
  },[id])
  return (
    <div>
        <div className='flex flex-col w-72 justify-center h-96'>
        <h1 className='self-center text-2xl'>EDIT TASK</h1>
          <label htmlFor="taskInput" className='text-lg mb-3'>NAME</label>
          <input onChange={(e)=>settitle(e.target.value)}  type="text" className='h-10 shadow-lg text-ellipsis rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' value={title} placeholder=''/>
          <label htmlFor="taskInput" className='text-lg my-3'>DESCRITION</label>
          <input onChange={(e)=>setdesc(e.target.value)}  type="text" className='shadow-lg h-24 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' value={desc} placeholder=' '/>
          <div className='flex'>
            <button className='w-24 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl' onClick={()=>setedit(false)}>ADD</button>
            <button  className='w-24 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl' onClick={()=>sendeditdata()}  >CHANGE</button>
          </div>
        </div>
    </div>
  )
}

export default Edittile