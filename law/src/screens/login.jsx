import React from 'react'
import "../css/login.css";
import login1 from "../illustrations/login.jpeg";

export default function Login() {
  return (
    <div className='login'> 
      <div>
        <img className='svg' src={login1}></img>
      </div>
      <div>
        <form className='formWrapper'>
          <h5>Log into your account</h5>
          <input type='text' placeholder='Full Name' className='loginInput'/>
          <input type="email" placeholder='Email Address' className='loginInput'/>
          <input type="password" placeholder='Password' className='loginInput'/>
          {/* <input type="password" placeholder="Confirm Password" className='loginInput'/> */}
          <button type='submit' className='sumbitButton' style={{border: "solid 1px #042699", padding: "10px", width:"190px", align: "center", background:"blue", color:"white", borderRadius: "8px", margin:"auto"}}>
            <span>Log In</span></button>
            <p>Don't have an account? <a href=''>Sign Up</a></p>
        </form>
      </div>
    </div>
  )
}