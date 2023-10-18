import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About/About";
import Parentlayout from "../component/layout/parentlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Industry from "../pages/Industries/Industry";

import Aquaculture from "../pages/Industries/Aquaculture";
import Cement from "../pages/Industries/Cement";
import Fertiliser from "../pages/Industries/Fertiliser";
import Mining from "../pages/Industries/Mining";
import OilGas from "../pages/Industries/OilGas";
import Oreprocessing from "../pages/Industries/Oreprocessing";
import Transportation from "../pages/Industries/Transportation";
import Agriculture from "../pages/Industries/Agriculture";

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
        // { path: "/contact", element: <Contact /> },
        { path: "/transportation", element: <Transportation /> },
        { path: "/mining", element: <Mining /> },
        { path: "/OreProcessing", element: <Oreprocessing /> },
        { path: "/cement", element: <Cement /> },
        { path: "/fertilisers", element: <Fertiliser /> },
        { path: "/oilgas", element: <OilGas /> },
        { path: "/agriculture", element: <Agriculture /> },
        { path: "/aquaculture", element: <Aquaculture /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
