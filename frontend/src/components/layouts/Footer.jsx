import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Layout.css'; // Custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center text-md-left">
          {/* Copyright Text */}
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-white">&copy; {new Date().getFullYear()} Financial System. All rights reserved.</p>
          </Col>

          {/* Social Icons */}
          <Col md={6} className="text-center text-md-right">
            <h5 className="footer-title text-white">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
