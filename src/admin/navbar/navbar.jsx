import React from "react";
import { logoutUser } from "../../firebase/firebaseUtilities";

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-md flex items-center justify-between px-6 z-10">
      <h1 className="text-lg font-bold sm:hidden">Admin Panel Navbar</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
          Profile
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-400"
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
