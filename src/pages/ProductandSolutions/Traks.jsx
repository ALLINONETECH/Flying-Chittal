import React from "react";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";
import { Link } from "react-router-dom";

import traksBg from "../../assets/images/traks/Industrial_field_operation_site_e89024ec9e.jpeg";
import traksLogo from "../../assets/images/traks/Tracks Logo (Square)).png";
import fieldWorker from "../../assets/images/traks/Field_worker_tapping_checkin_app_7745895b51.jpeg";
import gpsCheckin from "../../assets/images/traks/Smartphone_gps_checkin_animation_46a24813a9.jpeg";
import nightShift from "../../assets/images/traks/Supervisor_dashboard_night_shift_d9818895db.jpeg";
import industrialSite from "../../assets/images/traks/Industrial_field_operation_site_66cf9c52a1.jpeg";
import highlight1 from "../../assets/images/traks/hf_20260129_163028_786c0689-3eb0-4fc9-a373-288ee3040c33.webp";
import highlight2 from "../../assets/images/traks/hf_20260129_163210_7706eae1-9356-4c72-a269-7e42ed1bf1f5.webp";
import highlight3 from "../../assets/images/traks/hf_20260130_014143_fa3b1e6e-1b4a-4227-bf77-2f0cd078b6fd.webp";
import highlight4 from "../../assets/images/traks/hf_20260130_030926_c3bb045e-a591-4c63-b062-03f0db2baf2c.webp";
import highlight5 from "../../assets/images/traks/hf_20260131_060818_e2819554-ff54-4e0b-983c-7ccf9f7b3ec6.webp";
import conclusionImg from "../../assets/images/traks/Clean_electrostruction_animation_style_wide_169_da_cb799d3b35.jpeg";
import ProductIntroSection from "../../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../../component/common/ProductFeatureCardsGrid";

export default function Traks() {
  const introSections = [
    {
      heading: "AI-Powered Field Force Intelligence",
      body: "Traks is a comprehensive Field Force Management Software Suite that digitises, monitors, and optimises field sales, service, and security operations. With real-time visibility and workforce accountability, it delivers measurable performance gains across every operational layer.",
    },
    {
      heading: "Single Platform. Total Control.",
      body: "From geo-fenced attendance to automated payroll computation, Traks unifies every aspect of workforce management on one secure, scalable digital platform, accessible anytime, on any device, from any location.",
    },
    {
      heading: "Smarter Supervision. Measurable ROI.",
      body: "Traks helps organisations reduce operational costs, prevent financial leakages, enhance workforce productivity, and achieve sustainable, data-driven growth through automated compliance, accurate payroll, and real-time dashboards.",
    },
  ];

  const introCapabilityTags = [
    "Real-Time Attendance",
    "Geo-Spatial Control",
    "Workforce Cost Management",
  ];

  const capabilityStats = [
    { value: "95%", label: "Tracking Accuracy" },
    { value: "GPS", label: "Attendance Validation" },
    { value: "24/7", label: "Field Visibility" },
  ];

  const capabilityCards = [
    {
      kicker: "Attendance",
      title: "Verified Presence at Every Operational Point",
      description:
        "Establish attendance integrity with geo-tagged check-ins, live headcount visibility, and real-time supervisor awareness across distributed teams.",
      image: highlight1,
      alt: "Traks attendance and workforce visibility",
    },
    {
      kicker: "Control",
      title: "Geo-Spatial Monitoring for Field Teams",
      description:
        "Track movement, monitor route discipline, and enforce zone-based controls with precise location intelligence built into daily operations.",
      image: highlight2,
      alt: "Traks geo-spatial control dashboard",
    },
    {
      kicker: "Productivity",
      title: "Supervisor Dashboards for Real-Time Decisions",
      description:
        "Give managers live context on absenteeism, field deployment, and workforce performance so intervention happens before productivity slips.",
      image: highlight3,
      alt: "Traks supervisor decision support",
    },
    {
      kicker: "Efficiency",
      title: "System-Led Discipline and Alertness Monitoring",
      description:
        "Reduce missed patrols, delayed visits, and field inefficiencies with automated oversight designed for high-accountability environments.",
      image: highlight4,
      alt: "Traks alertness and patrol compliance",
    },
    {
      kicker: "Cost",
      title: "Workforce Cost Intelligence with Operational Clarity",
      description:
        "Support payroll accuracy, deployment transparency, and measurable ROI through a single layer of workforce data and automation.",
      image: highlight5,
      alt: "Traks workforce cost management",
    },
  ];

  const attendanceStats = [
    "GPS attendance",
    "Live headcount",
    "Supervisor alerts",
  ];

  const attendanceBullets = [
    "Real-time attendance with GPS validation",
    "Live headcount at every operational site",
    "Accurate working hours tracking with automated computation",
    "Flexible, policy-driven custom leave management",
    "Instant absentee notifications to supervisors",
    "Geo-fence enabled check-in / check-out with Lat, Long, Date & Time stamps",
  ];

  const locationStats = [
    "Geo-fence control",
    "95% route accuracy",
    "Instant alerts",
  ];

  const locationBullets = [
    "Continuous real-time location monitoring of all personnel",
    "Up to 95% accurate distance calculation across field routes",
    "Geo-fence creation with automated compliance and safety alerts",
    "Live headcount within each geo-fenced operational zone",
    "Entry and exit alerts with instant notifications",
    "Enhanced operational visibility for supervisors and command centres",
  ];

  const alertnessStats = [
    "Patrol visibility",
    "Night oversight",
    "Exception alerts",
  ];

  const alertnessBullets = [
    "Ensures all scheduled positions are visited as planned",
    "Patrol monitoring to track skipped or delayed checkpoints",
    "Static guard monitoring to confirm alertness at assigned posts",
    "Night shift oversight to reduce fatigue-related lapses",
    "Exception alerts for inactivity or missed patrols",
    "Promotes discipline, accountability, and performance benchmarking",
  ];

  const financialStats = [
    "Payroll accuracy",
    "Statutory compliance",
    "Leakage prevention",
  ];

  const financialBullets = [
    "Track and maintain detailed records of employee business expenses",
    "Digital submission, approval workflows, and expense analytics",
    "Automated salary and wage calculation based on actual attendance and working hours",
    "System-driven computation of statutory contributions including ESIC, EPFO, and other compliances",
    "Accurate payroll data generation to reduce errors and prevent revenue leakage",
  ];

  const keyHighlightsCards = [
    {
      title: "Field Digitisation",
      description: "Eliminate paper-based processes end-to-end.",
      icon: IconFC,
    },
    {
      title: "GPS Geo-Fencing",
      description: "Automated check-in and check-out with location stamps.",
      icon: IconFC,
    },
    {
      title: "Mobile + Web Access",
      description: "Anytime, anywhere, on any device.",
      icon: IconFC,
    },
    {
      title: "Patrol and Guard Monitoring",
      description: "Night shift and static post alertness tracking.",
      icon: IconFC,
    },
    {
      title: "AI Analytics",
      description: "Real-time dashboards and custom reports.",
      icon: IconFC,
    },
    {
      title: "Expense Management",
      description: "Digital submission and approval workflows.",
      icon: IconFC,
    },
    {
      title: "Automated Payroll",
      description: "Salary, ESIC, EPFO and statutory computations.",
      icon: IconFC,
    },
    {
      title: "Live Headcount",
      description: "Per site and per geo-fenced zone.",
      icon: IconFC,
    },
    {
      title: "Exception Alerts",
      description: "Inactivity, missed patrols, and absentee notifications.",
      icon: IconFC,
    },
    {
      title: "Scalable Platform",
      description: "Secure, cloud-based, and enterprise-grade.",
      icon: IconFC,
    },
  ];

  const conclusionOutcomes = [
    "Operational cost reduction",
    "Leakage prevention",
    "Attendance-backed payroll",
    "Compliance-ready execution",
  ];

  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[40px] md:rounded-br-[70px] lg:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.75) 12%, rgba(55, 52, 169, 0.55) 120%), url(${traksBg})`,
        }}
      >
        <div className="container px-4 sm:px-6 py-10 sm:py-14 lg:py-24 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-gray-100">
              Traks
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start">
              Intelligent Field Force Management Suite
            </p>
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
              An AI &amp; Data Analytics Powered Solution by Flying Chital
              Private Limited — designed to digitise, monitor, and optimise
              field sales, service, and security operations with real-time
              visibility, workforce accountability, and measurable performance.
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
                    / Traks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <ProductIntroSection
        logo={traksLogo}
        productName="Traks"
        eyebrow="Field Force Management Suite"
        title="AI-Powered Visibility for Field Operations"
        subtitle="A digital field force management suite built to improve attendance integrity, supervision quality, workforce productivity, and cost control."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Capability Showcase"
        title="How Traks Strengthens Field Execution"
        description="A visual snapshot of the suite across attendance integrity, location monitoring, supervisory visibility, and workforce cost control before the detailed operational sections below."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Operational Core"
        title="Attendance Integrity with Location Intelligence Built In"
        description="Traks turns attendance into a live operational control point by validating presence, surfacing absenteeism instantly, and giving supervisors a reliable view of workforce readiness across sites."
        image={fieldWorker}
        imageAlt="Field worker checking in"
        bullets={attendanceBullets}
        stats={attendanceStats}
      />

      <ProductFeatureDeepDive
        eyebrow="Geo-Spatial Control"
        title="Live Location Intelligence for Safer, Tighter Field Execution"
        description="Traks gives supervisors a location-aware operating picture with geo-fence logic, route visibility, and instant alerts so field movement is measurable, verifiable, and easier to control."
        image={gpsCheckin}
        imageAlt="GPS check-in animation"
        bullets={locationBullets}
        stats={locationStats}
        reverse
        overlayLabel="Location Tracking"
        overlayText="Geo-spatial control reduces blind spots in deployment, strengthens compliance, and improves supervisor response time across distributed sites."
      />

      <ProductFeatureDeepDive
        eyebrow="Monitoring Layer"
        title="System-Managed Efficiency and Alertness Across the Field"
        description="Traks extends control beyond attendance and location by continuously monitoring guard alertness, patrol discipline, missed checkpoints, and night-shift performance across critical deployments."
        image={nightShift}
        imageAlt="Supervisor dashboard night shift"
        bullets={alertnessBullets}
        stats={alertnessStats}
        overlayLabel="Alertness Monitoring"
        overlayText="Continuous oversight helps supervisors detect missed patrols, fatigue risks, and field discipline gaps before they become operational failures."
      />

      <ProductFeatureDeepDive
        eyebrow="Financial Governance"
        title="Financial Control and Workforce Cost Management with Confidence"
        description="Traks strengthens financial governance by combining attendance-backed payroll, expense workflow control, and automated statutory computation into one accountable operating framework."
        image={industrialSite}
        imageAlt="Industrial field operation site"
        bullets={financialBullets}
        stats={financialStats}
        reverse
        overlayLabel="Cost and Compliance"
        overlayText="A finance-aware execution layer helps teams protect margins, reduce leakage, and maintain compliance without slowing operations."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Highlights"
        title="Core Capabilities Behind Traks Performance"
        description="Traks combines attendance integrity, geo-spatial controls, alertness monitoring, and workforce finance intelligence into one execution-ready platform."
        cards={keyHighlightsCards}
      />

      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,52,169,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(248,90,71,0.10),_transparent_28%)]"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_26px_80px_rgba(15,23,42,0.12)] sm:min-h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  alt="Traks platform"
                  src={conclusionImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/25 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80 font-heebo">
                      Traks Outcome
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white font-heebo sm:text-xl">
                      Smarter supervision, stronger compliance, and measurable
                      financial control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-primary font-heebo">
                  <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                  Conclusion
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 font-heebo sm:text-4xl lg:text-5xl">
                  Smarter Supervision. Stronger Compliance. Measurable ROI.
                </h2>

                <div className="mt-5 flex gap-2">
                  <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
                  <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-600 font-heebo sm:text-lg">
                  With integrated AI analytics, automated compliance,
                  attendance-linked payroll accuracy, and real-time dashboards,
                  Traks helps organisations reduce operational costs, prevent
                  financial leakages, and improve workforce productivity through
                  a secure, scalable platform.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {conclusionOutcomes.map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm font-heebo ${
                        index % 3 === 0
                          ? "bg-indigo-100 text-primary"
                          : index % 3 === 1
                            ? "bg-orange-100 text-orange-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/chat"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-indigo-600 px-7 py-3 text-white font-heebo font-semibold shadow-lg transition hover:from-indigo-700 hover:to-primary"
                >
                  Get in Touch
                </Link>
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
              Strengthen Your Operational Ecosystem
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Traks delivers field force excellence. Pair it with intelligent
              logistics management and mobility solutions for complete
              operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/flyingchital"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white font-heebo mb-3 group-hover:text-blue-300 transition-colors">
                Flying Chital - Logistics Intelligence
              </h3>
              <p className="text-gray-300 mb-4">
                Integrate field operations with end-to-end logistics visibility.
                Flying Chital provides multimodal logistics management,
                real-time transportation tracking, and supply chain network
                control.
              </p>
              <span className="text-blue-300 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Explore Flying Chital →
              </span>
            </Link>

            <Link
              to="/mobilyt"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white font-heebo mb-3 group-hover:text-orange-300 transition-colors">
                Mobilyt - Vehicle Intelligence
              </h3>
              <p className="text-gray-300 mb-4">
                Add vehicle-level insights to your field operations. Mobilyt
                delivers real-time fleet tracking, driver behavior analytics,
                and asset telematics to complement field force management.
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
