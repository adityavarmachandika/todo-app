import React, { useState } from 'react'

const Todotile = () => {
    const [more,setmore]=useState(0)
    let desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, pariatur nulla. Quis ipsum ab suscipit numquam maxime veniam nam animi sint.'
    if(more){
        desc=desc.slice(0,97)
    }
  return (
    <div className='w-80 bg-slate-100 shadow-xl'>
        <h1 className=' py-2 px-3 bg-red-400 text-3xl'>Title</h1>
        <p className='px-3'>{desc}</p>
    
        <button className='px-3  text-red-400 ' onClick={()=>setmore((oldstate)=>!oldstate)}>{(more)?'more':'less'}</button>
        <div className='flex justify-end'>
            <button className='px-3 m-3 bg-red-400 rounded-xl text-xl'>Edit</button>
            <button className='px-3  m-3  bg-red-400 rounded-xl text-xl '>Delete</button>
        </div>
    </div>
  )
}

export default Todotile