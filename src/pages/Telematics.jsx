import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../assets/images/HomeIcon.png";
import Telematicsbg from "../assets/images/Telematicsbg.png";
import Telematics1 from "../assets/images/istockphoto-Iio1XWTxUf.jpg";
import Telematics2 from "../assets/images/Telematics2.png";
import Card2 from "../assets/images/istockphoto-Gmxn3WwBXe2.jpg";
import Card11 from "../assets/images/istockphoto-ATX1YbrzMH.jpg";
import IconFC from "../assets/images/IconFC.png";

import ProductIntroSection from "../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../component/common/ProductFeatureCardsGrid";

export default function Telematics() {
  const introSections = [
    {
      heading: "Intelligent Telematics for Logistics 4.0",
      body: "Flying Chital Telematics combines GPS, RFID, sensor data, and digital checkpoints to provide continuous operational visibility across assets and movement workflows.",
    },
    {
      heading: "Real-Time Monitoring and Event Intelligence",
      body: "Capture location, transit events, and operational alerts instantly so teams can respond quickly and reduce disruption risk.",
    },
    {
      heading: "Connected Decisions Across the Supply Chain",
      body: "Use data streams and analytics to improve route discipline, utilization, compliance control, and movement predictability.",
    },
  ];

  const introCapabilityTags = [
    "Live Asset Visibility",
    "IoT Event Tracking",
    "Telematics Analytics",
  ];

  const capabilityStats = [
    { value: "24/7", label: "Asset Monitoring" },
    { value: "GPS", label: "Location Intelligence" },
    { value: "IoT", label: "Sensor Integration" },
  ];

  const capabilityCards = [
    {
      kicker: "Tracking",
      title: "Real-Time Vehicle and Asset Tracking",
      description:
        "Track vehicle movement, route adherence, and transit progress continuously with map-driven telematics visibility.",
      image: Telematics1,
      alt: "Real-time telematics tracking",
    },
    {
      kicker: "Sensors",
      title: "RFID and IoT-Based Event Capture",
      description:
        "Collect operational events from connected sensors and checkpoints to improve movement validation and control.",
      image: Telematics2,
      alt: "RFID and IoT telemetry",
    },
    {
      kicker: "Compliance",
      title: "Driver and Vehicle Compliance Readiness",
      description:
        "Strengthen execution safety with digital verification workflows and compliance-aware operations checks.",
      image: Card11,
      alt: "Driver and vehicle compliance",
    },
    {
      kicker: "Control",
      title: "Operational Alerting and Exception Response",
      description:
        "Detect anomalies early and route exceptions to the right teams with alert-led intervention paths.",
      image: Card2,
      alt: "Telematics control room alerts",
    },
  ];

  const monitoringBullets = [
    "Continuous GPS tracking for vehicle and asset movement",
    "Route deviation and geofence alert monitoring",
    "RFID-assisted checkpoint validation",
    "Automated event logging for journey milestones",
    "Role-based dashboards for operations command teams",
    "Faster escalation through exception-led workflows",
  ];

  const analyticsBullets = [
    "Descriptive analytics for operational transparency",
    "Predictive cues for delay and utilization risk",
    "Prescriptive recommendations for response actions",
    "Fuel and movement efficiency trend insights",
    "Service-level performance and compliance indicators",
    "Custom executive reports for decision-making",
  ];

  const platformCards = [
    {
      title: "Live Tracking Console",
      description:
        "Monitor active movement with map-based situational visibility.",
      icon: IconFC,
    },
    {
      title: "Geofence Alerts",
      description: "Trigger immediate alerts on route or zone deviations.",
      icon: IconFC,
    },
    {
      title: "RFID Event Capture",
      description:
        "Record transit checkpoints and movement transitions digitally.",
      icon: IconFC,
    },
    {
      title: "Driver Compliance Checks",
      description: "Validate operational readiness before assignment.",
      icon: IconFC,
    },
    {
      title: "Control Room Dashboard",
      description: "Centralized monitoring for logistics command teams.",
      icon: IconFC,
    },
    {
      title: "Analytics and Reports",
      description:
        "Convert telemetry data into actionable operational insights.",
      icon: IconFC,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.78) 8%, rgba(55, 52, 169, 0.48) 115%), url(${Telematicsbg})`,
        }}
      >
        <div className="container px-6 py-14 lg:py-20 mx-auto text-start">
          <h1 className="text-4xl lg:text-6xl font-medium font-heebo text-gray-100">
            Telematics
          </h1>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-6 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Intelligent Telematics for Real-Time Logistics Visibility
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
            A modern telemetry platform that connects vehicles, assets, sensors,
            and events to deliver faster decisions and more reliable operations.
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
                  / Flying Chital / Telematics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductIntroSection
        productName="Telematics"
        eyebrow="Flying Chital Logistics Suite"
        title="Connected Telemetry for Smarter Movement Decisions"
        subtitle="Unify tracking, event capture, alerting, and analytics into one intelligent telematics system for logistics operations."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Telematics Capabilities"
        title="Operational Visibility from Sensor Signal to Action"
        description="Capabilities built to improve monitoring precision, response speed, and execution confidence across logistics networks."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Monitoring Layer"
        title="Real-Time Movement Monitoring and Exception Alerts"
        description="Track movement continuously and resolve issues earlier with sensor-driven events, route visibility, and dashboard-led control."
        image={Telematics1}
        imageAlt="Telematics operations monitoring"
        bullets={monitoringBullets}
        stats={["Live telemetry", "Faster alerts", "Better control"]}
      />

      <ProductFeatureDeepDive
        eyebrow="Intelligence Layer"
        title="Analytics That Improve Telematics-Led Operations"
        description="Transform telemetry streams into actionable insights that support planning, efficiency improvement, and stronger operational outcomes."
        image={Telematics2}
        imageAlt="Telematics analytics"
        bullets={analyticsBullets}
        stats={["Insight depth", "Lower risk", "Higher reliability"]}
        reverse
        overlayLabel="Telemetry Intelligence"
        overlayText="Operational intelligence that turns live tracking data into practical, execution-ready decisions."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Modules"
        title="Built-In Capabilities for Telematics Operations"
        description="Core modules for monitoring teams, compliance workflows, and analytics-driven logistics management."
        cards={platformCards}
      />

      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heebo mb-4">
              Integrate Telematics with Your Logistics Stack
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Connect telematics intelligence with multimodal planning and road
              execution for end-to-end operational control.
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
                Unified multimodal logistics intelligence and execution control.
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
                Apply telematics signals directly to road movement execution
                decisions.
              </p>
            </Link>

            <Link
              to="/railLogistics"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Rail Logistics
              </h3>
              <p className="text-gray-200">
                Extend telemetry-informed control into rail corridor operations.
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
