/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import OILGas1 from "../../assets/images/OILGas1.png";
import Blog1 from "../../assets/images/Blog1.png";
import IMining from "../../assets/images/IMining.png";
import IManufacture from "../../assets/images/IManufacture.png";
import ICement from "../../assets/images/ICement.png";
import Transformation from "../../assets/images/Transformation.png";
import Fertilizer1 from "../../assets/images/Fertilizer1.png";
import IAgro from "../../assets/images/IAgro.png";
import Warehouse from "../../assets/images/Warehouse.png";
import Aqua1 from "../../assets/images/Aqua1.png";

export default function Industry() {
  const transportRef = useRef();
  const miningRef = useRef();
  const metalsRef = useRef();
  const cementRef = useRef();
  const fertiliserRef = useRef();
  const oilRef = useRef();
  const warehousingRef = useRef();
  const agricultureRef = useRef();
  const aquacultureRef = useRef();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get("page");

  const scrollToSection = (sectionRef) => {
    if (!sectionRef?.current) return;
    const topPosition =
      sectionRef.current.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const map = {
      transport: transportRef,
      mining: miningRef,
      metals: metalsRef,
      cement: cementRef,
      fertiliser: fertiliserRef,
      oil: oilRef,
      warehousing: warehousingRef,
      agriculture: agricultureRef,
      aquaculture: aquacultureRef,
    };
    if (page && map[page]) scrollToSection(map[page]);
  }, [page]);

  const industries = [
    {
      sectionRef: transportRef,
      image: Transformation,
      title: "Transportation & Logistics",
      description:
        "India's logistics sector is witnessing a transformative shift towards Logistics 4.0, integrating IoT, AI, big data analytics, and automation to streamline operations, enhance efficiency, and optimize supply chains across its vast road, rail, port, and air networks.",
    },
    {
      sectionRef: miningRef,
      image: IMining,
      title: "Mining",
      description:
        "The Indian mining sector is a vital component of the economy, responsible for extraction of minerals including coal, iron ore, and bauxite. Smart technologies are revolutionizing operations, boosting safety, and driving efficiency at every stage.",
    },
    {
      sectionRef: metalsRef,
      image: IManufacture,
      title: "Metal Manufacturing",
      description:
        "India's metal manufacturing sector produces steel, aluminum, copper, and more — supporting infrastructure and automotive industries. Intelligent systems enable precision, waste reduction, and end-to-end traceability across plants.",
    },
    {
      sectionRef: cementRef,
      image: ICement,
      title: "Cement",
      description:
        "The Indian cement industry plays a pivotal role in economic development. Efficient logistics management — from raw material movement to timely dispatch of finished products — is critical, and smart solutions are bridging these gaps.",
    },
    {
      sectionRef: fertiliserRef,
      image: Fertilizer1,
      title: "Fertilizers",
      description:
        "Fertilizer and chemical plants are significant contributors to India's agricultural sector. Smart logistics and real-time monitoring ensure timely supply of inputs, supporting food security and rural development across the country.",
    },
    {
      sectionRef: oilRef,
      image: OILGas1,
      title: "Oil & Gas",
      description:
        "The Indian downstream sector encompasses refining and distribution of petroleum products. Intelligent fleet and asset management ensures a continuous supply of essential fuels that power industries and households across India.",
    },
    {
      sectionRef: warehousingRef,
      image: Warehouse,
      title: "Warehousing",
      description:
        "Warehousing in India is evolving into smart, efficient hubs through automation, robotics, and data analytics. IoT sensors, RFID, and automated storage systems optimize inventory tracking, minimize errors, and elevate supply chain performance.",
    },
    {
      sectionRef: agricultureRef,
      image: IAgro,
      title: "Agriculture",
      description:
        "India's agricultural sector is transforming through precision farming with drones, satellite imagery, and GPS. IoT devices and soil sensors provide real-time insights into crop conditions, empowering farmers to maximize yield and sustainability.",
    },
    {
      sectionRef: aquacultureRef,
      image: Aqua1,
      title: "Aquaculture",
      description:
        "India's aquaculture sector integrates IoT, sensors, and data analytics to monitor water quality, temperature, and feeding patterns. Automated feeding systems promote healthier species growth and more sustainable aquaculture practices.",
    },
  ];

  const quickNav = [
    "Transportation & Logistics",
    "Mining",
    "Metal Manufacturing",
    "Cement",
    "Fertilizers",
    "Oil & Gas",
    "Warehousing",
    "Agriculture",
    "Aquaculture",
  ];

  const stats = [
    { value: "9+", label: "Industries" },
    { value: "50+", label: "Deployments" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Uptime SLA" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(30, 27, 130, 0.95) 0%, rgba(55, 52, 169, 0.80) 60%, rgba(99, 55, 170, 0.75) 100%), url(${Blog1})`,
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-12 right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-8 left-12 w-96 h-56 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container px-6 pt-24 pb-10 mx-auto text-center">
          {/* Pill badge */}
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Our Industries
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold font-heebo text-white leading-tight mb-5">
            Industries <span className="text-orange-400">We Serve</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/80 font-heebo max-w-2xl mx-auto mb-10 leading-relaxed">
            We provide Smart and Intelligent Solutions to Simplify Your Future —
            across India&apos;s most critical sectors.
          </p>

          {/* Quick-nav chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {quickNav.map((label) => (
              <span
                key={label}
                className="bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-heebo font-medium px-4 py-1.5 rounded-full border border-white/20 cursor-default transition-colors duration-200"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Stats strip */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto mb-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur-sm py-6 px-4 text-center"
              >
                <div className="text-3xl font-bold font-heebo text-orange-400">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm font-heebo mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-heebo pb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Industries</span>
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-3">
            Sectors We <span className="text-indigo-700">Transform</span>
          </h2>
          <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-500 font-heebo max-w-2xl mx-auto text-lg">
            From mining to agriculture, our intelligent platforms drive
            efficiency and visibility across India&apos;s most critical
            industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                ref={industry.sectionRef}
                className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-heebo text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 font-heebo text-base leading-relaxed flex-1">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-indigo-900 py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-indigo-200 font-heebo text-lg mb-8">
            Connect with our team to discover how Flying Chittal&apos;s
            intelligent solutions can drive efficiency in your sector.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-heebo font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
