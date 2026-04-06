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
      key: "transport",
      sectionRef: transportRef,
      image: Transformation,
      accent: "from-indigo-500 to-blue-500",
      badge: "Logistics 4.0",
      title: "Transportation & Logistics",
      description:
        "India's logistics sector is witnessing a transformative shift towards Logistics 4.0, integrating IoT, AI, big data analytics, and automation to streamline operations, enhance efficiency, and optimize supply chains across its vast road, rail, port, and air networks.",
      outcomes: [
        "Real-time movement visibility",
        "Route and asset intelligence",
        "Control tower execution",
      ],
    },
    {
      key: "mining",
      sectionRef: miningRef,
      image: IMining,
      accent: "from-amber-500 to-orange-500",
      badge: "Safer extraction",
      title: "Mining",
      description:
        "The Indian mining sector is a vital component of the economy, responsible for extraction of minerals including coal, iron ore, and bauxite. Smart technologies are revolutionizing operations, boosting safety, and driving efficiency at every stage.",
      outcomes: [
        "Mine-to-dispatch visibility",
        "Operational safety monitoring",
        "Faster production decisions",
      ],
    },
    {
      key: "metals",
      sectionRef: metalsRef,
      image: IManufacture,
      accent: "from-slate-500 to-zinc-700",
      badge: "Plant precision",
      title: "Metal Manufacturing",
      description:
        "India's metal manufacturing sector produces steel, aluminum, copper, and more — supporting infrastructure and automotive industries. Intelligent systems enable precision, waste reduction, and end-to-end traceability across plants.",
      outcomes: [
        "Shopfloor traceability",
        "Reduced operational waste",
        "Integrated plant analytics",
      ],
    },
    {
      key: "cement",
      sectionRef: cementRef,
      image: ICement,
      accent: "from-stone-500 to-orange-400",
      badge: "Dispatch reliability",
      title: "Cement",
      description:
        "The Indian cement industry plays a pivotal role in economic development. Efficient logistics management — from raw material movement to timely dispatch of finished products — is critical, and smart solutions are bridging these gaps.",
      outcomes: [
        "Inbound material coordination",
        "Dispatch planning",
        "Improved plant responsiveness",
      ],
    },
    {
      key: "fertiliser",
      sectionRef: fertiliserRef,
      image: Fertilizer1,
      accent: "from-lime-500 to-emerald-500",
      badge: "Supply assurance",
      title: "Fertilizers",
      description:
        "Fertilizer and chemical plants are significant contributors to India's agricultural sector. Smart logistics and real-time monitoring ensure timely supply of inputs, supporting food security and rural development across the country.",
      outcomes: [
        "Allocation visibility",
        "Distribution coordination",
        "Timely input delivery",
      ],
    },
    {
      key: "oil",
      sectionRef: oilRef,
      image: OILGas1,
      accent: "from-rose-500 to-orange-500",
      badge: "Asset continuity",
      title: "Oil & Gas",
      description:
        "The Indian downstream sector encompasses refining and distribution of petroleum products. Intelligent fleet and asset management ensures a continuous supply of essential fuels that power industries and households across India.",
      outcomes: [
        "Fleet uptime monitoring",
        "Refinery-to-market tracking",
        "Critical supply continuity",
      ],
    },
    {
      key: "warehousing",
      sectionRef: warehousingRef,
      image: Warehouse,
      accent: "from-cyan-500 to-sky-500",
      badge: "Warehouse intelligence",
      title: "Warehousing",
      description:
        "Warehousing in India is evolving into smart, efficient hubs through automation, robotics, and data analytics. IoT sensors, RFID, and automated storage systems optimize inventory tracking, minimize errors, and elevate supply chain performance.",
      outcomes: [
        "Inventory accuracy",
        "Automated tracking flows",
        "Faster warehouse throughput",
      ],
    },
    {
      key: "agriculture",
      sectionRef: agricultureRef,
      image: IAgro,
      accent: "from-emerald-500 to-green-500",
      badge: "Precision farming",
      title: "Agriculture",
      description:
        "India's agricultural sector is transforming through precision farming with drones, satellite imagery, and GPS. IoT devices and soil sensors provide real-time insights into crop conditions, empowering farmers to maximize yield and sustainability.",
      outcomes: [
        "Field condition monitoring",
        "Yield-oriented decisions",
        "Sustainable input planning",
      ],
    },
    {
      key: "aquaculture",
      sectionRef: aquacultureRef,
      image: Aqua1,
      accent: "from-teal-500 to-cyan-500",
      badge: "Sustainable aquaculture",
      title: "Aquaculture",
      description:
        "India's aquaculture sector integrates IoT, sensors, and data analytics to monitor water quality, temperature, and feeding patterns. Automated feeding systems promote healthier species growth and more sustainable aquaculture practices.",
      outcomes: [
        "Water quality visibility",
        "Feeding automation",
        "Healthier growth cycles",
      ],
    },
  ];

  const stats = [
    { value: "9+", label: "Industry ecosystems" },
    { value: "50+", label: "Operational deployments" },
    { value: "15+", label: "Years of execution" },
    { value: "99%", label: "Platform reliability" },
  ];

  return (
    <div className="overflow-x-hidden bg-slate-50">
      <section
        className="relative overflow-hidden rounded-br-[60px] bg-no-repeat bg-center bg-cover md:rounded-br-[110px]"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(30, 27, 130, 0.95) 0%, rgba(55, 52, 169, 0.80) 60%, rgba(99, 55, 170, 0.75) 100%), url(${Blog1})`,
        }}
      >
        <div className="absolute -top-6 right-16 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 left-8 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent" />

        <div className="relative container mx-auto px-6 pt-20 pb-20 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-white/90 backdrop-blur-sm">
                Our Industries
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white font-heebo md:text-6xl lg:text-7xl">
                Industry-ready platforms with a sharper operational edge.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                Flying Chital helps organizations modernize movement,
                monitoring, and decision-making across logistics, mining,
                manufacturing, warehousing, agriculture, and allied sectors.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                >
                  Talk to Our Team
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-2 text-sm text-white/65 font-heebo">
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Industries</span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/25 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.32)] backdrop-blur-md">
              <div className="grid grid-cols-2 gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-5"
                  >
                    <p className="text-3xl font-bold text-orange-400 font-heebo">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-100/90">
                  Industry navigator
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {industries.map((industry) => (
                    <button
                      key={industry.key}
                      type="button"
                      onClick={() => scrollToSection(industry.sectionRef)}
                      className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/16"
                    >
                      {industry.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-6 pb-14">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
                  Sector transformation
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900 font-heebo lg:text-4xl">
                  Operational design for complex industries.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Each sector has different movement patterns, risk points, and
                execution constraints. Our solutions are shaped around those
                realities instead of forcing generic workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <article
                key={industry.key}
                ref={industry.sectionRef}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="grid items-stretch gap-0 lg:grid-cols-2">
                  <div
                    className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${industry.accent}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent" />
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className={`p-6 lg:p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full bg-gradient-to-r ${industry.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white`}
                      >
                        {industry.badge}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Sector {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 font-heebo lg:text-3xl">
                      {industry.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {industry.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {industry.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                        >
                          <p className="text-sm font-semibold leading-6 text-slate-700">
                            {outcome}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => scrollToSection(industry.sectionRef)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                      >
                        Focus on this sector
                      </button>
                      <Link
                        to="/contact"
                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                      >
                        Discuss solutions
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.16)] lg:px-12">
            <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200">
                Let&apos;s map your use case
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white font-heebo lg:text-5xl">
                Ready to modernize your industry operations?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 lg:text-lg">
                Share your operational model, visibility gaps, and business
                constraints. We&apos;ll help shape the right execution approach.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
