import React from "react";
import "../css/hero.css";
import hero1 from "../illustrations/hero1.svg";

export default function Hero() {
  return (
    <div className="container">
      <div className="text">
        Making <br />
        Legal Structures, <br /> Easy
        <p style={{ fontWeight: "0" }}>
          Constitute is Australia’s trusted supplier for legal structures <br />{" "}
          to the advice industry
        </p>
        <button
          className="btn getstarted"
          type="submit"
          style={{ paddingTop: "25px 30px" }}
        >
          <h4>Get Started →</h4>
        </button>
      </div>
      <div className="illustrations">
        <img className="svg" src={hero1} alt="" />
      </div>
    </div>
  );
}
