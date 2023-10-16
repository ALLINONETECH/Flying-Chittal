import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../pages/About/About";

import Parentlayout from "../component/layout/parentlayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/contact";
import Services from "../pages/Services/Services";
import Industry from "../pages/Industries/Industry";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parentlayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/industry", element: <Industry /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
