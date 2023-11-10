import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../pages/About/About"

import Parentlayout from "../component/layout/parentlayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/contact";
import Services from "../pages/Services/Services";
import Industry from "../pages/ProductandSolutions/Industry";
import AssetManagement from "../pages/AssetManagement";
import Mission from "../pages/Mission";
import Vision from "../pages/Vision";
import Values from "../pages/Values";
import FlyingChital from "../pages/ProductandSolutions/FlyingChital";
import RoadLogistics from "../../src/pages/ProductandSolutions/RoadLogistics"
import RailLogistics from "../../src/pages/ProductandSolutions/RailLogistics"
import Blog from "../pages/Resources/Blog";
import Chat from "../pages/Chat";
import FlyingChitalVehicle from "../pages/ProductandSolutions/FlyingChitalVehicle";
import FlyingChitalFleet from "../pages/ProductandSolutions/FlyingChitalFleet";
import FlyingChitalContainer from "../pages/ProductandSolutions/FlyingChitalContainer";
import AgricultureAutomation from "../pages/ProductandSolutions/AgricultureAutomation";
import AquacultureAutomation from "../pages/ProductandSolutions/AquacultureAutomation";
import Career from "../pages/Career";
import Professional from "../pages/Professional";
import RailModule1 from "../pages/RailModule/RailModule1";
import RailModule2 from "../pages/RailModule/RailModule2";



export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Parentlayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/industry", element: <Industry /> },
                { path: "/about", element: <About /> },
                { path: "/services", element: <Services /> },
                { path: "/contact", element: <Contact /> },
                { path: "/asset", element: <AssetManagement /> },
                { path: "/mission", element: <Mission /> },
                { path: "/vision", element: <Vision /> },
                { path: "/values", element: <Values /> },
                { path: "/flyingchital", element: <FlyingChital /> },
                { path: "/roadLogistics", element: <RoadLogistics /> },
                { path: "/railLogistics", element: <RailLogistics /> },
                { path: "/flyingChitalVehicle", element: <FlyingChitalVehicle /> },
                { path: "/flyingChitalFleet", element: <FlyingChitalFleet /> },
                { path: "/flyingChitalContainer", element: <FlyingChitalContainer /> },
                { path: "/agricultureAutomation", element: <AgricultureAutomation /> },
                { path: "/aquacultureAutomation", element: <AquacultureAutomation /> },
                { path: "/professional", element: <Professional /> },
                { path: "/railmodule1", element: <RailModule1 /> },
                { path: "/railmodule2", element: <RailModule2 /> },
                { path: "/blog", element: <Blog /> },
                { path: "/career", element: <Career /> },

                { path: "/chat", element: <Chat /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}
