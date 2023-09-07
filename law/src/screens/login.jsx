import React from 'react'
import "../css/login.css";
import login1 from "../illustrations/login.svg";
import { Auth } from '../firebase/Auth';

export default function Login() {
  return (
    <div className='login'> 
      <div>
        <img className='svg' alt="img" src={login1}></img>
      </div>
      <Auth />
    </div>
  )
}