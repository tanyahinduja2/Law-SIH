import React from "react";
import "../css/hero.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
// import LawBg from "../illustrations/LawBG.png";
import { useNavigate } from "react-router-dom";
import {GoLaw} from 'react-icons/go'
export default function Hero() {
 const navigate = useNavigate()
  return (<>
    <div className="container">
      <div className="ontainur">
      <div data-aos="fade-down" className="text">
        Making <br />
       <span className="wohoo">Legal Structures</span> , <br /> Easy
        <p style={{ fontWeight: "0" }}>
            India's trusted supplier for legal structures <br />{" "}
          to the advice industry
        </p>
        <button
          className="btn getstarted"
          type="submit"
          style={{padding:"10px 20px"}}
          onClick={() => navigate('/joinus')}
        >
          <h5>Get Started <AiOutlineArrowRight style={{}} /></h5>
        </button>
      </div>
      <div className="illustrations">
        {/* <img data-aos="fade-up" className="svg" src={hero1} alt="" /> */}
      </div>
    </div>
    </div>
    <div className="gmaps" style={{marginTop:"578px",zIndex:"99"}}>
      {/* <div ><GoLaw  style={{color:"#d0b077",fontSize:"80px",marginRight:"50px"}}/></div>
      <h4> Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</h4>
      <button className="btn explore"><h4 onClick={()=>{navigate("/maps")}}> Explore</h4></button> */}
     <div className="appointment">
    <svg fill="#d0b077" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.598 27.598" style={{height:"50px",marginTop:"150px"}}>
        <polygon points="4.022,9.9 3,21.899 7.799,21.899 6.778,9.9"></polygon>
        <polygon points="20.82,9.9 19.799,21.899 24.598,21.899 23.576,9.9"></polygon>
        <rect x="1.255" y="23.099" width="25.088" height="2.399"></rect>
        <rect y="26.098" width="27.598" height="1.2"></rect>
        <path d="M10.199,9.596l2.074,2.042L11.4,21.899h4.799l-0.875-10.262l2.074-2.042V8.699h9.601V6.696L13.799,0.3L0.6,6.696v2.003 h9.6L10.199,9.596L10.199,9.596z M16.197,9.094l-2.398,2.362L11.4,9.094V5.699h4.799v3.395H16.197z"></path>
        
    </svg>
    <div className="features" style={{ display: "flex", flexDirection: "column" }}>
        {/* Other content */}
    </div>
</div>

      <div className="appointment"></div>
      <div className="appointment"></div>
    </div>
   
    </>
  )
}