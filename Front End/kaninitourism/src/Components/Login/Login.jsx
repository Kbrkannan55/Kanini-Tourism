// Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false);
  const registerselect = useNavigate();
  const loginselect = useNavigate();

  const openRegistrationDialog = () => {
    setRegistrationDialogOpen(true);
  };

  const closeRegistrationDialog = () => {
    setRegistrationDialogOpen(false);
  };

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
        if(data.role=="Admin"){
            loginselect('/adminpage')
        }
        if(data.role=="Agent"){
            loginselect('/agentpage')
        }
        if(data.role=="User"){
            loginselect('/book')
        }
        
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred. Please try again later.');
    }
   
  };

  const handleUserRegistration = () => {
    registerselect('/signup')
    closeRegistrationDialog();
  };

  const handleAgentRegistration = () => {
    registerselect('/agentsignup')
    closeRegistrationDialog();
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-title">Login</div>
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
          <Button variant="contained" color="secondary" onClick={openRegistrationDialog}>
            Signup
          </Button>
        </div>
      </div>

      {/* Registration Dialog */}
      <Dialog open={registrationDialogOpen} onClose={closeRegistrationDialog}>
        <DialogContent>
          <Button variant="contained" color="primary" onClick={handleUserRegistration}>
            Register as User
          </Button>
          <Button variant="contained" color="secondary" onClick={handleAgentRegistration}>
            Register as Agent
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
