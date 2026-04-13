import React from "react";
import { Link } from "react-router-dom";

import customized1 from "../assets/images/customized1.png";
import Customizedbg from "../assets/images/Customizedbg.png";
import HomeIcon from "../assets/images/HomeIcon.png";
import Custom from "../assets/images/Custom.png";
import customised1 from "../assets/images/istockphoto-om9LdZNEx8.jpg";
import Telematics2 from "../assets/images/Telematics2.png";
import IconFC from "../assets/images/IconFC.png";

import ProductIntroSection from "../component/common/ProductIntroSection";
import ProductCapabilityShowcase from "../component/common/ProductCapabilityShowcase";
import ProductFeatureDeepDive from "../component/common/ProductFeatureDeepDive";
import ProductFeatureCardsGrid from "../component/common/ProductFeatureCardsGrid";

export default function Customized() {
  const introSections = [
    {
      heading: "Tailored Logistics Features for Complex Operations",
      body: "Flying Chital Customized Features enables domain-specific workflows that adapt to unique operational rules, compliance constraints, and enterprise priorities.",
    },
    {
      heading: "Unified Interface for Multi-System Coordination",
      body: "Integrate regulatory portals, enterprise systems, and logistics workflows into one digital operating view for faster and safer decisions.",
    },
    {
      heading: "Operational Flexibility Without Fragmentation",
      body: "Deliver custom process controls and reports without breaking data continuity, movement visibility, or control room execution discipline.",
    },
  ];

  const introCapabilityTags = [
    "Custom Workflow Design",
    "Regulatory Integrations",
    "Role-Based Decision Views",
  ];

  const capabilityStats = [
    { value: "1", label: "Unified Platform" },
    { value: "API", label: "Integration Ready" },
    { value: "24/7", label: "Control Visibility" },
  ];

  const capabilityCards = [
    {
      kicker: "Workflow",
      title: "Custom Process Logic for Operations",
      description:
        "Model organization-specific workflows for dispatch, compliance, approvals, and execution monitoring in one adaptable system.",
      image: customized1,
      alt: "Customized logistics workflow",
    },
    {
      kicker: "Integration",
      title: "Government and Enterprise System Interfaces",
      description:
        "Connect logistics data with regulatory and enterprise systems to reduce manual dependency and improve process integrity.",
      image: Custom,
      alt: "System integration dashboard",
    },
    {
      kicker: "Control",
      title: "Role-Based Stakeholder Enablement",
      description:
        "Deliver contextual access for operations, supervisors, transporters, and management teams through role-specific views.",
      image: customised1,
      alt: "Role-based control in logistics",
    },
    {
      kicker: "Intelligence",
      title: "Custom Reporting and Action Insights",
      description:
        "Create tailored reports and operational dashboards aligned to business KPIs, shift cycles, and governance needs.",
      image: Telematics2,
      alt: "Custom logistics analytics",
    },
  ];

  const enablementBullets = [
    "Custom workflow templates for domain-specific operations",
    "System-driven approvals and validation checkpoints",
    "Unified visibility across stakeholders and process layers",
    "Regulatory and enterprise portal integration support",
    "Reduced manual intervention and process latency",
    "Faster action with role-based operational context",
  ];

  const governanceBullets = [
    "Custom KPI dashboards by function and responsibility",
    "Shift-wise, route-wise, and period-wise reporting controls",
    "Compliance evidence and audit-ready data trails",
    "Predictive and prescriptive insight extensions",
    "Configurable exception monitoring and alert routing",
    "Executive summaries for governance and planning reviews",
  ];

  const platformCards = [
    {
      title: "Custom Workflow Engine",
      description: "Design operational paths to match your business logic.",
      icon: IconFC,
    },
    {
      title: "System Integrations",
      description: "Interface with regulatory and enterprise platforms.",
      icon: IconFC,
    },
    {
      title: "Role-Based Access",
      description: "Deliver the right data to the right stakeholder.",
      icon: IconFC,
    },
    {
      title: "Command Visibility",
      description: "Central view for active process and movement control.",
      icon: IconFC,
    },
    {
      title: "Custom Reports",
      description: "Generate tailored insights for execution and leadership.",
      icon: IconFC,
    },
    {
      title: "Audit and Compliance",
      description: "Track verifiable actions across integrated workflows.",
      icon: IconFC,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[80px] lg:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.78) 8%, rgba(55, 52, 169, 0.48) 115%), url(${Customizedbg})`,
        }}
      >
        <div className="container px-6 py-14 lg:py-20 mx-auto text-start">
          <h1 className="text-4xl lg:text-6xl font-medium font-heebo text-gray-100">
            Customized Features
          </h1>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-6 text-white font-medium tracking-wide font-heebo max-w-4xl">
            Tailored Logistics Workflows for Your Business Reality
          </p>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
            Build organization-specific logistics capabilities on a unified
            platform without sacrificing visibility, control, or compliance
            confidence.
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
                  / Flying Chital / Customized Features
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductIntroSection
        productName="Customized Features"
        eyebrow="Flying Chital Logistics Suite"
        title="Configurable Capabilities for Complex Logistics Use Cases"
        subtitle="Design process, integration, and reporting layers that reflect your operational model while keeping one connected control framework."
        capabilityTags={introCapabilityTags}
        sections={introSections}
      />

      <ProductCapabilityShowcase
        eyebrow="Customization Capabilities"
        title="Adaptable Control Across Workflow, Data, and Governance Layers"
        description="A customization framework built for high-control environments where operational context, compliance, and agility must coexist."
        stats={capabilityStats}
        cards={capabilityCards}
      />

      <ProductFeatureDeepDive
        eyebrow="Execution Enablement"
        title="Operational Flexibility with System-Led Control"
        description="Enable stakeholder-specific workflows and integrated checkpoints so execution remains agile without losing process discipline."
        image={customised1}
        imageAlt="Customized operations enablement"
        bullets={enablementBullets}
        stats={["Flexible workflows", "Unified view", "Faster execution"]}
      />

      <ProductFeatureDeepDive
        eyebrow="Governance Layer"
        title="Custom Analytics and Compliance Confidence"
        description="Shape analytics and reporting around your governance model while maintaining evidence-ready operational traceability."
        image={Custom}
        imageAlt="Custom governance dashboards"
        bullets={governanceBullets}
        stats={["Actionable insights", "Audit readiness", "Better decisions"]}
        reverse
        overlayLabel="Custom Governance Intelligence"
        overlayText="Tailored reporting and compliance visibility that supports both day-to-day operations and strategic oversight."
      />

      <ProductFeatureCardsGrid
        eyebrow="Platform Modules"
        title="Built-In Modules for Custom Logistics Deployments"
        description="Capabilities designed to support process customization, integration orchestration, and control-room governance."
        cards={platformCards}
      />

      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heebo mb-4">
              Build Your Ideal Logistics Configuration
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Combine customized workflows with multimodal execution and
              telemetry intelligence for a complete, enterprise-ready logistics
              stack.
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
                Apply custom workflow controls to road movement operations.
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
                Extend custom process intelligence with real-time telemetry
                data.
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
