import React from "react";

import rail1 from "../../assets/images/rail1.png";
import rail2 from "../../assets/images/rail2.png";
import rail3 from "../../assets/images/rail3.png";
import rail4 from "../../assets/images/rail4.png";
import truck1 from "../../assets/images/truck1.png";
import truck2 from "../../assets/images/truck2.png";
import truck3 from "../../assets/images/truck3.png";
import truck4 from "../../assets/images/truck4.png";
import truck5 from "../../assets/images/truck5.png";
import truck6 from "../../assets/images/truck6.png";
import Rightarr from "../../assets/images/Rightarr.png";
import item1 from "../../assets/images/rail-item1.png";
import item2 from "../../assets/images/rail-item2.png";
import item3 from "../../assets/images/rail-item3.png";
import item4 from "../../assets/images/rail-item4.png";
import item5 from "../../assets/images/rail-item5.png";
import Blog1 from "../../assets/images/Blog1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import railA from "../../assets/images/railA.png";
import railB from "../../assets/images/railB.png";
import railE from "../../assets/images/railE.png";
import railD from "../../assets/images/railD.png";
import IconFC from "../../assets/images/IconFC.png";
import { Link } from "react-router-dom";
export default function RoadLogistics() {
    return (
        <div>
            {/* Section-1 Industry */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Blog1})`,
                }}
            >
                <nav
                    x-data="{ isOpen: false }"
                    className=" p-6 mx-auto lg:flex lg:justify-between lg:items-center"
                >
                    <div className="flex items-center justify-between">
                        {/* <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt />
                        </a> */}
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden"></div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                        {/* <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Components</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Pricing</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
                        </div> */}
                        {/* <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                            Get started
                        </a> */}
                    </div>
                </nav>
                <div className=" px-6 py-16 mx-auto text-start">
                    <div className=" mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
                            Rail Logistics
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div>
                                    <span>
                                        <img className="" src={HomeIcon} alt="" />
                                    </span>
                                </div>
                                <div classNAme="justify">
                                    {" "}
                                    <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">
                                        Flying Chital
                                    </span>
                                    <span className="font-[700] font-heebo text-[32px] ">
                                        {" "}
                                        / Rail Logistics
                                    </span>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>

            {/* 1st heading */}
            <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px]">
                <div className=" px-32 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <section className="text-gray-600 body-font  rounded-tl-[50px] rounded-br-[50px] ">
                            <div className=" px-5 py-10 mx-auto">
                                <div class="text-center mb-5">
                                    <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                                        <span className=" font-heebo text-[40px] text-primary">
                                            Flying Chital&nbsp;
                                        </span>
                                        Smart Rail Logistics Management System
                                        <br />
                                        (FCS
                                        <span className="border-b-2 border-secondary">RL</span>MS)
                                    </h1>
                                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                                    <div class="flex justify-center"></div>
                                </div>
                                <div className=" px-5  mx-auto">
                                    <div class="text-start mb-5">
                                        <p class=" text-xl not-italic font-normal leading-7 font-heebo xl:w-full lg:w-full mx-auto text-gray-500s text-justify text-[#30343F]">
                                            Leveraging technologies in rail logistics management
                                            offers improved operational efficiency, real-time
                                            tracking, and predictive maintenance capabilities. It
                                            enhances the accuracy of scheduling, reduces delays, and
                                            minimizes costs, ultimately leading to a more reliable and
                                            cost-effective rail transportation system, which is
                                            essential for the modern supply chain. Technology-driven
                                            efficient rail logistics have brought significant
                                            advancements to the transportation industry. Real-time
                                            monitoring, automation, and data analytics optimize the
                                            movement of goods by rail. GPS, RFID, IoT and sensor
                                            technologies enable precise tracking, reducing transit
                                            times and enhancing the safety of cargo. Digital platforms
                                            and smart systems facilitate the coordination of shipments
                                            and real-time communication among stakeholders, making
                                            rail logistics more efficient and responsive. The
                                            integration of these technologies promotes sustainability,
                                            cost-efficiency, and reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex flex-wrap -m-4 mb-2 ">
                            <div className=" w-auto md:w-1/2 p-4">
                                <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl">
                                    <img className=" w-full" src={railA} alt="" />
                                </div>
                            </div>

                            <div className=" w-auto md:w-1/2 p-4">
                                <div className=" border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl border-2 border-black">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={railB}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4 ">
                            <div className=" w-auto md:w-1/2 p-4">
                                <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl">
                                    <img className=" w-full" src={railE} alt="" />
                                </div>
                            </div>

                            <div className=" w-auto md:w-1/2 p-4">
                                <div className=" border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl border-2 border-black">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={railD}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd heading  */}
            <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px]  pb-20">
                <div className=" px-32 py-5 mx-auto">
                    <div class="text-center mb-10 mt-10">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                Rail&nbsp;
                            </span>
                            Solut
                            <span className="border-b-2 border-secondary">ion&nbsp;</span>
                            Modules
                        </h1>
                        <p class="text-base leading-relaxed xl:w-1/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                    </div>
                    <div className=" px-5  mx-auto">
                        <div class="text-start mb-5">
                            <p class=" text-xl not-italic font-normal leading-7 font-heebo xl:w-full lg:w-full mx-auto text-gray-500s text-justify text-[#30343F]">
                                It seems like you are looking for information on rail solution
                                modules. Rail solution modules typically refer to the various
                                components or features that are integrated into a comprehensive
                                rail transportation system. These modules can cover a wide range
                                of functionalities.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4 ">
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail1}
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Rake Indent Status Monitoring
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Rake indent refers to the allocation of railway wagons or
                                        rakes for specific services as per the regulations of Indian
                                        Railways. Traditionally, this process relied on manual
                                        paperwork and communication, leading to delays and errors.
                                    </p>
                                </div>
                                <Link to="/railmodule1">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail2}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Rake Arrival and Placement for Loading
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Planning Rake Arrival and Placement for the loading of
                                        material is a critical logistics operation that involves
                                        multiple components to ensure efficient and cost-effective
                                        cargo handling.
                                    </p>
                                </div>
                                <Link to="/railmodule2">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail3}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Rake Inspection/Sick Wagon Identification
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        The automated inspection of wagons represents a significant
                                        advancement in railway logistics operations, enhancing
                                        efficiency and reducing the need for manual labor-intensive
                                        processes. Here's a brief overview of the key components and
                                        benefits of this automated system
                                    </p>
                                </div>
                                <Link to="/railmodule3">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Digitised Automated Loading Management
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        The importance of technology in digitizing and managing the
                                        loading process of railway rakes cannot be overstated. Here
                                        are several key aspects highlighting its significance.
                                    </p>
                                </div>
                                <Link to="/railmodule4">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Digitised Automated Rake Release
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Flying Chital’s technology-driven automated digitized rake
                                        release module ensures better resource utilization, timely
                                        departures, and ultimately, a more cost-effective and
                                        efficient rail transport system. Key features and benefits
                                        include.
                                    </p>
                                </div>
                                <Link to="/railmodule5">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Trace and Track
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        The integration of accurate trace and track capabilities in
                                        the movement of materials using railway wagons, in
                                        conjunction with the existing Freight Operations Information
                                        System (FOIS) and the deployment of IoT, RFID, and GPS
                                        technologies, offers a multitude of benefits.
                                    </p>
                                </div>
                                <Link to="/railmodule6">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Rake Arrival & Placement for Unloading
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Flying Chitals digitized automated planning and execution of
                                        rake arrival for unloading is a game-changer in railway
                                        logistics. This system uses advanced technology and
                                        data-driven insights to optimize the unloading process.
                                    </p>
                                </div>
                                <Link to="/railmodule7">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Controlled Unloading - Wagon Tippler, Hopper Line, Manual
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Controlled and monitored unloading processes have been
                                        significantly enhanced through the integration of Internet
                                        of Things (IoT), Radio-Frequency Identification (RFID), and
                                        digital technologies in various material handling systems.
                                    </p>
                                </div>
                                <Link to="/railmodule8">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[15px] w-full"
                                        src={rail4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 font-heebo  text-[#121113] title-font p-6">
                                    Demurrage Calculation
                                </h2>
                                <div class="text-start mb-5">
                                    <p class=" text-xl not-italic font-normal leading-7    font-heebo xl:w-full lg:w-full  text-gray-500s text-justify  text-[#121113] p-4">
                                        Demurrage chargers are levied for detention of wagon/vehicle
                                        beyond the free time allowed for loading/unloading of goods.
                                        The charges are calculated on the number of wagons per hour
                                        or part thereof in excess of free time.
                                    </p>
                                </div>
                                <Link to="/railmodule9">
                                    <div className="flex justify-start ">
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
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5ht heading  */}

            <section className="text-gray-600 body-font mt-0">
                <div className=" mx-auto flex pl-56 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={item3}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                <span className="border-b-2 border-secondary">Da</span>sh
                            </span>
                            board
                        </h1>
                        <div class="flex justify-center"></div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Active and Completed Trips
                            </p>
                        </div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Customer/Client Management
                            </p>
                        </div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Contractor Management
                            </p>
                        </div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                User/Operator Management
                            </p>
                        </div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Equipment/Machinery Management
                            </p>
                        </div>
                        <div className="flex">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Wagon Management
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}