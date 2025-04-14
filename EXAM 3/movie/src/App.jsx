import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Mainpage from './components/Mainpage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movies' element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  )
}
