// Login.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // Simulating a mock API call with a delay
      const response = await fetch('https://localhost:7050/api/Auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });

      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
        sessionStorage.setItem('role', data.role);
        toast.success('Login successful!');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="login-title">Login</div>
      {/* <div className="wholelogin"> */}
      <div className="input-container">
        <TextField
          sx={{
            width: '100%',
            maxWidth: '350px',
            fontSize: '18px'
          }}
          label="Email"
          variant="outlined"
          name="email"
          value={loginInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <TextField
          sx={{
            width: '100%',
            maxWidth: '350px'
          }}
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={loginInfo.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-containers">
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="contained" color="secondary">
          Signup
        </Button>
      </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default Login;
