/* eslint-disable react/no-unknown-property */
import React from "react";

import Dev from "../../assets/images/Dev1.png";
import Pradyumna from "../../assets/images/Pradyumna1.png";
import Amar from "../../assets/images/Amar1.png";
import Samba from "../../assets/images/Samba1.png";
import Who1 from "../../assets/images/Who1.png";
import Who2 from "../../assets/images/Who2.png";
import Why from "../../assets/images/Whyimg.png";
import Eye from "../../assets/images/Eye.png";
import Heart from "../../assets/images/Heart.png";
import Goal from "../../assets/images/Goal.png";
import Aboutus from "../../assets/images/Aboutus.png";
import AboutImage1 from "../../assets/images/AboutImage1.png";
import AboutImage2 from "../../assets/images/AboutImage2.png";
import Tata from "../../assets/images/Tata.png";
import Nippon from "../../assets/images/nipponsteel.png";
import Nalco from "../../assets/images/Nalco.png";
import JSW from "../../assets/images/JSW.png";
import Arcelor from "../../assets/images/Arcelor.png";
import Jindal from "../../assets/images/jindal.png";
import JSL from "../../assets/images/JSL.png";
import TataSteel from "../../assets/images/TataSteel.png";
import BRPL from "../../assets/images/BRPL.png";
import SJSPL from "../../assets/images/SJSPL.png";
import MYTHRI from "../../assets/images/MYTHRI.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import aboutusbluebg from "../../assets/images/aboutusbluebg.png";
import Socialicon from "../../assets/images/Socialicon.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export default function About() {
  const whoRef = useRef();
  const whyRef = useRef();
  const missionRef = useRef();
  const leadersRef = useRef();
  const customersRef = useRef();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const page = params.get("page");
  console.log(page);
  useEffect(() => {
    if (page == "who") {
      whoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "why") {
      whyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "mission") {
      missionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "leaders") {
      leadersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "customers") {
      customersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      {/* Section-1 About us */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${aboutusbluebg})`,
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
          <div className=" mx-auto">
            <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
              About Us
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
                    Home
                  </span>
                  <span className="font-[700] font-heebo text-[32px] ">
                    {" "}
                    / About Us
                  </span>{" "}
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* Section- Who We are*/}
      <section className="text-gray-600 body-font mt-40">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div
            className=" flex relative items-start lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg "
            style={{ marginTop: "-120px" }}
          >
            <img
              className="object-cover object-center absolute ml-56 bottom-48"
              alt="hero"
              src={Who1}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Who2}
            />
          </div>
          <div
            ref={whoRef}
            className=" relative bottom-28 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16  flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className=" font-heebo text-[40px] text-primary">
                <span className="border-b-2 border-secondary">Wh</span>o&nbsp;
              </span>
              we are
            </h1>
            <p className="text-xl not-italic font-normal leading-7 mb-8 text-justify font-heebo w-5/6">
              Welcome to Atulya Abhinav Technologies, a pioneering force in the
              realm of digital transformation and innovation. With a dedicated
              focus on revolutionizing businesses, we specialize in the seamless
              automation of enterprise workflows, leveraging cutting-edge
              technologies to enhance efficiency and productivity. Our expertise
              extends to the realm of edge computing and mobility, enabling
              businesses to harness the power of real-time data processing at
              the edge. <br />
              <br />
              Moreover, our comprehensive suite of managed IT services empowers
              organizations to streamline their operations and drive sustainable
              growth in an ever-evolving digital landscape. At Atulya Abhinav
              Tech Private Limited, we are committed to propelling businesses
              towards a future of unparalleled technological advancement and
              operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Section-why Choose you */}

      <section
        ref={whyRef}
        className="text-gray-600 body-font mt-10"
        style={{
          borderRadius: "100px 0px",
          background: "var(--gray-lighter, #F6F7F8)",
        }}
      >
        <div className="p-2">
          <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl mb-4 text-center text-gray-900 mt-8">
            <span className="font-heebo text-[40px] text-primary">Why</span> C
            <span className="border-b-2 border-secondary">ho</span>ose us
          </h1>
        </div>

        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center gap-6">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={AboutImage2}
              style={{
                borderRadius: "50px 0px",
                background:
                  "lightgray 50% / cover no-repeat, lightgray 0px -17.095px / 100% 124.717% no-repeat",
              }}
            />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={AboutImage1}
              style={{
                borderRadius: "50px 0px",
                background:
                  "lightgray 50% / cover no-repeat, lightgray 0px -17.095px / 100% 124.717% no-repeat",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mx-4 sm:ml-0">
          <div>
            <h1 className="text-primary text-2xl sm:text-xl font-bold leading-8 text-justify mb-2 font-heebo mx-24">
              Commitment to Excellence
            </h1>
          </div>
          <div className="w-full">
            <p className="text-xl not-italic  font-heebo sm:text-base font-normal text-justify mb-2 text-gray-900 mx-24">
              Choosing Atulya Abhinav over others in the digital transformation
              and innovation landscape is a decision grounded in our unwavering
              commitment to excellence and the distinct value we bring to the
              table. We understand that the digital terrain is constantly
              evolving, and that's why we stand out. Our deep-rooted expertise
              in digital transformation, automation of enterprise workflows,
              edge computing, mobility, and managed IT services is second to
              none. What truly sets us apart is our relentless pursuit of
              innovation and our ability to tailor solutions to the unique needs
              of our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-4 sm:ml-0">
          <div>
            <h1 className="text-primary text-2xl sm:text-xl font-bold leading-8 text-justify mb-2 font-heebo mx-24">
              Solution Customized to Your SOPs
            </h1>
          </div>
          <div className="w-full">
            <p className="text-xl not-italic  font-heebo sm:text-base font-normal text-justify mb-2 text-gray-900 mx-24">
              We don't offer a one-size-fits-all approach;{" "}
              <b>we craft customized strategies that empower businesses</b> to
              thrive in the digital age. Businesses don't change their standard
              operational procedures (SOPs) to adopt our solution, rather we
              customize and improvise the solution to ensure the established
              time tested SOPs remain as it is.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-4 sm:ml-0">
          <div>
            <h1 className="text-primary text-2xl sm:text-xl font-bold leading-8 text-justify mb-2 font-heebo mx-24">
              Proven Track Record
            </h1>
          </div>
          <div className="w-full">
            <p className="text-xl not-italic  font-heebo sm:text-base font-normal text-justify mb-2 text-gray-900 mx-24">
              With a proven track record of delivering results, we provide not
              just technology, but a comprehensive partnership in achieving your
              goals. Our dedication to staying on the cutting edge of technology
              ensures that our clients are always ahead of the curve, reaping
              the rewards of increased efficiency, enhanced productivity, and
              future-proofed operations. In a fast-paced, ever-changing digital
              world, we are the reliable partner you can trust to transform your
              business and drive it towards lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission , Vision, Values */}

      <section
        ref={missionRef}
        className="text-gray-600 body-font bg-white rounded-tl-[50px] rounded-br-[50px]"
      >
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-20">
            <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl mb-4 text-center text-gray-900 mt-8">
              <span className="font-heebo text-[40px] text-primary">
                {" "}
                Vision,
              </span>{" "}
              Mission & Values
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className=" md:w-1/3 p-4 ">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  h-full  bg-white ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  <img className="p-1" src={Eye} alt="" />
                </div>
                <h2 className="text-[26px] text-[#30343F] font-[700] font-heebo mb-2">
                  Vision
                </h2>
                <div className="flex flex-col">
                  <p className="text-xl not-italic font-normal leading-7 font-heebo">
                    "Our vision is to empower individuals living in remote and
                    underserved areas with accessible, affordable and
                    cutting-edge technology solutions that enhance their quality
                    of life, bridge the digital divide...
                    <br />{" "}
                  </p>

                  <Link to="/vision">
                    <div className="flex justify-start mt-6">
                      <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                        READ MORE{" "}
                        <span>
                          {" "}
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2 "
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl   h-full  bg-white ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                  <img className="p-1" src={Goal} alt="" />
                </div>
                <h2 className="text-[26px] text-[#30343F] font-[700] font-heebo  mb-2">
                  Mission
                </h2>
                <div className="flex flex-col">
                  <p className="text-xl not-italic font-normal leading-7 font-heebo">
                    "At Atulya Abhinav Tech Private Limited, our mission is to
                    pioneer innovation in supply chain and logistics operations,
                    revolutionizing industrial processes across remote and
                    underserved areas...
                    <br />
                  </p>
                  <Link to="/mission">
                    <div className="flex justify-start mt-6">
                      <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                        READ MORE{" "}
                        <span>
                          {" "}
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2 "
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  h-full  bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                  <img className="p-1" src={Heart} alt="" />
                </div>
                <h2 className="text-[26px] text-[#30343F] font-[700] font-heebo  mb-2">
                  Values
                </h2>
                <div className="flex flex-col">
                  <p className="text-xl  font-normal leading-7 font-heebo">
                    “At Aditya Abhinav Tech Private Limited, we stand by the
                    following core values, which guide our every action.
                    Together, these values shape our company culture and drive
                    us towards achieving our...
                    <br />
                  </p>
                  <Link to="/values">
                    <div className="flex justify-start mt-6">
                      <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                        READ MORE{" "}
                        <span>
                          {" "}
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2 "
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LeaderShip */}
      <section
        ref={leadersRef}
        className="text-gray-600 body-font mt-20"
        style={{
          borderRadius: "100px 0px",
          background: "var(--gray-lighter, #F6F7F8)",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="p-2">
            <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl mb-4 text-center text-gray-900 mt-8">
              <span className="font-heebo text-[40px] text-primary">
                Lea<span className="border-b-2 border-secondary">der</span>
              </span>
              ship
            </h1>
          </div>

          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] ">
              <img
                className="object-cover object-center "
                alt="hero"
                src={Pradyumna}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-gray-900">
                Pradyumna Mishra
              </h1>
              <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-black">
                Co-Founder & CEO
              </p>
              <p className="text-xl not-italic font-normal leading-7 font-heebo   text-justify mt-2">
                Pradyumna Mishra combines 20 years of distinguished service in
                the Indian Navy with a decade in corporate arena with industry
                giants like L&T, Mahindra group and innovative startup like
                Fre8wise. An inspiring leader who embodies the spirit of "Vocal
                for Local" and has been at the forefront of spearheading the
                indigenization drive as a significant part of the "Make In
                India" initiative. With a strong commitment to promoting
                domestic manufacturing and self-sufficiency, Pradyumna is
                instrumental in transforming our company into a hub of
                innovation and self-reliance. Through this experience, Pradyumna
                embodies Atulya Abhinav’s vision of being a perfect fusion of
                discipline, operational excellence, cutting edge innovation and
                strategic foresight. His deep commitment to unyielding business
                ethics and exemplary corporate governance strongly reflects our
                core values.
              </p>
              <span>
                <img src={Socialicon} alt="" />
              </span>
            </div>
          </div>

          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-gray-900">
                Amar Pradeep Swain
              </h1>
              <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-black">
                Co-Founder & Director Technology & Solutions
              </p>
              <p className="text-xl not-italic font-normal leading-7 font-heebo   text-justify mt-2">
                A graduate from IIT, Amar is an accomplished and
                forward-thinking technology leader serving as the Director,
                Technology and Solutions of our company. With a remarkable
                career spanning over 25 years, Amar has demonstrated to be a
                true visionary when it comes to driving digital business
                transformation and pioneering innovative platform strategies.
                His profound expertise extends to orchestrating enterprise-wide
                process shifts, managing diverse partner ecosystems, and
                consistently delivering impressive results for Fortune 500
                giants. Amar's professional journey has taken him across the
                globe, from Switzerland to diverse continents like Japan,
                Indonesia, Malaysia, Poland, Russia, the UK, the Middle East,
                and several countries in Africa and South America. His path
                breaking ideas has brought turnaround in industry leaders in
                consumer goods, pharmaceuticals, and telecom including notable
                companies such as Pfizer, Bayer, Japan Tobacco, Vodafone,
                Telefonica, and Michelin. With Amar as our Director, Technology
                and Solutions, we are confident that we will find a solution to
                every challenge, through innovation & leveraging cutting edge
                technologies
              </p>
              <span>
                <img src={Socialicon} alt="" />
              </span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Amar}
              />
            </div>
          </div>

          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] ">
              <img
                className="object-cover object-center "
                alt="hero"
                src={Dev}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-gray-900">
                Debashis Mohanty
              </h1>
              <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-black">
                Co-Founder & Director Strategy & Growth
              </p>
              <p className="text-xl not-italic font-normal leading-7 font-heebo   text-justify mt-2">
                With an MBA from Purdue University’s Daniels School, Debashis
                Mohanty is the heart and brain of our company. With a dynamic
                career spanning 25 years, he is a passionate business leader
                with a wealth of global experience. His expertise lies in
                entrepreneurship, Go-To-Market strategy, building SAAS
                platforms, e-Commerce, and the intricacies of Manufacturing
                Supply Chain Management. Debashis has held senior leadership
                positions in prestigious companies across the United States,
                Singapore and Malaysia. These include Flipkart, Reliance, Cummins,
                DHL and Pitney Bowes. Notably, he co-founded and promoted
                Fre8wise.com, a B2B platform specializing in Supply Chain
                Automation and Digitalization. With Debashis leading our
                strategy and growth initiatives, we're poised for
                state-of-the-art innovation and remarkable success.
              </p>
              <span>
                <img src={Socialicon} alt="" />
              </span>
            </div>
          </div>

          {/* <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-gray-900">
                Sambasiva Rao Suda
              </h1>
              <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-black">
                Consulting Advisor
              </p>
              <p className="text-xl not-italic font-normal leading-7 font-heebo   text-justify mt-2">
                Sambasiva Rao Suda an accomplished entrepreneur with exceptional
                skills in founding and leading innovative ventures, is our
                Consulting Advisor. Suda holds a Master's degree in Computer
                Science and Engineering from IIT Kanpur. As the Co-founder and
                CTO of Fre8wise, he architected and implemented the Transport
                Automation platform showcasing his proficiency in creating
                transformative solutions. Suda's entrepreneurial acumen extends
                to PubMesh Inc, where he served as Founder and CTO, and played a
                pivotal role in developing a groundbreaking ad-stitching cloud
                platform. Additionally, his expertise in architecting
                large-scale internet applications, modern data pipelines, and
                contributions to Node.js, along with notable awards, further
                underscore his diverse skill set
              </p>
              <span>
                <img src={Socialicon} alt="" />
              </span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Samba}
              />
            </div>
          </div> */}
        </div>
      </section>

      <section
        ref={customersRef}
        className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]"
      >
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-20">
            <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl mb-4 text-center text-gray-900 mt-8">
              We are{" "}
              <span className="font-heebo text-[40px] text-primary">
                Experienc
                <span className="border-b-2 border-secondary">ed&nbsp;</span>
              </span>
              In Deployments At
            </h1>

            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Move beyond Track & Trace with an ultra easy to use interface that integrates with 2.2k devices and it accessible on mobile app and web for desktop in over 15 language</p> */}
          </div>

          <div className="flex flex-wrap -m-4">
            <div className=" md:w-1/3 p-4 ">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2> */}
                <div className="flex">
                  {/* <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p> */}
                </div>
                <img className="" src={Tata} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-20" src={JSW} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-20" src={Nippon} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={TataSteel} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={Arcelor} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={Jindal} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={SJSPL} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={Nalco} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={JSL} alt="" />
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>

                                    <img className="p-1" src={Driver} alt="" />
                                </div> */}
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="mt-10" src={MYTHRI} alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Driver Scorecards</h2> */}
                {/* <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>

                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                <img className="p-1" src={BRPL} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
