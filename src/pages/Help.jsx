/* eslint-disable react/no-unknown-property */
import React from "react";

import Blog1 from "../assets/images/Blog1.png";
import HomeIcon from "../assets/images/HomeIcon.png";
// import FCAgriculture from "../../assets/images/FCAgriculture.png";
// import CDAC from "../../assets/images/CDAC.png";
// import IconFC from "../../assets/images/IconFC.png";
// import RailMod1 from "../../assets/images/RailMod1.png";

export default function Help() {
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

          {/* <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Components</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Pricing</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
                        </div> */}
          {/* <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                            Get started
                        </a> */}
        </nav>
        {/* <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-4xl">
              Help
            </h1>
            <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
              Challenge, Ideate & Create
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
            <p className="mt-3 text-sm text-gray-400 "></p>
          </div>
        </div> */}
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Help Center
            </h1>
            {/* <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
              We provide Smart Solutions to Simplify Your Future
            </p> */}

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
                    Home
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Help Center
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2- Flying Chital Smart Vehicle  */}
      {/* <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Rake Indent
              Status Monitoring
            </h1>
            <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
              Traditionally, this process relied on manual paperwork and
              communication, leading to delays and errors. Customers willing to
              transport their consignments in rake loads/wagonloads should get
              registered on FBD portal of Indian Railways and place an online
              indent for supply wagons/rakes duly paying the prescribed wagon
              demand registration fee notified from time to time. Flying Chital
              Application helps stakeholders to get all information about Rake
              Indent and Approval on a real time basis.
            </p>
          </div>
        </div>
      </section> */}
      <section className=" bg-[#ffffff] dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div>
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">
              Contact us
            </p> */}
            <h1 className="mt-2 text-2xl font-semibold text-gray-950-100 md:text-3xl dark:text-white">
              Chat to our friendly team
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  customercare@atulyaabhinav.com
                </p>
              </div>
              {/* <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  Start new chat
                </p>
              </div> */}
              {/* <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div> */}
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  +91 67479 63768
                </p>
              </div>
            </div>
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
