import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";

const AddBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
  });
  const navigate = useNavigate();

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new blog
  const createBlog = async () => {
    if (!newBlog.title || !newBlog.content || !newBlog.author) return;
    try {
      await addDoc(collection(db, "blogs"), {
        ...newBlog,
        createdAt: new Date(),
        views: 0,
      });
      setNewBlog({ title: "", content: "", author: "" });
      fetchBlogs();
    } catch (error) {
      console.error("Error adding blog: ", error);
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog: ", error);
    }
  };

  // View blog details
  const viewBlog = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-white shadow rounded hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-sm text-gray-600">By {blog.author}</p>
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: blog.content.substring(0, 100) + "...",
              }}
            ></div>
            <button
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
              onClick={() => viewBlog(blog.id)}
            >
              Read More
            </button>
            <button
              className="ml-4 text-red-600 hover:underline"
              onClick={() => deleteBlog(blog.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Blog Form */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Create a New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="border p-2 rounded mb-4 w-full"
        />
        <ReactQuill
          theme="snow"
          value={newBlog.content}
          onChange={(content) => setNewBlog({ ...newBlog, content })}
          className="mb-4"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBlog.author}
          onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          className="border p-2 rounded mb-4 w-full"
        />
        <button
          onClick={createBlog}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlogPage;
