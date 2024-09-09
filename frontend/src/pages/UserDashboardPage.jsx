import React from 'react';
import UserLayout from '../components/layouts/UserLayout';
import UserDashboard from '../components/dashboard/UserDashboard';

const UserDashboardPage = () => {
  return (
    <UserLayout>
      <UserDashboard />
    </UserLayout>
  );
};

export default UserDashboardPage;
