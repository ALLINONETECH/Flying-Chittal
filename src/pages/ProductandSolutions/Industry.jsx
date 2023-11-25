/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import OILGas1 from "../../assets/images/OILGas1.png";
import Blog1 from "../../assets/images/Blog1.png";
import IMining from "../../assets/images/IMining.png";
import IManufacture from "../../assets/images/IManufacture.png";
import ICement from "../../assets/images/ICement.png";
import Transformation from "../../assets/images/Transformation.png";
import Fertilizer1 from "../../assets/images/Fertilizer1.png";
import IAgro from "../../assets/images/IAgro.png";
import Warehouse from "../../assets/images/Warehouse.png";
import Aqua1 from "../../assets/images/Aqua1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";

export default function Industry() {
  const transportRef = useRef();
  const miningRef = useRef();
  const metalsRef = useRef();
  const cementRef = useRef();
  const fertiliserRef = useRef();
  const oilRef = useRef();
  const warehousingRef = useRef();
  const agricultureRef = useRef();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const page = params.get("page");
  useEffect(() => {
    if (page == "transport") {
      transportRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "mining") {
      miningRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "metals") {
      metalsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "cement") {
      cementRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "fertiliser") {
      fertiliserRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "oil") {
      oilRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "warehousing") {
      warehousingRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "agriculture") {
      agricultureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div>
      {/* {/ Section-1 /} */}
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
            <div className="flex lg:hidden"></div>
          </div>
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Industries
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
                    / Industries
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2  */}
      <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14 mt-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px]  ">
                Industries
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">
              .
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2">
              <div
                ref={transportRef}
                className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]"
              >
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Transformation}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Transportation & Logistics
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The transportation and logistics industry in India is a
                    dynamic and rapidly evolving sector that plays a pivotal
                    role in the country's economic growth. With a vast network
                    of roads, railways, ports, and airways, India's logistics
                    sector is witnessing a transformative shift towards
                    Logistics 4.0. This next wave of innovation involves the
                    integration of advanced technologies like Internet of Things
                    (IoT), artificial intelligence (AI), big data analytics, and
                    automation to streamline operations, enhance efficiency, and
                    optimize supply chains.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 " ref={miningRef}>
              <div className="h-full border-2 border-gray-200 bg-white shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={IMining}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Mining
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The Indian mining sector is a vital component of the
                    country's economy, responsible for the extraction of various
                    minerals and metals. India possesses significant mineral
                    resources, including coal, iron ore, bauxite, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" ref={metalsRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={IManufacture}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Metal Manufacturing
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Metal manufacturing plants in India form a crucial part of
                    the country's industrial landscape. India has a strong and
                    diverse metal manufacturing sector, producing various metals
                    like steel, aluminum, copper, and more. These plants support
                    infrastructure development, automotive industries, and
                    numerous other sectors.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" ref={cementRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={ICement}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Cement
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The Indian cement industry plays a pivotal role in the
                    country's economic development, contributing significantly
                    to infrastructure projects and construction activities. With
                    a robust growth trajectory, the industry faces challenges,
                    among which efficient logistics management stands out
                    prominently. The seamless movement of raw materials, such as
                    limestone and gypsum, to manufacturing units and the timely
                    distribution of finished cement products to various
                    construction sites are critical for the industry's success.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/2" ref={fertiliserRef}>
              <div className="h-full border-2 border-gray-200  bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Fertilizer1}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Fertilizers
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Fertilizer and Chemical manufacturing plants are significant
                    contributors to India's agricultural and industrial sectors.
                    These plants produce a wide range of chemical products,
                    including fertilizers, pesticides, and other chemicals used
                    in agriculture, manufacturing, and healthcare. The Indian
                    fertilizer industry plays a crucial role in supporting the
                    country's agricultural sector, ensuring food security and
                    promoting rural development.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" ref={oilRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={OILGas1}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Oil & Gas
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The Indian downstream sector is of paramount importance in
                    the country's energy industry. This sector encompasses the
                    refining and distribution of petroleum and petrochemical
                    products. It plays a critical role in ensuring the
                    availability of essential fuels like petrol, diesel, and
                    natural gas, which power various industries, transportation,
                    and households across India. The downstream sector is
                    pivotal for meeting energy demands and facilitating economic
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" ref={warehousingRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Warehouse}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Warehousing
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The warehousing industry in India is undergoing a
                    transformative shift with the integration of advanced
                    technologies, heralding the era of Logistics 4.0. Embracing
                    automation, robotics, and data-driven analytics, warehouses
                    are evolving into smart and efficient hubs that streamline
                    operations and enhance overall supply chain management.
                    Automated storage and retrieval systems (AS/RS), IoT-enabled
                    sensors, and RFID technology are being employed to optimize
                    inventory tracking, minimize errors, and improve overall
                    warehouse efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/2" ref={agricultureRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={IAgro}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Agriculture
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    In India, the agricultural sector is undergoing a
                    significant transformation through the adoption of advanced
                    technologies aimed at improving yield and sustainability.
                    Precision agriculture, enabled by technologies such as
                    drones, satellite imagery, and GPS, allows farmers to
                    optimize resource utilization by precisely managing
                    irrigation, fertilization, and pest control. Internet of
                    Things (IoT) devices, soil sensors, and data analytics
                    provide real-time insights into soil health and crop
                    conditions, empowering farmers to make informed decisions
                    and maximize productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2" ref={agricultureRef}>
              <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Aqua1}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">
                    Aquaculture
                  </h1>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    In India, the aquaculture sector is increasingly turning to
                    advanced technologies to enhance productivity and yield.
                    With the rising demand for seafood, integrating innovative
                    solutions has become crucial for sustainable and efficient
                    aquaculture practices. Advanced technologies such as
                    Internet of Things (IoT), sensors, and data analytics are
                    being employed to monitor and manage crucial parameters like
                    water quality, temperature, and feeding patterns. Automated
                    feeding systems with precise control mechanisms optimize the
                    nutrition intake of aquatic species, promoting healthier
                    growth.
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
