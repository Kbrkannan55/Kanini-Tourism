import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

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
                console.log(data)
                sessionStorage.setItem('accessToken',data.accessToken)
                sessionStorage.setItem('refreshToken',data.refreshToken);
                sessionStorage.setItem('role',data.role)
                // You can handle the authentication token or user data here
                // For now, let's just display a success toast message
                toast.success('Login successful!');
            } else {
                // Handle login failure
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-title">Login</div>
            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px',
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
                        width: '350px'
                    }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    value={loginInfo.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className="button-container">
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;
