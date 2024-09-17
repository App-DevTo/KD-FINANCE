import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />  {}
      </div>
      <Footer />
    </>
  );
};

export default Layout;