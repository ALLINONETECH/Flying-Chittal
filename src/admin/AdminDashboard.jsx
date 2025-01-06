import React, { useEffect, useState } from "react";
import {
  fetchPageVisits,
  fetchBlogs,
  fetchBlogVisits,
  fetchActiveUsers,
} from "../firebase/firebaseUtilities";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [pageVisits, setPageVisits] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogVisits, setBlogVisits] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageVisitsData = await fetchPageVisits();
        const blogsData = await fetchBlogs();
        const blogVisitsData = await fetchBlogVisits();
        const activeUsersData = await fetchActiveUsers();

        setPageVisits(pageVisitsData || []);
        setBlogs(blogsData || []);
        setBlogVisits(blogVisitsData || []);
        setActiveUsers(activeUsersData || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  // Data for Page Visits Chart
  const pageVisitsData = {
    labels: pageVisits.map((page) => page.page),
    datasets: [
      {
        label: "Page Visits",
        data: pageVisits.map((page) => page.visitCount),
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Data for Blog Visits Chart
  const blogVisitsData = {
    labels: blogs.map((blog) => blog.title),
    datasets: [
      {
        label: "Blog Views",
        data: blogs.map(
          (blog) =>
            blogVisits.find((stat) => stat.blogId === blog.id)?.visitCount || 0
        ),
        borderColor: "#F43F5E",
        backgroundColor: "rgba(244, 63, 94, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 overflow-auto">
      {/* Active Users Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
        <p className="text-4xl sm:text-5xl font-extrabold text-indigo-600">
          {activeUsers.length}
        </p>
      </div>

      {/* Page Visits Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Page Visits</h2>
        <div className="w-full">
          <Line data={pageVisitsData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Blogs Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700">Blog Views</h2>
        <div className="w-full">
          <Line data={blogVisitsData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
