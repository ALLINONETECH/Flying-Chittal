import React from "react";
import Mines from "../../assets/images/Mines.png";
import Cement from "../../assets/images/Cement.png";
import Thermal from "../../assets/images/Thermal.png";
import Fertilizer from "../../assets/images/Fertilizer.png";
import Down from "../../assets/images/Down.png";
import Agro from "../../assets/images/Agro.png";
import Blog1 from "../../assets/images/Blog1.png";
import Efficient5 from "../../assets/images/Efficient5.png";
import RealTime5 from "../../assets/images/RealTime5.png";
import Reduced5 from "../../assets/images/Reduced5.png";
import Enhanced5 from "../../assets/images/Enhanced5.png";
import IFertilizer from "../../assets/images/IFertilizer.png";
import IDown from "../../assets/images/IDown.png";
import Cost5 from "../../assets/images/Cost5.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

import Railbg1 from "../../assets/images/Railbg1.png";

export default function RailModule5() {
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
              Rail Solution Module 5
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
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Rail Logistics
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2  */}
      <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px]  ">
                Digitised
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Automated Rake Release
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            {/* <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div> */}
            <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto ">
              Flying Chital’s technology-driven automated digitized rake release
              module ensures better resource utilization, timely departures, and
              ultimately, a more cost-effective and efficient rail transport
              system. Key features and benefits include.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Efficient5}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className=" text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Efficient Planning
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Automated systems use algorithms and data analytics to plan
                    the release of rakes based on cargo type, destination, and
                    scheduling, ensuring the most efficient use of resources and
                    minimizing delays.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={RealTime5}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Real-time Visibility
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Remote locations, even those far from the loading site, can
                    access real-time information about the status of released
                    rakes. This visibility allows for better coordination and
                    tracking of railway assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Reduced5}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Reduced Manual Intervention
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    By automating the release planning and execution, the system
                    minimizes the need for manual interventions, reducing errors
                    and saving time.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Enhanced5}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Enhanced Decision-Making
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Data-driven insights help operators make informed decisions,
                    adapt to changing conditions, and optimize the release
                    process to minimize demurrage and improve overall
                    efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Cost5}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Cost Savings
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    By reducing manual labor, minimizing delays, and improving
                    resource allocation, the automated system leads to cost
                    savings and a more competitive railway logistics operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
