import React from "react";
import "../css/footer.css";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="footer">
            <h2 className="footer-logo">Legalसाथी</h2>
            <div className="footer-ele">
                <h4>Templates</h4>
                <a href="#" onClick={() => navigate('/templates')}>Generate Documents</a>
                {/* <a href="#">News</a> */}
            </div>
            <div className="footer-ele">
                <h4>Seek Assistance</h4>
                <a href="#" onClick={() => navigate('/chatbot')}>Chat Now</a>
                <a href="#"onClick={() => navigate('/maps')}>Explore</a>
                <a href="#" onClick={() => navigate('/schedule')}>Schedule</a>
            </div>
            <div className="footer-ele">
                <h4>Contact</h4>
                <div>W, P. G. Kher Marg, 32nd Road, Marg, Off Linking Rd, TPS III, Bandra West, Mumbai, Maharashtra 400050</div>
                <div>info@docscentre.com.au</div>
                <div>1800 700 666</div>
            </div>
        </div>
    )
}

export default Footer;