import React from "react";
import "../css/seek.css";
import Meet from "./Meet";
import { useNavigate } from "react-router-dom";
import FlippableCard from "../components/FlippableCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import {MdKeyboardArrowRight} from "react-icons/md"
import HeaderBg from "../illustrations/law-bg-2.jpg"
export default function SeekAssistance() {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/schedule')
  };

  return (
    // <div className="card-container">
    //   <div class="card1" onClick={()=>{navigate('/chatbot')}}></div>
    //   <div class="card1" onClick={() => {navigate('/maps')}}></div>
    //   <div class="card1" onClick={handleclick}><p className="p">Need legal advice or guidance? Schedule a meeting with a knowledgeable lawyer on our government website today – your path to clarity and resolution starts here.</p></div>
    //   <div class="card1"></div>
    // </div>
    // <FlippableCard />
    <>
    <div className="seekgod">
    <div data-aos="fade-left" className="text">
            Making <br />
            <span className="wohoo">Legal Structures</span> , <br /> Easy
            <p style={{ fontWeight: "0" }}>
              India's trusted supplier for legal structures <br /> to the advice
              industry
            </p>
            <button
              className="btn getstarted"
              type="submit"
              style={{ padding: "10px 20px" }}
              onClick={() => navigate("/joinus")}
            >
              <h5>
                Get Started <AiOutlineArrowRight style={{}} />
              </h5>
            </button>
          </div>
          <div className="illustrations">
            {/* <img data-aos="fade-up" className="svg" src={hero1} alt="" /> */}
          </div>
    </div>
      {/* <h1 className="seek-main-title">Seek Assistance</h1>
      <div className="seek-assistance-container" >
        <div className="seek-assistance-card">
          <div className="seek-header">
            <img src={HeaderBg} alt="bg" className="seek-header-img" />
          </div>
          <div className="seek-info">
            <p className="seek-title">Need legal advise from our experts?</p>
            <p>Access a team of experienced experts in various fields ready to assist you. Get your questions answered immediately!</p>
          </div>
          <div className="seek-footer">
            <button type="button" className="seek-btn">Chat Now</button>
          </div>
        </div>
        <div className="seek-assistance-card">
          <div className="seek-header">
            <img src={HeaderBg} alt="bg" className="seek-header-img" />
          </div>
          <div className="seek-info">
            <p className="seek-title">Searching for lawyers in your city?</p>
            <p>Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</p>
          </div>
          <div className="seek-footer">
            <button type="button" className="seek-btn">Explore</button>
          </div>
        </div>
        <div className="seek-assistance-card">
          <div className="seek-header">
            <img src={HeaderBg} alt="bg" className="seek-header-img" />
          </div>
          <div className="seek-info">
            <p className="seek-title">Want to schedule a face-to-face chat with our experts?</p>
            <p>Discuss complex legal matters thoroughly and receive comprehensive guidance. Schedule a  meeting now!</p>
          </div>
          <div className="seek-footer">
            <button type="button" className="seek-btn">Schedule</button>
          </div>
        </div>
      </div> */}
      <div className="containseek">
      <div className="seek-text" >
      In a Legal Pickle? <span style={{color:"#d0b077"}}> Panic not !</span>
      <br /> We’re Here for You with <span style={{color:"#d0b077"}}>24/7</span> Support, <span style={{color:"#d0b077"}}>Real-Time</span>  Chat, and <span style={{color:"#d0b077"}}>Expert</span> Lawyers. <br /> <span style={{color:"#d0b077"}}>Tap in Below</span>, and Let’s Drive those Legal Woes Away.
      </div>
      <div className="displaycontainer" style={{justifyContent:"space-around",display:"flex",marginBottom:"50px"}}>
      <button className="btn getstarted" style={{width:"200px" }}>
         <span >Chat Support</span> <MdKeyboardArrowRight style={{fontSize:"30"}}/>

      </button>
      
      <button className="btn getstarted" style={{width:"200px" }}>
         <span >Lawyers on Map</span> <MdKeyboardArrowRight style={{fontSize:"30"}}/>

      </button>
</div>
      <div className="blackbg">
      <div className="seek-text" style={{marginTop:"0px", color:"#d0b077"}}>
        Discover our Hidden Secret for Hassle-free Handling,<br />
        Join Us and Unlock Unlimited Hours of Personal Video Chat with the Best Lawyers!

      </div>
      <button className="btn getstarted" style={{width:"400px" }}>
         <span >Connect to the Best from Video Call</span> <MdKeyboardArrowRight style={{fontSize:"30"}}/>

      </button>
      
      </div>
      </div>
    </>
  );
}
