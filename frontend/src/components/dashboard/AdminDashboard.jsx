import React, { useState } from 'react';
import { FaUser, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import { Card, Row, Col, Table, ProgressBar } from 'react-bootstrap';
import Sidebar from '../layouts/Sidebar'; // Import Sidebar component
import Navbar from '../layouts/Navbar';   // Import Navbar component
import Footer from '../layouts/Footer';   // Import Footer component
import './dashboard.css'; // Custom CSS file for styling adjustments

const AdminDashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          {sidebarVisible && (
            <Sidebar role="admin" className="col-md-3 col-lg-2 d-md-block sidebar" />
          )}

          {/* Dashboard Content */}
          <main
            className={`${
              sidebarVisible ? 'col-md-9 ms-sm-auto col-lg-10' : 'col-12'
            } px-md-4 mt-5`}
          >
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Admin Dashboard</h1>
            </div>

            {/* Metrics Section */}
            <Row className="mb-4">
              <Col xs={12} md={6} lg={3}>
                <Card className="shadow-sm mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <FaUsers className="me-3" style={{ fontSize: '2rem', color: '#007bff' }} />
                    <div>
                      <h5>Total Users</h5>
                      <h3>1,250</h3>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="shadow-sm mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <FaUser className="me-3" style={{ fontSize: '2rem', color: '#28a745' }} />
                    <div>
                      <h5>Active Users</h5>
                      <h3>900</h3>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="shadow-sm mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <FaChartLine className="me-3" style={{ fontSize: '2rem', color: '#ffc107' }} />
                    <div>
                      <h5>Growth Rate</h5>
                      <h3>12.5%</h3>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <Card className="shadow-sm mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <FaCog className="me-3" style={{ fontSize: '2rem', color: '#dc3545' }} />
                    <div>
                      <h5>System Health</h5>
                      <h3>Good</h3>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* User Table Section */}
            <div className="mb-4">
              <h4>Recent Users</h4>
              <Table striped bordered hover responsive className="shadow-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Active</td>
                    <td>User</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td>Pending</td>
                    <td>User</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Michael Johnson</td>
                    <td>michael@example.com</td>
                    <td>Inactive</td>
                    <td>Admin</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <h4>System Usage</h4>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h5>Storage Usage</h5>
                      <ProgressBar now={75} label="75%" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h5>Bandwidth Usage</h5>
                      <ProgressBar now={50} label="50%" />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AdminDashboard;
