import React from "react";
import "../css/chat.css";
import pfp from '../illustrations/pfp.webp'
export default function Assistance() {
  return (
    <>
      {/* <div className="rectangle">
        <div className="pfp"> <img className="img1" src={pfp} alt="" /></div>
        <div className="name">
          Varun Jajoo
          <div className="expertise">Divorce Lawyer</div>
        </div>
        <button
          className="btn chat"
        >
          Chat
        </button>
      </div> */}
      <div className="assistance__container">
      <div class="assistance__card"></div>
      <div class="assistance__card"></div>
      <div class="assistance__card"></div>
      <div class="assistance__card"></div>
      
      </div>
    </>
  );
}
