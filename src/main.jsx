import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
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
