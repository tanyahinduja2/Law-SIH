import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
       Law
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item" >
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Templates
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ChatBot
            </a>
          </li>
         
        </ul>
          <button className="btn getstarted" type="submit">
            Get Started
          </button>
        
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar