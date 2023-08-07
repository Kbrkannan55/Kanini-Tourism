import React from 'react'
import { useState } from 'react'
import Logo from '../../Assets/traveltour1.jpg'
import './TravelAgentPackage.css'
import AddingPackage from '../AddingPackage/AddingPackage'
import { Link } from 'react-router-dom'

const TravelAgentPackage = () => {
    const [showLink, setShowLink] = useState(false);

    const toggleLinks = () => {
        setShowLink(!showLink);
    };

    const Logout=()=>{
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        sessionStorage.removeItem('id')
    }

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
                     <Link style={{textDecoration:'none',color:'black',fontSize:'17px'}} to={'/'}>HOME</Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:'none',color:'black',fontSize:'17px'}} to={'/'}>PACKAGE</Link>
                    </li>
                    <li onClick={Logout}>
                    <Link style={{textDecoration:'none',color:'black',fontSize:'17px'}} to={'/'}>LOGOUT</Link>
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
                        <h4>ADD PACKAGE</h4>
                    </div>
                </div>
            </div>

            <AddingPackage/>

        </div>
    )
}

export default TravelAgentPackage