import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='total-div'>
       
  <footer>
    
    <div class="footer-top">
      <div class="footer-top-word">
      <p  style={{fontWeight:'bold'}}>WE VALUE OUR CUSTOMERS</p>
    </div>
  <div class="footer-top-word">
    <p style={{fontWeight:'bold'}}>100% HANDPICKED</p>
  </div>
  
  <div class="footer-top-word">
    <p  style={{fontWeight:'bold'}}>BEST SERVICE </p>
  </div>
  
    </div>
  
    <div class="footer-end">
      <div class="end1" >
        <p style={{fontWeight:'bold'}}>ABOUT</p>
        <p>Who We Are</p>
        <p>Join Our Team</p>
        <p>Terms & Conditions</p>
        <p>Fees & Payments</p>
      </div>
      <div class="end2" >
        <p style={{fontWeight:'bold'}}>TREATMENT</p>
        <p>Track Your Order</p>
        <p>Frequently Asked Questions</p>
        <p>Returns</p>
        <p>Cancellations</p>
        <p>Payments</p>
        <p>Customer Care</p>
      </div>
      <div class="end3">
        <p style={{fontWeight:'bold'}}>LOCATIONS</p>
        <p>Chennai</p>
        <p>Coimbatore</p>
        <p>Madurai</p>
        <p>Karur</p>
        <p>Dindugul</p>
      </div>
      <div class="end4" >
        <p style={{fontWeight:'bold'}}>FOLLOW US</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Pinterest</p>
      </div>
    </div>
  
    <div class="theend">
      <div class="copyright" style={{marginTop:'70px'}}>
        <p style={{fontWeight:'bold'}}>&copy;Copyright Reserved 2023</p>
      </div>
    </div>
  
  </footer>
   
    </div>
  )
}

export default Footer