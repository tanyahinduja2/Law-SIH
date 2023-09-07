import React from "react";
import "../css/flippable-card.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const FlippableCard = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/schedule')
    };
    return (
        <div className="flippable-card-container">
            <div className="cards">
                <div className="card-inner card-1" >
                    <div className="card-front">Need legal advise from our experts?</div>
                    <div className="card-back">
                        <p>Access a team of experienced experts in various fields ready to assist you. Get your questions answered immediately!</p>
                        <button type="submit" className="flip-button" onClick={() => {navigate('/chatbot')}}>
                            <span>Chat Now</span>
                            <AiOutlineArrowRight style={{}} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card-inner card-2">
                    <div className="card-front">Searching for lawyers in your city?</div>
                    <div className="card-back">
                        <p>Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</p>
                        <button type="submit" className="flip-button" onClick={() => {navigate('/maps')}}>
                            <span>Explore</span>
                            <AiOutlineArrowRight style={{}} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card-inner card-3">
                    <div className="card-front">Want to schedule a face-to-face chat with our experts?</div>
                    <div className="card-back">
                        <p>Discuss complex legal matters thoroughly and receive comprehensive guidance. Schedule a  meeting now!</p>
                        <button type="submit" className="flip-button" onClick={handleclick}>
                            <span>Schedule</span>
                            <AiOutlineArrowRight style={{}} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card-inner card-4">
                    <div className="card-front"></div>
                    <div className="card-back">
                        {/* Back */}
                        <button type="submit" className="flip-button">
                            {/* <span>Click me</span> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlippableCard;