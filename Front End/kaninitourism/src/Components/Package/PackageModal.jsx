import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

const PackageModal = ({ isOpen, closeModal, packageData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Package Modal'
      className='Modal'
      overlayClassName='Overlay'
    >
      <div className='Modal-content'>
        <h2>{packageData.packageType}</h2>
        <div className='Modal-details'>
          <p><strong>Source:</strong> {packageData.source}</p>
          <p><strong>Destination:</strong> {packageData.destination}</p>
          <p><strong>Total Days:</strong> {packageData.totaldays}</p>
          <p><strong>Vehicle Type:</strong> {packageData.vehicleType}</p>
          <p><strong>Itinerary Details:</strong> {packageData.itineraryDetails}</p>
          {/* Add more details as needed */}
        </div>
        <div className='Modal-buttons'>
          <button className='Close-button' onClick={closeModal}>Close</button>
          <button className='Book-button'>Book Now</button>
        </div>
      </div>
    </Modal>
  );
};

export default PackageModal;
