import React, { useState, useEffect } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Register } from './components/register'
import { login } from './components/login'
export default function App() {

  const [activeUser,setActiveUser] = useState(null)


  const [isRegistered,setIsRegistered] = useState(JSON.parse(localStorage.getItem('userName')) || false)
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('activeUser'))
    if (storedUser) {
      setActiveUser(storedUser)
    }
  },[])

  return (
    <div>
        <Routes>
          <Route path='/' element={isRegistered ? (<h1>welcome to the social app</h1>):(<Register setIsRegistered={'false'}></Register>)}></Route>
        </Routes>
    </div>
  )
}

