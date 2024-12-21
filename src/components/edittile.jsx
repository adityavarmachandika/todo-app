import React from 'react'

const Edittile = () => {
  return (
    <div>
        <div className='flex flex-col w-72 justify-center h-96'>
        <h1 className='self-center text-2xl'>EDIT TASK</h1>
          <label htmlFor="taskInput" className='text-lg mb-3'>NAME</label>
          <input onChange={(e)=>settitle(e.target.value)}  type="text" className='h-10 shadow-lg text-ellipsis rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=''/>
          <label htmlFor="taskInput" className='text-lg my-3'>DESCRITION</label>
          <input onChange={(e)=>setdesc(e.target.value)}  type="text" className='shadow-lg h-24 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=' '/>
          <button  className='w-24 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl'  >CHANGE</button>
        </div>
    </div>
  )
}

export default Edittile