import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";

import mobilytBg from "../../assets/images/Mobilyt/Smart_city_highway_with_vehicles_ea81c9f835.jpeg";
import mobilytLogo from "../../assets/images/Mobilyt/Mobilyt Logo.png";
import gpsVehicles from "../../assets/images/Mobilyt/Vehicles_moving_with_gps_pins_288f0e22fc.jpeg";
import aiBrain from "../../assets/images/Mobilyt/Ai_brain_connected_to_fleet_f1b7e45b07.jpeg";
import dashboard from "../../assets/images/Mobilyt/An_elegant_floating_dashboard_hologram_above_a_dar_816984ee38.jpeg";
import enterprise from "../../assets/images/Mobilyt/A_secure_enterprise_network_visualization_a_large__a70d3f3383.jpeg";
import highlight1 from "../../assets/images/Mobilyt/hf_20260211_134606_9e015697-7408-40d3-abf8-ac9fcb82242e.png";
import highlight2 from "../../assets/images/Mobilyt/hf_20260211_174023_27a98aef-62cb-468d-b707-8027fe545939.jpeg";
import highlight3 from "../../assets/images/Mobilyt/hf_20260211_174259_3c331f70-afd2-4647-8433-6cee5b9db258.jpeg";
import highlight4 from "../../assets/images/Mobilyt/hf_20260211_183645_ca0869ab-e197-424b-a355-f810caa48f8b.jpeg";
import highlight5 from "../../assets/images/Mobilyt/hf_20260211_184106_36b76779-78bd-44c8-a670-89b6ac02eaff.jpeg";
import conclusionImg from "../../assets/images/Mobilyt/A_powerful_cinematic_photorealistic_render_of_a_fl_delpmaspu.png";
import ProductIntroSection from "../../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../../component/common/ProductFeatureCardsGrid";

export default function Mobilyt() {
  const introSections = [
    {
      heading: "AI-Powered Fleet Intelligence",
      body: "Mobilyt is a fully integrated Smart and Intelligent Vehicle Management System that provides end-to-end visibility across every vehicle in your fleet. From real-time GPS tracking to automated maintenance alerts, it puts complete control at your fingertips.",
    },
    {
      heading: "One Platform. Every Vehicle. Total Control.",
      body: "Mobilyt unifies fleet tracking, driver analytics, fuel management, compliance monitoring, and predictive maintenance on a single secure platform, accessible anytime, on any device, from any location.",
    },
    {
      heading: "Smarter Fleets. Stronger ROI.",
      body: "By automating data collection, compliance checks, and performance reporting, Mobilyt reduces operational costs, prevents fuel leakages, improves asset utilisation, and delivers tangible, measurable ROI.",
    },
  ];

  const introCapabilityTags = [
    "Real-Time Tracking & Control",
    "Intelligent Automation",
    "Enterprise Governance",
  ];

  const capabilityStats = [
    { value: "24/7", label: "Fleet Visibility" },
    { value: "AI", label: "Automation Layer" },
    { value: "360°", label: "Operational Insight" },
  ];

  const capabilityCards = [
    {
      kicker: "Command View",
      title: "Unified Fleet Command Across Every Route",
      description:
        "Bring live tracking, route playback, and asset visibility into one operational control layer for fleet teams, dispatchers, and supervisors.",
      image: highlight1,
      alt: "Mobilyt fleet control dashboard",
    },
    {
      kicker: "Performance",
      title: "Driver and Vehicle Intelligence",
      description:
        "Track behaviour, utilisation, and operational efficiency with the context needed to improve safety, discipline, and fleet productivity.",
      image: highlight2,
      alt: "Mobilyt vehicle performance monitoring",
    },
    {
      kicker: "Automation",
      title: "Predictive Maintenance and Smart Alerts",
      description:
        "Turn raw telemetry into automated interventions through maintenance triggers, fault detection, and preventive decision support.",
      image: highlight3,
      alt: "Mobilyt maintenance automation interface",
    },
    {
      kicker: "Compliance",
      title: "Audit-Ready Governance for Enterprise Fleets",
      description:
        "Support policy enforcement, approvals, and statutory record keeping with a platform built for structured, accountable mobility operations.",
      image: highlight4,
      alt: "Mobilyt enterprise compliance workflow",
    },
    {
      kicker: "Scale",
      title: "Built for LMV, HMV, and Heavy Equipment Operations",
      description:
        "Extend a common operating model across vehicle classes, routes, and business units without losing control, security, or reporting clarity.",
      image: highlight5,
      alt: "Mobilyt heavy fleet operations overview",
    },
  ];

  const trackingStats = [
    "Live map command",
    "Geo-fence alerts",
    "Route playback",
  ];

  const trackingBullets = [
    "Live vehicle monitoring on an interactive map",
    "Complete route history, playback and deviation alerts",
    "Geo-fencing with automated entry / exit notifications",
    "Idle-time detection and trip analytics",
    "Fuel efficiency monitoring and theft alerts",
    "Enhanced asset security and route discipline",
  ];

  const automationStats = [
    "AI analytics",
    "Predictive alerts",
    "Driver scoring",
  ];

  const automationBullets = [
    "AI-powered analytics and Smart and Intelligent sensor integration",
    "Automated attendance validation with GPS verification",
    "Vehicle utilisation tracking and performance benchmarking",
    "Preventive maintenance alerts based on real usage data",
    "Driver behaviour monitoring — harsh braking, overspeeding",
    "Reduced manual oversight and operational inefficiencies",
  ];

  const intelligenceStats = [
    "Live KPIs",
    "Predictive insights",
    "360° visibility",
  ];

  const intelligenceBullets = [
    "Real-time dashboards with live KPIs and alerts",
    "Predictive analytics to prevent breakdowns and delays",
    "Automated customisable reports for management and compliance",
    "Identify deployment bottlenecks and cost overruns instantly",
    "Optimise fleet utilisation with data-backed scheduling",
    "360° visibility from source to destination",
  ];

  const governanceStats = ["Enterprise-grade", "Policy control", "Audit-ready"];

  const governanceBullets = [
    "Scalable, secure and enterprise-grade architecture",
    "Transparent accountability for municipal and public fleets",
    "Ideal for corporations, public transport and defence establishments",
    "Integration with ERP, SAP and Government Regulatory Portals",
    "Role-based access control and multi-level approvals",
    "Builds smarter, safer and more accountable mobility ecosystems",
  ];

  const keyHighlightsCards = [
    {
      title: "Live Fleet Tracking",
      description: "Interactive map with route history and playback.",
      icon: IconFC,
    },
    {
      title: "Geo-Fencing",
      description: "Automated alerts on zone entry and exit.",
      icon: IconFC,
    },
    {
      title: "AI Automation",
      description: "Smart and Intelligent sensors and predictive maintenance.",
      icon: IconFC,
    },
    {
      title: "Driver Analytics",
      description: "Behaviour monitoring and performance scoring.",
      icon: IconFC,
    },
    {
      title: "Fuel Management",
      description: "Consumption tracking and theft prevention.",
      icon: IconFC,
    },
    {
      title: "Real-Time Dashboards",
      description: "Live KPIs, exception alerts and custom reports.",
      icon: IconFC,
    },
    {
      title: "Preventive Maintenance",
      description: "Alerts based on usage, mileage and faults.",
      icon: IconFC,
    },
    {
      title: "ERP / SAP Integration",
      description: "Seamless data flow with enterprise systems.",
      icon: IconFC,
    },
    {
      title: "Compliance Monitoring",
      description: "Statutory compliance and audit-ready records.",
      icon: IconFC,
    },
    {
      title: "Multi-Modal Support",
      description: "LMV, HMV, HEM across road, rail and port.",
      icon: IconFC,
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[40px] md:rounded-br-[70px] lg:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.75) 12%, rgba(55, 52, 169, 0.55) 120%), url(${mobilytBg})`,
        }}
      >
        <div className="container px-4 sm:px-6 py-10 sm:py-14 lg:py-24 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-gray-100">
              Mobilyt
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start">
              Smart and Intelligent Vehicle Management System
            </p>
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
              An AI-enabled platform engineered to transform fleet operations
              across Light Motor Vehicles, Heavy Motor Vehicles, Mobile
              Equipment and Heavy Earth Movers — through real-time visibility,
              automation, and data-driven control.
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal text-white bg-opacity-80 mt-4 lg:mt-6">
              <div className="flex lg:flex-row gap-2">
                <div>
                  <span>
                    <img src={HomeIcon} alt="" />
                  </span>
                </div>
                <div>
                  <Link
                    to="/"
                    className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]"
                  >
                    Home
                  </Link>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Mobilyt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <ProductIntroSection
        logo={mobilytLogo}
        productName="Mobilyt"
        eyebrow="Smart Vehicle Management System"
        title="Intelligent Control for Every Vehicle in Motion"
        subtitle="An AI-enabled fleet platform designed to unify tracking, automation, compliance, and performance visibility across complex vehicle operations."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Capability Showcase"
        title="What Mobilyt Looks Like in Live Operations"
        description="A visual tour of the platform across command visibility, automation, compliance, and enterprise fleet control. The section is designed to communicate system depth before the detailed feature breakdown below."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Core"
        title="Real-Time Tracking and Control Across Every Vehicle"
        description="Mobilyt brings the live fleet picture into one structured command layer so route visibility, deviations, fuel risk, and on-road discipline can be managed in real time rather than after the fact."
        image={gpsVehicles}
        imageAlt="GPS vehicle tracking"
        bullets={trackingBullets}
        stats={trackingStats}
      />

      <ProductFeatureDeepDive
        eyebrow="Automation Layer"
        title="Intelligent Automation That Reduces Manual Oversight"
        description="Mobilyt combines AI analytics, behavioural monitoring, preventive maintenance logic, and smart sensor integration to move fleet operations from reactive supervision to continuous, automated control."
        image={aiBrain}
        imageAlt="AI brain connected to fleet"
        bullets={automationBullets}
        stats={automationStats}
        reverse
        overlayLabel="Automation and Monitoring"
        overlayText="AI-assisted monitoring helps operators intervene earlier, reduce exceptions, and maintain consistent fleet performance at scale."
      />

      <ProductFeatureDeepDive
        eyebrow="Decision Intelligence"
        title="Data-Driven Visibility That Turns Fleet Data Into Action"
        description="Mobilyt transforms telemetry, route activity, and operational exceptions into live dashboards, predictive insights, and decision-ready reporting so teams can respond before delays and losses accumulate."
        image={dashboard}
        imageAlt="Floating dashboard analytics"
        bullets={intelligenceBullets}
        stats={intelligenceStats}
        overlayLabel="Data-Driven Intelligence"
        overlayText="A live analytics layer gives operators the context to improve scheduling, control cost drift, and respond faster to emerging issues."
      />

      <ProductFeatureDeepDive
        eyebrow="Governance Layer"
        title="Enterprise Governance and Enablement at Operational Scale"
        description="Mobilyt extends beyond fleet visibility to deliver policy-led governance, secure enterprise controls, and audit-ready operational accountability across public and private mobility ecosystems."
        image={enterprise}
        imageAlt="Enterprise network visualization"
        bullets={governanceBullets}
        stats={governanceStats}
        reverse
        overlayLabel="Governance and Control"
        overlayText="A governance-first operating layer helps organisations standardise compliance, approvals, and accountability without slowing field execution."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Highlights"
        title="Capabilities That Keep Every Fleet Operation in Control"
        description="From live tracking and predictive maintenance to compliance and enterprise integrations, Mobilyt unifies the essential controls needed for reliable fleet performance."
        cards={keyHighlightsCards}
      />

      {/* ── Conclusion Banner ── */}
      <section className="text-gray-600 body-font mt-4 md:mt-6 rounded-tl-[20px] sm:rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[40px] md:rounded-br-[50px] bg-gray-100 pb-8 md:pb-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 md:py-14 gap-6 md:gap-10">
          <div className="w-full md:w-1/2 lg:max-w-xl rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full"
              alt="Mobilyt fleet platform"
              src={conclusionImg}
            />
          </div>
          <div className="w-full md:flex-1 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              <span className="text-primary font-heebo">
                Driving Efficiency.
              </span>{" "}
              <span className="font-heebo">
                Ensuring Compliance. Protecting Revenue.
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="text-lg not-italic font-normal leading-7 text-[#30343F] font-heebo">
              Mobilyt reduces operational costs, prevents fuel and resource
              leakages, improves asset utilisation, and strengthens financial
              control — delivering tangible ROI while building smarter, safer
              and more accountable mobility ecosystems for every type of fleet
              operator.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-heebo font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
