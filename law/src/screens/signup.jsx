import React from 'react'
import "../css/login.css";
import login1 from "../illustrations/login.jpeg";

export default function Signup() {
  return (
    <div className='signup'> 
      <div>
        <img className='svg' src={login1}></img>
      </div>
      <div>
        <form className='formWrapper'>
          <h5>Sign in to your account</h5>
          <input type='text' placeholder='Full Name' className='loginInput'/>
          <input type="email" placeholder='Email Address' className='loginInput'/>
          <input type="password" placeholder='Password' className='loginInput'/>
          <input type="pssword" placeholder='Confirm Password' className='loginInput' />
          {/* <input type="password" placeholder="Confirm Password" className='loginInput'/> */}
          <button type='submit' className='sumbitButton' style={{border: "solid 1px #042699", padding: "10px", width:"190px", align: "center", background:"blue", color:"white", borderRadius: "8px", margin:"auto"}}>
            <span>Sign In</span></button>
            <p>Already Have An Account? <a href=''>Sign Up</a></p>
        </form>
      </div>
    </div>
  )
}