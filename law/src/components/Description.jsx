import React from "react";
import "../css/description.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Description = () => {
  return (
    <div>
      <div>
        <div className="title">Hassle-free Legal Documents</div>
        <div className="title-content">
          Looking to register a company or set up a trust fund? Constitute makes
          tracking your paper trail both simple and seamless. And that’s just
          the beginning. Our services go far beyond registration. Constitute is
          here to guide you through a variety of legal structures.
        </div>
      </div>
      <div className="features">
        <img
          className="features-img"
          src="https://constitute.com.au/wp-content/uploads/2021/10/Group-10336@2x.png"
          alt="img"
        ></img>
        <div className="features-content">
          <div style={{fontSize:"36px",fontWeight:"700",paddingBottom:"20px"}}>
            Companies
          </div>
          <div style={{paddingBottom:"20px",fontSize:"19px"}}>
          Constitute offers fast, efficient online sign-ups with in-line ABN and TFN registrations.
          </div>
          <ul style={{paddingBottom:"40px",fontSize:"19px"}}>
            <li>Hassle-free registration</li>
            <li>Quick turnaround time, to get your business up and running</li>
            <li>Pre-verified documents</li>
          </ul>
          <button className="features-button"><span>LEARN MORE</span><AiOutlineArrowRight style={{}} /></button>
        </div>
      </div>
      <div className="features">
        
        <div className="features-content">
          <div style={{fontSize:"36px",fontWeight:"700",paddingBottom:"20px"}}>
          Trusts
          </div>
          <div style={{paddingBottom:"20px",fontSize:"19px"}}>
          Constitute offers our clients access to a wide array of high-quality trusts, all with flexible deed arrangements.
          </div>
          <ul style={{paddingBottom:"40px",fontSize:"19px"}}>
            <li>Large selection of trusts</li>
            <li>Experienced trust advisers</li>
            <li>Flexible deed arrangements</li>
          </ul>
          <button className="features-button"><span>LEARN MORE</span><AiOutlineArrowRight style={{}} /></button>
        </div>
        <img
          className="features-img"
          src="https://constitute.com.au/wp-content/uploads/2021/10/Group-10334@2x.png"
          alt="img"
        ></img>
      </div>
      <div className="features">
        <img
          className="features-img"
          src="https://constitute.com.au/wp-content/uploads/2021/10/AdobeStock_228554566@2x.png"
          alt="img"
        ></img>
        <div className="features-content">
          <div style={{fontSize:"36px",fontWeight:"700",paddingBottom:"20px"}}>
          SMSFs
          </div>
          <div style={{paddingBottom:"20px",fontSize:"19px"}}>
          Constitute helps trustees and advisers fulfill the regulatory requirements of running a self-managed super fund.
          </div>
          <ul style={{paddingBottom:"40px",fontSize:"19px"}}>
            <li>Stay within regulatory frameworks</li>
            <li>Service for both advisers and trustees</li>
            <li>Expert fund advice</li>
          </ul>
          <button className="features-button"><span>LEARN MORE</span><AiOutlineArrowRight style={{}} /></button>
        </div>
      </div>
    </div>
  );
};
