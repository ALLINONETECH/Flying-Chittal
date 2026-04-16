import React from "react";
import { Link } from "react-router-dom";
import Phone from "../assets/images/Phone.png";
import Email from "../assets/images/Email.png";
import HomeIcon from "../assets/images/HomeIcon.png";
import contactusbluebg from "../assets/images/contactusbluebg.png";
import map from "../assets/images/map.png";

const contactCards = [
  {
    title: "Phone",
    value: "+91 7676429520",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@flyingchital.com",
    icon: Email,
  },
];

const officeLocations = [
  {
    title: "Registered Office",
    lines: [
      "Flying Chital Private Limited",
      "Room No 228, Second Floor, DLF Cyber City",
      "IDCO Info Park, Technology Corridor",
      "Chandaka Industrial Estate, Patia",
      "Bhubaneswar, Dist - Khorda, Odisha 751024",
      "Email: info@flyingchital.com",
    ],
  },
  // {
  //   title: "Head Office",
  //   lines: ["Devanahalli, Bangalore", "Karnataka, India", "India - 562110"],
  // },
  // {
  //   title: "Branch Office",
  //   lines: ["Geneva, Switzerland"],
  // },
];

export default function Chat() {
  return (
    <div className="bg-white">
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-br-[60px] md:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(55, 52, 169, 0.78) 0%, rgba(55, 52, 169, 0.62) 55%, rgba(79, 70, 229, 0.58) 100%), url(${contactusbluebg})`,
        }}
      >
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 font-heebo">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span>
              Contact and Support
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heebo leading-tight">
              Contact Us
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-heebo">
              Reach out to our team for product inquiries, partnership
              discussions, implementation support, and enterprise assistance.
            </p>

            <div className="mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-white font-heebo">
              <img src={HomeIcon} alt="Home" className="h-5 w-5" />
              <Link
                to="/"
                className="text-[#F85A47] hover:text-[#ff796a] transition-colors"
              >
                Home
              </Link>
              <span>/ Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heebo leading-tight">
              <span className="text-primary">Connect</span> With Us
            </h2>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
              <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
            </div>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-7 font-heebo">
              Share your query in the form below and our team will get back to
              you with timely, accurate assistance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              {contactCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 font-heebo">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-slate-600 font-heebo">
                    {card.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="lg:col-span-8 rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <p className="text-lg sm:text-xl font-semibold text-slate-900 font-heebo text-center sm:text-left">
                Our friendly team would love to hear from you
              </p>

              <form
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    E-mail
                  </span>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Organization
                  </span>
                  <input
                    type="text"
                    placeholder="Organization"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Contact Number
                  </span>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Region
                  </span>
                  <input
                    type="text"
                    placeholder="Region"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Inquiry Type
                  </span>
                  <input
                    type="text"
                    placeholder="Inquiry Type"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-700 font-heebo">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    placeholder="Enter Message"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 resize-none"
                  />
                </label>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#3734a9] to-indigo-600 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:from-indigo-700 hover:to-[#3734a9]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-14 sm:py-16"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.76) 0%, rgba(15, 23, 42, 0.86) 100%), url(${map})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center font-heebo">
            Locations
          </h2>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
            <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {officeLocations.map((office) => (
              <article
                key={office.title}
                className="rounded-[28px] border border-white/20 bg-white/95 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.2)]"
              >
                <h3 className="text-xl font-bold text-slate-900 font-heebo">
                  {office.title}
                </h3>
                <div className="mt-3 space-y-1.5">
                  {office.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm sm:text-base text-slate-600 font-heebo"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
