import React from "react";
import "./Footer.css";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p>&copy; {currentYear} Prabeen. All Rights Reserved</p>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
};

export default Footer;
