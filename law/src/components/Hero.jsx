import React from "react";
import "../css/hero.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import hero1 from "../illustrations/hero1.svg";

export default function Hero() {
  return (
    <div className="container">
      <div className="text">
        Making <br />
        Legal Structures, <br /> Easy
        <p style={{ fontWeight: "0" }}>
            India's trusted supplier for legal structures <br />{" "}
          to the advice industry
        </p>
        <button
          className="btn getstarted"
          type="submit"
          style={{ padding: "16px 30px 10px 30px" }}
        >
          <h5>Get Started <AiOutlineArrowRight style={{}} /></h5>
        </button>
      </div>
      <div className="illustrations">
        <img className="svg" src={hero1} alt="" />
      </div>
    </div>
  );
}