import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { FaFilePdf, FaFileExcel, FaEye, FaPencilAlt, FaEnvelope, FaUserCircle, FaSignOutAlt, FaCog, FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Custom CSS file

const Navbar = () => {
  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  };

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" fixed="top" className="navbar-custom">
      <Container fluid>
        <div className="navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/">
            {/* Replace with your logo */}
            <span className="navbar-logo-text">FinanceApp</span>
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            {/* Replace with mini logo */}
            <span className="navbar-logo-mini-text">FA</span>
          </Link>
        </div>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" onClick={() => document.body.classList.toggle('sidebar-icon-only')} />

        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <form className="d-flex search-field">
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
            </form>
          </Nav>

          <Nav className="ml-auto">
            {/* Home Link */}
            <Link className="nav-link" to="/">
              <FaHome className="mr-2" /><Trans>Home</Trans>
            </Link>

            {/* Reports Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <Trans>Reports</Trans>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaFilePdf className="mr-2" /><Trans>PDF</Trans>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaFileExcel className="mr-2" /><Trans>Excel</Trans>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Projects Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <Trans>Projects</Trans>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaEye className="mr-2" /><Trans>View Project</Trans>
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaPencilAlt className="mr-2" /><Trans>Edit Project</Trans>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* User Profile Dropdown */}
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <div className="nav-profile-img">
                  {/* Replace with profile image */}
                  <FaUserCircle className="profile-icon" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black"><Trans>Henry Klein</Trans></p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaEnvelope className="mr-2" /><Trans>Inbox</Trans>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaUserCircle className="mr-2" /><Trans>Profile</Trans>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaCog className="mr-2" /><Trans>Settings</Trans>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={(e) => e.preventDefault()}>
                  <FaSignOutAlt className="mr-2" /><Trans>Log Out</Trans>
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
