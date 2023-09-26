import React from "react";
import "../css/seek.css";
import Meet from "./Meet";
import { useNavigate } from "react-router-dom";
import FlippableCard from "../components/FlippableCard";
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
      <h1 className="seek-main-title">Seek Assistance</h1>
      <div className="seek-assistance-container">
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
      </div>
    </>
  );
}
