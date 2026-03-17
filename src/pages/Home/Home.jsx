import { useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Automation1 from "../../assets/images/Automation1.png";
import Edge1 from "../../assets/images/Edge1.png";
import Empower from "../../assets/images/Empower.png";
import smalllogo from "../../assets/images/smalllogo.png";
import homebluebg from "../../assets/images/homebluebg.png";
import { Helmet } from "react-helmet-async";
export default function Home() {
  const digitalRef = useRef();
  const automateRef = useRef();
  const edgeComputeRef = useRef();
  const managedRef = useRef();

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
          className="bg-no-repeat bg-center bg-cover rounded-br-[60px] md:rounded-br-[100px]"
          style={{
            backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${homebluebg})`,
          }}
        >
          <div className="container mx-auto text-start px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:px-24">
            <div className="mx-auto rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-8 shadow-xl">
              <h1
                data-aos="fade-left"
                className="text-3xl sm:text-4xl lg:text-6xl not-italic font-semibold font-heebo text-gray-100 dark:text-white leading-tight"
              >
                Intelligent, Data-Driven & <br /> Sustainable Digital
                Transformation
              </h1>
              <p
                data-aos="fade-right"
                className="mt-4 text-base sm:text-lg lg:text-xl not-italic font-normal leading-7 font-heboo text-white/95 max-w-4xl"
              >
                We are a technology-driven startup committed to being a catalyst
                for intelligent digital ecosystems across Android, iOS, and web
                platforms.
              </p>
              {/* <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    digitalRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-semibold leading-5 text-white bg-white/10 border border-white/30 py-2.5 px-5 rounded-full focus:outline-none hover:bg-white/20 transition-all duration-300"
                >
                  Home Page
                </button>
                <button
                  onClick={() =>
                    automateRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-semibold leading-5 text-white bg-white/10 border border-white/30 py-2.5 px-5 rounded-full focus:outline-none hover:bg-white/20 transition-all duration-300"
                >
                  Driving Efficiency
                </button>
                <button
                  onClick={() =>
                    edgeComputeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="inline-flex text-sm not-italic font-semibold leading-5 text-white bg-white/10 border border-white/30 py-2.5 px-5 rounded-full focus:outline-none hover:bg-white/20 transition-all duration-300"
                >
                  What We Bring
                </button>
                <button
                  onClick={() =>
                    managedRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-semibold leading-5 text-white bg-white/10 border border-white/30 py-2.5 px-5 rounded-full focus:outline-none hover:bg-white/20 transition-all duration-300"
                >
                  Results-Driven Systems
                </button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Section-Flying Chital - Smart Agile Logistics at Fingertip */}
        <Parallax y={[-20, 20]}>
          <section
            data-aos="fade-right"
            ref={digitalRef}
            className="text-gray-600 body-font px-4 md:px-8 lg:px-16 xl:px-24"
          >
            <div className="container px-2 md:px-5 py-5 mx-auto">
              <div className="flex flex-wrap w-full flex-col items-center text-center">
                <h1 className="font-heebo text-2xl sm:text-3xl lg:text-5xl font-bold leading-9 title-font mb-2 text-center text-gray-900">
                  {/* <span className="font-heebo text-2xl sm:text-3xl lg:text-5xl text-primary">
                    Home Page -&nbsp;
                  </span> */}
                  Intelligent Transformation, Delivered
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden max-w-full"
              >
                <div className="lg:max-w-lg lg:w-1/4 md:w-full w-full mb-0 px-4 py-6 md:py-10 bg-gray-50">
                  <img
                    data-aos="zoom-in-down"
                    className="object-contain object-center w-full h-full max-h-[220px] md:max-h-[300px]"
                    alt="hero"
                    src={smalllogo}
                  />
                </div>
                <div className="lg:w-3/4 md:w-full w-full min-w-0 lg:pl-6 md:pl-5 px-4 md:px-6 py-6 flex flex-col md:items-start md:text-left items-center text-center font-heebo text-[#30343F]">
                  <div
                    data-aos="fade-up-left"
                    className="flex h-3/4 w-full min-w-0 overflow-hidden bg-cover bg-center bg-no-repeat rounded relative font-heebo"
                  >
                    <div className="w-full min-w-0 text-base md:text-lg leading-relaxed text-left p-4">
                      <p className="mb-4">
                        We are a technology-driven startup committed to being a
                        catalyst for intelligent, data-driven and sustainable
                        digital transformation. Founded with a clear vision to
                        engineer impactful digital ecosystems, we design,
                        develop, test, deploy and maintain intelligent, smart
                        software applications across Android, iOS and web
                        platforms.
                      </p>
                      <p className="mb-4">
                        By harnessing the power of Artificial Intelligence (AI),
                        Cloud Computing, Data Science, Internet of Things (IoT),
                        and advanced sensor technologies, Flying Chital delivers
                        integrated, future-ready solutions that address
                        real-world business, industrial, commercial, and
                        governance challenges.
                      </p>
                      <div className="w-full max-w-full bg-primary/10 text-primary border border-primary/20 rounded-full py-2.5 px-3 overflow-hidden shadow-sm">
                        <div
                          className="inline-flex whitespace-nowrap font-semibold tracking-wide"
                          style={{ animation: "fcTicker 18s linear infinite" }}
                        >
                          <span className="inline-block pr-16">
                            We don’t just build software — we build intelligent
                            systems that deliver results.
                          </span>
                          <span
                            className="inline-block pr-16"
                            aria-hidden="true"
                          >
                            We don’t just build software — we build intelligent
                            systems that deliver results.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start mt-4 lg:mt-0">
                    {/* <Link to="/flyingchital">
                      <button className="inline-flex text-white font-bold bg-[#30343F] border-0 py-2 px-6 ml-4 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                        READ MORE
                        <span>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* Section- Automation of Enterprise Workflows */}
        <Parallax y={[-10, 10]}>
          <section
            data-aos="fade-left"
            ref={automateRef}
            className="text-gray-600 body-font mt-0 bg-gray-100 rounded-tl-[100px] rounded-br-[100px]"
          >
            <div className="container mx-auto flex py-12 md:flex-row flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 mb-1 leading-tight">
                  <span className="text-indigo-800 font-bold">Driving</span>
                  <span className="font-heebo font-bold"> Efficiency</span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <div className="mb-8 text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed w-4/5 font-heebo text-[#30343F]">
                  <p className="mb-3 font-semibold">
                    Protecting Revenue. Maximising Profitability.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                    <li>
                      Digitising processes to eliminate manual inefficiencies
                    </li>
                    <li>
                      Reducing operational costs through intelligent
                      optimisation
                    </li>
                    <li>
                      Identifying and preventing revenue leakages to safeguard
                      profitability
                    </li>
                    <li>
                      Strengthening financial control and maximising measurable
                      ROI
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-xl"
                  alt="hero"
                  src={Automation1}
                />
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
                <div className="mb-8 w-4/5 font-heebo text-[#30343F] grid gap-4">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5 text-left shadow-sm">
                    <p className="text-lg md:text-xl font-semibold mb-2">
                      🚀 Intelligent Software Solutions
                    </p>
                    <p className="text-base md:text-lg font-normal leading-relaxed">
                      We design and develop powerful mobile and web applications
                      across Android, iOS, and browser platforms, backed by
                      secure, cloud-native SaaS architectures for enterprises
                      and government institutions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5 text-left shadow-sm">
                    <p className="text-lg md:text-xl font-semibold mb-2">
                      ⚙️ Digital Automation & Optimisation
                    </p>
                    <p className="text-base md:text-lg font-normal leading-relaxed">
                      Through AI-powered workflow automation, IoT integration,
                      smart sensors, and real-time monitoring systems, we enable
                      transparency, accountability, and faster service delivery.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5 text-left shadow-sm">
                    <p className="text-lg md:text-xl font-semibold mb-2">
                      📊 Data-Driven Decision Support
                    </p>
                    <p className="text-base md:text-lg font-normal leading-relaxed">
                      We unlock real-time Business Intelligence through AI and
                      advanced analytics, including predictive modelling,
                      interactive dashboards, and intelligent reporting.
                    </p>
                  </div>
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
            className="text-gray-600 body-font mt-0 bg-gray-100 rounded-tl-[100px] rounded-br-[100px]"
          >
            <div className="container mx-auto flex py-12 md:flex-row flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 mb-1 leading-tight">
                  <span className="text-indigo-800 font-bold">
                    Future-Ready
                  </span>
                  <span className="font-heebo font-bold">
                    {" "}
                    Intelligent Systems
                  </span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <p className="mb-8 text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed w-4/5 font-heebo text-[#30343F]">
                  At Flying Chital Private Limited, we deliver intelligent,
                  scalable and future-ready digital solutions that create
                  measurable impact and sustainable growth across business,
                  industrial, commercial, and governance ecosystems.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-xl"
                  alt="hero"
                  src={Empower}
                />
              </div>
            </div>
          </section>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
