import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Layout.css'; // Custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Financial System. All rights reserved.</p>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <Link to={"https://facebook.com"} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="social-icon" />
              </Link>
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
