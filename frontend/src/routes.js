/**
=====================================================
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  11. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
// import Loans from "layouts/loans";
// import LoanRegistration from "layouts/loan-registration";
// import UserManagement from "layouts/user-management";
// import Messaging from "layouts/messaging";
// import Payments from "layouts/payments";
// import GroupManagement from "layouts/group-management";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Commented out until these components are developed
// import Security from "layouts/security";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "User Management",
    key: "user-management",
    icon: <Icon fontSize="small">group</Icon>,
    collapse: [
      {
        name: "All Users",
        key: "all-users",
        route: "/user-management/all-users",
        //component: <UserManagement />,
      },
      {
        name: "User Registration",
        key: "user-registration",
        route: "/user-management/user-registration",
        component: <SignUp />, // Reusing SignUp for user registration
      },
      {
        name: "User Profile",
        key: "user-profile",
        route: "/profile",
        component: <Profile />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Loans",
    key: "loans",
    icon: <Icon fontSize="small">money</Icon>,
    collapse: [
      {
        name: "Loan Registration",
        key: "loan-registration",
        route: "/loans/loan-registration",
        //component: <LoanRegistration />,
      },
      {
        name: "Loan Repayment",
        key: "loan-repayment",
        route: "/loans/loan-repayment",
        // component: <Loans />, // Placeholder for a Loan Repayment component
      },
    ],
  },
  {
    type: "collapse",
    name: "Groups",
    key: "groups",
    icon: <Icon fontSize="small">group_work</Icon>,
    collapse: [
      {
        name: "Group Registration",
        key: "group-registration",
        route: "/groups/group-registration",
        //component: <GroupManagement />, // Placeholder for a Group Registration component
      },
      {
        name: "Group Shares",
        key: "group-shares",
        route: "/groups/group-shares",
        //component: <GroupManagement />, // Placeholder for Group Shares component
      },
      {
        name: "Group Savings",
        key: "group-savings",
        route: "/groups/group-savings",
        //component: <GroupManagement />, // Placeholder for Group Savings component
      },
      {
        name: "Savings Register",
        key: "savings-register",
        route: "/groups/savings-register",
        //component: <GroupManagement />, // Placeholder for Savings Register component
      },
    ],
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: <Icon fontSize="small">payment</Icon>,
    route: "/payments",
    //component: <Payments />, // Placeholder for a Payments component
  },
  {
    type: "collapse",
    name: "Messaging",
    key: "messaging",
    icon: <Icon fontSize="small">message</Icon>,
    route: "/messaging",
    //component: <Messaging />,
  },
  {
    type: "collapse",
    name: "Account",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  // Commented out until developed
  // {
  //   type: "collapse",
  //   name: "Security",
  //   key: "security",
  //   icon: <Icon fontSize="small">security</Icon>,
  //   route: "/security",
  //   component: <Security />,
  // },
];

export default routes;
