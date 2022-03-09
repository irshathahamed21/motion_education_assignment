
import React from 'react'
import "./login_page.css"
import { useState,useEffect } from 'react'

export default function LoginPage() {

    const[data,setData] = useState()

    
const[mobile,setMobile] = useState()
const[password, setPassword] = useState()

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://quizmastertesting.motion.ac.in/motioneducation/api/user/DemoLogin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        mobile:mobile,
        password:password,
      }),
    });
    let resJson = await res.json();
    console.log(resJson)
    
  } catch (err) {
    console.log(err);
  }
};




  return (
    <div className = "login__main__div">
        <h1>Login</h1>

        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="mobile" className="login__label">Mobile:</label>
            <input onChange={(e) => {setMobile(e.target.value)}} type="text" name="" id="mobile" className="login__input" />
            <label htmlFor="password" className="login__label">Password:</label>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="" id="password" className="login__input" />
            <input className = "login__submit"type = "submit" value = "Login"/>
            </form>
        </div>

    </div>
  )
}
