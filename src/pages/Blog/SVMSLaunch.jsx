import React from "react";
import { Link } from "react-router-dom";
import Blogbg from "../../assets/images/Blogbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import SVMSBanner from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.40 PM (1).jpeg";
import SVMSPresentation1 from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.40 PM.jpeg";
import SVMSPresentation2 from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.41 PM.jpeg";
import SVMSPresentation3 from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.41 PM (1).jpeg";
import SVMSTeam from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.41 PM (2).jpeg";
import SVMSAuditorium from "../../assets/images/SVMSLAUNCH/WhatsApp Image 2026-04-05 at 2.16.40 PM (2).jpeg";

const highlights = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "800+ Vehicles Managed",
    description:
      "SVMS tracks and manages over 800 vehicles and mobile assets for the Bhubaneswar Municipal Corporation with precision.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Real-Time Visibility",
    description:
      "Live dashboards provide actionable insights and robust control mechanisms to curb pilferage and revenue leakage.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cost Optimisation",
    description:
      "Intelligent automation reduces operational costs by optimising resource utilisation across urban municipal operations.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Smart Governance",
    description:
      "Enhances transparency, efficiency, and accountability in citizen-centric service delivery for Urban Local Bodies.",
  },
];

const dignitaries = [
  {
    name: "Dr. Krushna Chandra Mahapatra",
    role: "Hon'ble Cabinet Minister, Housing & Urban Development, Govt of Odisha",
  },
  { name: "Shri Ananta Narayan Jena", role: "MLA, Bhubaneswar Central" },
  {
    name: "Smt. Sulochana Das",
    role: "Mayor, Bhubaneswar Municipal Corporation",
  },
  {
    name: "Shri Chanchal Rana",
    role: "Commissioner, Bhubaneswar Municipal Corporation",
  },
];

export default function SVMSLaunch() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[420px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.90) 0%, rgba(55,52,169,0.60) 60%, rgba(79,70,229,0.50) 100%), url(${Blogbg})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Launch · Events
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-4xl leading-tight">
            Driving Smart Governance Forward: SVMS Launched in Bhubaneswar
          </h1>
          <p className="text-base text-white/80 font-heebo mb-6 max-w-2xl">
            2nd April 2026 · Ekamra Hall, Bhubaneswar Municipal Corporation
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <img src={HomeIcon} alt="Home" className="h-5 w-5" />
            <Link
              to="/"
              className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-white">SVMS Launch</span>
          </div>
        </div>
      </section>

      {/* Official Banner */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src={SVMSBanner}
              alt="Smart Vehicle Management System – Official Launch Invitation"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
              A <span className="text-indigo-700">Milestone</span> for Smart
              Urban Governance
            </h2>
            <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mt-3" />
          </div>
          <p className="text-lg text-gray-600 font-heebo leading-relaxed text-center max-w-3xl mx-auto">
            Flying Chital Private Limited proudly marks a significant milestone
            with the launch of the{" "}
            <span className="font-semibold text-indigo-700">
              Smart Vehicle Management System (SVMS)
            </span>{" "}
            at the Bhubaneswar Municipal Corporation (BMC) Office on 2nd April
            2026. The application, now available on both{" "}
            <span className="font-semibold text-gray-800">
              Google Play Store
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-800">Apple App Store</span>
            , was launched by{" "}
            <span className="font-semibold text-gray-800">
              Dr. Krushna Chandra Mahapatra
            </span>
            , the Hon'ble Cabinet Minister for Housing and Urban Development,
            Government of Odisha.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            What Makes SVMS Impactful
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold font-heebo text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-heebo leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform narrative */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-indigo-100 text-indigo-700 font-heebo mb-4">
                The Platform
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold font-heebo text-slate-900 mb-4 leading-snug">
                Intelligent. Cost-Effective. Citizen-Centric.
              </h3>
              <p className="text-base text-gray-600 font-heebo leading-relaxed mb-4">
                SVMS reflects Flying Chital's core strength in delivering
                intelligent, cost-effective, and user-friendly digital solutions
                for Urban Local Bodies. Designed to support smart governance,
                the platform enhances efficiency, transparency, and
                accountability in delivering citizen-centric services.
              </p>
              <p className="text-base text-gray-600 font-heebo leading-relaxed mb-4">
                With the capability to manage over{" "}
                <span className="font-semibold text-indigo-700">
                  800 vehicles and mobile assets
                </span>
                , SVMS provides real-time visibility, actionable insights, and
                robust control mechanisms to curb pilferage and revenue leakage
                while optimising resource utilisation and reducing operational
                costs.
              </p>
              <p className="text-base text-gray-600 font-heebo leading-relaxed">
                The solution has already received highly encouraging feedback
                from users and administrators alike. Being part of this
                transformative initiative in our native city is a matter of
                immense pride, and we are confident that SVMS will play a
                pivotal role in shaping the future of urban governance in
                Bhubaneswar.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={SVMSPresentation3}
                alt="SVMS Launch – Minister presenting with MLA at Ekamra Hall BMC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ceremony Gallery */}
      <section className="py-10 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heebo text-gray-900 mb-2">
              Launch Ceremony Highlights
            </h3>
            <div className="w-12 h-1 rounded-full bg-orange-400 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Venue overview – full auditorium crowd */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={SVMSAuditorium}
                alt="Packed auditorium at Ekamra Hall during the SVMS launch event"
                className="w-full object-cover max-h-[480px]"
              />
            </div>
            {/* Large featured image */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={SVMSPresentation1}
                alt="Dr. Krushna Chandra Mahapatra presenting SVMS plaque at BMC"
                className="w-full object-cover max-h-[480px]"
              />
            </div>
            {/* Two smaller images */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={SVMSPresentation2}
                alt="SVMS launch distribution ceremony at Ekamra Hall"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={SVMSTeam}
                alt="Flying Chital team at the SVMS launch event"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dignitaries Present */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heebo text-slate-900 mb-2">
              Esteemed Dignitaries Present
            </h3>
            <div className="w-12 h-1 rounded-full bg-orange-400 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {dignitaries.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm font-heebo">
                  {d.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 font-heebo text-sm">
                    {d.name}
                  </p>
                  <p className="text-xs text-gray-500 font-heebo mt-0.5 leading-relaxed">
                    {d.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section
        className="relative py-24 px-6 flex items-center bg-cover bg-center bg-no-repeat rounded-tr-[60px]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(55,52,169,0.92) 0%, rgba(79,70,229,0.80) 100%)`,
          backgroundColor: "#3734a9",
        }}
      >
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 font-heebo mb-5">
            Swachh Survekshan 2025-26 · ULB Code: 801859
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-5">
            "Cost Optimisation Through Automation"
          </h2>
          <p className="text-lg font-heebo text-white/80 leading-relaxed mb-8">
            SVMS is now live on Google Play Store &amp; Apple App Store —
            empowering the Bhubaneswar Municipal Corporation with intelligent
            vehicle management for a cleaner, smarter city.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 font-bold font-heebo px-6 py-2.5 text-sm hover:bg-indigo-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Blogs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 text-white font-bold font-heebo px-6 py-2.5 text-sm hover:bg-white/20 transition-colors"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
