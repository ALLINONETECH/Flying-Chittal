import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../assets/images/HomeIcon.png";
import heroBg from "../../assets/images/Blog1.png";

export default function Contact() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.80) 8%, rgba(55, 52, 169, 0.50) 115%), url(${heroBg})`,
        }}
      >
        <div className="container px-6 py-14 lg:py-20 mx-auto text-start">
          <h1 className="text-4xl lg:text-6xl font-medium font-heebo text-gray-100">
            Contact
          </h1>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-6 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Let’s Build Your Logistics Transformation
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
            Connect with our team for product demos, deployment guidance, and
            custom solution planning.
          </p>

          <div className="text-lg lg:text-2xl font-normal text-white mt-5 lg:mt-7">
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
                  / Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 font-heebo">
                  Email
                </h2>
                <p className="text-slate-600 mt-2">
                  Reach our team for partnerships, demos, and support.
                </p>
                <a
                  href="mailto:info@flyingchital.com"
                  className="text-indigo-700 font-semibold mt-3 inline-block"
                >
                  info@flyingchital.com
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 font-heebo">
                  Phone
                </h2>
                <p className="text-slate-600 mt-2">
                  Monday to Saturday, 9:00 AM to 7:00 PM
                </p>
                <a
                  href="tel:+917894567778"
                  className="text-indigo-700 font-semibold mt-3 inline-block"
                >
                  +91 78945 67778
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 font-heebo">
                  Office
                </h2>
                <p className="text-slate-600 mt-2">
                  Flying Chital Private Limited, Odisha, India
                </p>
                <Link
                  to="/about"
                  className="text-indigo-700 font-semibold mt-3 inline-block"
                >
                  Know our team
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-heebo">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mt-2">
                Share your requirement and our specialists will connect with you
                shortly.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-slate-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="block w-full px-4 py-3 text-slate-800 placeholder-slate-400 bg-white border border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-slate-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-4 py-3 text-slate-800 placeholder-slate-400 bg-white border border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="block w-full px-4 py-3 text-slate-800 placeholder-slate-400 bg-white border border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your logistics requirement"
                    className="block w-full h-36 md:h-48 px-4 py-3 text-slate-800 placeholder-slate-400 bg-white border border-slate-200 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <button className="w-full md:w-auto px-8 py-3 text-sm font-semibold tracking-wide text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
