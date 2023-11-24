import React from "react";

// import Cement from '../../assets/images/Cement.png'
// import Thermal from '../../assets/images/Thermal.png'
// import Fertilizer from '../../assets/images/Fertilizer.png'
// import Down from '../../assets/images/Down.png'
// import Agro from '../../assets/images/Agro.png'
import Blog1 from "../assets/images/Blog1.png";
// import Efficiency4 from "../../assets/images/Efficiency4.png";
// import Resource4 from "../../assets/images/Resource4.png";
// import Realtime4 from "../../assets/images/Realtime4.png";
// import Reduced4 from "../../assets/images/Reduced4.png";
// import Data4 from "../../assets/images/Data4.png";
// import Safety4 from "../../assets/images/Safety4.png";
// import Customer4 from "../../assets/images/Customer4.png";
import customized1 from "../assets/images/customized1.png";
import Customizedbg from "../assets/images/Customizedbg.png";
import HomeIcon from "../assets/images/HomeIcon.png";
import Custom from "../assets/images/Custom.png";
import home1 from "../assets/images/home1.jpg";
import customised1 from "../assets/images/istockphoto-om9LdZNEx8.jpg";

export default function Customized() {
  return (
    <div>
      {/* Section-1 Industry */}
      {/* {/ Section-1 /} */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Customizedbg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div>
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white  text-start">
              Customized Features
            </h1>
            <p className=" text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-bold  font-heebo w-full">
              We provide Smart Solutions to Simplify Your Future
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex flex-col lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div classNAme="justify">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    Flying Chital
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Customized Features
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center mb-14 mt-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
          <span className=" text-indigo-800 font-bold text-[40px]  ">
            Customized
          </span>
          <span className=" text-[40px] font-heebo font-bold "> Features</span>
        </h1>
        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

        <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s text-justify">
          A comprehensive logistics platform with customized features offers a
          game-changing solution by providing greater capability, empowerment to
          stakeholders, and easy access to critical decision-making information,
          all on one unified platform. This integrated system, capable of
          interfacing with diverse government regulatory portals such as Vahan,
          Parivahan/Sarathi, GSTIN, Mining Regulatory Portals, FOIS, and
          ERP/SAP, offers a seamless and efficient solution for businesses.
        </p>
      </div>

      <div
        className="flex items-center justify-center  bg-cover bg-no-repeat "
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${customised1}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
          <h1 className="font-heebo text-4xl font-bold mb-5 ">
            Customized Features
          </h1>
          <p className="font-heebo text-lg font-normal text-justify mb-10 ">
            Stakeholders can access vital data, track shipments, and ensure
            compliance with regulatory requirements effortlessly. By
            consolidating information from these various sources into a single
            platform, businesses gain a holistic view of their logistics
            operations, enabling more informed decision-making, enhanced
            efficiency, and ultimately, a competitive edge in today's dynamic
            and complex supply chain landscape.
          </p>
        </div>
      </div>

      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
            <span className="text-indigo-800 font-bold text-[40px]">
              Interfaced
            </span>
            <span className="text-[40px] font-heebo font-bold">
              / Integrated With
            </span>
          </h1>
          <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
        </div>
        <div className="flex justify-center mt-8">
          <img
            className="object-cover object-center drop-shadow-lg"
            alt="hero"
            src={Custom}
          />
        </div>
      </div>
    </div>
  );
}
