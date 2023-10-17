import React, { useRef } from "react";
import video1 from "../../../src/assets/images/video1.mp4";
import texture from "../../../src/assets/images/texture.jpg";
import ReactPlayer from "react-player";
import logistics from "../../../src/assets/images/logistics.jpeg";

export default function Industry() {
  const overviewRef = useRef(null);
  const insightsRef = useRef(null);
  const casestudyRef = useRef(null);
  const ourpartnerRef = useRef(null);
  const servicesRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToOverview = () => {
    overviewRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToinsights = () => {
    insightsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTocasestudy = () => {
    casestudyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTourpartner = () => {
    ourpartnerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToservices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTocontactus = () => {
    contactusRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500 opacity-70"></div>
        <img src={logistics} />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <section>
            <div class="container px-5 py-24 mx-auto">
              {/* <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-6xl text-black tracking-widest font-bold title-font mb-4">
                OUR SERVICES
              </h1>

              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div> */}
              <div class="flex flex-wrap">
                <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-3 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-6xl text-yellow-300 font-bold title-font mb-2">
                    Transport & Logistic
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
                </div>
                <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-3xl text-black font-bold title-font mb-2">
                    CREATING DIGITAL TRANSFORMATION AND INNOVATIVE SOLUTIONS FOR
                    THE CLIENT
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div>
        {/* Section 2 */}
        <section class="text-gray-600 body-font bg-[#eff5f5]">
          <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollToOverview}>OVERVIEW </button>
                </h2>
              </div>
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollToinsights}>INSIGHTS </button>
                </h2>
              </div>
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollTocasestudy}>CASE STUDIES </button>
                </h2>
              </div>
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollTourpartner}>OUR PARTNERS </button>
                </h2>
              </div>
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollToservices}>SERVICES</button>
                </h2>
              </div>
              <div class="p-4 sm:w-1/6 w-1/3">
                <h2 class="title-font font-bold sm:text-xl text-xl text-gray-900 md:hover:text-blue-500">
                  <button onClick={scrollTocontactus}>CONTACT US</button>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="border border-green-600 h-[128px] w-full"
        id="overview"
        ref={overviewRef}
      >
        Overview
      </div>
      <div
        className="border border-green-600 h-[128px] w-full"
        id="insight"
        ref={insightsRef}
      >
        Insight
      </div>
      <div
        className="border border-green-600 h-[128px] w-full"
        if=""
        ref={casestudyRef}
      >
        CaseStudies
      </div>
      <div
        className="border border-green-600 h-[128px] w-full"
        if=""
        ref={ourpartnerRef}
      >
        Our Partners
      </div>
      <div
        className="border border-green-600 h-[128px] w-full"
        if=""
        ref={servicesRef}
      >
        Services
      </div>
      <div
        className="border border-green-600 h-[128px] w-full"
        if=""
        ref={contactusRef}
      >
        Contact Us
      </div>
    </>
  );
}
