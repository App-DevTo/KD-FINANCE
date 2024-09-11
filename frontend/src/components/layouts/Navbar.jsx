import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaFileExcel, FaEye, FaPencilAlt, FaEnvelope, FaUserCircle, FaSignOutAlt, FaCog, FaHome, FaBars, FaSearch } from 'react-icons/fa';
import './Layout.css'; // Custom CSS file

const Navbar = ({ toggleSidebar }) => {
  const [searchVisible, setSearchVisible] = useState(false); // State to toggle search input

  const toggleOffcanvas = () => {
    toggleSidebar(); // Function to toggle the sidebar visibility
  };

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible); // Toggle the search input visibility
  };

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" fixed="top" className="navbar-custom">
      <Container fluid>
        {/* Sidebar Toggle Button for Small Screens */}
        <Button variant="link" className="navbar-toggler d-lg-none" onClick={toggleOffcanvas}>
          <FaBars style={{ color: '#fff', fontSize: '1.5rem' }} />
        </Button>

        <BootstrapNavbar.Brand href="/" className="d-flex align-items-center">
          {/* Logo Text */}
          <span className="navbar-logo-text">FinanceApp</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {/* Conditionally display the search form */}
            {searchVisible && (
              <form className="d-flex search-field">
                <input type="text" className="form-control" placeholder="Search..." />
              </form>
            )}
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {/* Search Icon */}
            <Button variant="link" className="text-white me-3" onClick={handleSearchToggle}>
              <FaSearch style={{ fontSize: '1.5rem' }} />
            </Button>

            {/* Home Link */}
            <Link className="nav-link" to="/">
              <FaHome className="me-2" /> Home
            </Link>

            {/* Reports Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator" id="reportsDropdown">
                Reports
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaFilePdf className="me-2" /> PDF
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaFileExcel className="me-2" /> Excel
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Projects Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator" id="projectsDropdown">
                Projects
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaEye className="me-2" /> View Project
                </Dropdown.Item>
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaPencilAlt className="me-2" /> Edit Project
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* User Profile Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <div className="nav-profile-img">
                  <FaUserCircle className="profile-icon" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-white">Henry Klein</p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaEnvelope className="me-2" /> Inbox
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaUserCircle className="me-2" /> Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaCog className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#!" onClick={(e) => e.preventDefault()}>
                  <FaSignOutAlt className="me-2" /> Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
