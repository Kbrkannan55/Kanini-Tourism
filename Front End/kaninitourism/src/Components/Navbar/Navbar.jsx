import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/traveltour.png';
import './Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="image-logo" src={Logo} style={{ width: '120px' }} alt="Logo" />
      </div>
      <div className={`navbar-toggle ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${showLinks ? 'active' : ''}`}>
        <li>
       <Link style={{fontSize:'18px'}} to={'/'}> Home </Link>
        </li>
        <li>
        <Link style={{fontSize:'18px'}} to={'/package'}> Packages </Link>
        </li>
        <li>
          <Link style={{fontSize:'18px',textDecoration:'none',color:'black'}}  to={'/showplace'}>Services</Link>
        </li>
          <li>
        <Link style={{fontSize:'18px'}} to={'/feedback'}> Contact </Link>
        </li>
        
        <li>
        <Link style={{fontSize:'18px'}} to={'/login'}> Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
