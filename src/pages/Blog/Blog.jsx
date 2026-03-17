import React from "react";
import { Link } from "react-router-dom";
import Revolution from "../../assets/images/Revolution.png";
import Revolution2 from "../../assets/images/Revolution2.png";
import Empowering1 from "../../assets/images/Empowering1.png";
import Streamline from "../../assets/images/Streamline.png";
import Optimize from "../../assets/images/Optimize.png";
import ExpoCovr from "../../assets/images/Expo.png";
import Blogbg from "../../assets/images/Blogbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

const blogs = [
  {
    id: 1,
    title:
      "Revolutionizing Data Management for Enterprise Digital Transformation",
    excerpt:
      "MACH architecture — Microservices, API-first, Cloud-native, and Headless — allows businesses to deploy an ecosystem of pluggable, scalable, and replaceable third-party solutions to solve discrete business problems.",
    image: Revolution,
    link: "/edgeComputing",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Empowering Businesses with MACH Architecture",
    excerpt:
      "The Digital Transformation initiative of enterprises is typically focused on the enablement of better products, services, experience, or business models. At the heart of such transformation is data.",
    image: Empowering1,
    link: "/mACHArchitecture",
    category: "Architecture",
  },
  {
    id: 3,
    title: "Streamlining Fertilizer Supply Chain",
    excerpt:
      "Managing Outbound Supply chain for Fertilizer sector is often cumbersome as the allocation and distribution is under the control of the Government of India, with 99% transportation managed by Indian Railways.",
    image: Streamline,
    link: "/fertilizer",
    category: "Supply Chain",
  },
  {
    id: 4,
    title: "Revolutionizing Mining and Ore Processing",
    excerpt:
      "Revolutionize logistics in the mining and ore processing industry by harnessing the power of IoT and Smart technologies, unlocking unprecedented efficiency and optimization.",
    image: Revolution2,
    link: "/logisticsIntelligence",
    category: "Mining",
  },
  {
    id: 5,
    title: "Optimizing Operations in Mining and Metal Industries",
    excerpt:
      "Some of the typical challenges faced by a Mining and Metal Industries whose business is diversified to Iron and Steel Plants and mines. Manual data collection from various entities causes major bottlenecks.",
    image: Optimize,
    link: "/miningMetal",
    category: "Industrial",
  },
  {
    id: 6,
    title:
      "Flying Chital's Impactful Presence at the 2nd Odisha Mining & Infrastructure International Expo 2024",
    excerpt:
      "Flying Chital showcased its groundbreaking logistics platform at the expo, redefining industry standards with cutting-edge innovation and excellence, driving efficiency and sustainability.",
    image: ExpoCovr,
    link: "/MiningExpo",
    category: "Events",
  },
];

const categoryColors = {
  Technology: "bg-indigo-100 text-indigo-700",
  Architecture: "bg-purple-100 text-purple-700",
  "Supply Chain": "bg-emerald-100 text-emerald-700",
  Mining: "bg-amber-100 text-amber-700",
  Industrial: "bg-orange-100 text-orange-700",
  Events: "bg-rose-100 text-rose-700",
};

export default function Blog() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-no-repeat bg-center bg-cover rounded-br-[60px] md:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(55, 52, 169, 0.78) 0%, rgba(55, 52, 169, 0.62) 55%, rgba(79, 70, 229, 0.58) 100%), url(${Blogbg})`,
        }}
      >
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 font-heebo">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span>
              Insights &amp; Ideas
            </span>
            <h1 className="mt-5 text-4xl lg:text-6xl font-bold font-heebo text-gray-100 leading-tight">
              Challenge, Ideate &amp; Create
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-heebo">
              We provide Smart and Intelligent Solutions to Simplify Your Future
            </p>
            <div className="mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-white font-heebo">
              <img src={HomeIcon} alt="Home" className="h-5 w-5" />
              <Link
                to="/"
                className="text-[#F85A47] hover:text-[#ff796a] transition-colors"
              >
                Home
              </Link>
              <span>/ Blogs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section heading */}
      <section className="pt-14 sm:pt-16 pb-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heebo leading-tight">
              <span className="text-indigo-700">Inspiring</span> Minds, Igniting
              Ideas
            </h2>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
              <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
            </div>
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-heebo leading-7">
              Your gateway to thoughtful perspectives and creative expression on
              logistics, technology, and industry innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to={featured.link}
            className="group block rounded-[30px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.10)] border border-slate-100 bg-white hover:shadow-[0_32px_100px_rgba(55,52,169,0.18)] transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold font-heebo ${categoryColors[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600 font-heebo">
                    Featured
                  </span>
                </div>
                <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-slate-900 font-heebo leading-snug group-hover:text-indigo-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base text-slate-600 font-heebo leading-7 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 font-heebo">
                  Read Article
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-6 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((blog) => (
              <Link
                key={blog.id}
                to={blog.link}
                className="group flex flex-col rounded-[24px] overflow-hidden border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] hover:shadow-[0_28px_70px_rgba(55,52,169,0.14)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold font-heebo w-fit ${categoryColors[blog.category]}`}
                  >
                    {blog.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 font-heebo leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-heebo leading-6 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 font-heebo">
                    Read More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
