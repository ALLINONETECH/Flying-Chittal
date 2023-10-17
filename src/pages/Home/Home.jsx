import React from "react";
import logistic from "../../assets/images/logistic.jpg";
import siemens from "../../assets/images/siemens.png";
import car from "../../assets/images/car.png";
import header from "../../assets/images/header.jpg";
import digital from "../../assets/images/digital.jpeg";
import experts from "../../assets/images/experts.jpg";
import truck from "../../assets/images/truck.jpg";
import truck1 from "../../assets/images/truck1.png";
// import flyingchital from "../../assets/images/flyingchital.jpeg";
import warehouse from "../../assets/images/warehouse.png";
import laptop from "../../assets/images/laptop.png";
import loading from "../../assets/images/loading.png";
import { useState } from "react";
import video1 from "../../../src/assets/images/video1.mp4";
import texture from "../../../src/assets/images/texture.jpg";
import ReactPlayer from "react-player";
export default function Home() {
  const [h1Content, setH1Content] = useState(
    "INTEGRATED DIGITAL PLATFORM FOR MULTI-MODAL MANAGEMENT IN MINES, PLANTS AND PORTS"
  );
  const [h2Content, setH2Content] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis recusandae in illum labore blanditiis, nulla voluptatibus, eius repudiandae, nihil velit incidunt."
  );
  const handleButtonClick = (point) => {
    if (point === "Point 1") {
      setH1Content("Unlock Your Digital Transformation & Innovation Potential");

      setH2Content(
        "We Help Implement Modern Digital Technologies to Solve Business Problems, Optimise Processes and Save Cost"
      );
    } else if (point === "Point 2") {
      setH1Content(
        "Automate Your Enterprise Digital Workflows for Enhanced Resilience, Scalability and Sustainability"
      );
      setH2Content(
        "We Help Automate Enterprise Digital Workflows to Streamline Processes, Boost Productivity and Provide Data Driven Insights"
      );
    } else if (point === "Point 3") {
      setH1Content(
        "Our Edge Computing and Mobility Solutions enable non-connected equipment, Industrial IoT devices, and workstations to capture and process data without having to collaborate with a centralized database system"
      );

      setH2Content(
        "Aligned with Industrie 4.0 key driver for Digital Transformation and Industrial Automation"
      );
    } else if (point === "Point 4") {
      setH1Content(
        "We manage IT Services for applications and infrastructure, so that our clients can run their businesses. We help build and manage IT Infrastructure including private wireless, local area networks, wide area networks, edge networks, data centers and cloud networks"
      );

      setH2Content(
        "Build and Manage software Applications from core accounting, stock tracking, bank reconciliation, project management to automating workflows, payroll, CRM, manufacturing etc"
      );
    }
  };
  return (
    <div>
      {/* Section-Header */}
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500 opacity-70"></div>
        <ReactPlayer
          url={video1}
          playing
          loop
          muted
          width="100%"
          height="100%"
          playbackRate={0.2}
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <section>
            <div class="container px-5 py-24 mx-auto">
              <div class="  flex flex-col text-center w-full mb-20">
                <h1 class="text-6xl text-black tracking-widest font-bold title-font mb-4">
                  <div className=" relative">
                    {/* <img
                      className=" absolute -top-4 -left-4"
                      src={flyingchital}
                    /> */}
                  </div>
                  <span className="mr-10"> FLYING</span>{" "}
                  <span className="text-white ">CHITAL</span>
                </h1>

                <p class="lg:w-2/3 mx-auto leading-relaxed text-xl mr-">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div class="flex flex-wrap">
                <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-3 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-6xl text-yellow-400 font-bold title-font mb-2">
                    DIGITAL TRANSORMATION AND INNOVATION
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="mt-16 gap-3">
                    <div className="flex flex-row mt-16 gap-3 text-white font-bold">
                      <button
                        className="group hover:underline"
                        onClick={() => handleButtonClick("Point 1")}
                      >
                        Digital Transformation
                      </button>
                      <button
                        className="group hover:underline"
                        onClick={() => handleButtonClick("Point 2")}
                      >
                        Automation
                      </button>
                      <button
                        className="group hover:underline"
                        onClick={() => handleButtonClick("Point 3")}
                      >
                        Edge Computing
                      </button>
                      <button
                        className="group hover:underline"
                        onClick={() => handleButtonClick("Point 4")}
                      >
                        IT Services
                      </button>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h1 class="text-lg sm:text-2xl text-black font-semibold title-font mb-2">
                    {h1Content}
                  </h1>
                  <h2 class="leading-relaxed text-base text-white mb-4">
                    {h2Content}
                  </h2>
                  <a class="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Section-Philosophy */}
      <section className="text-gray-600 body-font   ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col   items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center  ">
            <img
              className="object-cover object-center rounded-lg mr-4 mt-8"
              alt="hero"
              src={digital}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold text-indigo-800 font-Primary leading-8">
              MULTI-MODAL LOGISTIC
              <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500 font-Primary leading-8">
                MANAGEMENT SERVICES
              </p>
            </h1>
            <p className="leading-relaxed text-base mb-2 text-justify ">
              Flying Chittal is an end-to-end multi-modal Logistics Innovation
              partner for Mines, Industry and Ports.
            </p>
            <p className="leading-relaxed text-base mb-2 text-justify ">
              We envision, develop and deploy logistic software solutions.
            </p>
            <p className="mleading-relaxed text-base mb-2 text-justify ">
              Flying Chittal offers Digital Solutions via a Consulting-led
              approach, SaaS-based frameworks and bolt-on solutions, Digital
              Engineering Services and World-class 24/7 Support.
            </p>
            <p className="leading-relaxed text-base mb-2 text-justify ">
              We empower your business with digital tools, allowing you to go
              beyond Efficiency, create better Visibility, higher
              Predictability, improved Accuracy and accelerate your Growth.
            </p>

            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>

      {/* Our Heads */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <h1 className="title-font sm:text-3xl text-3xl  font-bold text-indigo-800 font-Primary leading-8">
              FLYING CHITTAL BUILDS PLATFORM
              <p className="title-font sm:text-3xl text-3xl mb-2 font-medium text-indigo-500 font-Primary leading-8">
                THAT TRANSFORM LOGISTIC CHAIN
              </p>
            </h1>
            <div class="flex flex-col mb-4 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Digital Transformation and Innovation
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Automation of Enterprise Workflows
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Edge Computing and Mobility
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Managed IT Services
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full mb-5 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={experts}
            />
          </div>
        </div>
      </section>

      {/* Our Insight */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 className="title-font sm:text-3xl text-3xl  font-bold text-indigo-800 font-Primary leading-8 mb-4">
            STAY UPDATED WITH-
            <span className="title-font sm:text-3xl text-3xl mb-2 font-medium text-indigo-500 font-Primary leading-8">
              OUR LATEST INSIGHT
            </span>
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={truck}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={truck1}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={truck}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-CaseStudies */}
      <section className=" body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap sm:flex-row flex-col ">
            <h1 className="title-font sm:text-3xl text-3xl  font-bold text-indigo-800 font-Primary leading-8 ">
              Case Studies
            </h1>
          </div>
          <div className="mt-5 mb-4">
            <p>
              We deliver excellence by hiring and partnering with the best in
              the business.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className=" " src={laptop} />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={warehouse}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={loading}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className=" h-[400px]  w-full"
                  src={logistic}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section:-Engineering Excellence */}
      {/* <section className="text-gray-600 body-font"> */}
      {/* <div className="w-full h-screen bg-non repeat bg-cover bg-fixed bg-[url('/car.png')]">
                <img alt="content" className=" " src={car} />
            </div> */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-2 ">
            <h1 className="title-font sm:text-3xl text-3xl  font-bold text-indigo-800 font-Primary leading-8">
              Engineering Excellence
            </h1>
          </div>
          <div className="mt-5 mb-5">
            <p>
              We deliver excellence by hiring and partnering with the best in
              the business.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className=" h-[400px]  w-full"
                src={logistic}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              RECOGNITION
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Recognized for our product innovation, process innovation and
              innovation culture by Fortune and Statista, Inc., the
              world-leading statistics portal and industry-ranking provider.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={siemens}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              ACCOLADE
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Cognizant is positioned as a 'Leader' in the ISG Provider Lens™ -
              Salesforce Ecosystem Partners 2023 Report across the US, UK,
              Germany, and France markets.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Read The Report
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className=" h-[400px]  w-full"
                src={logistic}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              RECOGNITION
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Cognizant ranks ahead of 32 providers as a Leader in Everest
              Group’s PEAK Matrix® Assessment for creating prominent market
              impact in Enterprise QA services.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Read the Report
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
