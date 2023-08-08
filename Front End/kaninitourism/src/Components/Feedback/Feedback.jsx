import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Feedback.css';
import image1 from '../../Assets/travel3.jpg';
import image2 from '../../Assets/travel2.jpg';
import image3 from '../../Assets/travel4.jpg';
import Navbar from '../Navbar/Navbar';
import Chatbot from '../Chatbot/Chatbot';

const Feedback = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.user_name = 'Name is required';
    }

    if (!form.current.user_email.value.trim()) {
      errors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.current.user_email.value)) {
      errors.user_email = 'Invalid email format';
    }

    if (!form.current.phone.value.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(form.current.phone.value)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_ibmugz9', 'template_o3or5uk', form.current, 'E09jOR_E3u-_5PPBI')
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Message sent successfully');
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error('Failed to send message');
          }
        );
    }
  };





  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="bg-image-for-feedback"></div>

        <div className="Feedback_Form">
          <h1>Give Your Valuable Feedback </h1>
          <br />
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <label>Name </label>
            <input type="text" name="user_name" />
            {validationErrors.user_name && <div className="error">{validationErrors.user_name}</div>}
            <label>Email </label>
            <input type="email" name="user_email" />
            {validationErrors.user_email && <div className="error">{validationErrors.user_email}</div>}
            <label htmlFor="phone">Phone </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
            {validationErrors.phone && <div className="error">{validationErrors.phone}</div>}
            <label>Message </label>
            <textarea name="message" />
            <input type="submit" value="Submit" />
          </form>
          <ToastContainer />
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Feedback;
