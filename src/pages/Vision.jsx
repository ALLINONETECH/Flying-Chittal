/* eslint-disable react/no-unknown-property */
import React from "react";
import intelligent from "../assets/images/intelligent.png";
import Safety from "../assets/images/Safety.png";
import Driver from "../assets/images/Driver.png";
import IconInovate from "../assets/images/iconInovate.png";
import IconInclusivity from "../assets/images/iconInclusivity.png";
import IconAccessibility from "../assets/images/iconAccessibility.png";
import iconAffordability from "../assets/images/iconAffordability.png";
import iconEducation from "../assets/images/iconEducation.png";
import iconsus from "../assets/images/iconsus.png";
import iconPartner from "../assets/images/iconPartner.png";
import iconCommunity from "../assets/images/iconCommunity.png";
import iconGlobalREach from "../assets/images/iconGlobalREach.png";
import iconMesure from "../assets/images/iconMesure.png";
import Fuel from "../assets/images/Fuel.png";
import Drivertruck from "../assets/images/Drivertruck.png";
import Rich from "../assets/images/Rich.png";
import Rightarr from "../assets/images/Rightarr.png";
import Vision21 from "../assets/images/Vision21.png";
import Vision12 from "../assets/images/Vision12.png";
import Missionbg from "../assets/images/Missionbg.png";
import HomeIcon from "../assets/images/HomeIcon.png";

export default function Vision() {
  return (
    <div className="">
      {/* {/ Section-1 /} */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Missionbg})`,
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
            <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
              Vision
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
                    {" "}
                    About Us
                  </span>
                  <span className="font-[700] font-heebo text-[32px] ">
                    {" "}
                    / Vision
                  </span>{" "}
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-40">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
            <img
              className="object-cover object-center absolute ml-52 bottom-48"
              alt="hero"
              src={Vision21}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Vision12}
            />
          </div>
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Vision
              </span>
              <span className=" text-[40px] font-heebo font-bold "> </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] w-4/5">
              Our vision is to empower individuals living in remote and
              underserved areas with accessible, affordable and cutting-edge
              technology solutions that enhance their quality of life, bridge
              the digital divide and foster inclusive development. We aim to be
              the catalyst for positive change, enabling everyone to enjoy the
              benefits of modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Section-3  */}
      <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Key
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Components Of The Vision
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">
              By pursuing this vision, our business aims to empower individuals
              living in remote areas, enabling them to connect, learn, work, and
              thrive in an increasingly digital world. We believe that
              technology should be an equalizer, not a divider, and we are
              committed to making this vision a reality.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                  <img className="p-1" src={IconInovate} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Innovation
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Continuously research and develop new technologies and
                    services that address the unique needs and challenges faced
                    by individuals in remote underserved areas.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                  <img className="p-1" src={IconInclusivity} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Inclusivity
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Ensure that technology is not a privilege but a right for
                    all, regardless of geographical location or socio-economic
                    status{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className=" md:w-1/4 p-4 ">
                            <div className="border border-gray-200 p-6 h-full  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Innovation</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We put our customers at the forefront of our mission, tailoring our technology solutions to meet their specific needs and offering exceptional support throughout their journey with us. </p>
                                </div>


                            </div>
                        </div> */}
            {/* <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                  
                                    <img className="p-1" src={Safety} alt="" />
                                </div>
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Inclusivity</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We aspire to be a hub of innovation, continuously developing and implementing groundbreaking technologies that address the unique challenges faced by industries in remote and underserved regions. </p>
                                </div>


                            </div>
                        </div> */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                  <img className="p-1" src={IconAccessibility} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Accessibility
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Provide user-friendly interfaces and support services that
                    make it easy for individuals in remote areas to adopt and
                    utilize advanced technologies.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  h-full  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={iconAffordability} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Affordability
                </h2>

                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Offer cost-effective solutions that cater to the financial
                    constraints of people in underserved regions.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={iconEducation} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Education
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Facilitate digital literacy programs and training
                    initiatives to empower individuals with the skills needed to
                    fully leverage technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6   h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={iconsus} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Sustainability
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Integrate eco-friendly practices into our technology
                    solutions to minimize environmental impact and ensure
                    long-term viability.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center  justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={iconPartner} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Partnerships
                </h2>
                <div className="flex">
                  <p className="text-[20px]  font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Collaborate with local governments, organizations, and
                    businesses to create synergies that enhance access to
                    technology and promote regional development.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={iconCommunity} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Community Building{" "}
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Foster a sense of community among users to share knowledge,
                    experiences, and support, creating a network of learning and
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={iconGlobalREach} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Global Reach
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Expand our reach beyond national borders to serve remote
                    communities worldwide, fostering cross-cultural
                    understanding and cooperation.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={iconMesure} alt="" />
                </div>
                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">
                  Measuring Impact
                </h2>
                <div className="flex">
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">
                    Establish clear metrics to measure the positive impact of
                    our technology solutions on people's lives, focusing on
                    improved education, healthcare, livelihoods, and overall
                    well-being.
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
