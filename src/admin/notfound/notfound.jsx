import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = ({ message = "Page not found." }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">{message}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
