import React, { useEffect, useState } from 'react'
import Todotile from './Todotile'
const All_todo_display = () => {
  const [alltodo,setalltodo]=useState([])
  const displayall = async ()=>{
    try{
      const response=await fetch('http://localhost:4000')
      const data= await response.json()
      setalltodo(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect( ()=>{
    displayall()
  },[alltodo])
  return (
    <div className='grid grid-cols-2 gap-9 h-96 overflow-y-scroll'>
      {
        alltodo.map((item)=>(
            <Todotile key={item.id} id={item.id} title={item.title} desc={item.description} />
        ))
      }
    </div>
  )
}

export default All_todo_display