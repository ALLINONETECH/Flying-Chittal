import React, { useEffect, useState } from "react";
import Revolution from "../../assets/images/Revolution.png";
import Revolution2 from "../../assets/images/Revolution2.png";
import Empowering1 from "../../assets/images/Empowering1.png";
import Streamline from "../../assets/images/Streamline.png";
import Optimize from "../../assets/images/Optimize.png";
import ExpoCovr from "../../assets/images/Expo.png";
import Unloading from "../../assets/images/Unloading.png";
import Blogbg from "../../assets/images/Blogbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const BLOGS_PER_PAGE = 6; // Number of blogs per page

  // Fetch blogs with pagination
  const fetchBlogs = async (next = true) => {
    setLoading(true);
    try {
      let q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        limit(BLOGS_PER_PAGE)
      );

      if (next && lastDoc) {
        q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          startAfter(lastDoc),
          limit(BLOGS_PER_PAGE)
        );
      }

      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs([
        ...blogsData,
        {
          title: "Edge Computing",
          subtitle: "Transforming the Future",
          bannerImage: "https://example.com/banner.jpg",
          heading: "Edge Computing Benefits",
          description:
            "Explore how edge computing is revolutionizing industries.",
          content: [
            { text: "Section 1 Content" },
            { text: "Section 2 Content" },
          ],
        },
      ]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);

      // Enable/Disable navigation buttons
      setIsNextDisabled(querySnapshot.docs.length < BLOGS_PER_PAGE);
      setIsPrevDisabled(!next && !lastDoc);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(); // Initial load
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-gray-600">Loading Blogs...</p>
      </div>
    );
  }

  return (
    <div>
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Blogbg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div> */}
        </nav>

        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Challenge, Ideate & Create
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              We provide Smart Solutions to Simplify Your Future
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div className="justify">
                  <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                    Home
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Blogs
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6 py-10">
        <div class="px-2 md:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Inspiring
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Minds, Igniting Ideas: Your Gateway to Thoughtful Perspectives
                and Creative Expression.
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                class="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-white mt-10 md:mt-16"
              >
                <div class="md:w-1/3 w-full md:max-w-sm mb-10 md:mb-0 md:ml-10 px-3 py-10">
                  <img
                    class="object-cover object-center w-full"
                    alt="hero"
                    src={Revolution}
                  />
                </div>
                <div class="flex-1 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    {blog.title}
                  </h2>
                  <p class="text-lg lg:text-xl font-normal leading-relaxed text-gray-800 mb-6">
                    {blog.description}
                  </p>
                  <Link to="/edgeComputing">
                    <div class="flex justify-start">
                      <button class="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                        READ MORE
                        <span class="ml-2">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              //   <div
              //     key={blog.id}
              //     className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
              //   >
              //     <img
              //       src={blog.bannerImage || "/path/to/default-image.jpg"}
              //       alt={blog.title}
              //       className="w-full h-40 object-cover rounded-t-lg"
              //     />
              //     <div className="p-4">
              //       <h2 className="text-xl font-semibold text-gray-800">
              //         {blog.title}
              //       </h2>
              //       <p className="text-gray-600 mt-2">
              //         {blog.subtitle || "Explore our latest blog."}
              //       </p>
              //       <Link
              //         to={`/blog/${blog.id}`}
              //         className="text-indigo-600 mt-4 inline-block"
              //       >
              //         Read More →
              //       </Link>
              //     </div>
              //   </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              className={`px-4 py-2 rounded bg-gray-200 ${
                isPrevDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
              disabled={isPrevDisabled}
              onClick={() => fetchBlogs(false)}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded bg-indigo-600 text-white ${
                isNextDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
              disabled={isNextDisabled}
              onClick={() => fetchBlogs(true)}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
