import React from "react";
import Rightarr from "../../assets/images/Rightarr.png";
import smalllogo from "../../assets/images/smalllogo.png";
import logisticfire2 from "../../assets/images/logisticfire2.png";
import logisticfire from "../../assets/images/logisticfire.png";
import Citem3 from "../../assets/images/road.jpg";
import right from "../../assets/images/right.png";
import group from "../../assets/images/Group 14.png";
import sc1 from "../../assets/images/sc1.png";
import sc2 from "../../assets/images/sc2.png";
import sc3 from "../../assets/images/sc3.png";
import sc4 from "../../assets/images/sc4.png";
import fclogo from "../../assets/images/fclogo.png";
import raillogistic from "../../assets/images/raillogistic.png";
import roadogistic from "../../assets/images/roadlogistic.png";
import telematics from "../../assets/images/telematics.png";
import customisedfeature from "../../assets/images/customisedfeature.png";
import IconFC from "../../assets/images/IconFC.png";
import flyingchitalbg from "../../assets/images/flyingchitalbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import handicon from "../../assets/images/handicon.png";
import mobilicon from "../../assets/images/mobileicon.png";
import manicon from "../../assets/images/man.png";
import moneyicon from "../../assets/images/money.png";
import awardicon from "../../assets/images/award.png";
import right1 from "../../assets/images/right1.png";
import conclusion from "../../assets/images/65723.jpg";
import { Link } from "react-router-dom";
export default function flyingChital() {
  return (
    <div className="">
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${flyingchitalbg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden">
              {/* Add mobile menu button/icon here */}
            </div>
          </div>
          <div className="lg:hidden">
            {/* Add mobile navigation content here */}
          </div>
          <div className="hidden lg:flex lg:items-center">
            {/* Add desktop navigation content here */}
          </div>
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Flying Chital
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Smart Agile Logistics at Fingertip...
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div className="justify">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    Home
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Flying Chital
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section class="text-gray-600 body-font mt-6">
        <div class="container px-5 py-2 mx-auto ">
          <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl text-center text-gray-900 mb-16">
            <span className=" font-heebo text-[40px] text-primary">
              Flyin
              <span className="border-b-4 border-secondary">g&nbsp;</span>
            </span>
            Chital
          </h1>
          <div className="flex flex-row ml-20  ">
            <div className="flex flex-col items-center m-auto mb-44">
              <img
                className="object-cover w-[300px] mb-4"
                alt="hero"
                src={fclogo}
              />
              <div className="flex flex-col m-2 p-4 space-y-4 bg-[#EAEFF3] w-[300px]">
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo text-xl not-italic font-medium text-primary bg-[#dce0ee]">
                  Logistics Intelligence
                </div>
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo text-xl not-italic font-medium text-secondary bg-[#ece3e6]">
                  Logistics Connectivity
                </div>
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo text-xl not-italic font-medium text-black bg-[#dddde6]">
                  Real-Time Virtualization
                </div>
              </div>
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-2">
              <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo mb-2 mx-2">
                Multimodal Integrated Logistics Management
              </h1>
              <div className="my-2 rounded-md p-2 bg-slate-200 w-5/6">
                <p className=" not-italic font-normal leading-7  text-[#30343F]mb-4 text-justify text-xl mt-2 mr-2 font-heebo">
                  Flying Chital stands as a trailblazing, multi-modal integrated
                  logistics management platform, revolutionizing the logistics
                  landscape with its comprehensive suite of services. By
                  combining advanced analytics, customized reporting
                  capabilities and infographics it seamlessly streamlines and
                  optimizes logistics operations, providing invaluable logistics
                  intelligence, connectivity, and real-time virtualization.{" "}
                </p>
              </div>
              <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo my-2 mx-2">
                Decision Making Information at Fingertip
              </h1>
              <div className="bg-orange-50 my-2 rounded-md p-2 w-5/6">
                <p className=" not-italic font-normal leading-7  text-[#30343F] mb-4 text-justify text-xl mt-2 mr-2 ">
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
              <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo my-2 mx-2">
                End to End Visibility
              </h1>
              <div className="my-2 rounded-md p-2 bg-zinc-100 w-5/6">
                <p className=" not-italic font-normal leading-7  text-[#30343F]mb-4 text-justify text-xl mt-2 mr-2 ">
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
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full mb-10 md:mb-0 sm:pl-20 ">
            <div className="flex flex-col m-2 p-4 space-y-4  ">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={fclogo}
              />
              <div className=" px-3 py-4 bg-[#EAEFF3]  ">
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo sm:text-lg not-italic font-medium text-primary bg-[#dce0ee] mb-3">
                  Logistics Intelligence
                </div>
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo sm:text-xl not-italic font-medium text-secondary bg-[#ece3e6] mb-3">
                  Logistics Connectivity
                </div>
                <div className="flex px-3 py-6 justify-center items-start self-stretch rounded-xl font-heebo sm:text-xl not-italic font-medium text-black bg-[#dddde6]">
                  Real-Time Virtualization
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1> */}
            <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo mb-2 mx-2">
              Multimodal Integrated Logistics Management
            </h1>
            <div className="my-2 rounded-md p-2 bg-slate-200 ">
              <p className=" not-italic font-normal leading-7  text-[#30343F]mb-4  text-xl mt-2 mr-2 font-heebo ">
                Flying Chital stands as a trailblazing, multi-modal integrated
                logistics management platform, revolutionizing the logistics
                landscape with its comprehensive suite of services. By combining
                advanced analytics, customized reporting capabilities and
                infographics it seamlessly streamlines and optimizes logistics
                operations, providing invaluable logistics intelligence,
                connectivity, and real-time virtualization.
              </p>
            </div>

            <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo my-2 mx-2">
              Decision Making Information at Fingertip
            </h1>
            <div className="bg-orange-50 my-2 rounded-md p-2 ">
              <p className=" not-italic font-normal leading-7  text-[#30343F] mb-4  text-xl mt-2 mr-2 ">
                Positioned at the forefront of its category, Flying Chital's
                mobility feature offers 'Smart Agile Logistics Operations at
                Fingertip,' ensuring unparalleled accessibility and 100%
                visibility, irrespective of location or device. Moreover, its
                integrated digital platform interfaces effortlessly with various
                Government Regulatory Portals, including Vahan, Parivahan, GST
                Portal, Govt Mining Regulatory Portals, ERP/SAP, and more,
                enabling real-time data access through customizable dashboards
                and reports.
              </p>
            </div>
            <h1 className="text-2xl not-italic font-bold leading-8 text-primary font-heebo my-2 mx-2">
              End to End Visibility
            </h1>
            <div className="my-2 rounded-md p-2 bg-zinc-100 ">
              <p className=" not-italic font-normal leading-7  text-[#30343F]mb-4  text-xl mt-2 mr-2 ">
                This innovative platform not only ensures end-to-end visibility
                from source to destination but also significantly reduces
                turnaround times, operational expenses, and the risks of
                pilferage and revenue leakages. With its adaptability to
                multiple transportation modes, including road, rail, container,
                and port terminals, this digital logistics management system
                serves as a versatile, comprehensive solution for businesses
                operating in the modern logistics landscape. Flying Chital is a
                cost effective conveneient door way to Logistics 4.0.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px] bg-gray-100">
        <div className="container md:px-32 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="w-full sm:w-auto md:w-1/2 p-4">
              <Link to="/railLogistics">
                <div className="border border-gray-200 rounded-tr-[80px] rounded-bl-[50px] shadow-lg md:shadow-xl h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={raillogistic}
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className=" w-auto md:w-1/2 p-4">
              <Link to="/roadLogistics">
                <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl">
                  <img className=" w-full" src={roadogistic} alt="" />
                </div>
              </Link>
            </div>
            <div className=" w-auto md:w-1/2 p-4">
              <Link to="/telematics">
                <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl">
                  <img className=" w-full" src={telematics} alt="" />
                </div>
              </Link>
            </div>

            <div className=" w-auto md:w-1/2 p-4">
              <Link to="/customized">
                <div className=" border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl border-2 ">
                  <img
                    className="rounded-tr-[15px] w-full"
                    src={customisedfeature}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] pb-10 container">
        <div className="container px-5 py-10 mx-auto ">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mt-5 text-start  md:text-start ml-12">
            <span className="text-[#3734a9]">Highlights</span>
          </h1>
          <div className="flex text-start  md:text-start ml-12">
            <div className="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
          </div>

          <div className=" mx-auto flex flex-col lg:flex-row  py-10 ">
            <div className="lg:w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left   ml-12">
              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo mb-0">
                  Digitalization
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo mb-0">
                      Reduced Paper and Menial Work
                    </p>
                  </div>
                </p>
              </div>

              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Weighment Solutions
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Man less, In Motion Weigh Bridges
                    </p>
                  </div>
                </p>
              </div>

              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Mobility
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Mobile App along with web version
                    </p>
                  </div>
                </p>
              </div>
              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Automation
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Vehicle & Driver Assignment, Entry, Exit, Weighment,{" "}
                      <br />
                      Validation & Verification, Documentation
                    </p>
                  </div>
                </p>
              </div>
              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Telematics
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      GPS Trace and Track, Fixed/Portable/Solar
                    </p>
                  </div>
                </p>
              </div>
            </div>

            <div className="lg:w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  ml-12">
              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  HEM/HMV/LMV Management
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Trip level within mines, plants, port
                    </p>
                  </div>
                </p>
              </div>

              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Analytics & Customised Reports
                  {/* <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                  </div> */}
                </p>
              </div>

              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Single Integrated Digital Platform
                  {/* <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                  </div> */}
                </p>
              </div>

              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  Multi Modal
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Road, Rail, Port Terminals
                    </p>
                  </div>
                </p>
              </div>
              <div className="flex mt-5">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                  End to End Visibility
                  <div className="flex gap-2">
                    <span>
                      <img className="" src={IconFC} alt="" />
                    </span>
                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                      Anytime/Anywhere/Any Device
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistic every minute */}
      <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container  flex flex-col-reverse md:flex-row items-center px-5 py-10">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start  text-start ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className="text-indigo-800 font-bold text-[40px]  ">
                Logistics&nbsp;
              </span>
              <span className="text-[40px] font-heebo font-bold ">
                Every Minute Fire Fighting
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            <div className="flex flex-col mt-5">
              {/* Repeat this block for each item */}
              <div className="flex items-start">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Current process disjointed
                </p>
              </div>
              <div className="flex items-start">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Data collected offline - Not leveraged to full potential
                </p>
              </div>
              <div className="flex items-start">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Data collected offline - Not leveraged to full potential
                </p>
              </div>
              <div className="flex items-center">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Manual and pater-based system
                </p>
              </div>
              <div className="flex items-center">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  High dependency on manpower
                </p>
              </div>
              <div className="flex items-center">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  High Turn around Times (TAT)- Higher Cost
                </p>
              </div>
              <div className="flex items-center">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Limited visibilty and control
                </p>
              </div>
              <div className="flex items-center">
                <span>
                  <img className="p-1" src={IconFC} alt="" />
                </span>
                <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                  Delays and chaos
                </p>
              </div>
            </div>
          </div>

          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
            <img
              className="object-cover object-center absolute ml-52 bottom-48  hidden md:block"
              alt="hero"
              src={logisticfire}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={logisticfire2}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex pl-8 py-12 md:flex-row flex-col items-start">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={Citem3}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Smart
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Agile Logistics – Smooth Operations
              </span>
            </h1>
            <div className="w-16 h-1  rounded-full bg-orange-400 inline-flex"></div>

            <div className="mx-auto flex py-5 md:flex-row flex-col ">
              <div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    Reduced
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Turn Around
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Cost of Operations
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Revenue Leakage/Los
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Fatigue
                      </p>
                    </div>
                  </p>
                </div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    Increased
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Production Efficiency
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Top line
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <img className="" src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                        Bottom line
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <div className=" mt-4">
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    End to End Visibility – Real Time
                    <div className="flex gap-2">
                      <span>
                        {/* <img className="" src={IconFC} alt="" /> */}
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                    </div>
                  </p>
                </div>

                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    Trip Level Monitoring and Control
                    <div className="flex gap-2">
                      <span>
                        {/* <img className="" src={IconFC} alt="" /> */}
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                    </div>
                  </p>
                </div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    Proactive Preventive Action
                    <div className="flex gap-2">
                      <span>
                        {/* <img className="" src={IconFC} alt="" /> */}
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                    </div>
                  </p>
                </div>
                <div className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                    No need for Reactive <br />
                    Corrective Action
                    <div className="flex gap-2">
                      <span>
                        {/* <img className="" src={IconFC} alt="" /> */}
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo "></p>
                    </div>
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
            <h1 class=" text-[5rem] font-bold title-font text-white mb-1">
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
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Single Integrated Solution <br />
                  Multi Modal-Road and Rail
                </h1>
                <div className="">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Competition is trying to solve individual ecosystem
                    problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] h-full w-full bg-white shadow-lg  md:shadow-xl ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={handicon} alt="" />
                </div>
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Cash Flow Optimization
                </h1>
                <div className="">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Optimizes cash flow for enterprises and transports.
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

                  <img className="p-1" src={mobilicon} alt="" />
                </div>
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Complete Mobility
                </h1>
                <div className="">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Integration with ERP/SAP/TALLY platforms for seamless
                    exchange of data and information.
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
                  <img className="p-1" src={awardicon} alt="" />
                </div>
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Visibility and Control
                </h1>

                <div className="">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Enterprises, Transporters, Truck owners get complete
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full">
                <div className="  inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={manicon} alt="" />
                </div>
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Profiles
                </h1>
                <div className="">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Digital Workspace and Profiles empower all stakeholders and
                    users.
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
                  <img className="p-1" src={moneyicon} alt="" />
                </div>
                <h1 className="text-2xl not-italic font-bold leading-8 text-gray-900  title-font mb-2">
                  Revenue Optimization
                </h1>
                <div className="pb-6">
                  <p className="text-xl not-italic font-normal leading-7 ">
                    Enterprises reduce cost. Transporters increase revenue. Win
                    Win for All.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /test */}
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
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-start ">
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-start  ">
            <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">
              In Summary
            </h1>
            <div class="flex justify-center">
              <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Single Integrated Digital Platform
                <div className="flex gap-2">
                  <span>
                    <img className="" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                    Real Time Situational Awareness- Proactive Action not
                    Reactive Response
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Multi Modal Transport
                <div className="flex gap-2">
                  <span>
                    <img className="" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                    Road and Rail Network – Combined/ Independent as Stand Alone
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Complete Visibility
                <div className="flex gap-2">
                  <span>
                    <img className="" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                    Inbound/Outbound – Within Mines/Plants/Ports/Railway Yards
                  </p>
                </div>
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Automation Eliminates Inefficient Manual Processes
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Reduced Costs, Wastage, Pilferage – Revenue Leakage
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Enhanced Efficiency, Transparency, Reliability
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Seamless Interface with Govt. & Regulatory Portals
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                Aligned with Logistics 4.0
              </p>
            </div>

            {/* <div className="flex mt-5">
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
            </div> */}
          </div>
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
            {/* <img
              className="object-cover object-center absolute ml-52 bottom-48"
              alt="hero"
              src={right1}
            /> */}
            <img
              className="object-cover object-center  rounded-bl-3xl rounded-tr-3xl"
              alt="hero"
              src={conclusion}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
