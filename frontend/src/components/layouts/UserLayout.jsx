import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Sidebar from '../layouts/Sidebar';


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
