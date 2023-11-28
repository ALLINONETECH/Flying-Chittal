import React from "react";

import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import Demurrage9 from "../../assets/images/Demurrage9.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

import Railbg1 from "../../assets/images/Railbg1.png";

export default function RailModule9() {
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
              Rail Solution Module 9
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

      {/* Section-2- Flying Chital Smart Vehicle  */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={Demurrage9}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* 
                        <div class="text-center mb-14">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Highlights Calculation</h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                            <div class="flex justify-center">
                                <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                            </div>
                        </div> */}
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-2 text-start text-gray-900">
              <span className=" text-indigo-800 font-bold text-[40px]  ">
                Demurrage
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Calculation
              </span>{" "}
            </h1>
            <div class="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="mb-8 text-justify  w-4/5 text-[20px] text-[#30343F] font-heebo font-[400] leading-7">
              Demurrage chargers are levied for detention of wagon/vehicle
              beyond the free time allowed for loading/unloading of goods. The
              charges are calculated on the number of wagons per hour or part
              thereof in excess of free time. like BOXN, BOX, BOST, BOXNHA,
              BOXNHS etc. Flying Chital helps you to calculate the Demurrage
              Charges as per extant guidelines promulgated by Indian Railways.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
