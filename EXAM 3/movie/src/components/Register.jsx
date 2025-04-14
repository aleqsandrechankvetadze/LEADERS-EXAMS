import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const navigate = useNavigate() 

  const gotoLogin = () => {
    navigate("/login")
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatPassword.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedRepeatPassword
    ) {
      alert("All fields are required!");
      return;
    }

    if (trimmedPassword !== trimmedRepeatPassword) {
      alert("Passwords do not match!");
      setPassword(""); 
      setRepeatPassword("");
      return;
    }

    const newUser = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword,
    };

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const existingUser = accounts.find((user) => user.email === trimmedEmail);
    if (existingUser) {
      alert("Email is already registered! Please use a different email.");
      return;
    }

    accounts.push(newUser);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Registration Successful! Please Login.");
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center custom-gradient">
      <div className="flex items-center justify-between gap-[37.5px] bg-white/15 p-[30px] rounded-[15px] custom-shadow">
        <form
          onSubmit={handleRegister}
          className="w-[400px] h-[500px] flex flex-col items-center justify-evenly p-[20px] rounded-2xl custom-bg form-shadow form-backdrop"
        >
          <h1 className="text-white text-2xl">Register</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-green-100 w-[100%] p-[15px] border-none rounded-xl outline-none text-xl transition-all duration-500 text-black hover:scale-[1.06]"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[100%] bg-green-100 p-[15px] border-none rounded-xl outline-none text-xl transition-all duration-500 text-black hover:scale-[1.06]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-[100%] bg-green-100 p-[15px] border-none rounded-xl outline-none text-xl transition-all duration-500 text-black hover:scale-[1.06]"
          />
          <input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
            className="bg-green-100 w-[100%] p-[15px] border-none rounded-xl outline-none text-xl transition-all duration-500 text-black hover:scale-[1.06]"
          />
          <button
            type="submit"
            className="w-[100%] p-[15px] border-none bg-[rgb(32,54,33)] text-white rounded-xl cursor-pointer transition-all duration-300 hover:bg-[rgb(37,117,30)]"
          >
            Register
          </button>
          <a
            href="#"
            onClick={gotoLogin}
            className="text-white no-underline transition-all duration-500 hover:scale-[1.07] hover:underline"
          >
            Already Have An Account?
          </a>
        </form>
      </div>
    </div>
  )
}
