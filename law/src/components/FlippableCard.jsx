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
            <div className="card-1">
                <div className="card-front"></div>
                <div className="card-back">
                    Back
                    <button type="submit" className="flip-button">
                        <span>Click me</span>
                    </button>
                </div>
            </div>
            <div className="card-1">
                <div className="card-front">Searching for lawyers in your city?</div>
                <div className="card-back">
                    <p>Embark on a quest to connect with nearby advocates who can provide essential legal assistance.</p>
                    <button type="submit" className="flip-button" onClick={() => {navigate('/maps')}}>
                        <span>Explore</span>
                        <AiOutlineArrowRight style={{}} />
                    </button>
                </div>
            </div>
            <div className="card-1">
                <div className="card-front"></div>
                <div className="card-back">
                    Back
                    <button type="submit" className="flip-button">
                        <span>Click me</span>
                    </button>
                </div>
            </div>
            <div className="card-1">
                <div className="card-front"></div>
                <div className="card-back">
                    Back
                    <button type="submit" className="flip-button">
                        <span>Click me</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FlippableCard;