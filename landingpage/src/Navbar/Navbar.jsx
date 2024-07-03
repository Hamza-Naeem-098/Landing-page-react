import React from 'react';
import searchIcon from '../image/vector5.svg'; // Adjust the path as needed
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>Echoooling.</span>
            </div>
            <ul className="navbar-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search Course" />
                <button type="submit"><img src={searchIcon} alt="Search" /></button>
            </div>
        </nav>
    );
};

export default Navbar;
