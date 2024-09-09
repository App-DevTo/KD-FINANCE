import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Sidebar from '../layouts/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar role="admin" /> {/* Admin-specific navbar (if different) */}
      <div className="container-fluid">
        <div className="row">
          <Sidebar role="admin" /> {/* Sidebar with admin links */}
          <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
