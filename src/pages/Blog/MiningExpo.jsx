import React from "react";
import { Link } from "react-router-dom";
import BlogMining from "../../assets/images/BlogMining.png";

const sections = [
  {
    heading: "Introduction",
    content:
      "At the 2nd Odisha Mining & Infrastructure International Expo 2024, stood Flying Chital Tech Private Limited — a beacon of innovation and digital transformation. With a strategic focus on revolutionizing businesses and pioneering technological advancements, Flying Chital's participation at the expo marked a significant milestone in the realm of industrial innovation.",
  },
  {
    heading: "Flying Chital: A Vanguard of Digital Transformation",
    content:
      "Flying Chital's journey embodies a relentless pursuit of excellence in the digital landscape. Specializing in seamless automation of enterprise workflows, the company leverages cloud computing, IoT, data analytics, and artificial intelligence to enhance operational efficiency and drive sustainable growth. Its comprehensive suite of managed IT services empowers organizations to navigate the complexities of the digital age with ease.",
  },
  {
    heading: "Vision, Mission, and Values",
    content:
      "Guided by a visionary outlook, Flying Chital's vision is to empower individuals in remote and underserved areas with accessible and cutting-edge technology solutions. At the core of its mission lies the commitment to pioneer innovation in supply chain and logistics operations, catalyzing industrial processes across diverse landscapes. Upheld by values of integrity, excellence, and collaboration, Flying Chital sets the benchmark for ethical business conduct and transformative innovation.",
  },
  {
    heading: "Leadership",
    content:
      "The leadership ensemble at Flying Chital comprises distinguished professionals, each bringing a wealth of experience and expertise to the table. From Pradyumna Mishra's strategic acumen to Amar Pradeep Swain's visionary leadership, the team embodies the essence of innovation and operational excellence. Debashis Mohanty's entrepreneurial spirit and Sitanshu Jena's technical prowess further fortify Flying Chital's position as a trailblazer in the tech industry.",
  },
  {
    heading: "Flying Chital's Expo Showcase",
    content:
      "At the 2nd Odisha Mining & Infrastructure International Expo, Flying Chital shone bright with its groundbreaking offering: the Flying Chital platform. This innovative solution marks a significant leap forward in logistics management by seamlessly integrating advanced technologies to enhance supply chain operations across various industries — with cutting-edge analytics, real-time data processing, and end-to-end visibility.",
  },
  {
    heading: "Exploring Opportunities and Strengths",
    content:
      "The Odisha Mining & Infrastructure International Expo provided a strategic platform for Flying Chital to showcase the transformative potential of its platform. Through live demos and interactive sessions, Flying Chital illustrated how the platform empowers logistics managers with actionable insights and operational intelligence. Flying Chital's emergence as a disruptive force in Logistics 4.0 was evident — from optimized route planning to advanced asset tracking, the platform is reshaping logistics across the value chain.",
  },
  {
    heading: "Conclusion",
    content:
      "Flying Chital's participation at the 2nd Odisha Mining & Infrastructure International Expo 2024 epitomizes its unwavering commitment to innovation and excellence. As the company continues to redefine industry standards and push the boundaries of technological advancement, it remains steadfast in its mission to empower businesses and communities with transformative technology solutions — charting a course towards a future of unparalleled efficiency, productivity, and sustainable growth.",
  },
];

export default function MiningExpo() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[460px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.88) 0%, rgba(55,52,169,0.55) 100%), url(${BlogMining})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Events
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-4xl leading-tight">
            Flying Chital at the 2nd Odisha Mining &amp; Infrastructure International Expo 2024
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">Odisha Mining Expo 2024</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold font-heebo text-gray-900 mb-3 flex items-center gap-3">
                  <span className="inline-block w-1.5 h-6 rounded-full bg-indigo-600 flex-shrink-0" />
                  {sec.heading}
                </h2>
                <p className="text-base font-heebo text-gray-600 leading-relaxed pl-5">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-12 pb-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            Watch Our Expo Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/W8Rdo3vi-Z4"
                title="Flying Chital Expo Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ta4QepLSgSI"
                title="Flying Chital Expo Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
