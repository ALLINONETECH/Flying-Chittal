import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../assets/images/HomeIcon.png";
import heroBg from "../assets/images/Blog1.png";

export default function NotFound() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.80) 8%, rgba(55, 52, 169, 0.50) 115%), url(${heroBg})`,
        }}
      >
        <div className="container px-6 py-16 lg:py-24 mx-auto text-start">
          <h1 className="text-5xl lg:text-7xl font-bold font-heebo text-white">
            404
          </h1>
          <p className="text-2xl lg:text-4xl mt-4 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Page Not Found
          </p>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl">
            The page you are looking for does not exist or may have moved. You
            can continue from the main sections below.
          </p>

          <div className="text-lg lg:text-2xl font-normal text-white mt-6">
            <div className="flex gap-2 items-center">
              <img src={HomeIcon} alt="Home" />
              <div>
                <Link
                  to="/"
                  className="text-[#F85A47] font-[700] font-heebo lg:text-[28px] text-[16px]"
                >
                  Home
                </Link>
                <span className="font-[700] font-heebo lg:text-[28px] text-[16px]">
                  {" "}
                  / 404
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heebo">
              Where would you like to go?
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Jump back into your key pages and continue exploring Flying Chital
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/flyingchital"
              className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                Flying Chital
              </h3>
              <p className="text-slate-600">
                Explore the multimodal logistics intelligence platform.
              </p>
            </Link>

            <Link
              to="/services"
              className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                Services
              </h3>
              <p className="text-slate-600">
                See enterprise services and implementation capabilities.
              </p>
            </Link>

            <Link
              to="/contact"
              className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                Contact
              </h3>
              <p className="text-slate-600">
                Reach out to the team for solution guidance.
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-indigo-700 text-white hover:bg-indigo-800 rounded-lg font-semibold transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
