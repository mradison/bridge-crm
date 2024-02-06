import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import App from './App.jsx'
import Homepage from './pages/homepage.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error'

import { RouterProvider } from 'react-router-dom/dist'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },{
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <RouterProvider router={router} />
)
