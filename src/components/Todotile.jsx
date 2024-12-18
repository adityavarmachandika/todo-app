import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const deletetask= async(id)=>{
  console.log(id)
  try{
    const response=await fetch(`http://localhost:4000/api/deletetask/${id}`,{
      method:'DELETE'
    })
    if(response.ok)
      alert('the task is deleted')
  }
  catch(error){
    console.log(error)
  }
}


const Todotile = ({id,title,desc,fromchild}) => {
  
    const toparent= async(id)=>{
      try{
        const response=await  fetch(`http://localhost:4000/${id}`)
        if(!response.ok) console.error('failed to fetch the details')
          const data=await response.json()
        fromchild(data)
    }
    catch(error){
      console.log(error)
    }
    
    }
    const [more,setmore]=useState(0)
    if(more){
        desc=desc.slice(0,97)
    }
  return (
    <div className='w-80 bg-slate-100 shadow-xl'>
        <h1 className=' py-2 px-3 bg-red-400 text-3xl'>{title}</h1>
        <p className='px-3'>{desc}</p>
    
        <button className='px-3  text-red-400 ' onClick={()=>setmore((oldstate)=>!oldstate)}>{(more)?'more':'less'}</button>
        <div className='flex justify-end'>
            <button className='px-3 m-3 bg-red-400 rounded-xl text-xl' onClick={()=>toparent(id)}>Edit</button>
            <button className='px-3  m-3  bg-red-400 rounded-xl text-xl ' onClick={()=>deletetask(id)}>Delete</button>
        </div>
    </div>
  )
}

export default Todotile