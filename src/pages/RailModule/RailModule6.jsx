import React from "react";

import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import Trace from "../../assets/images/Trace.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

import Railbg1 from "../../assets/images/Railbg1.png";

export default function RailModule6() {
  return (
    <div>
      {/* {/ Section-1 /} */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Railbg1})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Rail Solution Module 6
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              We provide Smart Solutions to Simplify Your Future
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div classNAme="justify">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    Home
                  </span>{" "}
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    / Rail Logistics
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2- Flying Chital Smart Vehicle  */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={Trace}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="text-indigo-800 font-bold text-[40px]">
                Trace{" "}
              </span>{" "}
              and Track
            </h1>
            <div class="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="mb-8 text-justify text-[20px] text-[#30343F] font-heebo font-[400] leading-7 w-4/5">
              This synergy enhances visibility and transparency throughout the
              supply chain, enabling real-time monitoring and control. Ground
              staff can seamlessly update information about the cargo and wagon
              status, leading to improved communication and data accuracy. The
              use of IoT, RFID, and GPS ensures precise location tracking and
              cargo condition monitoring, reducing the risk of loss or damage.
              Moreover, it optimizes resource allocation, reducing transit
              times, and minimizing demurrage costs. Ultimately, this
              comprehensive approach leads to increased operational efficiency,
              cost savings, and a heightened level of trust and satisfaction
              among all stakeholders in the rail logistics ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
