import React from "react";
import EdgeCompbg from "../../assets/images/EdgeCompbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import FertilizerIndus from "../../assets/images/FertilizerIndus.png";
import IconFC from "../../assets/images/IconFC.png";
import Edge12 from "../../assets/images/Edge12.png";
import Edge21 from "../../assets/images/Edge21.png";
import edgecomputing1 from "../../assets/images/edgecomputing1.jpg";

export default function EdgeComputing() {
  return (
    <div>
      {/* {/ Section-1 /} */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${EdgeCompbg})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                    </div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Edge Computing
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Challenge, Ideate & Create
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
                  <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">
                    Home
                  </span>
                  <span className="font-[700] font-heebo text-[32px] ">
                    {" "}
                    / Blogs
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2  */}
      <section className="text-gray-600 body-font bg-white rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div class="text-center mb-14">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Edge
              </span>
              <span className=" text-[40px] font-heebo font-bold ">
                {" "}
                Computing{" "}
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

            <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-4/4 lg:w-4/4 mx-auto ">
              Edge computing is a distributed computing paradigm that brings
              computation and data storage closer to the location where it is
              needed, rather than relying on a centralized data center. In
              traditional cloud computing models, data is sent to a remote
              server for processing and analysis.
            </p>
          </div>

          <div className="flex ">
            <div className="h-12 w-24">
              <img className="p-1  " src={IconFC} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                The Digital Transformation initiative of enterprises is
                typically focused on the enablement of better products,
                services, experience, or business models. At the heart of such
                transformation is data; but often fundamental changes are only
                possible when the organization can make substantive shifts in
                how data is gathered, moved, stored, or processed. There, edge
                computing plays a pivotal role.
              </p>
            </div>
          </div>

          <div>
            <div className="flex ">
              <div className="h-12 w-24">
                <img className="p-1  " src={IconFC} alt="" />
              </div>
              <div>
                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                  For simpler understanding, the edge computing is the practice
                  of capturing, processing, and analysing data near where it is
                  created.
                  <br /> Edge computing brings the data and the compute closest
                  to the point of interaction. The edge devices deployed at the
                  manufacturing site, processes the data they collect, share
                  timely insights and if applicable, take appropriate action.
                  Edge computing is the science of having the edge devices do
                  this without the need for the data to be transported to
                  another server / cloud environment
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex ">
              <div className="h-12 w-24">
                <img className="p-1  " src={IconFC} alt="" />
              </div>
              <div>
                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                  The most significant way in which edge computing complements
                  Digital Transformation initiatives is by enabling edge-native
                  applications that leverage cloud-native principles while
                  considering the unique characteristics of the edge:
                  standardization, connectivity, scalability, security,
                  hyper-personalization, manageability, and cost..
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex ">
              <div className="h-12 w-24">
                <img className="p-1  " src={IconFC} alt="" />
              </div>
              <div>
                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                  First drawback is the manual collection of data from various
                  entities like transporters, SAP, plants, plots, railway
                  sidings, etc. There are a lot of errors making it difficult to
                  get meaningful insights required for immediate action.
                  Entry/Exit are paper based and not captured electronically.
                </p>
              </div>
            </div>
          </div>
  

          <p className="text-[26px] font-[700] font-heebo leading-[28px] text-[#3A0749]   mx-auto  mb-5">
            Let’s Dig Into How Edge Computing Helps With Digital Transformation:
          </p>

          <div className="flex flex-wrap -m-4 ">
            <div className=" w-auto md:w-1/2 p-4">
              <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl">
                <img className=" w-full" src={Edge12} alt="" />
                {/* <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Plants inbound and outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Inbound logistics involve receiving raw materials,
                                        components, or products from suppliers or other facilities. In the context of a trucking company, this could
                                        mean receiving parts for the trucks, fuel, or any other materials necessary for operations. </p>
                                </div> */}
              </div>
            </div>

            <div className=" w-auto md:w-1/2 p-4">
              <div className=" border-gray-200  rounded-tr-[80px] rounded-bl-[50px]  shadow-lg  md:shadow-xl border-2 border-black">
                <img className="rounded-tr-[15px] w-full" src={Edge21} alt="" />
                {/* <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Mines outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Efficient route planning is crucial to ensure timely deliveries and reduce
                                        transportation costs. Companies use specialized software and GPS technology to optimize routes based on factors like distance, traffic conditions, and delivery schedules.</p>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Backgrnd2})` }}>
                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold text-start"></h1>
                    <p className=" text-lg"></p>
                </div>
            </div> */}
      <div
        className="flex items-center justify-center  bg-cover bg-no-repeat "
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${edgecomputing1}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
          <h1 className="font-heebo text-4xl font-bold mb-5 ">
            Orchestrating And Securing Distributed Assets And Devices
          </h1>
          <p className="font-heebo text-lg font-normal text-justify mb-20 ">
            For remote operations with limited or no connectivity to the cloud –
            for example deep in a mine or out in an agricultural field ­– edge
            computing can perform real-time operational decisions based on local
            analysis of sensor data. Many IoT sensors used in warehouses,
            factories, fields, and vehicles have adopted an asynchronous data
            model approach. With the increase in computing, connectivity and
            other functionality available in these IoT sensors, many of these
            devices can now perform some of their own computing operations,
            without the need to interact with any other resources in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}
