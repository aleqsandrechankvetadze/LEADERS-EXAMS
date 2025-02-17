import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({setActiveUser}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const accounts = JSON.parse(localStorage.getItem('accounts')) || []
        const user = accounts.find((account) => account.username===username && account.password === password)
        if(user){
            localStorage.setItem('activeUser',JSON.stringify(user))
            setActiveUser(user)
            navigate('/')
        }else{
            setError("error")
        }
    }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
        </div>
        <div>
            <label>password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}
export default Login