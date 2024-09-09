import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar role="user" /> {/* User-specific navbar */}
      <div className="container-fluid">
        <div className="row">
          <Sidebar role="user" /> {/* Sidebar with user links */}
          <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
