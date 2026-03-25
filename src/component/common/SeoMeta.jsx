import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Flying Chital";
const SITE_URL = "https://flyingchital.com";
const DEFAULT_IMAGE = `${SITE_URL}/vite.svg`;

const DEFAULT_SEO = {
  title: "Flying Chital | AI, IoT & Intelligent Enterprise Solutions",
  description:
    "Flying Chital builds intelligent enterprise software, AI-powered automation, IoT platforms, and data-driven solutions for logistics, mobility, and industrial operations.",
  keywords:
    "Flying Chital, AI software company, IoT platform company, enterprise software development, logistics software, fleet management system, industrial automation solutions, digital transformation services",
};

const GLOBAL_KEYWORDS =
  "Flying Chital, software company India, enterprise SaaS platform, AI and IoT company, cloud application development, scalable software architecture, real-time analytics platform, business automation solutions";

const ROUTE_SEO = {
  "/": {
    title: "Flying Chital | Intelligent Digital Transformation Solutions",
    description:
      "Explore Flying Chital's AI, IoT, and enterprise software solutions for logistics, mobility, and industrial digital transformation.",
    keywords:
      "digital transformation company, AI automation platform, IoT software solutions, enterprise technology partner, logistics intelligence software, industrial digital transformation",
  },
  "/about": {
    title: "About Us | Flying Chital",
    description:
      "Meet Flying Chital's leadership, development, and operations teams, including Bibhudutta Das, Principal Software Architect, driving innovation in AI, IoT, and enterprise software.",
    keywords:
      "about Flying Chital, leadership team, software architects, operations team, enterprise innovation, Bibhudutta Das, Principal Software Architect, full-stack technologist",
  },
  "/services": {
    title: "Services | Flying Chital",
    description:
      "Discover Flying Chital services including AI automation, enterprise app development, managed IT, and intelligent analytics.",
    keywords:
      "enterprise software services, AI development services, custom app development company, managed IT services provider, data analytics consulting, cloud-native application development",
  },
  "/contact": {
    title: "Contact Us | Flying Chital",
    description:
      "Get in touch with Flying Chital to discuss enterprise software, AI, and IoT solutions for your business.",
    keywords:
      "contact software company, enterprise software consultation, AI solutions consultation, IoT project discussion, request technology demo",
  },
  "/industry": {
    title: "Industry Solutions | Flying Chital",
    description:
      "Industry-focused digital solutions for logistics, manufacturing, mining, and operations with AI and data intelligence.",
    keywords:
      "industry solutions, manufacturing software, mining digital solutions, logistics technology",
  },
  "/asset": {
    title: "Asset Management | Flying Chital",
    description:
      "Smart asset management software with real-time monitoring, tracking, and analytics for enterprise operations.",
    keywords:
      "asset management software, asset tracking, enterprise monitoring, predictive maintenance",
  },
  "/mission": {
    title: "Our Mission | Flying Chital",
    description:
      "Learn Flying Chital's mission to deliver scalable, intelligent, and market-ready technology solutions.",
    keywords:
      "Flying Chital mission, company mission, technology vision, intelligent solutions",
  },
  "/vision": {
    title: "Our Vision | Flying Chital",
    description:
      "Explore Flying Chital's vision for AI-driven, data-centric enterprise transformation.",
    keywords:
      "Flying Chital vision, AI vision, data-driven enterprise, digital future",
  },
  "/values": {
    title: "Our Values | Flying Chital",
    description:
      "Flying Chital values: integrity, innovation, governance, transparency, and responsible technology leadership.",
    keywords:
      "company values, corporate governance, ethical technology, business integrity",
  },
  "/flyingchital": {
    title: "Flying Chital Logistics Platform",
    description:
      "Intelligent multimodal logistics management platform with real-time visibility and AI-driven optimization.",
    keywords:
      "logistics management platform, multimodal logistics software, supply chain visibility platform, AI logistics optimization, transport operations platform",
  },
  "/roadLogistics": {
    title: "Road Logistics Solutions | Flying Chital",
    description:
      "Optimize road logistics operations with real-time tracking, route intelligence, and operational analytics.",
    keywords:
      "road logistics software, route optimization platform, transport tracking system, fleet operations analytics, delivery management software",
  },
  "/railLogistics": {
    title: "Rail Logistics Solutions | Flying Chital",
    description:
      "Digital rail logistics solutions for tracking, planning, and enterprise-level rail operations management.",
    keywords:
      "rail logistics software, rail freight tracking system, freight rail management platform, rail operations optimization, wagon movement tracking",
  },
  "/flyingChitalVehicle": {
    title: "Vehicle Management | Flying Chital",
    description:
      "Advanced vehicle monitoring and operational control for smart fleet performance.",
    keywords:
      "vehicle management software, GPS vehicle tracking, fleet monitoring platform, telematics software solution, vehicle utilization analytics",
  },
  "/flyingChitalFleet": {
    title: "Fleet Management | Flying Chital",
    description:
      "AI-enabled fleet management with live insights, productivity metrics, and cost optimization.",
    keywords:
      "fleet management software, AI fleet analytics, live fleet tracking platform, transport management software, fleet cost optimization",
  },
  "/flyingChitalContainer": {
    title: "Container Management | Flying Chital",
    description:
      "Container logistics and movement intelligence for better turnaround and operational visibility.",
    keywords:
      "container management software, container tracking system, container logistics platform, yard operations optimization, turnaround time reduction",
  },
  "/agricultureAutomation": {
    title: "Agriculture Automation | Flying Chital",
    description:
      "Smart agriculture automation solutions powered by data, IoT, and intelligent monitoring.",
    keywords:
      "agriculture automation, agri tech, IoT farming, smart agriculture software",
  },
  "/aquacultureAutomation": {
    title: "Aquaculture Automation | Flying Chital",
    description:
      "Technology solutions for aquaculture operations, monitoring, and productivity optimization.",
    keywords:
      "aquaculture automation, fish farm monitoring, aquaculture software, smart aquaculture",
  },
  "/professional": {
    title: "Professional Services | Flying Chital",
    description:
      "Professional consulting and engineering services to accelerate enterprise digital initiatives.",
    keywords:
      "professional services, technology consulting, enterprise engineering, digital consulting",
  },
  "/telematics": {
    title: "Telematics Solutions | Flying Chital",
    description:
      "Telematics solutions for intelligent mobility, real-time vehicle data, and performance analytics.",
    keywords:
      "telematics platform, vehicle telematics software, mobility analytics solution, connected vehicle technology, real-time vehicle insights",
  },
  "/customized": {
    title: "Customized Solutions | Flying Chital",
    description:
      "Tailored enterprise software and platform solutions aligned to your business workflows and goals.",
    keywords:
      "custom software development company, enterprise workflow automation, tailored digital transformation solutions, bespoke SaaS platform development",
  },
  "/help": {
    title: "Help Center | Flying Chital",
    description:
      "Access support resources and get help with Flying Chital platforms and services.",
    keywords: "help center, support, customer support, product assistance",
  },
  "/career": {
    title: "Careers | Flying Chital",
    description:
      "Join Flying Chital and build impactful AI, IoT, and enterprise software products.",
    keywords:
      "careers, software jobs, AI jobs, technology careers, Flying Chital hiring",
  },
  "/blog": {
    title: "Blog | Flying Chital Insights",
    description:
      "Read Flying Chital insights on AI, logistics intelligence, industrial automation, and enterprise technology trends.",
    keywords:
      "enterprise technology blog, AI automation insights, logistics software trends, industrial digital transformation blog, software architecture articles",
  },
  "/allblogs": {
    title: "All Articles | Flying Chital Blog",
    description:
      "Browse all Flying Chital articles and thought leadership on digital transformation and intelligent operations.",
    keywords:
      "all blogs, tech articles, digital transformation insights, Flying Chital articles",
  },
  "/logisticsIntelligence": {
    title: "Logistics Intelligence | Flying Chital Blog",
    description:
      "Explore how AI and analytics improve logistics planning, execution, and visibility.",
    keywords:
      "logistics intelligence, AI logistics, supply chain analytics, smart logistics",
  },
  "/mACHArchitecture": {
    title: "MACH Architecture | Flying Chital Blog",
    description:
      "Understand MACH architecture and its role in scalable, modular enterprise platforms.",
    keywords:
      "MACH architecture, composable architecture, microservices, headless enterprise",
  },
  "/miningMetal": {
    title: "Mining & Metals Technology | Flying Chital Blog",
    description:
      "Digital innovation trends for mining and metals with AI, automation, and operational intelligence.",
    keywords:
      "mining technology, metals industry software, industrial automation, mining analytics",
  },
  "/miningExpo": {
    title: "Mining Expo Highlights | Flying Chital",
    description:
      "Insights and updates from mining expo events, technologies, and innovation initiatives.",
    keywords:
      "mining expo, industrial events, mining innovation, technology showcase",
  },
  "/fertilizer": {
    title: "Fertilizer Industry Solutions | Flying Chital Blog",
    description:
      "Smart digital solutions for fertilizer industry operations, monitoring, and optimization.",
    keywords:
      "fertilizer industry software, process optimization, plant analytics, industrial digitization",
  },
  "/edgeComputing": {
    title: "Edge Computing Insights | Flying Chital Blog",
    description:
      "Learn how edge computing enables real-time decision-making in enterprise operations.",
    keywords:
      "edge computing, real-time analytics, industrial IoT, distributed intelligence",
  },
  "/traks": {
    title: "Traks | Field Force Management Platform",
    description:
      "Traks by Flying Chital: intelligent field force management for sales, service, and security operations.",
    keywords:
      "Traks platform, field force management software, field team tracking app, sales and service operations software, workforce productivity platform",
  },
  "/mobilyt": {
    title: "Mobilyt | Smart Mobility Platform",
    description:
      "Mobilyt delivers vehicle tracking, mobility operations control, and actionable fleet insights.",
    keywords:
      "Mobilyt platform, smart mobility software, vehicle tracking platform, fleet intelligence dashboard, mobility operations control",
  },
  "/chat": {
    title: "Chat Support | Flying Chital",
    description:
      "Connect with Flying Chital through chat for product and service inquiries.",
    keywords:
      "chat support, customer chat, Flying Chital support, product inquiry",
  },
  "/termsandcondition": {
    title: "Terms and Conditions | Flying Chital",
    description:
      "Read Flying Chital terms and conditions for website and service usage.",
    keywords:
      "terms and conditions, legal terms, website terms, service policy",
  },
};

const toTitleFromPath = (pathname) => {
  const raw = pathname.replace(/^\//, "").replace(/[-_]/g, " ");
  if (!raw) {
    return DEFAULT_SEO.title;
  }

  const normalized = raw
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split("/")
    .map((segment) =>
      segment
        .split(" ")
        .filter(Boolean)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" "),
    )
    .join(" | ");

  return `${normalized} | ${SITE_NAME}`;
};

const BIBHUDUTTA_PROFILE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Bibhudutta Das",
    jobTitle: "Principal Software Architect",
    description:
      "Full-stack technologist specializing in architecting and scaling production systems for enterprises and high-growth startups.",
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/about`,
  },
};

export default function SeoMeta() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <Helmet prioritizeSeoTags>
        <title>Admin | {SITE_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    );
  }

  const pageSeo = ROUTE_SEO[pathname] || {
    title: toTitleFromPath(pathname),
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  };

  const mergedKeywords = Array.from(
    new Set(
      `${pageSeo.keywords}, ${GLOBAL_KEYWORDS}`.split(",").map((k) => k.trim()),
    ),
  ).join(", ");

  const canonicalPath = pathname === "/" ? "" : pathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogType =
    pathname.includes("blog") || pathname === "/allblogs"
      ? "article"
      : "website";

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{pageSeo.title}</title>
      <meta name="description" content={pageSeo.description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="author" content="Flying Chital Private Limited" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageSeo.title} />
      <meta property="og:description" content={pageSeo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.title} />
      <meta name="twitter:description" content={pageSeo.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {pathname === "/about" ? (
        <>
          <meta name="person" content="Bibhudutta Das" />
          <meta name="designation" content="Principal Software Architect" />
          <script type="application/ld+json">
            {JSON.stringify(BIBHUDUTTA_PROFILE_SCHEMA)}
          </script>
        </>
      ) : null}
    </Helmet>
  );
}
