import React from "react";
import Rightarr from "../../assets/images/Rightarr.png";
import smalllogo from "../../assets/images/smalllogo.png";
import Citem1 from "../../assets/images/flaying-item1.png";
import Citem2 from "../../assets/images/flaying-item2.png";
import Citem3 from "../../assets/images/flaying-item3.png";
import right from "../../assets/images/right.png";
import group from "../../assets/images/Group 14.png";
import sc1 from "../../assets/images/sc1.png";
import sc2 from "../../assets/images/sc2.png";
import sc3 from "../../assets/images/sc3.png";
import sc4 from "../../assets/images/sc4.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import { Link } from "react-router-dom";
export default function flyingChital() {
  return (
    <div className="">
      <section className="bg-[#3734a9]  dark:bg-gray-900 rounded-br-[100px]">
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            {/* <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt />
                        </a> */}
            {/* Mobile menu button */}
            <div className="flex lg:hidden"></div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div>
        </nav>
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            {/* <h1 className="text-6xl font-semibold  dark:text-white lg:text-6xl mt-6 text-gray-200 dark:text-gray-300">Flying Chital HEM/HMV/LMV  Mobile Asset Management System</h1> */}
            <h2 className="mt-6 text-gray-200 dark:text-gray-300  text-4xl font-semibold">
              Flying Chital
            </h2>
            <p className="mt-6 text-gray-200 dark:text-gray-300 ">
              Smart Agile Logistics at Fingertip...
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
            <p className="mt-3 text-sm text-gray-400 "></p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font  rounded-tl-[50px] rounded-br-[50px] ">
        <div className="container px-5 pt-10 mx-auto">
          <div class="text-center mb-5">
            <h1 class="sm:text-4xl text-4xl font-medium title-font text-gray-900 mb-1">
              Flying Chital
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto ">
          <div className="flex flex-row ml-20  ">
            <div className=" m-auto mb-28">
              <img className="object-cover w-auto" alt="hero" src={smalllogo} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5">
              <div className="my-2 rounded-md p-5 bg-slate-200">
                <p className="mb-4 text-justify text-xl mt-2 mr-2">
                  Flying Chital stands as a trailblazing, multi-modal integrated
                  logistics management platform, revolutionizing the logistics
                  landscape with its comprehensive suite of services. By
                  combining advanced analytics, customized reporting
                  capabilities and infographics it seamlessly streamlines and
                  optimizes logistics operations, providing invaluable logistics
                  intelligence, connectivity, and real-time virtualization.{" "}
                </p>
              </div>
              <div className="bg-orange-50 p-5">
                <p className="mb-4 text-justify text-xl mt-2 mr-2">
                  Positioned at the forefront of its category, Flying Chital's
                  mobility feature offers 'Smart Agile Logistics Operations at
                  Fingertip,' ensuring unparalleled accessibility and 100%
                  visibility, irrespective of location or device. Moreover, its
                  integrated digital platform interfaces effortlessly with
                  various Government Regulatory Portals, including Vahan,
                  Parivahan, GST Portal, Govt Mining Regulatory Portals,
                  ERP/SAP, and more, enabling real-time data access through
                  customizable dashboards and reports.{" "}
                </p>
              </div>
              <div className="my-2 rounded-md p-5 bg-zinc-100">
                <p className="mb-4 text-justify text-xl mt-2 mr-2">
                  This innovative platform not only ensures end-to-end
                  visibility from source to destination but also significantly
                  reduces turnaround times, operational expenses, and the risks
                  of pilferage and revenue leakages. With its adaptability to
                  multiple transportation modes, including road, rail,
                  container, and port terminals, this digital logistics
                  management system serves as a versatile, comprehensive
                  solution for businesses operating in the modern logistics
                  landscape. Flying Chital is a cost effective conveneient door
                  way to Logistics 4.0.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px] bg-gray-100">
        <div className="container px-32 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="container px-5 pt-20 mx-auto">
              <div class="text-center mb-5">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                  Modules & Features
                </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                <div class="flex justify-center">
                  <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                </div>
              </div>
            </div>

            <div className=" w-auto md:w-1/2 p-4">
              <div
                className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                style={{
                  width: "full",
                  height: "full",
                  backgroundSize: "cover",
                  // backgroundImage:`url(${Card10})`,
                  backgroundColor: "black",
                }}
              >
                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">
                  Rail Logistics
                </h2>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-white text-justify">
                    Rail logistics, also known as rail freight logistics or rail
                    transportation logistics, refers to the process of planning,
                    implementing, and controlling the efficient movement of
                    goods, services, or information via railroads.{" "}
                  </p>
                </div>

                <div className="flex justify-end mx-2 ">
                  <Link to="/railLogistics">
                    <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 ml-4 mb-2 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
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
            <div className=" w-auto md:w-1/2 p-4">
              <div
                className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                style={{
                  width: "full",
                  height: "full",
                  backgroundSize: "cover",
                  // backgroundImage:`url(${Card10})`,
                  backgroundColor: "black",
                }}
              >
                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">
                  Road Logistics
                </h2>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-white text-justify">
                    Road logistics, also known as road transport or freight
                    transportation by road, is the process of moving goods and
                    commodities from one place to another using trucks, vans,
                    and other vehicles on roads and highways.
                  </p>
                </div>
                <div className="flex justify-end mx-2 ">
                  <Link to="/roadLogistics">
                    <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 ml-4 mb-2 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
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
            <div className=" w-auto md:w-1/2 p-4">
              <div
                className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                style={{
                  width: "full",
                  height: "full",
                  backgroundSize: "cover",
                  // backgroundImage:`url(${Card10})`,
                  backgroundColor: "black",
                }}
              >
                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">
                  Telematics
                </h2>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-white text-justify">
                    Telematics refers to the integration of telecommunications
                    and informatics, primarily in vehicles. It involves the use
                    of technology to monitor and transmit information about
                    vehicles.{" "}
                  </p>
                </div>
                <div className="flex justify-end mx-2 ">
                  <Link to="/telematics">
                    <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 ml-4 mb-2 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
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
            <div className=" w-auto md:w-1/2 p-4">
              <div
                className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                style={{
                  width: "full",
                  height: "full",
                  backgroundSize: "cover",
                  // backgroundImage:`url(${Card10})`,
                  backgroundColor: "black",
                }}
              >
                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">
                  Customized Features
                </h2>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-white text-justify">
                    Logistics involves the management and coordination of the
                    movement of goods, services, and information throughout the
                    supply chain. Customized features in logistics can enhance
                    efficiency & accuracy.
                  </p>
                </div>
                <div className="flex justify-end mx-2 ">
                  <Link to="/customized">
                    <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 ml-4 mb-2 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
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
        </div>
      </section>

      <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] pb-10">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
            <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">
              Flyingchital does
            </h1>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed font-bold">
                Digitalization
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Reduced Paper and Menial Work
                  </p>
                </div>
              </p>
            </div>

            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Weighment Solutions
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Man less, In Motion Weigh Bridges
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Mobility
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Mobile App along with web version
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Automation
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Vehicle & Driver Assignment, Entry, Exit, Weighment,
                    Validation & Verification, Documentation
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Telematics
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    GPS Trace and Track, Fixed/Portable/Solar
                  </p>
                </div>
              </p>
            </div>
          </div>
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                HEM/HMV/LMV Management
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Trip level within mines, plants, port
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Analytics & Customised Reports{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Single Integrated Digital Platform
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                Multi Modal
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Road, Rail, Port Terminals
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base font-bold">
                {" "}
                End to End Visibility
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base font-normal">
                    Anytime/Anywhere/Any Device
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
            <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">
              Logistics – Every Minute Fire Fighting
            </h1>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Current process disjointed
              </p>
            </div>

            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Data collected offline - Not leveraged to full potential{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Manual and paper-based system
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                High dependency on manpower{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Higher TATs - higher cost{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Limited visibility and control
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">Delays and chaos</p>
            </div>
          </div>
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
            <img
              className="object-cover object-center absolute ml-52 bottom-48"
              alt="hero"
              src={Citem2}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Citem1}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex pl-56 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={Citem3}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              Smart Agile Logistics – Smooth Operations
            </h1>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>

            <div className="mx-auto flex py-12 md:flex-row flex-col ">
              <div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    Reduced
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">
                        Turn Around Time (TAT){" "}
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">
                        Cost of Operations
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">
                        Revenue Leakage/Los{" "}
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base"> Fatigue</p>
                    </div>
                  </p>
                </div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={Rightarr} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    Increased
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">
                        Production Efficiency{" "}
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">Top line</p>
                    </div>
                    <div className="flex mt-2">
                      <span>
                        <img className="p-1" src={Rightarr} alt="" />
                      </span>
                      <p className="leading-relaxed text-base">Bottom line</p>
                    </div>
                  </p>
                </div>
              </div>
              <div className="pl-20 mt-4">
                <div className="flex mt-2">
                  <span>
                    <img className="p-1" src={right} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    End to End Visibility – Real Time
                  </p>
                </div>

                <div className="flex mt-2">
                  <span>
                    <img className="p-1" src={right} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    Trip Level Monitoring and Control
                  </p>
                </div>
                <div className="flex mt-2">
                  <span>
                    <img className="p-1" src={right} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    Proactive Preventive Action
                  </p>
                </div>
                <div className="flex mt-2">
                  <span>
                    <img className="p-1" src={right} alt="" />
                  </span>
                  <p className="leading-relaxed text-base">
                    No Need for Reactive Corrective Action{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-indigo-800 rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-1">
              Features
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className=" md:w-1/3 p-4 ">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] h-full  bg-white shadow-lg  md:shadow-xl ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 font-bold title-font mb-2">
                  Single Integrated Solution Multi Model-Road and Rail
                </h1>
                <div className="">
                  <p className="leading-relaxed text-base">
                    Competition is trying to solve individual ecosystem
                    problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] h-full  bg-white shadow-lg  md:shadow-xl ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 font-bold title-font mb-2">
                  Case Flow Optimization
                </h1>
                <div className="">
                  <p className="leading-relaxed text-base">
                    SCL module optimizes Cash flow for enterprises and
                    transports.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] h-full  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 font-bold title-font mb-2">
                  Complete Mobility
                </h1>
                <div className="">
                  <p className="leading-relaxed text-base">
                    Mobile based deep integration with ERP platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] h-full  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 font-bold title-font mb-2">
                  Visibility and control
                </h1>

                <div className="">
                  <p className="leading-relaxed text-base">
                    Enterprises, Transporters, Truck owners get complete
                    visibility and control of their bussiness.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 title-font mb-2 font-bold">
                  Profiles
                </h1>
                <div className="">
                  <p className="leading-relaxed text-base">
                    Instead of eliminating stakeholders, We ‘empower’ them
                    through our platform{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={group} alt="" />
                </div>
                <h1 className="text-xl text-gray-900 font-bold title-font mb-2">
                  Revenue Optimization
                </h1>
                <div className="pb-6">
                  <p className="leading-relaxed text-base">
                    Enterprises reduce costs. Transporters increase revenue. All
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              Sample Screenshots
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap  place-content-center ">
            <div className=" flex m-auto mb-28 w-1/4  place-content-center">
              <img
                className="object-non object-center w-auto "
                alt="hero"
                src={sc1}
              />
            </div>
            <div className=" flex m-auto mb-28 w-1/4  place-content-center">
              <img className="object-cover w-auto" alt="hero" src={sc2} />
            </div>
            <div className=" m-auto flex m-auto mb-28 w-1/4  place-content-center">
              <img className="object-cover w-auto " alt="hero" src={sc3} />
            </div>
            <div className=" flex m-auto mb-28 w-1/4  place-content-center">
              <img className="object-cover w-auto " alt="hero" src={sc4} />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
            <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">
              In Summary
            </h1>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Current process disjointed
              </p>
            </div>

            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Data collected offline - Not leveraged to full potential{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Manual and paper-based system
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                High dependency on manpower{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Higher TATs - higher cost{" "}
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Limited visibility and control
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={Rightarr} alt="" />
              </span>
              <p className="leading-relaxed text-base">Delays and chaos</p>
            </div>
          </div>
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
            <img
              className="object-cover object-center absolute ml-52 bottom-48"
              alt="hero"
              src={Citem2}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Citem1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
