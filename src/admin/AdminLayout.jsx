import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";

const AdminLayout = () => {
  const isAuthenticated = () => {
    const user = localStorage.getItem("authUser");
    return user ? JSON.parse(user) : null;
  };
  if (isAuthenticated()) {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="p-6 mt-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    );
  } else {
    return <Outlet></Outlet>;
  }
};

export default AdminLayout;
