import React from "react";
import "../css/footer.css";
import "../index.css"

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="footer-logo">Law</h2>
            <div className="footer-ele">
                <h4>Sitemap</h4>
                <a href="#">Other Products</a>
                <a href="#">News</a>
            </div>
            <div className="footer-ele">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Partners</a>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
            </div>
            <div className="footer-ele">
                <h4>Contact</h4>
                <div>Level 8, 525 Flinders Street,
                    Melbourne 3000 Vic</div>
                <div>info@docscentre.com.au</div>
                <div>1800 700 666</div>
            </div>
        </div>
    )
}

export default Footer;