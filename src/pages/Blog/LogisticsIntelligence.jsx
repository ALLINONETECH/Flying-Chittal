import React from "react";
import { Link } from "react-router-dom";
import LogisticIntel from "../../assets/images/LogisticIntel.png";
import LogisticConet from "../../assets/images/LogisticConet.png";
import RealVirtual from "../../assets/images/RealVirtual.png";
import Logisticintel1 from "../../assets/images/Logisticintel1.png";
import logisticintelligence from "../../assets/images/logisticintelligence.jpg";

const features = [
  {
    image: LogisticConet,
    title: "Logistics Connectivity",
    description:
      "Logistics Connectivity plays a vital role in creating a seamless flow of information between different stakeholders involved in the logistics processes, such as suppliers, manufacturers, transportation providers, and customers.",
  },
  {
    image: RealVirtual,
    title: "Real-Time Virtualization",
    description:
      "Real-Time Virtualization empowers us to monitor and track the movement of material, machinery, and equipment in real-time. By integrating IoT sensors and smart devices, we can create a digital representation of the entire logistics network.",
  },
];

const insights = [
  "Manual collection of data from various entities like transporters, SAP, plants, plots, and railway sidings leads to errors and difficulty in getting meaningful insights required for immediate action. Entry/Exit remain paper-based and not captured electronically.",
  "The absence of an integrated platform makes it impossible for managers to take prompt actions based on real-time supply chain data — a critical gap in modern logistics operations.",
  "IoT-powered smart tracking enables real-time virtualization of entire logistics networks, transforming how mining and ore processing operations are monitored and managed from source to delivery.",
];

export default function LogisticsIntelligence() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[460px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.88) 0%, rgba(55,52,169,0.55) 100%), url(${LogisticIntel})`,
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
            Logistics Intelligence, Connectivity &amp; Real-Time Virtualization
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">Logistics Intelligence</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
            <span className="text-indigo-700">Logistics</span> Intelligence,{" "}
            <span className="text-indigo-700">Connectivity</span> &amp; Real-Time Virtualization
          </h2>
          <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
            These concepts represent the convergence of advanced technologies and data-driven approaches in logistics.
            By leveraging Logistics Intelligence, ensuring Logistics Connectivity, and implementing Real-Time
            Virtualization, businesses can achieve more efficient, agile, and responsive supply chain operations —
            ultimately leading to improved customer satisfaction and competitive advantage.
          </p>
        </div>
      </section>

      {/* Features + Image */}
      <section className="py-8 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex gap-5"
                >
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold font-heebo text-gray-900 mb-2">{feat.title}</h3>
                    <p className="text-gray-600 font-heebo text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={Logisticintel1} alt="Logistics Intelligence" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            Key Operational Insights
          </h3>
          <div className="space-y-4">
            {insights.map((insight, i) => (
              <div key={i} className="flex gap-4 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-heebo leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section
        className="relative py-24 px-6 flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 100%), url(${logisticintelligence})`,
        }}
      >
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-5">
            Logistics Intelligence, Connectivity &amp; Real-Time Virtualization
          </h2>
          <p className="text-lg font-heebo text-white/80 leading-relaxed">
            Let's revolutionize the way we manage logistics in the mining and ore processing industry by harnessing
            the power of IoT and smart technologies. Together, we can unlock an era of unprecedented efficiency
            and optimization.
          </p>
        </div>
      </section>
    </div>
  );
}
