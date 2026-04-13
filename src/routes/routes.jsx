/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useEffect, useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import blogsData from "../assets/json/blogs.js";
import BrandLogo from "../assets/images/logos1.png";

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
const Blog = lazy(() => import("../pages/Blog/Blog"));
const DynamicBlog = lazy(() => import("../pages/Blog/DynamicBlog"));
const Terms = lazy(() => import("../pages/termsandservices/Terms"));
const AdminLayout = lazy(() => import("../admin/AdminLayout"));
const Login = lazy(() => import("../admin/login"));
const AdminDashboard = lazy(() => import("../admin/AdminDashboard"));
const NotFound = lazy(() => import("../admin/notfound/notfound"));
const AddBlogPage = lazy(() => import("../admin/pages/blogs/addblogs"));
const AllBlog = lazy(() => import("../pages/Blog/AllBlog"));
const AddLeader = lazy(() => import("../admin/pages/Leaders/addLeaders"));
const UserNotFound = lazy(() => import("../pages/NotFound"));

// Auto-generate blog article routes from blogs.js
// - Blogs with a "component" field render their own handcrafted JSX page
// - Blogs without "component" (or component: null) use the DynamicBlog template
const blogPageModules = import.meta.glob("../pages/Blog/*.jsx");
const blogRoutes = blogsData.map((b) => {
  if (b.component) {
    const loader = blogPageModules[`../pages/Blog/${b.component}.jsx`];
    const Component = lazy(loader);
    return { path: b.link, element: <Component /> };
  }
  return { path: b.link, element: <DynamicBlog blog={b} /> };
});

function RouteLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="absolute -top-16 -left-8 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-4 h-56 w-56 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative z-10 text-center">
        <div className="relative mx-auto h-20 w-20 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-indigo-200 animate-ping" />
          <span className="absolute inset-2 rounded-full border-2 border-orange-300/70 animate-pulse" />
          <span className="relative h-14 w-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center">
            <img
              src={BrandLogo}
              alt="Flying Chital"
              className="h-8 w-8 object-contain"
            />
          </span>
        </div>

        <p className="mt-4 text-slate-800 font-heebo font-semibold tracking-wide">
          Loading page
        </p>
        <p className="mt-1 text-sm text-slate-500 font-heebo">
          Preparing a smooth experience...
        </p>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.2s]" />
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.1s]" />
          <span className="h-2 w-2 rounded-full bg-orange-400 animate-bounce" />
        </div>
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
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        ...blogRoutes,
        { path: "/help", element: <Help /> },
        { path: "/career", element: <Career /> },
        { path: "/blog", element: <Blog /> },
        { path: "/allblogs", element: <AllBlog /> },
        { path: "/chat", element: <Chat /> },
        { path: "/termsandcondition", element: <Terms /> },
        { path: "*", element: <UserNotFound /> },
      ],
    },
  ]);

  if (showInitialLoader) {
    return <RouteLoader />;
  }

  return <Suspense fallback={<RouteLoader />}>{router}</Suspense>;
}
