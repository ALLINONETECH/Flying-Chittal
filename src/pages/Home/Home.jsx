import { useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import CarouselCards from "../../component/common/CarouselCards";
import ProductShowcase from "../../component/common/ProductShowcase";
import TestimonialCarousel from "../../component/common/TestimonialCarousel";
import Automation1 from "../../assets/images/Automation1.png";
import Edge1 from "../../assets/images/Edge1.png";
import Empower from "../../assets/images/Empower.png";
import smalllogo from "../../assets/images/smalllogo.png";
import homebluebg from "../../assets/images/homebluebg.png";
import fclogo from "../../assets/images/fclogo.png";
import traksLogo from "../../assets/images/traks/Tracks Logo (Square)).png";
import mobilytLogo from "../../assets/images/Mobilyt/Mobilyt Logo.png";
import { Helmet } from "react-helmet-async";
export default function Home() {
  const digitalRef = useRef();
  const automateRef = useRef();
  const edgeComputeRef = useRef();
  const managedRef = useRef();

  const whatWeBringCards = [
    {
      icon: "🚀",
      title: "Intelligent Software Solutions",
      description:
        "We design and develop powerful mobile and web applications across Android, iOS, and browser platforms, backed by secure, cloud-native SaaS architectures for enterprises and government institutions.",
    },
    {
      icon: "⚙️",
      title: "Digital Automation & Optimisation",
      description:
        "Through AI-powered workflow automation, IoT integration, Smart and Intelligent sensors, and real-time monitoring systems, we enable transparency, accountability, and faster service delivery.",
    },
    {
      icon: "📊",
      title: "Data-Driven Decision Support",
      description:
        "We unlock real-time Business Intelligence through AI and advanced analytics, including predictive modelling, interactive dashboards, and intelligent reporting.",
    },
  ];

  const productsSolutions = [
    {
      title: "Flying Chital Intelligent Logistics Management",
      description:
        "Smart, multimodal integrated logistics management platform revolutionizing logistics with AI and real-time visibility.",
      image: fclogo,
      link: "/flyingchital",
      icon: "🚚",
    },
    {
      title: "Traks",
      description:
        "Intelligent field force management suite with AI & data analytics for field sales, service, and security operations.",
      image: traksLogo,
      link: "/traks",
      icon: "📍",
    },
    {
      title: "Mobilyt",
      description:
        "Comprehensive mobility platform enabling vehicle tracking, fleet management, and operational insights.",
      image: mobilytLogo,
      link: "/mobilyt",
      icon: "🚗",
    },
  ];

  const testimonials = [
    {
      quote:
        "Flying Chital has revolutionized our logistics operations. The real-time visibility and automation have reduced costs by 35% while improving delivery times.",
      author: "Rajesh Kumar",
      role: "VP Logistics",
      company: "Leading Retail Chain",
      rating: 5,
      avatar: null,
    },
    {
      quote:
        "Traks transformed our field operations. With real-time tracking and automated workflows, our service delivery efficiency increased by 45%.",
      author: "Priya Sharma",
      role: "Operations Manager",
      company: "Industrial Manufacturing",
      rating: 5,
      avatar: null,
    },
    {
      quote:
        "The data-driven insights from their platform helped us identify and prevent revenue leakages. Outstanding ROI within the first quarter.",
      author: "Vikram Singh",
      role: "CFO",
      company: "Mining & Resources",
      rating: 5,
      avatar: null,
    },
    {
      quote:
        "Their AI-powered automation eliminated manual inefficiencies completely. A game-changer for our organization's digital transformation journey.",
      author: "Meera Patel",
      role: "Chief Technology Officer",
      company: "Government Agency",
      rating: 5,
      avatar: null,
    },
  ];

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Flying Chital | Home</title>
        <meta
          name="description"
          content="Welcome to Flying Chital's official website. Explore our services, solutions, and expertise."
        />
        <meta
          name="keywords"
          content="Flying Chital, software solutions, web development, consulting"
        />
        <meta name="author" content="Flying Chital" />
        <meta property="og:title" content="Flying Chital | Home" />
        <meta
          property="og:description"
          content="Welcome to Flying Chital's official website. Explore our services, solutions, and expertise."
        />
        <meta property="og:url" content="https://atulyabhinav.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://atulyabhinav.com/logo.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <style>{`
        @keyframes fcTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="static overflow-x-hidden">
        <section
          className="bg-no-repeat bg-center bg-cover rounded-br-[60px] md:rounded-br-[100px] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(55, 52, 169, 0.75) 0%, rgba(99, 102, 241, 0.65) 50%, rgba(139, 92, 246, 0.60) 100%), url(${homebluebg})`,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>

          <div className="container mx-auto text-start px-4 py-12 md:px-8 md:py-16 lg:px-16 xl:px-24 relative z-10">
            <div className="mx-auto max-w-5xl">
              {/* Badge */}
              <div
                data-aos="fade-down"
                className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-2"
              >
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-white/90 font-heebo">
                  Next-Generation Digital Solutions
                </span>
              </div>

              {/* Main Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heebo text-white leading-tight mb-6 tracking-tight"
              >
                <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
                  Intelligent, Data-Driven &<br />
                </span>
                <span className="text-white">Sustainable Digital</span>
                <span className="block text-transparent bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text">
                  Transformation
                </span>
              </h1>

              {/* Accent line */}
              <div
                className="flex gap-2 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-1.5 w-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                <div className="h-1.5 w-12 bg-orange-300 rounded-full opacity-70"></div>
                <div className="h-1.5 w-6 bg-orange-200 rounded-full opacity-50"></div>
              </div>

              {/* Subtitle */}
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/90 max-w-3xl mb-8 font-heebo"
              >
                We are a technology-driven startup committed to being a catalyst
                for intelligent digital ecosystems across
                <span className="block sm:inline">
                  {" "}
                  Android, iOS, and web platforms.
                </span>
              </p>

              {/* CTA Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex flex-wrap gap-3 mb-12"
              >
                <button
                  onClick={() =>
                    digitalRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:shadow-2xl transform hover:scale-105"
                >
                  <span>Explore Solutions</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                {/* <button
                  onClick={() =>
                    automateRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Driving Efficiency
                </button> */}
              </div>

              {/* Quick Stats */}
              {/* <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                <div data-aos="fade-up" data-aos-delay="500">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-300">
                    50+
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Clients
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-300">
                    100+
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Solutions
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-300">
                    35%
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Cost Savings
                  </p>
                </div>
              </div> */}
            </div>

            {/* Scroll indicator */}
            <div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <svg
                className="w-6 h-6 text-white/60 hover:text-white/100 transition-colors cursor-pointer"
                onClick={() =>
                  digitalRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Section-Flying Chital - Smart and Intelligent Agile Logistics at Fingertip */}
        <Parallax y={[-20, 20]}>
          <section
            data-aos="fade-right"
            ref={digitalRef}
            className="text-gray-600 body-font px-4 md:px-8 lg:px-16 xl:px-24"
          >
            <div className="container px-2 md:px-5 py-5 mx-auto">
              <div className="flex flex-wrap w-full flex-col items-center text-center mb-10">
                <h1 className="font-heebo text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight title-font mb-4 text-center bg-gradient-to-r from-indigo-700 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
                  Intelligent Transformation, Delivered
                </h1>
                <p className="lg:w-3/4 w-full leading-relaxed text-gray-600 text-base md:text-lg mb-6 max-w-3xl">
                  Empowering enterprises with AI-driven solutions that
                  streamline operations, unlock insights, and drive measurable
                  business impact
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="w-12 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-8 h-1.5 rounded-full bg-indigo-600"></div>
                  <div className="w-4 h-1.5 rounded-full bg-orange-400"></div>
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col lg:flex-row bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 overflow-hidden max-w-full backdrop-blur-sm"
              >
                <div className="lg:w-1/3 md:w-full w-full px-4 py-8 md:py-12 bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center min-h-[250px]">
                  <img
                    data-aos="zoom-in-down"
                    className="object-contain object-center w-full h-full max-h-[280px] md:max-h-[380px] drop-shadow-lg"
                    alt="hero"
                    src={smalllogo}
                  />
                </div>
                <div className="lg:w-2/3 md:w-full w-full min-w-0 lg:pl-8 md:pl-6 px-6 py-8 md:py-12 flex flex-col justify-between">
                  <div
                    data-aos="fade-up-left"
                    className="w-full min-w-0 text-base md:text-lg leading-relaxed text-left font-heebo text-[#30343F]"
                  >
                    <div className="space-y-4 mb-6">
                      <p className="text-lg font-semibold text-indigo-700">
                        Who We Are
                      </p>
                      <p className="leading-relaxed">
                        We are a technology-driven startup committed to being a
                        catalyst for intelligent, data-driven and sustainable
                        digital transformation. Founded with a clear vision to
                        engineer impactful digital ecosystems, we design,
                        develop, test, deploy and maintain intelligent, smart
                        software applications across Android, iOS and web
                        platforms.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-lg font-semibold text-indigo-700">
                        What We Deliver
                      </p>
                      <p className="leading-relaxed">
                        By harnessing the power of Artificial Intelligence (AI),
                        Cloud Computing, Data Science, Internet of Things (IoT),
                        and advanced sensor technologies, Flying Chital delivers
                        integrated, future-ready solutions that address
                        real-world business, industrial, commercial, and
                        governance challenges.
                      </p>
                      {/* Key Metrics */}
                      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200">
                        <div className="text-center px-3">
                          <p className="text-2xl md:text-3xl font-bold text-indigo-700">
                            50+
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 font-medium">
                            Enterprise Clients
                          </p>
                        </div>
                        <div className="text-center px-3">
                          <p className="text-2xl md:text-3xl font-bold text-orange-500">
                            100+
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 font-medium">
                            Solutions Deployed
                          </p>
                        </div>
                        <div className="text-center px-3">
                          <p className="text-2xl md:text-3xl font-bold text-indigo-600">
                            35%
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 font-medium">
                            Avg Cost Reduction
                          </p>
                        </div>
                      </div> */}

                      {/* Tagline */}
                      <div className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-orange-100 border border-indigo-200 rounded-2xl py-3 px-4 overflow-hidden shadow-sm">
                        <div
                          className="inline-flex whitespace-nowrap font-semibold tracking-wide text-indigo-800"
                          style={{ animation: "fcTicker 18s linear infinite" }}
                        >
                          <span className="inline-block pr-16">
                            ✨ We don't just build software — we build
                            intelligent systems that deliver results.
                          </span>
                          <span
                            className="inline-block pr-16"
                            aria-hidden="true"
                          >
                            ✨ We don't just build software — we build
                            intelligent systems that deliver results.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* Section- Our Products & Solutions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <ProductShowcase products={productsSolutions} />
          </div>
        </section>

        {/* Section- Automation of Enterprise Workflows */}
        <Parallax y={[-10, 10]}>
          <section
            data-aos="fade-left"
            ref={automateRef}
            className="text-gray-700 body-font mt-2 bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-tl-[100px] rounded-br-[100px]"
          >
            <div className="container mx-auto py-14 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="h-full rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8 lg:p-10">
                    <div className="inline-flex items-center gap-2 mb-5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 text-xs sm:text-sm font-semibold font-heebo">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
                      Operations Intelligence
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-font mb-3 leading-tight font-heebo text-slate-900">
                      <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
                        Driving Efficiency
                      </span>
                    </h1>

                    <div className="flex gap-2 mb-6">
                      <div className="w-16 h-1.5 rounded-full bg-orange-400"></div>
                      <div className="w-8 h-1.5 rounded-full bg-indigo-300"></div>
                    </div>

                    <p className="mb-6 text-lg sm:text-xl font-semibold leading-relaxed font-heebo text-slate-800">
                      Protecting Revenue. Maximising Profitability.
                    </p>

                    <ul className="space-y-3 text-base md:text-lg font-heebo text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        <span>
                          Digitising processes to eliminate manual
                          inefficiencies
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        <span>
                          Reducing operational costs through intelligent
                          optimisation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        <span>
                          Identifying and preventing revenue leakages to
                          safeguard profitability
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        <span>
                          Strengthening financial control and maximising
                          measurable ROI
                        </span>
                      </li>
                    </ul>

                    <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-3 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-indigo-700">
                          24/7
                        </p>
                        <p className="text-xs sm:text-sm text-indigo-600">
                          Visibility
                        </p>
                      </div>
                      <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-3 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-orange-600">
                          Faster
                        </p>
                        <p className="text-xs sm:text-sm text-orange-500">
                          Decisions
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-slate-700">
                          Higher
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500">ROI</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative h-full min-h-[260px] sm:min-h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-orange-400/20 z-10"></div>
                    <img
                      className="object-cover object-center w-full h-full"
                      alt="Driving Efficiency"
                      src={Automation1}
                    />
                    <div className="absolute bottom-4 left-4 z-20 rounded-2xl bg-white/85 backdrop-blur-md border border-white px-4 py-3 shadow-lg">
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Outcome Focus
                      </p>
                      <p className="text-sm sm:text-base text-slate-800 font-bold">
                        Revenue Protection + Cost Optimisation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* Section- Edge Computing and Mobility */}
        <Parallax y={[-15, 15]}>
          <section
            data-aos="fade-right"
            ref={edgeComputeRef}
            className="text-gray-600 body-font mt-0 bg-white rounded-tl-[100px] rounded-br-[100px]"
          >
            <div className="container mx-auto flex py-12 md:flex-row flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-xl"
                  alt="hero"
                  src={Edge1}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 mb-1 leading-tight">
                  <span className="text-indigo-800 font-bold">
                    What We Bring
                  </span>
                  <span className="font-heebo font-bold">
                    {" "}
                    to Your Business
                  </span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <div className="mb-8 w-full px-4 md:px-0">
                  <CarouselCards cards={whatWeBringCards} />
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* Section- Managed IT Services */}
        <Parallax y={[-20, 20]}>
          <section
            data-aos="fade-left"
            ref={managedRef}
            className="text-gray-700 body-font mt-2 bg-gradient-to-br from-white via-slate-50 to-orange-50 rounded-tl-[100px] rounded-br-[100px]"
          >
            <div className="container mx-auto py-14 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                <div className="lg:col-span-5">
                  <div className="relative h-full min-h-[260px] sm:min-h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-indigo-400/20 z-10"></div>
                    <img
                      className="object-cover object-center w-full h-full"
                      alt="Future-Ready Intelligent Systems"
                      src={Empower}
                    />
                    <div className="absolute bottom-4 left-4 z-20 rounded-2xl bg-white/85 backdrop-blur-md border border-white px-4 py-3 shadow-lg">
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Platform Promise
                      </p>
                      <p className="text-sm sm:text-base text-slate-800 font-bold">
                        Scalable Systems, Measurable Impact
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="h-full rounded-3xl border border-orange-100 bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8 lg:p-10">
                    <div className="inline-flex items-center gap-2 mb-5 rounded-full bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1.5 text-xs sm:text-sm font-semibold font-heebo">
                      <span className="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
                      Growth-Centric Engineering
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-font mb-3 leading-tight font-heebo text-slate-900">
                      <span className="bg-gradient-to-r from-indigo-800 to-orange-600 bg-clip-text text-transparent">
                        Future-Ready Intelligent Systems
                      </span>
                    </h1>

                    <div className="flex gap-2 mb-6">
                      <div className="w-16 h-1.5 rounded-full bg-orange-400"></div>
                      <div className="w-8 h-1.5 rounded-full bg-indigo-300"></div>
                    </div>

                    <p className="mb-6 text-lg md:text-xl leading-relaxed font-heebo text-slate-700">
                      At Flying Chital Private Limited, we deliver intelligent,
                      scalable and future-ready digital solutions that create
                      measurable impact and sustainable growth across business,
                      industrial, commercial, and governance ecosystems.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-heebo text-slate-700">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        Adaptive cloud-native architectures
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        Operational intelligence
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        Sustainable digital transformation outcomes
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        High-performance governance and compliance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* Section- Testimonials */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
