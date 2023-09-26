import React from 'react'
import '../css/navbar.css'
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:"90%",margin:"auto",marginTop:"20px"}}>
    <div className="container-fluid" style={{backgroundColor:"transparent",height:"80px"}}>
      <a className="navbar-brand" href="/">
       <span style={{color:"white"}}>Legal </span><span style={{color:"#d0b077"}}>साथी</span>
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
        <ul className="navbar-nav " >
          <li className="nav-item" >
            <Link to='/' className="nav-link active" aria-current="page" style={{textDecoration:"none",color:"white"}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/templates" className='nav-link' style={{textDecoration:"none",color:"white"}}>Templates</Link>
          </li>
          <li className="nav-item">
            <Link to="/assist" className='nav-link' style={{textDecoration:"none",color:"white"}}>
              Seek Assistance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/joinus" className='nav-link' style={{textDecoration:"none",color:"white"}}>Login</Link>
          </li>
        </ul>
          <button className="getstarted" type="submit">
            <Link to="/profile" style={{textDecoration:"none",color:"white",paddingLeft:"20px",paddingRight:"20px"}}>
            Profile <AiOutlineArrowRight/>
            </Link>
          </button>
        
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar