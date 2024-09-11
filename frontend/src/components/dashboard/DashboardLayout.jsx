import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
