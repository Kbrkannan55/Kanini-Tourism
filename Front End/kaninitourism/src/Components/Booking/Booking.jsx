import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../Assets/logo.jpg';
import './Booking.css'; 

const Booking = () => {
  const [showLinks, setShowLinks] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    startDate: '',
    count: '',
    packageID: '',
  });

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      console.log(formData);
      const response = await axios.post('https://localhost:7050/api/Booking', formData);
      console.log(response.data); 

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="image-logo" src={Logo} style={{width:'170px',height:'120px'}} alt="Logo" />
        </div>
        <div className={`navbar-toggle ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-links ${showLinks ? 'active' : ''}`}>
          <li>Home</li>
          <li>Packages</li>
          <li>Logout</li>
        </ul>
      </nav>

      <div className="booking-form-container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="id">User ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
           
          
            required
          />
          <br />

          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="count">Total Count:</label>
          <input
            type="number"
            id="count"
            name="count"
            value={formData.count}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="packageID">Package ID:</label>
          <input
            type="number"
            id="packageID"
            name="packageID"
            value={formData.packageID}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
