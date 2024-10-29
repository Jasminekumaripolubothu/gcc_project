import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginPage from "../assets/LoginPage.png"; // Update with your actual image path

function Login() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (you can add authentication if needed)
        console.log('Form submitted');

        // After successful login, navigate to the home page
        navigate('/home'); // Navigate to the '/home' route
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Welcome Back!</h2>
                <p>Enter your Credentials to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label><br />
                        <input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input id="password" type="password" placeholder="Enter your password" required />
                    </div>
                    <p className="forgot-password">
                        <a href="/forgot-password">Forgot password?</a>
                    </p>
                    <button type="submit">Login</button>
                    <p className="signup">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
            
            {/* Image beside the form */}
            <div className="image-container">
                <img src={LoginPage} alt="Login Illustration" />
            </div>
        </div>
    );
}

export default Login;