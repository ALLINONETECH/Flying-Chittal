import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../pages/About/About";

import Parentlayout from "../component/layout/parentlayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/contact";
import Services from "../pages/Services/Services";
import Industry from "../pages/Industries/Industry";
import Page1 from "../pages/IChilds/Page1";
import Page2 from "../pages/IChilds/Page2";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parentlayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/services", element: <Services /> },
        {
          path: "/industry",
          element: <Industry />,
          children: [
            { path: "/industry/page1", element: <Page1 /> },
            { path: "/industry/page2", element: <Page2 /> },
          ],
        },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
