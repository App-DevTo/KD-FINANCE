import React from 'react';
import UserLayout from '../layouts/UserLayout';
import UserDashboard from '../components/UserDashboard';

const UserDashboardPage = () => {
  return (
    <UserLayout>
      <UserDashboard />
    </UserLayout>
  );
};

export default UserDashboardPage;
