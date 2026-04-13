import React from "react";
import { Link } from "react-router-dom";
import Fertilizerbg from "../../assets/images/Fertilizerbg.png";
import fertilizers1 from "../../assets/images/fertilizers1.jpg";

const challenges = [
  {
    number: "01",
    color: "indigo",
    challenge:
      "Data is passed manually between multiple individual entities such as SAP, AgriSales Portal (ASP), New iFMS portal, Handling agent, S&D Officer, Marketing Officer, etc. This leaves room for errors and makes it difficult to take prompt actions.",
    solution:
      "Integrated Logistics Management Platform — bring all disjointed systems under a single integrated platform through back-end interfaces with SAP, FOIS, Agri Sales Portal, and iFMS. This ensures data is electronically collected, shared, and stored securely.",
  },
  {
    number: "02",
    color: "rose",
    challenge:
      "Fertilizer companies are losing government subsidy due to lack of location-based e-Proof of Delivery (ePoD). The absence of Real-Time Tracking of dedicated and market vehicles makes it difficult to monitor trucks carrying expensive cargo.",
    solution:
      "Smart and Intelligent Vehicle Tracking System — commission Telematics with location-based tracking for dedicated and market vehicles, with live photo capture with GPS coordinates. This gives 100% ground coverage and intelligence of the entire distribution network.",
  },
  {
    number: "03",
    color: "amber",
    challenge:
      "Historically, the lack of visibility and control during loading of Rake often results in counterproductive exercises, errors, and demurrage charges.",
    solution:
      "Deploy Industrial IoT devices to capture critical information such as count of bags loaded/unloaded in wagons, labor count, crew performance, activity efficiency, and real-time performance data. This improves efficiency, decreases TAT, and saves costs.",
  },
];

const colorMap = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-600",
    text: "text-indigo-700",
    solution: "bg-indigo-100 border-indigo-200",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-500",
    text: "text-rose-600",
    solution: "bg-rose-100 border-rose-200",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-500",
    text: "text-amber-700",
    solution: "bg-amber-100 border-amber-200",
  },
};

export default function Fertilizer() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover min-h-[420px] flex items-end pb-16 rounded-br-[80px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55,52,169,0.88) 0%, rgba(55,52,169,0.55) 100%), url(${Fertilizerbg})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Supply Chain
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heebo text-white mb-4 max-w-3xl leading-tight">
            Fertilizer Industry
          </h1>
          <p className="text-lg text-white/80 font-heebo mb-6 max-w-xl">
            Challenge, Ideate &amp; Create
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm font-heebo">
            <Link to="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white">Fertilizer Industry</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
            <span className="text-indigo-700">Fertilizer</span> Industry
          </h2>
          <div className="w-16 h-1 rounded-full bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
            The fertilizer industry plays a crucial role in global agriculture by providing essential nutrients to
            plants, thereby increasing crop yields and ensuring food security. Managing its supply chain involves
            multiple disjointed systems, significant compliance requirements, and complex logistics across dedicated
            and market vehicles — with 99% transportation managed by Indian Railways.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-8 pb-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold font-heebo text-indigo-900 text-center mb-10">
            Key Challenges in Fertilizer Supply Chain Operations
          </h3>
          <div className="space-y-8">
            {challenges.map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.number} className={`rounded-2xl p-8 border ${c.bg} ${c.border} shadow-md`}>
                  <div className="flex items-start gap-4 mb-5">
                    <span className={`flex-shrink-0 w-11 h-11 rounded-full ${c.badge} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                      {item.number}
                    </span>
                    <p className={`text-base font-heebo font-medium ${c.text} leading-relaxed`}>
                      {item.challenge}
                    </p>
                  </div>
                  <div className={`ml-15 bg-white rounded-xl p-5 border ${c.border} shadow-sm`}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-base font-heebo text-gray-700 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section
        className="relative py-24 px-6 flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 100%), url(${fertilizers1})`,
        }}
      >
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-5">
            Fertilizer Industry
          </h2>
          <p className="text-lg font-heebo text-white/80 leading-relaxed">
            Managing outbound supply chain for the fertilizer sector is often cumbersome as allocation and
            distribution is under government control. Moreover, 99% of transportation of raw materials and
            finished goods is managed by Indian Railways — making digital integration across the logistics
            chain not just valuable, but essential.
          </p>
        </div>
      </section>
    </div>
  );
}
