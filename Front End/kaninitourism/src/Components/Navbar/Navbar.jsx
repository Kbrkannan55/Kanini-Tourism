import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../Assets/traveltour.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='logo-image' src={Logo}/>
      </div>
      <p></p>
      <ul className={showMenu ? 'navbar-menu show' : 'navbar-menu'}>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
