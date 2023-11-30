/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import CareerFC from "../assets/images/real.jpg";
import Team from "../assets/images/Team.png";
import career1 from "../assets/images/career1.png";
import HomeIcon from "../assets/images/HomeIcon.png";

import customised1 from "../assets/images/istockphoto-2yraRHBeGo.jpg";

export default function career() {
  return (
    <div>
      {/* Section-1 About us */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${career1})`,
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
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
           
          </div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Careers
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              We provide Smart Solutions to Simplify Your Future
            </p>
            {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button> */}
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
                    / Careers
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={customised1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className=" font-heebo text-[40px] text-primary">
                <span className="border-b-2 border-secondary">Our&nbsp;</span>
              </span>
              Team
            </h1>
            <p className="mb-8 mt-2  text-[20px] font-[400] font-heebo leading-[26px] text-[#30343F] w-4/5">
              Atulya Abhinav Tech Private Limited invites dynamic talent to join
              our team and be a part of our groundbreaking journey in the realm
              of Digital Transformation and Innovation, Automation of Enterprise
              Workflow, Edge Computing, and Mobility, as well as Managed IT
              Services.
              <br />
              <br />
              We are at the forefront of pioneering innovative solutions that
              reshape industries, offering our employees the unique opportunity
              to contribute to cutting-edge technology and drive meaningful
              change. Our success is underpinned by a highly competent founding
              team, unwavering values, and a visionary outlook that ensures not
              only professional growth but also personal fulfillment.
              <br />
              <br />
              With a commitment to good corporate governance and a culture that
              fosters innovation, your career at Atulya Abhinav Tech will be
              both satisfying and rewarding, propelling you toward new horizons
              of success and personal development. Join us to be a part of
              something extraordinary and be at the forefront of technological
              innovation.
            </p>
          </div>
        </div>
      </section>

      <div
        className="flex items-center justify-center  bg-cover bg-no-repeat "
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${CareerFC}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
          <h1 className="font-heebo text-4xl font-bold mb-5 "></h1>
          <p className="font-heebo text-lg font-normal  mb-20 ">
            We value your skills and experience, and should a fitting job
            opportunity arise, we will reach out to you promptly. We appreciate
            your interest in joining our team and anticipate the possibility of
            connecting with you in the near future. Kindly forward your updated
            resume to career@atulyabhinav.com.
          </p>
        </div>
      </div>
    </div>
  );
}
