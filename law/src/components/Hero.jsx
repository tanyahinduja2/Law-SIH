import React from "react";
import "../css/hero.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import hero1 from "../illustrations/hero1.svg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
 const navigate = useNavigate()
  return (<>
    <div className="container">
      <div data-aos="fade-down" className="text">
        Making <br />
        Legal Structures, <br /> Easy
        <p style={{ fontWeight: "0" }}>
            India's trusted supplier for legal structures <br />{" "}
          to the advice industry
        </p>
        <button
          className="btn getstarted1"
          type="submit"
          style={{ padding: "16px 30px 10px 30px" }}
          onClick={() => navigate('/joinus')}
        >
          <h5>Get Started <AiOutlineArrowRight style={{}} /></h5>
        </button>
      </div>
      <div className="illustrations">
        <img data-aos="fade-up" className="svg" src={hero1} alt="" />
      </div>
    </div>
    <div className="gmaps">
      <h3> Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</h3>
      <button className="btn explore"><h4 onClick={()=>{navigate("/maps")}}> Explore</h4></button>
    </div>
    </>
  )
}