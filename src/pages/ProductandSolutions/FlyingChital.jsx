/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Rightarr from "../../assets/images/Rightarr.png";
import smalllogo from "../../assets/images/smalllogo.png";
import logisticfire2 from "../../assets/images/logisticfire2.png";
import logisticfire from "../../assets/images/logisticfire.png";
import Citem3 from "../../assets/images/road.jpg";
import right from "../../assets/images/right.png";
import group from "../../assets/images/Group 14.png";
import sc1 from "../../assets/images/sc1.png";
import sc2 from "../../assets/images/sc2.png";
import sc3 from "../../assets/images/sc3.png";
import sc4 from "../../assets/images/sc4.png";
import fclogo from "../../assets/images/fclogo.png";
import raillogistic from "../../assets/images/raillogistic.png";
import roadogistic from "../../assets/images/roadlogistic.png";
import telematics from "../../assets/images/telematics.png";
import customisedfeature from "../../assets/images/customisedfeature.png";
import IconFC from "../../assets/images/IconFC.png";
import flyingchitalbg from "../../assets/images/flyingchitalbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import handicon from "../../assets/images/handicon.png";
import mobilicon from "../../assets/images/mobileicon.png";
import manicon from "../../assets/images/man.png";
import moneyicon from "../../assets/images/money.png";
import awardicon from "../../assets/images/award.png";
import right1 from "../../assets/images/right1.png";
import conclusion from "../../assets/images/65723.jpg";
import { Link } from "react-router-dom";
import ProductIntroSection from "../../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../../component/common/ProductFeatureCardsGrid";
import SampleScreenshots from "../../component/common/SampleScreenshots";
export default function flyingChital() {
  const introSections = [
    {
      heading: "Multimodal Integrated Logistics Management",
      body: "Flying Chital stands as a trailblazing, multi-modal integrated logistics management platform, revolutionizing the logistics landscape with its comprehensive suite of services. By combining advanced analytics, customized reporting capabilities and infographics, it seamlessly streamlines and optimizes logistics operations while delivering logistics intelligence, connectivity, and real-time virtualization.",
    },
    {
      heading: "Decision-Making Information at Fingertip",
      body: "Positioned at the forefront of its category, Flying Chital's mobility feature offers smart and intelligent agile logistics operations at fingertip, ensuring unparalleled accessibility and one hundred percent visibility, irrespective of location or device. Its integrated digital platform interfaces effortlessly with government regulatory portals, ERP and SAP environments, and other enterprise systems for real-time dashboards and customizable reports.",
    },
    {
      heading: "End-to-End Visibility",
      body: "This innovative platform ensures end-to-end visibility from source to destination while reducing turnaround times, operational expenses, and the risks of pilferage and revenue leakages. Adaptable across road, rail, container, and port terminals, Flying Chital serves as a versatile and comprehensive solution for businesses operating in the modern logistics landscape.",
    },
  ];

  const introCapabilityTags = [
    "Logistics Intelligence",
    "Logistics Connectivity",
    "Real-Time Virtualization",
  ];

  const capabilityStats = [
    { value: "4", label: "Solution Modules" },
    { value: "24/7", label: "Operational Visibility" },
    { value: "100%", label: "Connected Workflow" },
  ];

  const capabilityCards = [
    {
      kicker: "Rail",
      title: "Rail Logistics with End-to-End Wagon Visibility",
      description:
        "Coordinate rake movement, turnaround, loading, unloading, and decision-making through a connected rail logistics control layer.",
      image: raillogistic,
      alt: "Flying Chital rail logistics solution",
      href: "/railLogistics",
    },
    {
      kicker: "Road",
      title: "Road Logistics for Agile Transport Operations",
      description:
        "Track vehicle movement, streamline dispatch, and improve operational responsiveness across dynamic road logistics networks.",
      image: roadogistic,
      alt: "Flying Chital road logistics solution",
      href: "/roadLogistics",
    },
    {
      kicker: "Telematics",
      title: "Telematics for Real-Time Asset Intelligence",
      description:
        "Bring traceability, route discipline, and on-ground asset awareness into a single digital operating environment.",
      image: telematics,
      alt: "Flying Chital telematics solution",
      href: "/telematics",
    },
    {
      kicker: "Custom",
      title: "Customised Solutions for Complex Logistics Workflows",
      description:
        "Adapt Flying Chital to site-specific processes, enterprise integrations, and domain requirements without losing visibility or control.",
      image: customisedfeature,
      alt: "Flying Chital customised logistics solution",
      href: "/customized",
    },
  ];

  const highlightsStats = [
    "Digital operations",
    "Multi-modal coverage",
    "Anytime visibility",
  ];

  const highlightsGroups = [
    {
      title: "Operational Enablement",
      items: [
        "Digitalization with reduced paper and menial work",
        "Weighment solutions including man-less, in-motion weigh bridges",
        "Mobile app support alongside the web platform",
        "Automation for vehicle and driver assignment, entry, exit, weighment, validation, verification, and documentation",
        "Telematics with GPS trace and track across fixed, portable, and solar deployments",
      ],
    },
    {
      title: "Platform Capabilities",
      items: [
        "HEM, HMV, and LMV management at trip level within mines, plants, and ports",
        "Analytics and customised reports for operational decision-making",
        "A single integrated digital platform across logistics workflows",
        "Multi-modal coverage across road, rail, and port terminals",
        "End-to-end visibility anytime, anywhere, on any device",
      ],
    },
  ];

  const firefightingStats = ["High TAT", "Manual workflows", "Low visibility"];

  const firefightingBullets = [
    "Current process disjointed",
    "Data collected offline and not leveraged to full potential",
    "Manual and paper-based system",
    "High dependency on manpower",
    "High turnaround times leading to higher cost",
    "Limited visibility and control",
    "Delays and chaos across operations",
  ];

  const outcomesStats = [
    "Lower TAT",
    "Higher efficiency",
    "Real-time visibility",
  ];

  const outcomeGroups = [
    {
      title: "Reduced",
      items: [
        "Turn Around Time (TAT)",
        "Cost of operations",
        "Revenue leakage and loss",
        "Operational fatigue",
      ],
    },
    {
      title: "Increased",
      items: [
        "Production efficiency",
        "Top line performance",
        "Bottom line improvement",
      ],
    },
    {
      title: "Operational Gains",
      items: [
        "End-to-end real-time visibility",
        "Trip-level monitoring and control",
        "Proactive preventive action",
        "Reduced need for reactive corrective action",
      ],
    },
  ];

  const featureCards = [
    {
      title: "Single Integrated Solution",
      description:
        "Multi-modal road and rail orchestration in one operating platform rather than fragmented ecosystem tools.",
      icon: group,
    },
    {
      title: "Cash Flow Optimization",
      description:
        "Optimizes cash flow for enterprises and transport operators with tighter operational control.",
      icon: handicon,
    },
    {
      title: "Complete Mobility",
      description:
        "Integration with ERP, SAP, and TALLY for seamless exchange of operational data and insights.",
      icon: mobilicon,
    },
    {
      title: "Visibility and Control",
      description:
        "Enterprises, transporters, and truck owners gain a common visibility layer for coordinated execution.",
      icon: awardicon,
    },
    {
      title: "Profiles",
      description:
        "Digital workspace and role-based profiles empower every stakeholder in the logistics chain.",
      icon: manicon,
    },
    {
      title: "Revenue Optimization",
      description:
        "Enterprises reduce cost while transporters improve revenue, creating win-win outcomes.",
      icon: moneyicon,
    },
  ];

  const inSummaryPoints = [
    {
      title: "Single Integrated Digital Platform",
      detail:
        "Real-time situational awareness enables proactive action instead of reactive response.",
    },
    {
      title: "Multi Modal Transport",
      detail:
        "Road and rail networks can run independently or in a combined operating model.",
    },
    {
      title: "Complete Visibility",
      detail:
        "Inbound and outbound movement visibility across mines, plants, ports, and railway yards.",
    },
    {
      title: "Automation First",
      detail: "Manual, inefficient process layers are eliminated by design.",
    },
    {
      title: "Revenue Protection",
      detail: "Lower cost, wastage, pilferage, and leakage through control and traceability.",
    },
    {
      title: "Operational Reliability",
      detail: "Higher efficiency, transparency, and process consistency at scale.",
    },
    {
      title: "Regulatory Connectivity",
      detail: "Seamless integration with government and regulatory portals.",
    },
    {
      title: "Logistics 4.0 Alignment",
      detail:
        "Built for digital, connected, data-driven logistics transformation.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${flyingchitalbg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden">
              {/* Add mobile menu button/icon here */}
            </div>
          </div>
          <div className="lg:hidden">
            {/* Add mobile navigation content here */}
          </div>
          <div className="hidden lg:flex lg:items-center">
            {/* Add desktop navigation content here */}
          </div>
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Flying Chital
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Smart and Intelligent Agile Logistics at Fingertip...
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div className="justify">
                  {" "}
                  <Link
                    to="/"
                    className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]"
                  >
                    <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                      {" "}
                      Home
                    </span>
                  </Link>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Flying Chital
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductIntroSection
        logo={fclogo}
        productName="Flying Chital"
        eyebrow="Logistics Transformation Platform"
        title="Smart, Connected, and Agile Logistics Intelligence"
        subtitle="A multi-modal logistics management platform built to unify visibility, decision-making, and operational control across modern supply chains."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Solution Showcase"
        title="Explore the Operating Layers Behind Flying Chital"
        description="Each module extends the same logistics intelligence backbone across rail, road, telematics, and customised workflows, while keeping operational visibility and enterprise connectivity intact."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Core"
        title="The Core Capabilities That Make Logistics Agile"
        description="Flying Chital combines digital workflows, multi-modal orchestration, telematics, automation, and enterprise reporting into a single operational system designed for high-volume logistics environments."
        image={logisticfire}
        imageAlt="Flying Chital logistics operations"
        bulletGroups={highlightsGroups}
        stats={highlightsStats}
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Pain Points"
        title="Why Logistics Operations Slip Into Constant Fire Fighting"
        description="Without an integrated digital workflow, logistics teams end up reacting to delays, fragmented information, and manual processes instead of controlling operations with live data and coordinated execution."
        image={logisticfire2}
        imageAlt="Logistics operations under pressure"
        bullets={firefightingBullets}
        stats={firefightingStats}
        reverse
        overlayLabel="Operational Pressure"
        overlayText="The section frames the legacy pain points that Flying Chital is designed to remove through visibility, orchestration, and automation."
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Outcomes"
        title="Smart Agile Logistics Drives Smoother, More Predictable Operations"
        description="Flying Chital improves operational flow by reducing manual friction, lowering cost leakages, increasing production efficiency, and giving teams the visibility needed to act before disruption compounds."
        image={Citem3}
        imageAlt="Smart agile logistics operations"
        bulletGroups={outcomeGroups}
        stats={outcomesStats}
        overlayLabel="Operational Outcomes"
        overlayText="The platform shifts logistics teams from reactive firefighting to measurable, proactive execution with better visibility and lower operational drag."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Features"
        title="Feature Set Built for Integrated Logistics Performance"
        description="Flying Chital combines multimodal orchestration, enterprise integrations, visibility controls, and revenue-focused operations in one connected digital platform."
        cards={featureCards}
      />

      {/* /test */}
      <SampleScreenshots images={[sc1, sc2, sc3, sc4]} />

      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,52,169,0.10),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(248,90,71,0.10),_transparent_28%)]"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-primary font-heebo">
                  <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                  Strategic Snapshot
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 font-heebo sm:text-4xl lg:text-5xl">
                  In Summary
                </h2>

                <div className="mt-5 flex gap-2">
                  <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
                  <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600 font-heebo sm:text-lg">
                  Flying Chital consolidates logistics execution into one
                  intelligent operating layer, enabling proactive action,
                  stronger control, and measurable operational outcomes.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {inSummaryPoints.map((point, index) => (
                    <article
                      key={point.title}
                      className={`rounded-3xl border p-5 sm:p-6 ${
                        index % 3 === 0
                          ? "border-indigo-100 bg-indigo-50/60"
                          : index % 3 === 1
                            ? "border-orange-100 bg-orange-50/70"
                            : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-sm font-heebo">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold leading-tight text-slate-900 font-heebo">
                            {point.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 font-heebo sm:text-base">
                            {point.detail}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_26px_80px_rgba(15,23,42,0.12)] sm:min-h-[420px] lg:sticky lg:top-24">
                <img
                  className="h-full w-full object-cover"
                  alt="Flying Chital summary"
                  src={conclusion}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/25 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80 font-heebo">
                      Strategic Outcome
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white font-heebo sm:text-xl">
                      A connected logistics platform that reduces leakage,
                      improves transparency, and enables consistent operational
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Solutions CTA */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heebo mb-4">
              Complete Your Operational Stack
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Flying Chital works best alongside intelligent field force and vehicle management solutions for truly end-to-end operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/traks" 
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white font-heebo mb-3 group-hover:text-indigo-300 transition-colors">
                Traks - Field Force Management
              </h3>
              <p className="text-gray-300 mb-4">
                Complement your logistics operations with intelligent field force management. Traks adds real-time workforce visibility, attendance integrity, and field team optimization to your logistics stack.
              </p>
              <span className="text-indigo-300 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Explore Traks →
              </span>
            </Link>

            <Link 
              to="/mobilyt" 
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white font-heebo mb-3 group-hover:text-orange-300 transition-colors">
                Mobilyt - Vehicle Tracking
              </h3>
              <p className="text-gray-300 mb-4">
                Add vehicle-level telematics and asset intelligence to your Flying Chital logistics platform. Mobilyt delivers real-time fleet visibility, driver behavior analytics, and mobility operations control.
              </p>
              <span className="text-orange-300 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Explore Mobilyt →
              </span>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-block px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
            >
              View All Services & Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
