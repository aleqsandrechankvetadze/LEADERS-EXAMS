import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = ({ setActiveUser }) => {

    const [userName,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const accounts = JSON.parse(localStorage.getItem('accounts')) || []

        const createdAcc = accounts.find((acc) => acc.userName == userName)

        const newAcc = {userName,password}

        accounts.push(newAcc)
        localStorage.setItem('accounts',JSON.stringify(accounts))
    }

  return (
    <div>
        <h1>register</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>username:
                    <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register;