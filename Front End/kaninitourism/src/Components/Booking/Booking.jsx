import React from 'react'

const Booking = () => {
  return (
    <div>
 <nav className="navbar">
            <div className="navbar-logo">
                <img className='image-logo' src={Logo} alt="Logo" />
            </div>
            <div className={`navbar-toggle ${showLink ? 'active' : ''}`} onClick={toggleLinks}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`navbar-links ${showLink ? 'active' : ''}`}>
                <li>
                    Home
                </li>
                <li>
                    Packages
                </li>
                <li>
                    Logout
                </li>
            </ul>
           
        </nav>



        



    </div>
  )
}

export default Booking