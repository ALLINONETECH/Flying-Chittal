import React from "react";
import { Link } from "react-router-dom";
import BlogMining from "../../assets/images/BlogMining.png";
import MinMetal from "../../assets/images/MinMetal.png";

const challenges = [
  {
    title: "Manual Data Collection",
    issue:
      "Manual collection of data from various entities like transporters, SAP, plants, plots, and railway sidings leads to errors and difficulty getting meaningful insights required for immediate action. Entry/Exit remain paper-based.",
    solution:
      "Automate data collection with an integrated platform that electronically captures Entry/Exit events and provides real-time insights across all logistics touch points.",
  },
  {
    title: "Operational Visibility Gaps",
    issue:
      "Lack of real-time visibility across the logistics network makes it difficult to monitor progress, identify bottlenecks, and take corrective actions promptly.",
    solution:
      "Deploy IoT-powered smart tracking across touch points to create a live digital view of material movement — from loading at the plant to delivery at the destination.",
  },
  {
    title: "Revenue Leakage via e-PoD",
    issue:
      "Approximately 10–15% of inbound loaded trucks exit the plant without proof of delivery, causing significant revenue leakage due to lack of an e-PoD solution across touch points.",
    solution:
      "Incorporate a 'Lat-Long e-PoD' module that auto-registers GPS coordinates at the unloading point, eliminating false trip closures during transit and ensuring accountability.",
  },
  {
    title: "High Transportation Costs",
    issue:
      "Excessive time for trucks to enter, load, and exit — compounded by manual generation of multiple invoices and e-WAY bills — increases transporter costs and slows TAT.",
    solution:
      "Implement RPA (Robotic Process Automation) for Auto Invoicing and Auto e-WAY bill generation to dramatically improve TAT, reduce costly errors, and enable better rate negotiations.",
  },
  {
    title: "Non-Compliant Trip Closures",
    issue:
      "Trips are often closed during transit rather than at the actual unloading point, leading to incorrect operational data and compliance issues.",
    solution:
      "The Lat-Long e-PoD module ensures unloading operators close trips at the verified GPS-confirmed destination, eliminating fraudulent or premature closures.",
  },
];

export default function MiningMetal() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[420px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
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
            Mining &amp; Industrial
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-3xl leading-tight">
            Mining And Metal
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">Mining And Metal</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
            <span className="text-indigo-700">Mining</span> And Metal
          </h2>
          <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
            The mining and metal industry covers a wide range of topics related to the extraction, processing, and
            utilization of minerals and metals. Digital transformation of supply chain operations in this sector
            can dramatically improve efficiency, traceability, and profitability.
          </p>
        </div>
      </section>

      {/* Feature Image */}
      <section className="px-6 pb-10">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={MinMetal} alt="Mining and Metal Operations" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-10 pb-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            Key Challenges &amp; Solutions
          </h3>
          <div className="space-y-6">
            {challenges.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold font-heebo text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 font-heebo text-sm leading-relaxed">{item.issue}</p>
                  </div>
                </div>
                <div className="ml-13 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-sm font-heebo text-gray-700 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
