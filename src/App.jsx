import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes} 
  from 'react-router-dom'


import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Mainlayout  from './layouts/Mainlayout'
import Homepage from './pages/Homepage'
function App() {

  const router=createBrowserRouter([
    {path :"/",
    element:<Mainlayout/>,
    children:[
      {index:true,element:<Homepage/>}
    ]}
  ])
  return (<RouterProvider router={router}/>)
}

export default App
