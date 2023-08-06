import React from 'react'
import { useState } from 'react'
import Logo from '../../Assets/traveltour1.jpg'
import './TravelAgentPage.css'
import ShowPlace from '../Places/ShowPlace'

const TravelAgentPage = () => {
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
                    
                </div>
            </div>

            <ShowPlace/>

        </div>
    )
}

export default TravelAgentPage