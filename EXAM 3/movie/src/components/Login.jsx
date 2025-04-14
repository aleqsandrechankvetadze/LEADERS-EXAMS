import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const gotoRegister = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      alert("Both fields are required!");
      return;
    }

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const user = accounts.find(
      (user) => user.email === trimmedEmail && user.password === trimmedPassword
    );

    if (user) {
      alert(`Welcome, ${user.name}!`);
      navigate("/movies"); 
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center bg-white/15 p-[30px] rounded-[15px]  max-w-screen-lg w-full">
        <form
          onSubmit={handleLogin}
          className="w-[400px] h-[500px] flex flex-col items-center justify-evenly p-[20px] rounded-2xl custom-bg"
        >
          <h1 className="text-white text-2xl">Login</h1>
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
          <button
            type="submit"
            className="w-[100%] p-[15px] border-none bg-[rgb(32,54,33)] text-white rounded-xl cursor-pointer transition-all duration-300 hover:bg-[rgb(37,117,30)]"
          >
            Login
          </button>
          <a
            href="#"
            onClick={gotoRegister}
            className="bg-red-500 text-white no-underline transition-all duration-500 hover:scale-[1.07] hover:underline"
          >
            Does Not Have An Account?
          </a>
        </form>

      </div>
    </div>
  );
}
