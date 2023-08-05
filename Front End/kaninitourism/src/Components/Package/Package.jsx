import React, { useState, useEffect } from 'react';
import Image1 from '../../Assets/Thailand.jpg';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import PackageModal from './PackageModal'; // Import the PackageModal component
import './Package.css';

const API_BASE_URL = 'https://localhost:7050/api/Package'; // Replace with your API endpoint

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setPackages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const filterPackages = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7050/api/Package/GetFilteredDetails?type=${search}&desti=${destination}`
      );
      setPackages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (packageData) => {
    setSelectedPackage(packageData);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className='Package-whole-page'>
      <Navbar />
      <div className='Package-top-Image'>
        <img src={Image1} alt='Package' width={'100%'} height={'500px'} />
      </div>

      <div className='search-container'>
        <input
          type='text'
          placeholder='Search by package type'
          value={search}
          onChange={handleSearchChange}
        />
        <input
          type='text'
          placeholder='Search by destination'
          value={destination}
          onChange={handleDestinationChange}
        />
        <button onClick={filterPackages}>Search</button>
      </div>

      <div className='Package-list'>
        {packages.map((pkg, index) => (
          <div className='Package-card' key={index}>
            <h2>{pkg.packageType}</h2>
            <p>Source: {pkg.source}</p>
            <p>Destination: {pkg.destination}</p>
            <button onClick={() => openModal(pkg)}>View Details</button>
          </div>
        ))}
      </div>

      <PackageModal
        isOpen={!!selectedPackage}
        closeModal={closeModal}
        packageData={selectedPackage || {}}
      />
    </div>
  );
}

export default Package;
