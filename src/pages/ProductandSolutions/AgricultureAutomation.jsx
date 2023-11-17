import React from "react";
import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import Agriculture from "../../assets/images/Agriculture.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

export default function AgricultureAutomation() {
  return (
    <div>
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Blog1})`,
        }}
      >
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
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="mx-auto">
            <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
              Agriculture Automation Solution (SAgAS)
            </h1>
            <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
              We provide Smart Solutions to Simplify Your Future
            </p>
            {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button> */}
            <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
              <div className="flex gap-2">
                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] "> Home</span><span className="font-[700] font-heebo text-[32px] "> / Agriculture Automation Solution (SAgAS)</span>  </div>
              </div>

            </p>
          </div>
        </div>
      </section>

      {/* Section-2- Flying Chital Smart Vehicle  */}
      {/* <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={FCAgriculture}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className=" font-heebo text-[40px] text-primary">
                Agriculture&nbsp;
              </span>
              Automation
              <br />
              <span className="border-b-2 border-secondary">So</span>
              lutions(SAgAS)
              <br />
            </h1>
            <p className=" text-xl not-italic font-normal leading-7 font-heebo mb-8 text-justify w-4/5">
              Atulya Abhinav in association with C-DAC, Trivandrum provides a
              completely indigenous Smart Agriculture Automation Solution
              (SAgAS) through Transfer of Technology (ToT). The Technology
              developed by C-DAC Trivandrum achieves automation of farms and
              poly houses, allows farmers to apply the right amount of water and
              fertilizers at the right time, right place and in right amount.
            </p>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto px-5 py-12 lg:flex lg:flex-row flex-col items-center lg:ml-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg w-full h-64 lg:h-full"
              alt="hero"
              src={FCAgriculture}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px]"> Agriculture</span>
              <span className=" text-[40px] font-heebo font-bold  "> Automation Solution (SAgAS)</span></h1>

            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="text-base sm:text-xl mb-8 text-justify w-full">
              Atulya Abhinav in association with C-DAC, Trivandrum provides a
              completely indigenous Smart Agriculture Automation Solution
              (SAgAS) through Transfer of Technology (ToT). The Technology
              developed by C-DAC Trivandrum achieves automation of farms and
              poly houses, allows farmers to apply the right amount of water and
              fertilizers at the right time, right place and in the right
              amount.
            </p>
          </div>
        </div>
      </section>

      <div className="  mb-20">
        <img
          className="object-cover object-center  drop-shadow-lg"
          alt="hero"
          src={Agriculture}
        />
      </div>

      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto  px-5 py-12 md:flex-row flex-col items-center ml-10">
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Hourly, daily, weekly monthly and yearly planner for irrigation
              and fertilization
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Wireless data acquisition through wireless motes (LoRa)
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              External memory interface for Data logging and program feeding.
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              TFT Touch screen display &GUI for better farmer assistance
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              SMS messages to cell phone for providing situational awareness of
              the field parameters.
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Remote control of agricultural field equipment through mobile
              phones.
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Embeds Free Real-Time Operating System (RTOS)
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Almost any sensor can be interfaced.
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Manual, Auto, Timer and Remote mode of operation.
            </p>
          </div>
          <div className="flex">
            <span>
              <img className="p-1" src={IconFC} alt="" />
            </span>
            <p className="text-xl not-italic font-normal leading-7 font-heebo">
              Manual, Auto, Timer and Remote mode of operation.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden"></div>
          {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Agriculture Automation Solution (SAgAS)</h1>
            <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
              The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
            </p>
          </div> */}
        </div>
      </section>

      <section className="text-gray-600 body-font mt-0">
        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
          <span className=" font-heebo text-[40px] text-primary">
            Our&nbsp;
          </span>
          Partner
        </h1>

        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <img
            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg ml-10"
            alt="hero"
            src={CDAC}
          />
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden"></div>
          {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Agriculture Automation Solution (SAgAS)</h1>
            <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
              The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}