import React, { useRef } from "react";
import Manphoto from "../../assets/images/Manphoto.png";
import siemens from "../../assets/images/siemens.png";
import Automation1 from "../../assets/images/Automation1.png";
import Edge1 from "../../assets/images/Edge1.png";
import Empower from "../../assets/images/Empower.png";
import Software from "../../assets/images/Software.png";
// import logos1 from "../../assets/images/logos1.png";
import smalllogo from "../../assets/images/smalllogo.png";
// import Digital from "../../assets/images/Homenew.png";
import Home1 from "../../assets/images/Home.png";
import EdgeComp12 from "../../assets/images/EdgeComp12.png";
import vectorImage from "../../assets/images/vector.png";
import homebluebg from "../../assets/images/homebluebg.png";
import home1 from "../../assets/images/home1.jpg";
import One from "../../component/common/svg/One";

import car from "../../assets/images/car.png";
import header from "../../assets/images/header.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const digitalRef = useRef();
  const automateRef = useRef();
  const edgeComputeRef = useRef();
  const managedRef = useRef();
  return (
    <div className="static">
      {/* Section-Header */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${homebluebg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          {/* <div className=" inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1
              data-aos="fade-left"
              className=" text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white"
            >
              Digital Transformation & <br /> Innovation
            </h1>
            <p
              data-aos="fade-right"
              className=" text-xl not-italic font-normal leading-7 font-heboo text-white   "
            >
              Unlock your digital transformation & innovation potential. We help
              implement modern digital <br /> technologies to solve business
              problems, optimize processes and save cost.
            </p>

            <div className=" justify-center mt-24 space-x-4">
              <button
                onClick={() => {
                  digitalRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
              >
                Digital Transformation and Innovation
              </button>
              <button
                onClick={() => {
                  automateRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
              >
                Automation of Enterprise Workflows
              </button>
              <button
                onClick={() => {
                  edgeComputeRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
              >
                Edge Computing and Mobility
              </button>
              <button
                onClick={() => {
                  managedRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white transition-all duration-300"
              >
                Managed IT Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section-Flying Chital - Smart Agile Logistics at Fingertip */}

      <section
        data-aos="fade-right"
        ref={digitalRef}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-5 mx-auto ">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <h1 class="font-heebo text-2xl sm:text-3xl lg:text-5xl font-bold leading-9 title-font mb-2 text-center text-gray-900 ">
              <span class="font-heebo text-2xl sm:text-3xl lg:text-5xl text-primary">
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
            <div className="lg:w-3/4 md:w-full w-full lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-10  text-[#30343F] ">
              <div
                data-aos="fade-up-left"
                className="flex h-3/4 w-full bg-cover bg-center bg-no-repeat rounded relative font-heebo"
              >
                <One />
              </div>
              <div className="flex justify-start mt-4 lg:mt-0">
                <Link to="/flyingchital">
                  <button className="inline-flex text-white font-bold bg-[#30343F] border-0 py-2 px-6 ml-4 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                    READ MORE{" "}
                    <span>
                      {" "}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2 "
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

      {/* Section- Automation of Enterprise Workflows */}
      <section
        data-aos="fade-left"
        ref={automateRef}
        className="text-gray-600 body-font mt-0 bg-gray-100"
        style={{ borderRadius: "100px 0px 100px 0px" }}
      >
        <div className="container mx-auto flex  px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={Automation1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Automation
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                of Enterprise Workflows
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            {/* <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  w-4/5 "> */}

            <p className="mb-8  text-lg md:text-xl lg:text-xl font-normal leading-normal md:leading-relaxed  w-4/5mb-8   font-heebo  text-[#30343F]  w-5/6 ">
              Automate Your Enterprise Digital Workflows for Enhanced
              Resilience, Scalability, and Sustainability. We Help Automate
              Enterprise Digital Workflows to Streamline Processes, Boost
              Productivity and Provide Data-Driven Insights. Automate Your
              Enterprise Digital Workflows for Enhanced Resilience, Scalability,
              and Sustainability. We Help Automate Enterprise Digital Workflows
              to Streamline Processes, Boost Productivity, and Provide
              Data-Driven Insights.
            </p>
          </div>
        </div>
      </section>

      {/* Section-Edge Computing and Mobility */}
      {/* <section className="text-gray-600 body-font bg-[#F6F7F8] rounded-tl-[70px] rounded-br-[70px]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  sm:text-4xl mb-4 text-start text-gray-900">
                            Edge Computing and Mobility
                        </h1>
                        <p className="mb-8 text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">
                            Our Edge Computing and Mobility Solutions enable non-connected
                            equipment, Industrial IoT devices, and workstations to capture and
                            process data without having to collaborate with a centralized
                            database system. Aligned with Industries 4.0 key driver for
                            Digital Transformation and Industrial Automation. Our Edge
                            Computing and Mobility Solutions enable non-connected equipment,
                            Industrial IoT devices, and workstations to capture and process
                            data without having to collaborate with a centralized database
                            system
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={Edge1}
                        />
                    </div>
                </div>
            </section> */}

      <div
        data-aos="fade-right"
        ref={edgeComputeRef}
        className="flex items-center justify-center  bg-cover bg-no-repeat "
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${home1}) lightgray 50% / cover no-repeat `,
        }}
      >
        <div className="w-full md:w-4/5 mx-auto text-center md:text-start mt-40 text-white grid content-end">
          <h1 className="font-heebo text-4xl font-bold mb-5 px-2">
            Edge Computing and Mobility
          </h1>
          <p className="font-heebo text-lg font-normal  mb-10 px-2">
            Our Edge Computing and Mobility Solutions enable non-connected
            equipment, Industrial IoT devices, and workstations to capture and
            process data without having to collaborate with a centralized
            database system. Aligned with Industries 4.0 key driver for Digital
            Transformation and Industrial Automation. Our Edge Computing and
            Mobility Solutions enable non-connected equipment, Industrial IoT
            devices, and workstations to capture and process data without having
            to collaborate with a centralized database system.
          </p>
        </div>
      </div>
      {/* Section- Managed IT Services*/}

      <section
        data-aos="fade-up"
        ref={managedRef}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Managed{" "}
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                <span className="border-b-4 border-orange-400">IT </span>
                Services
              </span>
            </h1>
            {/* <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>     */}
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4 ">
              <div
                className="rounded-lg h-64 overflow-hidden"
                data-aos="fade-up-left"
              >
                <img
                  data-aos="zoom-in"
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Empower}
                />
              </div>
              <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mt-6 mb-3 text-start">
                Empowering Business Through IT Solutions
              </h2>
              <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] text-start">
                We manage IT Services for applications and infrastructure, so
                that our clients can run their businesses. We help build and
                manage IT Infrastructure including private wireless, local area
                networks, wide area networks, edge networks, data centers and
                cloud networks.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4  " data-aos="fade-up-right">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  data-aos="zoom-in"
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Software}
                />
              </div>

              <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mt-6 mb-3 text-start">
                Comprehensive Software Solutions for Business
              </h2>
              <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] text-start">
                Build and Manage software Applications from core accounting,
                stock tracking, bank reconciliation, project management to
                automating workflows, payroll, CRM, manufacturing etc
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
