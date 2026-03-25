/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const About = lazy(() => import("../pages/About/About"));
const Parentlayout = lazy(() => import("../component/layout/parentlayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Services = lazy(() => import("../pages/Services/Services"));
const Industry = lazy(() => import("../pages/ProductandSolutions/Industry"));
const AssetManagement = lazy(() => import("../pages/AssetManagement"));
const Mission = lazy(() => import("../pages/Mission"));
const Vision = lazy(() => import("../pages/Vision"));
const Values = lazy(() => import("../pages/Values"));
const FlyingChital = lazy(
  () => import("../pages/ProductandSolutions/FlyingChital"),
);
const RoadLogistics = lazy(
  () => import("../pages/ProductandSolutions/RoadLogistics"),
);
const RailLogistics = lazy(
  () => import("../pages/ProductandSolutions/RailLogistics"),
);
const Chat = lazy(() => import("../pages/Chat"));
const FlyingChitalVehicle = lazy(
  () => import("../pages/ProductandSolutions/FlyingChitalVehicle"),
);
const FlyingChitalFleet = lazy(
  () => import("../pages/ProductandSolutions/FlyingChitalFleet"),
);
const FlyingChitalContainer = lazy(
  () => import("../pages/ProductandSolutions/FlyingChitalContainer"),
);
const AgricultureAutomation = lazy(
  () => import("../pages/ProductandSolutions/AgricultureAutomation"),
);
const AquacultureAutomation = lazy(
  () => import("../pages/ProductandSolutions/AquacultureAutomation"),
);
const Mobilyt = lazy(() => import("../pages/ProductandSolutions/Mobilyt"));
const Traks = lazy(() => import("../pages/ProductandSolutions/Traks"));
const Career = lazy(() => import("../pages/Career"));
const Professional = lazy(() => import("../pages/Professional"));
const Telematics = lazy(() => import("../pages/Telematics"));
const Customized = lazy(() => import("../pages/Customized"));
const Help = lazy(() => import("../pages/Help"));
const LogisticsIntelligence = lazy(
  () => import("../pages/Blog/LogisticsIntelligence"),
);
const MiningMetal = lazy(() => import("../pages/Blog/MiningMetal"));
const MiningExpo = lazy(() => import("../pages/Blog/MiningExpo"));
const MACHArchitecture = lazy(() => import("../pages/Blog/MACHArchitecture"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Fertilizer = lazy(() => import("../pages/Blog/Fertilizer"));
const EdgeComputing = lazy(() => import("../pages/Blog/EdgeComputing"));
const Terms = lazy(() => import("../pages/termsandservices/Terms"));
const AdminLayout = lazy(() => import("../admin/AdminLayout"));
const Login = lazy(() => import("../admin/login"));
const AdminDashboard = lazy(() => import("../admin/AdminDashboard"));
const NotFound = lazy(() => import("../admin/notfound/notfound"));
const AddBlogPage = lazy(() => import("../admin/pages/blogs/addblogs"));
const AllBlog = lazy(() => import("../pages/Blog/AllBlog"));
const AddLeader = lazy(() => import("../admin/pages/Leaders/addLeaders"));
const UserNotFound = lazy(() => import("../pages/NotFound"));

function RouteLoader() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="h-9 w-9 mx-auto border-4 border-indigo-200 border-t-indigo-700 rounded-full animate-spin" />
        <p className="mt-3 text-slate-600 font-heebo">Loading page...</p>
      </div>
    </div>
  );
}

// Utility to check authentication
const isAuthenticated = () => {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
};

// Private Route Component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/admin/login" replace />;
};

export default function Routes() {
  const router = useRoutes([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: (
            <Navigate
              to={isAuthenticated() ? "/admin/dashboard" : "/admin/login"}
              replace
            />
          ),
        },
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
        { path: "/mobilyt", element: <Mobilyt /> },
        { path: "/traks", element: <Traks /> },
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
        { path: "*", element: <UserNotFound /> },
      ],
    },
  ]);

  return <Suspense fallback={<RouteLoader />}>{router}</Suspense>;
}
