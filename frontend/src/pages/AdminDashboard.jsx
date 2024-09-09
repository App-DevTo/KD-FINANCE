import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const AdminDashboardPage = () => {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
};

export default AdminDashboardPage;
