import React from "react";
import { Link } from "react-router-dom";
import MACHArch from "../../assets/images/MACHArch.png";
import Headles from "../../assets/images/Headles.png";
import Assess from "../../assets/images/Assess.png";
import Stratee from "../../assets/images/Stratee.png";
import Scalability from "../../assets/images/Scalability.png";
import MicroSer from "../../assets/images/MicroSer.png";
import ApiFirst from "../../assets/images/ApiFirst.png";
import Implement from "../../assets/images/Implement.png";
import Integration from "../../assets/images/Integration.png";
import article from "../../assets/images/article.jpg";

const principles = [
  {
    image: MicroSer,
    title: "Microservices Based",
    badge: "M",
    color: "indigo",
    description:
      "Microservices help break down monolithic legacy systems into smaller, more manageable components. These can be independently developed, deployed, and scaled — making it easier to iteratively improve your technology stack.",
  },
  {
    image: ApiFirst,
    title: "API-First",
    badge: "A",
    color: "blue",
    description:
      "APIs serve as primary conduits for business functionality through well-defined contracts, enabling interaction between systems and allowing greater collaboration across multi-channel environments.",
  },
  {
    image: Headles,
    title: "Headless",
    badge: "H",
    color: "violet",
    description:
      "Decoupling the front-end presentation layer from back-end logic allows teams to iterate on user experiences independently, enabling omnichannel delivery across web, mobile, and IoT devices.",
  },
  {
    image: Scalability,
    title: "Cloud-Native",
    badge: "C",
    color: "sky",
    description:
      "Cloud-native infrastructure enables scalable, resilient, and distributed deployments that align with modern DevOps practices, ensuring continuous delivery and operational excellence.",
  },
];

const roadmap = [
  {
    image: Assess,
    title: "Assessment",
    description:
      "Begin by assessing your current technology stack, identifying areas that need improvement, and understanding the specific digitalization goals of your organization.",
  },
  {
    image: Stratee,
    title: "Strategy",
    description:
      "Develop a clear digitalization strategy that aligns with your business objectives. Determine how MACH principles help achieve these objectives and create a roadmap for implementation.",
  },
  {
    image: Implement,
    title: "Implementation",
    description:
      "Break down legacy systems into microservices, create APIs for seamless data exchange, migrate to cloud-native infrastructure, and decouple where necessary — in a phased approach to minimize disruption.",
  },
  {
    image: Integration,
    title: "Integration",
    description:
      "Ensure that new systems and components integrate effectively with existing tools and data sources. Integration is critical in digitalization to avoid siloed data and fragmented processes.",
  },
];

const badgeColors = {
  indigo: "bg-indigo-600",
  blue: "bg-blue-600",
  sky: "bg-sky-500",
  violet: "bg-violet-600",
};

export default function MACHArchitecture() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[420px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.88) 0%, rgba(55,52,169,0.55) 100%), url(${MACHArch})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Architecture
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-3xl leading-tight">
            MACH Architecture
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">MACH Architecture</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
            <span className="text-indigo-700">MACH</span> Architecture
          </h2>
          <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
            MACH architecture stands for <strong>M</strong>icroservices, <strong>A</strong>PI-first,{" "}
            <strong>C</strong>loud-native, and <strong>H</strong>eadless. This modern approach is gaining
            popularity due to its flexibility, scalability, and ability to adapt to the changing demands of
            digital businesses — allowing deployment of pluggable, scalable, and replaceable third-party solutions.
          </p>
        </div>
      </section>

      {/* MACH Principles */}
      <section className="py-8 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            MACH Principles for Digitalization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`w-9 h-9 rounded-full ${badgeColors[item.color]} text-white font-bold text-sm flex items-center justify-center shadow-md`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold font-heebo text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 font-heebo text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold font-heebo text-gray-900 text-center mb-10">
            Implementation Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="overflow-hidden h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h4 className="text-xl font-bold font-heebo text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 font-heebo text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section
        className="relative py-24 px-6 flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 100%), url(${article})`,
        }}
      >
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-5">
            Articles Of Interest
          </h2>
          <p className="text-lg font-heebo text-white/80 leading-relaxed">
            MACH architecture allows businesses to deploy an ecosystem of pluggable, scalable, and replaceable
            third-party solutions to solve discrete business problems. By applying MACH principles to digitalization
            initiatives, organizations can drive operational excellence, business agility, and sustainable growth.
          </p>
        </div>
      </section>
    </div>
  );
}
