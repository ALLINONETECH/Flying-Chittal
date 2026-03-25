import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../assets/images/HomeIcon.png";
import roadHero from "../../assets/images/Blog1.png";
import Card from "../../assets/images/istockphoto-fS1CLV3ig5.jpg";
import Card2 from "../../assets/images/istockphoto-Gmxn3WwBXe2.jpg";
import Card3 from "../../assets/images/istockphoto-Q7uqFa1tlN.jpg";
import Card7 from "../../assets/images/istockphoto-sjXLTHaloU.jpg";
import Card11 from "../../assets/images/istockphoto-ATX1YbrzMH.jpg";
import raillogistic7 from "../../assets/images/istockphoto-es9kqyNnxj.jpg";
import IconFC from "../../assets/images/IconFC.png";

import ProductIntroSection from "../../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../../component/common/ProductFeatureCardsGrid";

export default function RoadLogistics() {
  const introSections = [
    {
      heading: "Integrated Road Logistics Management",
      body: "Road Logistics in Flying Chital brings planning, dispatch, transit control, and delivery intelligence into one connected digital operating layer.",
    },
    {
      heading: "Operational Transparency in Real Time",
      body: "Track vehicles, drivers, loads, and checkpoints continuously to reduce uncertainty and make faster execution decisions.",
    },
    {
      heading: "Scalable Performance Across Routes",
      body: "Use analytics, automation, and workflow controls to reduce delays, improve utilization, and strengthen service reliability.",
    },
  ];

  const introCapabilityTags = [
    "Route-Level Visibility",
    "Transit Control Automation",
    "Transporter Integration",
  ];

  const capabilityStats = [
    { value: "24/7", label: "Transit Monitoring" },
    { value: "GPS", label: "Live Tracking" },
    { value: "AI", label: "Optimization Insights" },
  ];

  const capabilityCards = [
    {
      kicker: "Dispatch",
      title: "Smart Dispatch and Vehicle Allocation",
      description:
        "Allocate vehicles and routes intelligently using demand, capacity, and timing signals from the operations layer.",
      image: Card,
      alt: "Road dispatch planning",
    },
    {
      kicker: "Transit",
      title: "Automated Transit Milestones",
      description:
        "Capture movement milestones, gate events, and delivery progress in real time for accurate operational control.",
      image: Card2,
      alt: "Transit milestone automation",
    },
    {
      kicker: "Verification",
      title: "Driver and Vehicle Validation",
      description:
        "Validate credentials, compliance checks, and operational readiness before trip assignment to reduce risk.",
      image: Card3,
      alt: "Vehicle and driver verification",
    },
    {
      kicker: "Network",
      title: "Transporter and Telematics Integration",
      description:
        "Connect transport partners, vehicle telemetry, and execution workflows for seamless cross-stakeholder coordination.",
      image: Card11,
      alt: "Transporter integration and telematics",
    },
  ];

  const executionBullets = [
    "Live route tracking with exception alerts",
    "Digital transit and transaction points",
    "Automated validation and verification flows",
    "Trip-wise operational dashboards for supervisors",
    "Integrated transporter workflows and bidding controls",
    "Faster decision support with real-time data context",
  ];

  const intelligenceBullets = [
    "Descriptive analytics for current operations visibility",
    "Predictive indicators for delay and utilization risk",
    "Prescriptive recommendations for response actions",
    "Cost and fuel efficiency trend monitoring",
    "Delivery and SLA performance benchmarking",
    "Custom reporting for operations and leadership teams",
  ];

  const platformCards = [
    {
      title: "Digital Workspace",
      description: "Role-based views for planners, operators, and management.",
      icon: IconFC,
    },
    {
      title: "Automated Documentation",
      description: "Generate and manage transit documents with fewer errors.",
      icon: IconFC,
    },
    {
      title: "Invoicing and Payments",
      description: "Track billing events and payment workflows in one flow.",
      icon: IconFC,
    },
    {
      title: "Reverse Bidding",
      description: "Enable transparent transporter bidding and rate control.",
      icon: IconFC,
    },
    {
      title: "Control Room Dashboards",
      description: "Centralized command visibility for active road movement.",
      icon: IconFC,
    },
    {
      title: "Integrated Telematics",
      description: "Connect tracking intelligence directly into operations.",
      icon: IconFC,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.78) 8%, rgba(55, 52, 169, 0.48) 115%), url(${roadHero})`,
        }}
      >
        <div className="container px-6 py-14 lg:py-20 mx-auto text-start">
          <h1 className="text-4xl lg:text-6xl font-medium font-heebo text-gray-100">Road Logistics</h1>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-6 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Smart Road Execution with Real-Time Visibility
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
            A modern road logistics platform for dispatch planning, trip control, compliance checks, and performance analytics across the full transport cycle.
          </p>

          <div className="text-lg lg:text-2xl font-normal text-white mt-5 lg:mt-7">
            <div className="flex gap-2 items-center">
              <img src={HomeIcon} alt="Home" />
              <div>
                <Link to="/" className="text-[#F85A47] font-[700] font-heebo lg:text-[28px] text-[16px]">
                  Home
                </Link>
                <span className="font-[700] font-heebo lg:text-[28px] text-[16px]"> / Flying Chital / Road Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductIntroSection
        productName="Road Logistics"
        eyebrow="Flying Chital Logistics Suite"
        title="Connected Road Operations for Faster, Safer Movement"
        subtitle="Unify dispatch, transit monitoring, compliance checks, and delivery controls in one intelligent road logistics system."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Road Capabilities"
        title="Operational Control from Dispatch to Delivery"
        description="Core capabilities designed to improve movement reliability, service predictability, and transporter collaboration."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Execution Layer"
        title="Trip-Level Control with Real-Time Event Tracking"
        description="Get complete execution visibility through automated milestones, route alerts, and integrated operations dashboards."
        image={Card7}
        imageAlt="Road operations dashboard"
        bullets={executionBullets}
        stats={["Live transit", "Faster response", "Lower delay risk"]}
      />

      <ProductFeatureDeepDive
        eyebrow="Decision Layer"
        title="Analytics-Driven Improvement Across Road Network"
        description="Use descriptive, predictive, and prescriptive intelligence to improve throughput, reduce inefficiencies, and optimize route economics."
        image={raillogistic7}
        imageAlt="Road logistics analytics"
        bullets={intelligenceBullets}
        stats={["Better planning", "Lower cost", "Higher reliability"]}
        reverse
        overlayLabel="Road Intelligence"
        overlayText="Turn movement data into practical decisions that improve service outcomes across road logistics operations."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Modules"
        title="Built-In Capabilities for Road Logistics Teams"
        description="Modules designed for daily execution, compliance assurance, and management control."
        cards={platformCards}
      />

      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heebo mb-4">
              Connect Road Operations with Multimodal Intelligence
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Integrate road logistics with rail planning and telematics intelligence for unified end-to-end control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/flyingchital" className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Flying Chital</h3>
              <p className="text-gray-200">Multimodal logistics intelligence across planning and execution layers.</p>
            </Link>

            <Link to="/railLogistics" className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">Rail Logistics</h3>
              <p className="text-gray-200">Synchronize rail and road workflows to improve throughput and turnaround.</p>
            </Link>

            <Link to="/telematics" className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Telematics</h3>
              <p className="text-gray-200">Enhance road visibility with integrated asset and vehicle telemetry.</p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
              Talk to Our Logistics Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
