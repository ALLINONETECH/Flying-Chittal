/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import CareerFC from "../assets/images/officebranding_c.jpg";
import career1 from "../assets/images/career1.png";
import customised1 from "../assets/images/istockphoto-2yraRHBeGo.jpg";

const perks = [
  {
    icon: "🚀",
    title: "Frontier Technology",
    description:
      "Work on edge computing, IoT, AI-driven automation, and enterprise mobility that reshape entire industries.",
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    description:
      "Structured learning paths, mentorship from experts, and the freedom to grow at your own pace.",
  },
  {
    icon: "🤝",
    title: "Collaborative Culture",
    description:
      "A flat hierarchy where every voice matters — ideas flow freely and innovation is everyone's job.",
  },
  {
    icon: "🏆",
    title: "Rewarding Careers",
    description:
      "Competitive compensation, recognition programmes, and a clear path to leadership from day one.",
  },
  {
    icon: "🌍",
    title: "Real-World Impact",
    description:
      "Build solutions deployed across logistics, mining, agriculture, and more — solutions that matter.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description:
      "Flexible work options and a culture that values your wellbeing as much as your contributions.",
  },
];

const openRoles = [
  {
    title: "Full Stack Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "Hyderabad",
  },
  {
    title: "IoT Solutions Architect",
    dept: "Engineering",
    type: "Full-time",
    location: "Bangalore",
  },
  {
    title: "Product Manager",
    dept: "Product",
    type: "Full-time",
    location: "Hyderabad",
  },
  {
    title: "Data Analyst",
    dept: "Analytics",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Career() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(30, 27, 130, 0.95) 0%, rgba(55, 52, 169, 0.82) 60%, rgba(99, 55, 170, 0.75) 100%), url(${career1})`,
        }}
      >
        <div className="absolute top-12 right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-8 left-12 w-96 h-56 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container px-6 pt-24 pb-16 mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Join Our Team
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold font-heebo text-white leading-tight mb-5">
            Build the <span className="text-orange-400">Future</span> With Us
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-heebo max-w-2xl mx-auto mb-10 leading-relaxed">
            Be part of a team pioneering Digital Transformation, Edge Computing,
            and Intelligent Automation across India's most critical industries.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:career@atulyabhinav.com"
              className="bg-orange-500 hover:bg-orange-600 text-white font-heebo font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              Send Your Resume
            </a>
            <a
              href="#open-roles"
              className="bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-heebo font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              View Open Roles
            </a>
          </div> */}
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-heebo">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-2xl" />
              <img
                src={customised1}
                alt="Our Team"
                className="relative rounded-2xl w-full object-cover shadow-xl"
              />
            </div>
            <div>
              <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold font-heebo px-4 py-1.5 rounded-full mb-5 tracking-wide">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-4 leading-tight">
                Where Innovation Meets{" "}
                <span className="text-indigo-700">Purpose</span>
              </h2>
              <div className="w-14 h-1 bg-orange-400 rounded-full mb-6" />
              <div className="space-y-4 text-gray-600 font-heebo text-base leading-relaxed">
                <p>
                  Flying Chital Tech Private Limited invites dynamic talent to
                  join our team and be part of our groundbreaking journey in
                  Digital Transformation, Edge Computing, Mobility, and Managed
                  IT Services.
                </p>
                <p>
                  We are at the forefront of pioneering solutions that reshape
                  industries — offering employees the unique opportunity to
                  contribute to cutting-edge technology and drive meaningful
                  change. Our success is underpinned by a highly competent
                  founding team, unwavering values, and a visionary outlook.
                </p>
                <p>
                  With a commitment to good corporate governance and a culture
                  that fosters innovation, your career at Flying Chital Tech
                  will be both satisfying and rewarding — propelling you toward
                  new horizons of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold font-heebo px-4 py-1.5 rounded-full mb-4 tracking-wide">
              Why Flying Chital
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-3">
              Why Work <span className="text-indigo-700">With Us?</span>
            </h2>
            <div className="w-14 h-1 bg-orange-400 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-lg font-bold font-heebo text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-500 font-heebo text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      {/* <section id="open-roles" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold font-heebo px-4 py-1.5 rounded-full mb-4 tracking-wide">
              Current Openings
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-3">
              Open <span className="text-indigo-700">Roles</span>
            </h2>
            <div className="w-14 h-1 bg-orange-400 rounded-full mx-auto" />
          </div>
          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl px-6 py-5 transition-colors duration-200 group"
              >
                <div>
                  <h3 className="text-lg font-bold font-heebo text-gray-900 group-hover:text-indigo-700 transition-colors mb-1">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-heebo font-semibold px-3 py-1 rounded-full">
                      {role.dept}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-heebo font-semibold px-3 py-1 rounded-full">
                      {role.type}
                    </span>
                    <span className="bg-gray-200 text-gray-600 text-xs font-heebo font-semibold px-3 py-1 rounded-full">
                      📍 {role.location}
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:career@atulyabhinav.com"
                  className="mt-4 sm:mt-0 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-heebo font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Banner */}
      <section
        className="relative py-28 px-6 bg-cover bg-center text-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,8,80,0.55) 0%, rgba(0,0,0,0.90) 100%), url(${CareerFC})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none" />
        <div className="relative container mx-auto max-w-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold font-heebo text-white mb-5 leading-tight">
            Don&apos;t See a Role That Fits?
          </h2>
          <p className="text-white/75 font-heebo text-lg mb-8 leading-relaxed">
            We value your skills and experience. Send us your updated resume and
            we&apos;ll reach out when the right opportunity arises.
          </p>
          <a
            href="mailto:info@flyingchital.com"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-heebo font-bold px-10 py-4 rounded-full text-lg transition-colors duration-200"
          >
            info@flyingchital.com
          </a>
        </div>
      </section>
    </div>
  );
}
