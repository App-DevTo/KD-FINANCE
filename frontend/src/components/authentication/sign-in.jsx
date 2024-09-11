import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    <div className="login-page vh-100 d-flex align-items-center justify-content-center" style={pageStyles}>
      <div className="card shadow-lg border-0 rounded p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 style={{ color: '#4A4A4A', fontWeight: '600' }}>KD-FINANCE</h2>
          <p style={{ color: '#7A7A7A' }}>Login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
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

          <div className="form-group mb-4 position-relative">
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

          <button type="submit" className="btn btn-primary w-100 rounded-pill" style={buttonStyle}>
            Log In
          </button>
        </form>
        <div className="text-center mt-3">
          <p style={{ color: '#7A7A7A' }}>Don't have an account? <Link to={'./register'} style={{ color: '#6e8efb' }}>Sign up</Link></p>
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

export default LoginPage;
