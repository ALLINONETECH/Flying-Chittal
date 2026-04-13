import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";
import railBg from "../../assets/images/Blog1.png";
import raillogistic1 from "../../assets/images/istockphoto-9oyHKaEBZ2.jpg";
import raillogistic2 from "../../assets/images/istockphoto-EVQfo32zLM.jpg";
import raillogistic3 from "../../assets/images/istockphoto-9xKlRdwDSs.jpg";
import raillogistic4 from "../../assets/images/raillogistic4.jpg";
import raillogistic5 from "../../assets/images/istockphoto-vkwZQTxCnH.jpg";

import ProductIntroSection from "../../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../../component/common/ProductFeatureCardsGrid";

export default function RailLogistics() {
  const introSections = [
    {
      heading: "Intelligent Rail Logistics Management",
      body: "Rail Logistics by Flying Chital unifies rake planning, wagon visibility, terminal coordination, and dispatch intelligence in one control layer built for high-volume operations.",
    },
    {
      heading: "End-to-End Operational Visibility",
      body: "Track every movement from source loading points to destination unloading terminals with real-time monitoring, exception alerts, and coordinated decision support.",
    },
    {
      heading: "Data-Driven Reliability and Efficiency",
      body: "Use predictive insights, route-level analytics, and operational dashboards to reduce turnaround time, control detention risk, and improve throughput consistency.",
    },
  ];

  const introCapabilityTags = [
    "Rake Turnaround Control",
    "Wagon-Level Visibility",
    "Terminal Coordination",
  ];

  const capabilityStats = [
    { value: "24/7", label: "Network Monitoring" },
    { value: "100%", label: "Movement Traceability" },
    { value: "AI", label: "Operational Analytics" },
  ];

  const capabilityCards = [
    {
      kicker: "Planning",
      title: "Smart Rake Planning and Allocation",
      description:
        "Plan and assign rakes based on demand, route constraints, and terminal readiness to keep rail movement predictable.",
      image: raillogistic1,
      alt: "Rail rake planning",
    },
    {
      kicker: "Tracking",
      title: "Wagon Tracking with Live Status Updates",
      description:
        "Monitor wagon movement, delays, and idle windows in real time to improve operational response and utilization.",
      image: raillogistic2,
      alt: "Rail wagon tracking",
    },
    {
      kicker: "Terminal",
      title: "Loading and Unloading Coordination",
      description:
        "Synchronize rail yard, loading points, and destination terminals with system-led handoffs and exceptions monitoring.",
      image: raillogistic3,
      alt: "Rail terminal coordination",
    },
    {
      kicker: "Control",
      title: "Detention and Demurrage Risk Control",
      description:
        "Get ahead of demurrage exposure with proactive alerts, SLA watchlists, and action-ready control dashboards.",
      image: raillogistic4,
      alt: "Rail demurrage control",
    },
  ];

  const coreBullets = [
    "Live wagon and rake movement visibility",
    "Automated milestone updates across dispatch cycle",
    "Exception alerts for delays, detention, and route deviations",
    "Role-based dashboards for operations, logistics, and management",
    "Integration-ready workflows for ERP and terminal data",
    "Audit-ready event trail for compliance and reporting",
  ];

  const optimizationBullets = [
    "Turnaround-time trend analytics by corridor and route",
    "Detention and demurrage diagnostics by terminal",
    "Operational bottleneck heatmaps for faster intervention",
    "Predictive risk cues for delay-sensitive movements",
    "Cost and utilization benchmarking across freight cycles",
    "Executive performance scorecards for decision support",
  ];

  const platformCards = [
    {
      title: "Rake Lifecycle Tracking",
      description: "Track each rake from allocation through unloading closure.",
      icon: IconFC,
    },
    {
      title: "Wagon Operations Console",
      description:
        "Central command view for wagon status and exception handling.",
      icon: IconFC,
    },
    {
      title: "Detention Alerts",
      description: "Automated warning thresholds for detention-risk movement.",
      icon: IconFC,
    },
    {
      title: "Demurrage Analytics",
      description:
        "Measure and reduce demurrage impact with actionable insights.",
      icon: IconFC,
    },
    {
      title: "Terminal Workflow Control",
      description:
        "Coordinate loading and unloading activity with clear handoffs.",
      icon: IconFC,
    },
    {
      title: "Operational Dashboards",
      description: "Real-time KPIs for planners, supervisors, and leadership.",
      icon: IconFC,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.78) 8%, rgba(55, 52, 169, 0.48) 115%), url(${railBg})`,
        }}
      >
        <div className="container px-6 py-14 lg:py-20 mx-auto text-start">
          <h1 className="text-4xl lg:text-6xl font-medium font-heebo text-gray-100">
            Rail Logistics
          </h1>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-6 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Intelligent Rail Operations with Real-Time Control
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
            A modern control platform for planning, tracking, and optimizing
            rail movement across loading points, corridors, and destination
            terminals.
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
                  / Flying Chital / Rail Logistics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductIntroSection
        productName="Rail Logistics"
        eyebrow="Flying Chital Logistics Suite"
        title="Modern Rail Execution for High-Volume Freight Operations"
        subtitle="Bring planning, movement tracking, and terminal coordination into one intelligent rail logistics operating system."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Rail Capabilities"
        title="Operational Control Across the Full Rail Movement Chain"
        description="A focused capability set designed to improve reliability, reduce delay exposure, and increase execution transparency."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Core"
        title="Real-Time Visibility and Exception-Led Response"
        description="Track movement continuously, respond to issues faster, and keep teams aligned with system-driven events and clear workflow ownership."
        image={raillogistic5}
        imageAlt="Rail operations command view"
        bullets={coreBullets}
        stats={["Live tracking", "Exception alerts", "Workflow control"]}
      />

      <ProductFeatureDeepDive
        eyebrow="Performance Layer"
        title="Analytics for Turnaround, Detention, and Throughput"
        description="Use route and terminal intelligence to identify bottlenecks, reduce demurrage pressure, and improve freight cycle performance."
        image={raillogistic4}
        imageAlt="Rail performance analytics"
        bullets={optimizationBullets}
        stats={["Lower TAT", "Less detention", "Higher throughput"]}
        reverse
        overlayLabel="Operations Intelligence"
        overlayText="Focused rail analytics that convert raw movement data into faster, more reliable operational decisions."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Modules"
        title="Built-In Features for Rail Logistics Teams"
        description="Core modules designed for planning teams, operations control, and management reporting."
        cards={platformCards}
      />

      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heebo mb-4">
              Extend Rail Visibility Across Your Logistics Stack
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Connect rail execution with multimodal planning, road operations,
              and telematics for complete end-to-end logistics intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/flyingchital"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Flying Chital
              </h3>
              <p className="text-gray-200">
                Multimodal logistics control with integrated operational
                intelligence.
              </p>
            </Link>

            <Link
              to="/roadLogistics"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Road Logistics
              </h3>
              <p className="text-gray-200">
                Coordinate road movement with dispatch visibility and
                route-level insights.
              </p>
            </Link>

            <Link
              to="/telematics"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Telematics
              </h3>
              <p className="text-gray-200">
                Enhance movement visibility with real-time asset and vehicle
                intelligence.
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
            >
              Talk to Our Logistics Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
