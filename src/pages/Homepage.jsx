import React, { useEffect, useState } from 'react'
import All_todo_display from '../components/All_todo_display'
import tailwindConfig from '../../tailwind.config'
import { useAsyncError } from 'react-router-dom'
import Entertile from '../components/Entertile'
import Edittile from '../components/edittile'
const Homepage = () => {
  const [edit,setedit]=useState(true)
  return (
    <div>
      <h1 className='text-6xl flex justify-center'>TODO APP</h1>
      <div className='flex  mt-12'>
        <div className='flex justify-center w-2/4 '>
          {edit?<Edittile/>:<Entertile/>}
        </div>
        <All_todo_display/>
      </div>
    </div>

  )

}

export default Homepage