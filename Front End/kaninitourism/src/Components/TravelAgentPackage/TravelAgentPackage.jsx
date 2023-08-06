import React from 'react'
import { useState } from 'react'
import Logo from '../../Assets/traveltour1.jpg'
import './TravelAgentPackage.css'
import AddingPackage from '../AddingPackage/AddingPackage'

const TravelAgentPackage = () => {
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
                        HOME
                    </li>
                    <li>
                        PACKAGE
                    </li>
                    <li>
                        LOGOUT
                    </li>
                </ul>

            </nav>
           

            <div className='travelagentdiv'>
                <div className='travelagentnav'>
                    <div>ADD PLACE</div>
                    <div>ADD SPOT</div>
                    <div>ADD HOTEL</div>
                    <div>ADD PACKAGE</div>
                    
                </div>
            </div>
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">ADD PACKAGE</h1>
                    </div>
                </div>
            </div>

            <AddingPackage/>

        </div>
    )
}

export default TravelAgentPackage