import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-page vh-100 d-flex align-items-center justify-content-center" style={pageStyles}>
      <div className="card shadow-lg border-0 rounded p-4 " style={{ maxWidth: '500px', width: '100%' , marginTop:'90px'}}>
        <div className="text-center mb-4">
          <h2 style={{ color: '#4A4A4A', fontWeight: '600' }}>Join Us</h2>
          <p style={{ color: '#7A7A7A' }}>Create your account and get started</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 position-relative">
            <FaUser className="position-absolute" style={iconStyle} />
            <input
              type="text"
              className="form-control pl-5 rounded-pill"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <FaEnvelope className="position-absolute" style={iconStyle} />
            <input
              type="email"
              className="form-control pl-5 rounded-pill"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <FaLock className="position-absolute" style={iconStyle} />
            <input
              type="password"
              className="form-control pl-5 rounded-pill"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group mb-4 position-relative">
            <FaLock className="position-absolute" style={iconStyle} />
            <input
              type="password"
              className="form-control pl-5 rounded-pill"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill" style={buttonStyle}>
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p style={{ color: '#7A7A7A' }}>Already have an account? <Link to={"/"} style={{ color: '#6e8efb' }}>Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

// Styles
const pageStyles = {
  backgroundImage: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
  padding: '50px',
 
};

const iconStyle = {
  left: '15px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#6e8efb',
  fontSize: '1.2rem',
};

const inputStyle = {
  height: '50px',
  paddingLeft: '45px',
  fontSize: '1rem',
};

const buttonStyle = {
  height: '50px',
  fontSize: '1.2rem',
  backgroundColor: '#6e8efb',
  border: 'none',
  transition: 'background-color 0.3s ease',
};

export default SignUpPage;
