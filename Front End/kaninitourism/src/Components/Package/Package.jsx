import React, { useState, useEffect } from 'react';
import Image1 from '../../Assets/Travelplace2.jpg';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import PackageModal from './PackageModal'; // Import the PackageModal component
import './Package.css';

const API_BASE_URL = 'https://localhost:7050/api/Package';

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState('');
  const [destination, setDestination] = useState('');
  const [transport, setTransport] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    // Debounce function to delay the filterPackages call
    const delayFilterPackages = setTimeout(() => {
      filterPackages();
    }, 300);

    return () => {
      clearTimeout(delayFilterPackages);
    };
  }, [search, destination, transport]);

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

  const handleTransportChange = (event) => {
    setTransport(event.target.value);
  };

  const filterPackages = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7050/api/Package/GetFilteredDetails?type=${search}&desti=${destination}&transport=${transport}`
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
        <img src={Image1} alt='Package' width={'100%'} style={{height:'660px'}}  />
      </div>

      <div className='search-container' style={{marginTop:'10px'}}>
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
        <input
          type='text'
          placeholder='Transport Type'
          value={transport}
          onChange={handleTransportChange}
        />
      </div>
      <h2>Available Packages</h2>
      <div className='Package-list'>
        {packages.map((pkg, index) => (
          <div className='Package-card' key={index}>
            <h2>{pkg.packageType}</h2>
            <p>Source: {pkg.source}</p>
            <p>Destination: {pkg.destination}</p>
            <h5>Price Per Person : {pkg.pricePerPerson}</h5>
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
};

export default Package;
