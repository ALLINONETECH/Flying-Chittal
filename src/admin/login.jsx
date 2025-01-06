import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../firebase/firebaseUtilities";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const isAuthenticated = await authenticateUser(username, password);

      if (isAuthenticated) {
        // Redirect to the Admin Dashboard
        navigate("/admin/dashboard");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Enter admin credentials to access your account
        </p>
        <form onSubmit={handleLogin} className="space-y-6 mt-6 animate-fade-in">
          <div className="relative">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="peer w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
            >
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
            >
              Password
            </label>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="text-sm text-center mt-6">
          <p className="text-gray-600">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline transition-colors"
            >
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
