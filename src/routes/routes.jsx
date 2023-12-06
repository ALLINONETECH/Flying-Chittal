/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../pages/About/About";

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
import RoadLogistics from "../../src/pages/ProductandSolutions/RoadLogistics";
import RailLogistics from "../../src/pages/ProductandSolutions/RailLogistics";
// import Blog from "../pages/Resources/Blog";
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
import RailModule3 from "../pages/RailModule/RailModule3";
import RailModule4 from "../pages/RailModule/RailModule4";
import RailModule5 from "../pages/RailModule/RailModule5";
import RailModule6 from "../pages/RailModule/RailModule6";
import RailModule7 from "../pages/RailModule/RailModule7";
import RailModule8 from "../pages/RailModule/RailModule8";
import RailModule9 from "../pages/RailModule/RailModule9";
import Telematics from "../pages/Telematics";
import Customized from "../pages/Customized";
import Help from "../pages/Help";
import LogisticsIntelligence from "../pages/Blog/LogisticsIntelligence";
import MiningMetal from "../pages/Blog/MiningMetal";
import MACHArchitecture from "../pages/Blog/MACHArchitecture";
import Blog from "../pages/Blog/Blog";
import Fertilizer from "../pages/Blog/Fertilizer";
import EdgeComputing from "../pages/Blog/EdgeComputing";
import Terms from "../pages/termsandservices/terms";

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
        { path: "/railmodule3", element: <RailModule3 /> },
        { path: "/railmodule4", element: <RailModule4 /> },
        { path: "/railmodule5", element: <RailModule5 /> },
        { path: "/railmodule6", element: <RailModule6 /> },
        { path: "/railmodule7", element: <RailModule7 /> },
        { path: "/railmodule8", element: <RailModule8 /> },
        { path: "/railmodule9", element: <RailModule9 /> },
        { path: "/telematics", element: <Telematics /> },
        { path: "/customized", element: <Customized /> },
        // { path: "/blog", element: <Blog /> },
        { path: "/logisticsIntelligence", element: <LogisticsIntelligence /> },
        { path: "/mACHArchitecture", element: <MACHArchitecture /> },
        { path: "/miningMetal", element: <MiningMetal /> },
        { path: "/help", element: <Help /> },
        { path: "/career", element: <Career /> },
        { path: "/blog", element: <Blog /> },
        { path: "/fertilizer", element: <Fertilizer /> },
        { path: "/edgeComputing", element: <EdgeComputing /> },
        { path: "/chat", element: <Chat /> },
        { path: "/termsandcondition", element: <Terms /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
