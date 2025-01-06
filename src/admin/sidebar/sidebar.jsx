import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Products", path: "/admin/products" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 bg-gray-900 text-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-md z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Admin Panel
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
