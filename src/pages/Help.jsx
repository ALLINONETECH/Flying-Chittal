/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../assets/images/Blog1.png";
import HomeIcon from "../assets/images/HomeIcon.png";
import Lottie from "lottie-react";
import helpCenter from "../assets/json/helpCenter.json";
import phone from "../assets/json/phone.json";
import email from "../assets/json/email.json";

const supportCards = [
  {
    title: "Email Support",
    value: "info@flyingchital.com",
    note: "Our support team typically responds within one business day.",
    animation: email,
  },
  {
    title: "Phone Support",
    value: "+91 7676429520",
    note: "Monday to Friday, 8 AM to 5 PM.",
    animation: phone,
  },
];

const quickHelp = [
  "Product onboarding and implementation guidance",
  "Technical troubleshooting and incident response",
  "Enterprise integration and deployment assistance",
  "General product and account support",
];

export default function Help() {
  return (
    <div className="bg-white">
      <section
        className="relative overflow-hidden bg-no-repeat bg-center bg-cover rounded-br-[60px] md:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(55, 52, 169, 0.78) 0%, rgba(55, 52, 169, 0.62) 55%, rgba(79, 70, 229, 0.58) 100%), url(${Blog1})`,
        }}
      >
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 font-heebo">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span>
              Customer Support
            </span>

            <h1 className="mt-5 text-4xl lg:text-6xl font-bold font-heebo text-gray-100 leading-tight">
              Help Center
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-heebo">
              Get fast support from our team for product usage, technical
              issues, and implementation guidance.
            </p>

            <div className="mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-white font-heebo">
              <img src={HomeIcon} alt="Home" className="h-5 w-5" />
              <Link
                to="/"
                className="text-[#F85A47] hover:text-[#ff796a] transition-colors"
              >
                Home
              </Link>
              <span>/ Help Center</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heebo leading-tight">
              Chat to our friendly team
            </h2>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
              <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
            </div>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-7 font-heebo">
              We would love to hear from you. Fill out the support form and we
              will assist you as quickly as possible.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-[28px] border border-indigo-100 bg-indigo-50/60 p-5 shadow-sm">
                <Lottie
                  animationData={helpCenter}
                  loop={true}
                  className="h-40"
                />
                <p className="mt-2 text-sm text-slate-600 font-heebo">
                  Tell us what you need, and we will connect you with the right
                  support team.
                </p>
              </div>

              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                >
                  <Lottie
                    animationData={card.animation}
                    loop={true}
                    className="h-16 w-16"
                  />
                  <h3 className="mt-3 text-lg font-bold text-slate-900 font-heebo">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-primary font-heebo">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 font-heebo">
                    {card.note}
                  </p>
                </article>
              ))}

              <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                <h3 className="text-lg font-bold text-slate-900 font-heebo">
                  Quick Help Areas
                </h3>
                <ul className="mt-3 space-y-2">
                  {quickHelp.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 font-heebo"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="lg:col-span-8 rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="John"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Email address
                  </span>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Message
                  </span>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 resize-none"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#3734a9] to-indigo-600 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:from-indigo-700 hover:to-[#3734a9]">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
