
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Ensure you have the proper CSS styling
import SignupPage from "../assets/SignupPage.png"; // Update with your actual image path

function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Form submitted');
    };

    return (
        <div className="signup-container">
            <div className="form-container">
                <h2>Get Started Now</h2>
                <p>Enter your details in below</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label><br />
                        <input id="name" type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollno">Roll.No:</label><br />
                        <input id="name" type="text" placeholder="Enter your Roll.No" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label><br />
                        <input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input id="password" type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="team">Team No:</label><br />
                        <input id="team" type="team" placeholder="Enter your Team" required />
                    </div>
                    <button type="submit">Sign Up</button>
                    <p className="login">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

            {/* Image beside the form */}
            <div className="image-container">
                <img src={SignupPage} alt="Signup Illustration" />
            </div>
        </div>
    );
}

export default Signup;