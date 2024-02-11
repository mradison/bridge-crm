import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Homepage from './pages/homepage.jsx';
import Signup from './pages/Signup.jsx';
import Groups from './pages/Groups.jsx';
import GroupSingle from './pages/GroupSingle.jsx';
import SingleContact from './pages/SingleContact.jsx';
import Contacts from './pages/Contacts.jsx';
import Login from './pages/Login';
import Error from './pages/Error';
import SingleActivity from './pages/SingleActivity.jsx';
import ActivitiesPage from './pages/ActivitiesPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/activities',
        element: <ActivitiesPage />
      }, {
        path: '/groups',
        element: <Groups />
      }, {
        path: '/groups/:groupid',
        element: <GroupSingle />
      }, {
        path: '/contacts',
        element: <Contacts />
      }, {
        path: '/activities/:activityid',
        element: <SingleActivity />
      }, 
      {
        path: '/contacts/:contactid',
        element: <SingleContact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
