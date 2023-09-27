import { useState, React } from "react";
import ReactModal from 'react-modal';
import "../css/seek.css";
import Meet from "./Meet";
import { useNavigate } from "react-router-dom";
import FlippableCard from "../components/FlippableCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md"
import HeaderBg from "../illustrations/law-bg-2.jpg"

export default function SeekAssistance() {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/schedule')
  };
  const [isOpen, setIsOpen] = useState(false)

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
          In a Legal Pickle? <span style={{ color: "#d0b077" }}> Panic not !</span>
          <br /> We’re Here for You with <span style={{ color: "#d0b077" }}>24/7</span> Support, <span style={{ color: "#d0b077" }}>Real-Time</span>  Chat, and <span style={{ color: "#d0b077" }}>Expert</span> Lawyers. <br /> <span style={{ color: "#d0b077" }}>Tap in Below</span>, and Let’s Drive those Legal Woes Away.
        </div>
        <div className="displaycontainer" style={{ justifyContent: "space-around", display: "flex", margin: "70px 15%", gap: "120px" }}>

          <div className="seek-feature-card">
            <div style={{ padding: "0px 30px 10px 30px" }}>
              <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 9V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V18L8 16M20 20L17.8062 18.5374C17.5065 18.3377 17.3567 18.2378 17.1946 18.167C17.0507 18.1042 16.9 18.0586 16.7454 18.031C16.5713 18 16.3912 18 16.0311 18H11.2C10.0799 18 9.51984 18 9.09202 17.782C8.71569 17.5903 8.40973 17.2843 8.21799 16.908C8 16.4802 8 15.9201 8 14.8V12.2C8 11.0799 8 10.5198 8.21799 10.092C8.40973 9.71569 8.71569 9.40973 9.09202 9.21799C9.51984 9 10.0799 9 11.2 9H16.8C17.9201 9 18.4802 9 18.908 9.21799C19.2843 9.40973 19.5903 9.71569 19.782 10.092C20 10.5198 20 11.0799 20 12.2V20Z" stroke="#d0b077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <h5>Chat with Legal Professionals</h5>
            <p style={{ margin: "0px", color: "black" }}>Connect in real-time to discuss legal issues, potential solutions, and strategies with experts who can help you navigate complex legal challenges.</p>
            <button className="btn getstarted seek-join-us" style={{ width: "200px" }} onClick={() => navigate("/chatbot")}>
              <span >Chat Support</span> <MdKeyboardArrowRight style={{ fontSize: "30" }} />
            </button>
          </div>
          <div className="seek-feature-card">
            <div style={{ padding: "0px 30px 10px 30px" }}>
              <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" stroke="#d0b077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <h5>Locate Lawyers Around You</h5>
            <p style={{ margin: "0px", color: "black" }}>Explore an interactive map displaying lawyers and law firms in your vicinity. Visually navigate your local legal community to find the most accessible legal experts.</p>
            <button className="btn getstarted seek-join-us" style={{ width: "200px" }} onClick={() => navigate("/maps")}>
              <span >Lawyers on Map</span> <MdKeyboardArrowRight style={{ fontSize: "30" }} />
            </button>
          </div>
        </div>
        <div className="blackbg">
          <div className="seek-text" style={{ marginTop: "0px", color: "#d0b077" }}>
            Discover our Hidden Secret for Hassle-free Handling,<br />
            Join Us and Unlock Unlimited Hours of Personal Video Chat with the Best Lawyers!

          </div>
          <button className="btn getstarted seek-join-us" style={{ width: "200px", backgroundColor: "#d0b077", marginBottom: "0", marginTop: "20px" }} onClick={setIsOpen}>
            <span style={{ color: "black", fontSize: "18px", textAlign: "center" }}>Join Us</span> <MdKeyboardArrowRight style={{ fontSize: "30" }} />
          </button>

        </div>
      </div>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            zIndex: 1020,
            top: "0px",
            left: 0,
            width: '100%',
            height: '100%',
            background: "f0f0f0",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            background: '#212121',
            width: '30rem',
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            maxWidth: 'calc(100vw - 2rem)',
            maxHeight: 'calc(100vh - 2rem)',
            overflowY: 'auto',
            position: 'fixed',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            justifyContent: "center",
            alignItems: "center",
            border: '1px solid #ccc',
            borderRadius: '1rem',
            transition: "0.5s",
            overflow: "hidden",
            border: "none",
            boxShadow: "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
          }
        }}
      >
        <div className="seek-premium">
          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C10.4812 2.25 9.25 3.48122 9.25 5C9.25 5.78328 9.57756 6.48937 10.1018 6.98967C10.0375 7.10378 9.97102 7.22294 9.90223 7.34628L8.10504 10.5686C7.92732 10.8873 7.82158 11.0749 7.7325 11.2018C7.70459 11.2415 7.68483 11.2655 7.67287 11.2788L7.67118 11.2791C7.65596 11.2695 7.63012 11.2518 7.5918 11.2208C7.47104 11.1231 7.31753 10.9715 7.05879 10.7138L6.97976 10.635C6.6607 10.317 6.37058 10.0279 6.10664 9.79144C6.19926 9.54508 6.25 9.27824 6.25 9C6.25 7.75736 5.24264 6.75 4 6.75C2.75736 6.75 1.75 7.75736 1.75 9C1.75 9.98302 2.3804 10.8188 3.25898 11.1251C3.26199 11.1822 3.26564 11.2399 3.26976 11.298C3.29277 11.6228 3.33458 12.0116 3.38243 12.4564L3.5671 14.1733C3.59705 14.4517 3.62574 14.7289 3.65412 15.0031C3.76616 16.0856 3.87332 17.121 4.03322 17.994C4.1343 18.5459 4.26178 19.0659 4.43833 19.5172C4.61339 19.9648 4.8549 20.3925 5.21187 20.712C5.84173 21.2758 6.60137 21.522 7.50819 21.6381C8.38307 21.75 9.48625 21.75 10.8602 21.75H13.1398C14.5137 21.75 15.6169 21.75 16.4918 21.6381C17.3986 21.522 18.1583 21.2758 18.7881 20.712C19.1451 20.3925 19.3866 19.9648 19.5617 19.5172C19.7382 19.0659 19.8657 18.5459 19.9668 17.994C20.1267 17.1211 20.2338 16.0858 20.3459 15.0034C20.3742 14.7293 20.403 14.4516 20.4329 14.1733L20.6176 12.4565C20.6654 12.0116 20.7072 11.6228 20.7302 11.298C20.7344 11.2399 20.738 11.1822 20.741 11.1251C21.6196 10.8188 22.25 9.98302 22.25 9C22.25 7.75736 21.2426 6.75 20 6.75C18.7574 6.75 17.75 7.75736 17.75 9C17.75 9.27824 17.8007 9.54509 17.8934 9.79145C17.6294 10.0279 17.3393 10.317 17.0202 10.635L16.9412 10.7138C16.6825 10.9715 16.529 11.1231 16.4082 11.2208C16.3699 11.2518 16.344 11.2695 16.3288 11.2791L16.3271 11.2788C16.3152 11.2655 16.2954 11.2415 16.2675 11.2018C16.1784 11.0749 16.0727 10.8873 15.895 10.5686L14.0977 7.34619C14.0289 7.22288 13.9625 7.10375 13.8982 6.98967C14.4224 6.48937 14.75 5.78328 14.75 5C14.75 3.48122 13.5188 2.25 12 2.25ZM10.75 5C10.75 4.30964 11.3096 3.75 12 3.75C12.6904 3.75 13.25 4.30964 13.25 5C13.25 5.48504 12.9739 5.90689 12.5668 6.11457C12.3975 6.20095 12.2056 6.25 12 6.25C11.7944 6.25 11.6025 6.20095 11.4332 6.11457C11.0261 5.90689 10.75 5.48504 10.75 5ZM11.2046 8.09072C11.2857 7.94528 11.3599 7.81229 11.4288 7.69043C11.6133 7.72949 11.8045 7.75 12 7.75C12.1955 7.75 12.3867 7.72949 12.5712 7.69043C12.6401 7.81229 12.7143 7.94528 12.7954 8.09071L14.6016 11.3291C14.7569 11.6077 14.9005 11.8653 15.0399 12.0638C15.1885 12.2753 15.3911 12.5089 15.7015 12.6456C15.9698 12.7637 16.2657 12.8049 16.556 12.7648C16.8918 12.7184 17.1507 12.5495 17.3517 12.3869C17.5403 12.2343 17.7493 12.026 17.9756 11.8006L17.9998 11.7765C18.3752 11.4026 18.6497 11.1315 18.8593 10.9397C18.9792 11.0103 19.1061 11.0701 19.2389 11.1179C19.2374 11.1417 19.2358 11.1664 19.234 11.192C19.2131 11.4865 19.1743 11.8486 19.1249 12.3082L18.9415 14.0129C18.9095 14.3104 18.8794 14.6003 18.8502 14.8822C18.7807 15.553 18.7159 16.178 18.641 16.75H5.35903C5.28409 16.178 5.2193 15.553 5.14978 14.8822C5.12056 14.6003 5.0905 14.3104 5.0585 14.0129L4.87514 12.3082C4.82571 11.8486 4.78687 11.4865 4.76601 11.192C4.7642 11.1664 4.76255 11.1417 4.76107 11.1179C4.89386 11.0701 5.02084 11.0103 5.14066 10.9397C5.35033 11.1315 5.62484 11.4026 6.0002 11.7765L6.02438 11.8006C6.25065 12.026 6.45971 12.2343 6.64834 12.3869C6.84933 12.5495 7.10824 12.7184 7.44397 12.7648C7.73429 12.8049 8.03016 12.7637 8.29846 12.6456C8.60887 12.5089 8.81155 12.2753 8.96009 12.0638C9.09945 11.8653 9.24306 11.6078 9.39842 11.3291L11.2046 8.09072ZM5.61801 18.25C5.68337 18.526 5.75521 18.7662 5.83525 18.9708C5.96405 19.3 6.0962 19.4904 6.21228 19.5943C6.52851 19.8774 6.9509 20.0545 7.69857 20.1502C8.46719 20.2486 9.47421 20.25 10.9121 20.25H13.0879C14.5258 20.25 15.5328 20.2486 16.3014 20.1502C17.0491 20.0545 17.4715 19.8774 17.7877 19.5943C17.9038 19.4904 18.036 19.3 18.1647 18.9708C18.2448 18.7662 18.3166 18.526 18.382 18.25H5.61801ZM3.25 9C3.25 8.58579 3.58579 8.25 4 8.25C4.41421 8.25 4.75 8.58579 4.75 9C4.75 9.18789 4.68188 9.35799 4.56799 9.48982C4.4311 9.64827 4.23192 9.74737 4.00904 9.74995L4 9.75C3.58579 9.75 3.25 9.41421 3.25 9ZM19.25 9C19.25 8.58579 19.5858 8.25 20 8.25C20.4142 8.25 20.75 8.58579 20.75 9C20.75 9.41421 20.4142 9.75 20 9.75L19.991 9.74995C19.7681 9.74737 19.5689 9.64827 19.432 9.48982C19.3181 9.35799 19.25 9.18789 19.25 9Z" fill="#000000" />
            </g>
          </svg>
          <span style={{ padding: "4px" }}>Premium</span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <svg height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlnsSpace="preserve" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path style={{ fill: "#d0b077" }} d="M376.853,434.238H135.146c-10.765,0-19.492,8.727-19.492,19.492 c0,10.765,8.727,19.492,19.492,19.492h241.707c10.765,0,19.492-8.727,19.492-19.492 C396.345,442.966,387.618,434.238,376.853,434.238z" />
                    <path style={{ fill: "#d0b077" }} d="M278.589,141.063h-88.313c-10.765,0-19.492,8.727-19.492,19.492v61.031 c0,10.765,8.727,19.492,19.492,19.492h88.313c10.765,0,19.492-8.727,19.492-19.492v-12.709l23.859,13.775 c8.548,4.935,19.277-1.241,19.277-11.129v-40.905c0-9.871-10.714-16.075-19.277-11.129l-23.859,13.775v-12.708 C298.081,149.79,289.354,141.063,278.589,141.063z" />
                    <path style={{ fill: "#d0b077" }} d="M499.005,291.385H12.995C5.818,291.385,0,297.203,0,304.38v34.683 c0,32.296,26.181,58.477,58.477,58.477h395.046c32.296,0,58.477-26.181,58.477-58.477V304.38 C512,297.203,506.182,291.385,499.005,291.385z" />
                    <path style={{ fill: "#d0b077" }} d="M453.523,38.777H58.477C26.181,38.777,0,64.958,0,97.254v142.151 c0,7.177,5.818,12.995,12.995,12.995h25.99c7.177,0,12.995-5.818,12.995-12.995V110.249c0-10.765,8.727-19.492,19.492-19.492 h369.056c10.765,0,19.492,8.727,19.492,19.492v129.157c0,7.177,5.818,12.995,12.995,12.995h25.99 c7.177,0,12.995-5.818,12.995-12.995V97.254C512,64.958,485.819,38.777,453.523,38.777z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h4 style={{ margin: "15px 30px 35px 30px", textAlign: "center", color: "#FAF9F6", fontSize: "20px", lineHeight: "32px" }}>Upgrade to our premium membership to unlock the exclusive benefit of engaging in video consultations with our team of legal experts. Choose appointment times that work for you, offering flexibility to accommodate your busy schedule.</h4>
        {/* <p style={{marginTop: "0", paddingLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt obcaecati tempore explicabo ipsam, vitae dolore mollitia similique perferendis dolorum quibusdam quia possimus accusamus saepe magnam, tenetur minus aliquid! Impedit, maxime.</p> */}
        <button className="btn getstarted seek-join-us" style={{ backgroundColor: "#d0b077", margin: "0px" }} onClick={() => { navigate('/schedule') }}>Schedule Meet<MdKeyboardArrowRight style={{ fontSize: "30" }} /></button>
        <button className="seek-cross-btn" onClick={() => setIsOpen(false)} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#212121" }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#ffffff" />
            </g>
          </svg>
        </button>
      </ReactModal>
    </>
  );
}
