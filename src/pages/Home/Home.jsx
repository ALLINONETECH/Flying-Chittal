import { useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Automation1 from "../../assets/images/Automation1.png";
import Edge1 from "../../assets/images/Edge1.png";
import Empower from "../../assets/images/Empower.png";
import smalllogo from "../../assets/images/smalllogo.png";
import homebluebg from "../../assets/images/homebluebg.png";
import One from "../../component/common/svg/One";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Home() {
  const digitalRef = useRef();
  const automateRef = useRef();
  const edgeComputeRef = useRef();
  const managedRef = useRef();

  return (
    <ParallaxProvider>
      <Helmet>
        <title>Atulya Bhinav | Home</title>
        <meta
          name="description"
          content="Welcome to Atulya Bhinav's official website. Explore our services, solutions, and expertise."
        />
        <meta
          name="keywords"
          content="Atulya Bhinav, software solutions, web development, consulting"
        />
        <meta name="author" content="Atulya Bhinav" />
        <meta property="og:title" content="Atulya Bhinav | Home" />
        <meta
          property="og:description"
          content="Welcome to Atulya Bhinav's official website. Explore our services, solutions, and expertise."
        />
        <meta property="og:url" content="https://atulyabhinav.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://atulyabhinav.com/logo.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="static">
        <section
          className="bg-no-repeat bg-center bg-cover rounded-br-[100px]"
          style={{
            backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${homebluebg})`,
          }}
        >
          <div className="container p-6 mx-auto text-start">
            <div className="mx-auto">
              <h1
                data-aos="fade-left"
                className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-gray-100 dark:text-white"
              >
                Digital Transformation & <br /> Innovation
              </h1>
              <p
                data-aos="fade-right"
                className="text-xl not-italic font-normal leading-7 font-heboo text-white"
              >
                Unlock your digital transformation & innovation potential. We
                help implement modern digital <br /> technologies to solve
                business problems, optimize processes and save cost.
              </p>
              <div className="justify-center mt-24 space-x-4">
                <button
                  onClick={() =>
                    digitalRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
                >
                  Digital Transformation and Innovation
                </button>
                <button
                  onClick={() =>
                    automateRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
                >
                  Automation of Enterprise Workflows
                </button>
                <button
                  onClick={() =>
                    edgeComputeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
                >
                  Edge Computing and Mobility
                </button>
                <button
                  onClick={() =>
                    managedRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
                >
                  Managed IT Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section-Flying Chital - Smart Agile Logistics at Fingertip */}
        <Parallax y={[-20, 20]}>
          <section
            data-aos="fade-right"
            ref={digitalRef}
            className="text-gray-600 body-font"
          >
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap w-full flex-col items-center text-center">
                <h1 className="font-heebo text-2xl sm:text-3xl lg:text-5xl font-bold leading-9 title-font mb-2 text-center text-gray-900">
                  <span className="font-heebo text-2xl sm:text-3xl lg:text-5xl text-primary">
                    Flying Chital -&nbsp;
                  </span>
                  Smart Agile Logistics at Fingertip...
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col lg:flex-row bg-white"
              >
                <div className="lg:max-w-lg lg:w-1/4 md:w-full w-full mb-5 md:mb-0 px-3 py-10">
                  <img
                    data-aos="zoom-in-down"
                    className="object-cover object-center w-full h-full"
                    alt="hero"
                    src={smalllogo}
                  />
                </div>
                <div className="lg:w-3/4 md:w-full w-full lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-10 text-[#30343F]">
                  <div
                    data-aos="fade-up-left"
                    className="flex h-3/4 w-full bg-cover bg-center bg-no-repeat rounded relative font-heebo"
                  >
                    <One />
                  </div>
                  <div className="flex justify-start mt-4 lg:mt-0">
                    <Link to="/flyingchital">
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
                    </Link>
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
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                  alt="hero"
                  src={Automation1}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                  <span className="text-indigo-800 font-bold text-[40px]">
                    Automation
                  </span>
                  <span className="text-[40px] font-heebo font-bold">
                    {" "}
                    of Enterprise Workflows
                  </span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <p className="mb-8 text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed w-4/5 font-heebo text-[#30343F]">
                  Automate Your Enterprise Digital Workflows for Enhanced
                  Resilience, Scalability, and Sustainability. We Help Automate
                  Enterprise Digital Workflows to Streamline Processes, Boost
                  Productivity and Provide Data-Driven Insights.
                </p>
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
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                  alt="hero"
                  src={Edge1}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                  <span className="text-indigo-800 font-bold text-[40px]">
                    Edge Computing
                  </span>
                  <span className="text-[40px] font-heebo font-bold">
                    {" "}
                    and Mobility
                  </span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <p className="mb-8 text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed w-4/5 font-heebo text-[#30343F]">
                  Enhance Your Edge Computing and Mobility Solutions. We Enable
                  Efficient Edge Computing, Support Data-Driven Decision-Making,
                  and Enable Seamless Mobility Solutions to Improve Operational
                  Efficiency and Agility.
                </p>
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
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                <img
                  className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                  alt="hero"
                  src={Empower}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                  <span className="text-indigo-800 font-bold text-[40px]">
                    Managed IT
                  </span>
                  <span className="text-[40px] font-heebo font-bold">
                    Services
                  </span>
                </h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                <p className="mb-8 text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed w-4/5 font-heebo text-[#30343F]">
                  Streamline Your IT Operations with Our Managed IT Services.
                  Our Expert Team Provides Comprehensive Support, Proactive
                  Monitoring, and Strategic IT Solutions to Ensure Your Systems
                  Operate Efficiently and Securely.
                </p>
              </div>
            </div>
          </section>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
