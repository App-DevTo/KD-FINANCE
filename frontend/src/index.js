import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminDashboardPage, UserDashboardPage } from './pages/pages';
import Layout from './root';  // Make sure the path is correct
import { LoginPage } from './components/authentication/auth';

// Fix the createBrowserRouter by making it an array
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all routes
    errorElement: <h2>Oops! Page not found.</h2>,
    children: [
      { path: "/", element: <LoginPage /> },  // The home page
      { path: "register", element: <App /> },  // Register page
      { path: "admin", element: <AdminDashboardPage /> },  // Admin page
      { path: "index", element: <UserDashboardPage /> },  // User Dashboard
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
