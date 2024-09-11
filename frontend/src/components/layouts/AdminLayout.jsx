
import React, { useState } from 'react';
import Navbar from '../layouts/Navbar';  // Correct default import
import Sidebar from '../layouts/Sidebar';
import './Layout.css'; // Custom CSS file

const AdminLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`admin-layout ${sidebarVisible ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <Sidebar role="admin" className={`sidebar ${sidebarVisible ? 'show' : 'hide'}`} />
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
