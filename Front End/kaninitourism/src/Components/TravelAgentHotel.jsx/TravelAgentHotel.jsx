import React from 'react'
import { useState } from 'react'
import Logo from '../../Assets/traveltour1.jpg'
import './TravelAgentHotel.css'
import ShowPlace from '../Places/ShowPlace'
import ShowHotel from '../Hotel/ShowHotel'

const TravelAgentHotel = () => {
    const [showLink, setShowLink] = useState(false);

    const toggleLinks = () => {
        setShowLink(!showLink);
    };

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

            <div className='travelagentdiv'>
                <div className='travelagentnav'>
                    <div>Add Place</div>
                    <div>Add Spot</div>
                    <div>Add Hotel</div>
                    <div>Add Package</div>
                </div>
            </div>

            <ShowHotel/>

        </div>
    )
}

export default TravelAgentHotel