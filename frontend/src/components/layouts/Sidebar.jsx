import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCogs } from 'react-icons/fa';
import './Layout.css'; // Custom CSS file

const Sidebar = ({ role }) => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar-offcanvas">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {role === 'admin' ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  <FaHome /> Admin Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/users">
                  <FaUsers /> User Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/settings">
                  <FaCogs /> Settings
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <FaHome /> User Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  <FaCogs /> Settings
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
  
};

export default Sidebar;
