import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/traveltour.png'
import './Navbar.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='image-logo' src={Logo} alt="Logo" />
            </div>
            <div className={`navbar-toggle ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`navbar-links ${showLinks ? 'active' : ''}`}>
                <li>
                    Home
                </li>
                <li>
                    Services
                </li>
                <li>
                    Packages
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Login
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
