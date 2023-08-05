import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../Assets/LogoT.jpg'; // Replace with the actual path to your logo image

const Booking = () => {
  const [showLink, setShowLink] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    startDate: null,
    count: null,
    packageID: null,
  });

  const toggleLinks = () => {
    setShowLink(!showLink);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData);
      console.log(response.data); // Handle success or show a message to the user
      // Optionally reset the form fields after successful submission
      setFormData({
        id: null,
        tartDate: null,
        count: null,
        ackageID: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="image-logo" src={Logo} alt="Logo" />
        </div>
        <div className={`navbar-toggle ${showLink ? 'active' : ''}`} onClick={toggleLinks}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-links ${showLink ? 'active' : ''}`}>
          <li>Home</li>
          <li>Packages</li>
          <li>Logout</li>
        </ul>
      </nav>

      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
       
        <label>User ID :</label>
        <input
          type="number"
          name="Id"
          value={formData.Id || ''}
          onChange={handleChange}
          required
        />
        <br/>
        <label>Name :</label>
        <input
          type="text"
          name="Id"
          
          onChange={handleChange}
          required
        />
        <br/>
        <label>Start Date:</label>
        <input
          type="date"
          name="StartDate"
          value={formData.StartDate || ''}
          onChange={handleChange}
          required
        />
        <br />

        <label>Total Count:</label>
        <input
          type="number"
          name="AdultCount"
          value={formData.count || ''}
          onChange={handleChange}
          required
        />
        <br />

        <label>Package ID:</label>
        <input
          type="number"
          name="PackageID"
          value={formData.PackageID || ''}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
