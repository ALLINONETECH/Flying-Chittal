/* eslint-disable react/no-unknown-property */
import React from "react";
import Blog1 from "../../assets/images/Blog1.png";
import FCContainer from "../../assets/images/FCContainer.png";
import Seamless from "../../assets/images/Seamless.png";
import Facilitating from "../../assets/images/Facilitating.png";
import Enhanced2 from "../../assets/images/Unloading.png";
import Enhanced from "../../assets/images/Enhanced.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

export default function FlyingChitalContainer() {
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
            <h1 className="text-4xl lg:text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white  text-start">
              Flying Chital Smart Container
              <br /> Tracking System
            </h1>
            <p className=" text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-bold  font-heebo w-full">
              We provide Smart Solutions to Simplify Your Future
            </p>
            {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button> */}
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
                    Home
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Flying Chital Smart Container Tracking System
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2- Flying Chital Smart Vehicle  */}
      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={FCContainer}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                Flying&nbsp;
                            </span>
                            Chital Smart Container
                            <br />
                            Tracking System <br /> (
                            <span className="border-b-2 border-secondary">FC</span>SCTS)
                        </h1> */}
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] gap-2">
                Flying
              </span>
              <span className=" text-[40px] font-heebo font-bold gap-2">
                {" "}
                Chital Smart Container
                <br /> Tracking System (FCSCTS)
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="text-xl not-italic font-normal leading-7 mb-8 text-justify  w-4/5">
              FCSTS is a cutting-edge solution that empowers businesses to
              efficiently monitor and regulate the movement of containers,
              streamlining logistics operations significantly. The Smart
              Container Tracking System, with its seamless data exchange
              capabilities and comprehensive tracking features, stands as a
              game-changer in the realm of container logistics, ensuring
              enhanced efficiency, accuracy, and control over container
              movements.
            </p>
          </div>
        </div>
      </section>

      {/* Section-3 */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] gap-2">
                High
              </span>
              <span className=" text-[40px] font-heebo font-bold ">lights</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            <p class="xl:w-3/4 lg:w-3/4 mx-auto text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">
              "Flying Chital Smart Container Tracking System (FCSCTS)"
              represents a recently developed system or a specialized product.
              It is advisable to explore the official website of the relevant
              company or organization for more information.
            </p>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex items-center lg:w-4/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
              <div className="inline-flex items-center justify-center flex-shrink-0 ">
                <img
                  className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84"
                  alt="hero"
                  src={Seamless}
                />
              </div>

              <div className="flex-grow sm:text-left text-center mt-6 ml-2 sm:mt-0">
                <h2 className="text-xl not-italic font-bold leading-8 text-gray-900 title-font ml-3 mb-2 font-heebo">
                  Seamless Integration
                </h2>
                <p className="font-heebo leading-1 text-base ml-3 w-full text-black">
                  Through seamless integration with a dedicated, integrated
                  application using API, the system captures and transmits all
                  container status events, organizing and displaying the data
                  based on container numbers or Bills of Lading. This capability
                  significantly enhances visibility, reducing the need for
                  frequent communication, thus minimizing the burden on the
                  logistics team.
                </p>
              </div>
            </div>

            <div className="flex items-center lg:w-4/5 mx-auto  pb-10 mt-10  sm:flex-row flex-col">
              <div className="inline-flex items-center justify-center flex-shrink-0 ">
                <img
                  className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84"
                  alt="hero"
                  src={Facilitating}
                />
              </div>

              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-xl not-italic font-bold leading-8 text-gray-900 title-font ml-3 mb-2 font-heebo">
                  Facilitating Precise Tracking and Monitoring
                </h2>
                <p className="font-heebo leading-1 text-base ml-3 w-full text-black">
                  Leveraging data from the Automatic Identification System (AIS)
                  utilized on ships and vessel traffic services (VTS), the
                  system accurately identifies and traces the precise location
                  of containers, facilitating precise tracking and monitoring.
                  By utilizing AIS, the system can determine the exact berthing
                  time, leading to enhanced data accuracy derived from shipping
                  lines.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Enhanced}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
