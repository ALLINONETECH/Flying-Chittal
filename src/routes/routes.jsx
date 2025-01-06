/* eslint-disable no-unused-vars */
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  Navigate,
} from "react-router-dom";
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
import Chat from "../pages/Chat";
import FlyingChitalVehicle from "../pages/ProductandSolutions/FlyingChitalVehicle";
import FlyingChitalFleet from "../pages/ProductandSolutions/FlyingChitalFleet";
import FlyingChitalContainer from "../pages/ProductandSolutions/FlyingChitalContainer";
import AgricultureAutomation from "../pages/ProductandSolutions/AgricultureAutomation";
import AquacultureAutomation from "../pages/ProductandSolutions/AquacultureAutomation";
import Career from "../pages/Career";
import Professional from "../pages/Professional";
import Telematics from "../pages/Telematics";
import Customized from "../pages/Customized";
import Help from "../pages/Help";
import LogisticsIntelligence from "../pages/Blog/LogisticsIntelligence";
import MiningMetal from "../pages/Blog/MiningMetal";
import MiningExpo from "../pages/Blog/MiningExpo";
import MACHArchitecture from "../pages/Blog/MACHArchitecture";
import Blog from "../pages/Blog/Blog";
import Fertilizer from "../pages/Blog/Fertilizer";
import EdgeComputing from "../pages/Blog/EdgeComputing";
import Terms from "../pages/termsandservices/Terms";
import AdminLayout from "../admin/AdminLayout"; // Admin layout component
import Login from "../admin/login";
import AdminDashboard from "../admin/AdminDashboard"; // Dashboard component
import NotFound from "../admin/notfound/notfound";
import AddBlogPage from "../admin/pages/blogs/addblogs";
import AllBlog from "../pages/Blog/AllBlog";
import AddLeader from "../admin/pages/Leaders/addLeaders";

// Utility to check authentication
const isAuthenticated = () => {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
};

// Private Route Component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/admin/login" replace />;
};

// User/Public Routes
const UserRoutes = () => {
  const router = useRoutes([
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
        { path: "/telematics", element: <Telematics /> },
        { path: "/customized", element: <Customized /> },
        { path: "/logisticsIntelligence", element: <LogisticsIntelligence /> },
        { path: "/mACHArchitecture", element: <MACHArchitecture /> },
        { path: "/miningMetal", element: <MiningMetal /> },
        { path: "/miningExpo", element: <MiningExpo /> },
        { path: "/help", element: <Help /> },
        { path: "/career", element: <Career /> },
        { path: "/blog", element: <Blog /> },
        { path: "/fertilizer", element: <Fertilizer /> },
        { path: "/edgeComputing", element: <EdgeComputing /> },
        { path: "/allblogs", element: <AllBlog /> },

        { path: "/chat", element: <Chat /> },
        { path: "/termsandcondition", element: <Terms /> },
      ],
    },
  ]);
  return router;
};

// Admin Routes
const AdminRoutes = () => {
  const router = useRoutes([
    {
      path: "/admin",
      element: <AdminLayout />, // Common Admin Layout
      children: [
        // { index: true, element: <Navigate to="/login" replace /> }, // Redirect "/admin" to "/admin/login"
        { path: "login", element: <Login /> },
        {
          path: "dashboard",
          element: <PrivateRoute element={<AdminDashboard />} />,
        },
        { path: "blogs", element: <PrivateRoute element={<AddBlogPage />} /> },
        { path: "leaders", element: <PrivateRoute element={<AddLeader />} /> },

        {
          path: "*",
          element: <NotFound message="This page is under construction." />,
        },
      ],
    },
  ]);
  return router;
};

// Combined Router
export default function Routes() {
  return (
    <>
      <UserRoutes />
      <AdminRoutes />
    </>
  );
}
