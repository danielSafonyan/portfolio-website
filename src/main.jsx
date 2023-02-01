import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './main.css'
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Root from './Pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <h2>My Projects</h2>,
      },
      {
        path: "/about",
        element: <h2>About & CV</h2>,
      },
      {
        path: "/contact",
        element: <h2>Contact</h2>,
      },
    ],
  },
  {
    path: "/projects",
    element: <div>Projects</div>,
  },
  {
    path: "/about",
    element: <div>About & CV</div>,
  },
  {
    path: "/contact",
    element: <div>About & CV</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
