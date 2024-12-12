import React from 'react'
import Todotile from '../components/Todotile'
import tailwindConfig from '../../tailwind.config'
const Homepage = () => {
  return (
    <div className='font-bold'>

      <div className='m-9 text-center text-5xl font-bold'>TODO LIST</div>
      <div className='flex justify-around'>
        <div className='flex flex-col w-1/6'>
        <h1 className='self-center text-2xl'>ADD TASK</h1>
          <label htmlFor="taskInput" className='text-lg mb-3'>NAME</label>
          <input type="text" className='h-10 shadow-lg text-ellipsis rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=''/>
          <label htmlFor="taskInput" className='text-lg my-3'>DESCRITION</label>
          <input type="text" className='shadow-lg h-24 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500' placeholder=' '/>
          <button  className='w-20 bg-red-400 self-end m-5 rounded-xl shadow-sm text-xl' >ADD</button>
        </div>
      <div>
        <Todotile />
      </div>
      </div>

    </div>
  )
}

export default Homepage