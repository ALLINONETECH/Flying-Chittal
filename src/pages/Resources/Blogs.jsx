/* eslint-disable react/no-unknown-property */
import React from "react";
import Blog1 from "../../assets/images/Blog1.png";
import Blog3 from "../../assets/images/Blog3.png";
import Assessment from "../../assets/images/Assessment.png";
import BlogStrat from "../../assets/images/BlogStrat.png";
import Cloud from "../../assets/images/Cloud.png";
import Micservice from "../../assets/images/Micservice.png";
import ApiFirst from "../../assets/images/ApiFirst.png";
import Implementation from "../../assets/images/Implementation.png";
import Integration from "../../assets/images/Integration.png";
import Scalability from "../../assets/images/Scalability.png";

export default function Blogs() {
  return (
    <div>
      {/* Section-1 Blog */}
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
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl">
              Our Blog
            </h1>
            <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
              Challenge, Ideate & Create
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
            <p className="mt-3 text-sm text-gray-400 "></p>
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section className="text-gray-600 body-font">
        <h2 className="text-gray-900 text-4xl title-font font-bold text-center p-4">
          Blog
        </h2>
        <p className="leading-relaxed text-base  text-center">
          MACH architecture, which stands for "Microservices, API-first,
          Cloud-native, and Headless," allows businesses to deploy an ecosystem
          of pluggable, scalable, and replaceable third-party solutions to solve
          discrete business problems. Here's how MACH architecture principles
          can be applied to digitalization initiatives
        </p>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center   ">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={Micservice}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:items-start items-center">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={ApiFirst}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden lg:pl-36 ">
            <img
              alt="feature"
              className="object-cover object-center "
              src={Scalability}
            />
          </div>
        </div>
      </section>

      {/* Section-3 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center "
              src={Blog3}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center   ">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={Assessment}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:items-start items-center">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={BlogStrat}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-4 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center   ">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={Implementation}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:items-start items-center">
              <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                <img
                  alt=""
                  className="object-cover object-center rounded-tr-[30px]   "
                  src={Integration}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium  p-4">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base p-3">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden lg:pl-36 ">
            <img
              alt="feature"
              className="object-cover object-center "
              src={Scalability}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
