import React from 'react';
import phoneIcon from '../image/vector4.svg';  // Adjusted path
import emailIcon from '../image/vector2.svg';  // Adjusted path
import '../Header/';  // Import the CSS file

const Header = () => {
    return (
        <header className="top-header">
            <div className="header-container">
                <div className="contact-info">
                    <span><img className="col" src={phoneIcon} alt="Phone Icon" /> (+1) 3344 999 999</span>
                    <span><img className="col" src={emailIcon} alt="Email Icon" /> info@reacetheme.com</span>
                </div>
                <div className="social-icons">
                    <span>🔗</span>
                    <span>🔗</span>
                    <span>🔗</span>
                </div>
            </div>
        </header>
    );
};

export default Header;


