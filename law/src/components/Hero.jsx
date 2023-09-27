import React from "react";
import "../css/hero.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Lawbg from "../illustrations/diploma-patent-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { GoLaw } from "react-icons/go";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="ontainur">
          <div data-aos="fade-down" className="text">
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
      </div>
      <div className="gmaps" style={{ marginTop: "578px", zIndex: "99" }}>
        {/* <div ><GoLaw  style={{color:"#d0b077",fontSize:"80px",marginRight:"50px"}}/></div>
      <h4> Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</h4>
      <button className="btn explore"><h4 onClick={()=>{navigate("/maps")}}> Explore</h4></button> */}
        <div className="appointment" style={{ display: "flex"   ,borderBottomLeftRadius:"25px"}}>
        <svg
      fill="rgb(168, 167, 160)"
      height="70px"
      width="70px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <circle cx="305.021" cy="430.298" r="8.17"></circle>
          </g>
        </g>
        <g>
          <g>
            <circle cx="337.702" cy="462.979" r="8.17"></circle>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M389.447,495.66h-2.723v-51.745c0-31.769-23.779-58.07-54.468-62.088v-8.72c0-19.522-15.883-35.404-35.404-35.404H100.766 c-19.521,0-35.404,15.882-35.404,35.404v8.72c-30.689,4.018-54.468,30.319-54.468,62.088v51.745H8.17 c-4.512,0-8.17,3.657-8.17,8.17S3.658,512,8.17,512h381.277c4.512,0-8.17-3.657-8.17-8.17S393.959,495.66,389.447,495.66z M370.383,495.66H27.234v-51.745c0-25.529,20.769-46.298,46.298-46.298h32.681c4.512,0-8.17-3.657-8.17-8.17 c0-4.513-3.658-8.17-8.17-8.17H81.702v-8.17c0-10.511,8.553-19.064,19.064-19.064h196.085c10.511,0,19.064,8.553,19.064,19.064 v8.17H138.894c-4.512,0-8.17-3.657-8.17-8.17c0-4.513,3.658-8.17,8.17-8.17h185.191c25.529,0,46.298,20.769,46.298,46.298V495.66z "
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M471.149,119.83c-12.889,0-25.01,6.157-32.67,16.34H283.234v-32.681h2.723c4.512,0-8.17-3.657-8.17-8.17 s-3.658-8.17-8.17-8.17h-2.723V69.847c15.594-3.699,27.234-17.733,27.234-34.442C310.468,15.882,294.585,0,275.064,0H122.553 c-19.521,0-35.404,15.882-35.404,35.404c0,16.71,11.64,30.743,27.234,34.442v17.302h-2.723c-4.512,0-8.17-3.657-8.17-8.17 s-3.658-8.17-8.17-8.17h-2.723v114.383h-2.723c-4.512,0-8.17-3.657-8.17-8.17c0-4.513,3.658-8.17,8.17-8.17h2.723v17.302 c-15.594,3.699-27.234,17.733-27.234,34.442c0,19.522,15.883,35.404,35.404,35.404h152.511c19.521,0,35.404-15.882,35.404-35.404 c0-16.71-11.64-30.743-27.234-34.442v-17.302h2.723c4.512,0-8.17-3.657-8.17-8.17s-3.658-8.17-8.17-8.17h-2.723v-65.362 h159.617c2.916,0,5.611-1.555,7.071-4.077c4.378-7.565,12.511-12.263,21.227-12.263c13.516,0,24.511,10.996,24.511,24.511 c0,13.515-10.995,24.511-24.511,24.511c-8.716,0-16.849-4.698-21.226-12.263c-1.46-2.523-4.155-4.077-7.071-4.077H307.745 c-4.512,0-8.17-3.657-8.17-8.17s-3.658-8.17-8.17-8.17h130.734c7.66,10.183,19.781,16.34,32.67,16.34 c22.526,0,40.851-18.325,40.851-40.851S493.675,119.83,471.149,119.83z M294.128,285.957c0,10.511-8.553,19.064-19.064,19.064 H122.553c-10.511,0-19.064-8.553-19.064-19.064s8.553-19.064,19.064-19.064h152.511 C285.575,266.894,294.128,275.446,294.128,285.957z M266.894,103.489v114.383h-136.17V103.489H266.894z M130.723,87.149v-16.34 h136.17v16.34H130.723z M266.894,234.213v16.34h-136.17v-16.34H266.894z M275.064,54.468H122.553 c-10.511,0-19.064-8.553-19.064-19.064c0-10.511,8.553-19.064,19.064-19.064h152.511c10.511,0,19.064,8.553,19.064,19.064 C294.128,45.916,285.575,54.468,275.064,54.468z"
            ></path>
          </g>
        </g>
      </g>
    </svg>

          <div
            className="features1"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginLeft: "20px",
            }}
          >
            <div className="titlee" style={{ color: "#d0b077" }}>
              {" "}
              Get Free
            </div>
            <div className="titlee" style={{ fontSize: "20px" }}>
              Expert Advice
            </div>
          </div>
        </div>
        <div className="appointment" style={{ display: "flex"}}>
        <svg
        fill="rgb(168, 167, 160)"
        height="70px"
        width="70px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M503.83,435.744c4.512,0,8.17-3.657,8.17-8.17V182.468c0-4.513-3.658-8.17-8.17-8.17h-32.681 c-4.512,0-8.17,3.657-8.170,8.170s3.658,8.17,8.17,8.17h24.511v27.234h-49.021v-70.809h21.787c4.512,0,8.17-3.657,8.17-8.17V95.319 c0-4.513-3.658-8.17-8.17-8.17s-8.17,3.657-8.17,8.17v2.723h-37.781L260.189,1.156c-2.58-1.54-5.797-1.54-8.376,0L89.526,98.042 H51.745v-2.723c0-4.513-3.658-8.17-8.17-8.17c-4.512,0-8.17,3.657-8.17,8.17v43.574c0-4.513-3.658-8.17-8.17-8.17h21.787v70.809 H16.34v-27.234h24.511c4.512,0,8.17-3.657,8.17-8.17s-3.658-8.17-8.17-8.17H8.17c-4.512,0-8.17,3.657-8.17,8.17v245.106 c0-4.513-3.658-8.17-8.17-8.17s8.17-3.657,8.17-8.17V234.212h49.021V408.51H43.574c-4.512,0-8.17,3.657-8.17,8.17v35.404H8.17 c-4.512,0-8.17,3.657-8.17,8.17v43.574c0-4.513,3.658-8.17,8.17-8.17h495.66c4.512,0,8.17-3.657,8.17-8.17v-43.574 c0-4.513-3.658-8.17-8.17-8.17h-27.234v-35.404c0-4.513-3.658-8.17-8.17-8.17h-21.787V234.212h49.021v193.362 C495.66,432.087,499.318,435.744,503.83,435.744z M256,17.686l134.598,80.357h-30.383L260.143,39.19 c-2.558-1.504-5.727-1.504-8.284,0L151.786,98.042h-30.383L256,17.686z M327.981,98.042H184.02L256,55.711L327.981,98.042z M495.66,468.425v27.234H16.34v-27.234H495.66z M460.255,424.851v27.234H51.745v-27.234H460.255z M81.702,174.298v-27.234h348.596 v27.234H81.702z M430.298,190.638v174.298h-16.34V190.638H430.298z M335.886,217.872v-27.234h61.731v27.234H335.886z M397.617,234.212v130.723h-61.731V234.212H397.617z M319.546,190.638v174.298h-16.34V190.638H319.546z M256,326.808 c-4.512,0-8.17,3.657-8.17,8.17v29.957h-22.695V234.212h61.731v130.723H264.17v-29.957 C264.17,330.465,260.512,326.808,256,326.808z M225.134,217.872v-27.234h61.731v27.234H225.134z M208.795,190.638v174.298h-16.34 V190.638H208.795z M114.383,217.872v-27.234h61.731v27.234H114.383z M176.114,234.212v130.723h-61.731V234.212H176.114z M98.043,190.638v174.298h-16.34V190.638H98.043z M430.298,381.276v27.234H81.702v-27.234H430.298z M51.745,130.723v-16.34 h102.257c0.033,0,266.195,0,266.195,0c0.033,0,40.058,0,40.058,0v16.34H51.745z"></path>
            </g>
          </g>
        </g>
      </svg>
          <div
            className="features1"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginLeft: "20px",
            }}
          >
            <div className="titlee" style={{ color: "#d0b077" }}>
              {" "}
              Book Your
            </div>
            <div className="titlee" style={{ fontSize: "20px" }}>
              Appointment
            </div>
          </div>
        </div>
        <div className="appointment" style={{ display: "flex"  ,borderBottomRightRadius:"25px"}}>
        <img src={Lawbg} alt=""  style={{height:"70px" ,width:"70"}}/>
          <div
            className="features1"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginLeft: "20px",
            }}
          >
            <div className="titlee" style={{ color: "#d0b077" }}>
              {" "}
              You can Easily
            </div>
            <div className="titlee" style={{ fontSize: "20px" }}>
              Join Our Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
