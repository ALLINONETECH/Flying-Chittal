import React from "react";
import { Link } from "react-router-dom";
import EdgeCompbg from "../../assets/images/EdgeCompbg.png";
import Edge12 from "../../assets/images/Edge12.png";
import Edge21 from "../../assets/images/Edge21.png";
import edgecomputing1 from "../../assets/images/edgecomputing1.jpg";

const bulletPoints = [
  "Edge computing enables real-time data processing at the source, reducing latency and bandwidth usage without relying on remote cloud servers.",
  "For simpler understanding: edge computing is the practice of capturing, processing, and analysing data near where it is created — bringing compute closest to the point of interaction.",
  "Supports edge-native applications with cloud-native principles: standardization, connectivity, scalability, security, hyper-personalization, manageability, and cost efficiency.",
  "Eliminates manual data-collection errors from entities like transporters, SAP, plants, and railway sidings by enabling electronic capture at Entry/Exit points.",
];

export default function EdgeComputing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[420px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.88) 0%, rgba(55,52,169,0.55) 100%), url(${EdgeCompbg})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Technology
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-3xl leading-tight">
            Edge Computing
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">Edge Computing</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
            <span className="text-indigo-700">Edge</span> Computing
          </h2>
          <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
            Edge computing is a distributed computing paradigm that brings computation and data storage closer
            to the location where it is needed, rather than relying on a centralized data center.
            The Digital Transformation initiative of enterprises is focused on better products, services,
            and business models — and edge computing plays a pivotal role in enabling fundamental changes
            in how data is gathered, moved, stored, and processed.
          </p>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-8 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            How Edge Computing Helps With Digital Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bulletPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-heebo leading-relaxed text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold font-heebo text-gray-900 mb-8">
            Plants Inbound &amp; Outbound Operations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-full object-cover" src={Edge12} alt="Edge Computing Diagram 1" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
              <img className="w-full h-full object-cover" src={Edge21} alt="Edge Computing Diagram 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section
        className="relative py-24 px-6 flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 100%), url(${edgecomputing1})`,
        }}
      >
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-5">
            Orchestrating And Securing Distributed Assets And Devices
          </h2>
          <p className="text-lg font-heebo text-white/80 leading-relaxed">
            For remote operations with limited or no connectivity to the cloud — for example deep in a mine or out
            in an agricultural field — edge computing can perform real-time operational decisions based on local
            analysis of sensor data. Many IoT sensors used in warehouses, factories, fields, and vehicles now
            perform their own computing operations without the need to interact with any other resources in real-time.
          </p>
        </div>
      </section>
    </div>
  );
}
