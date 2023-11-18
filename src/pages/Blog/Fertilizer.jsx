import React from 'react'
import Fertilizerbg from "../../assets/images/Fertilizerbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import fertilizers1 from "../../assets/images/fertilizers1.jpg";
import FertilizerIndus from "../../assets/images/FertilizerIndus.png";
export default function Fertilizer() {
    return (
        <div>


            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Fertilizerbg})`,
                }} >
                <nav
                    x-data="{ isOpen: false }"
                    className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex lg:hidden"></div>
                    </div>
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                    </div>
                </nav>
                <div className="container px-6 py-16 mx-auto text-start">
                    <div className=" mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
                            Fertilizer Industry
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">Home</span><span className="font-[700] font-heebo text-[32px] "> / Blogs</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-white rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Fertilizer</span><span className=" text-[40px] font-heebo font-bold "> Industry </span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-4/4 lg:w-4/4 mx-auto ">The fertilizer industry plays a crucial role in global agriculture by providing essential nutrients to plants, thereby increasing crop yields and ensuring food security. A blog about the fertilizer industry could cover various aspects related to fertilizers, including their types, production processes, environmental impact, market trends, and their significance in modern agriculture.</p>
                    </div>
                    <p className="text-[26px] font-[700] font-heebo leading-[28px] text-[#3A0749]   mx-auto  mb-5">Key Challenges Encountered In Supply Chain Operation Of Fertilizer Sectors :</p>
                    <div className="flex flex-wrap -m-4">



                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px] rounded-bl-[50px] rounded-tr-[50px]  overflow-hidden  shadow-lg md:shadow-xl">
                                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Timely2} alt="blog" /> */}
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3"></h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#3734A9] mb-3"> 1)Data is passed manually between multiple individual entities such as SAP, AgriSales Portal (ASP), New iFMS portal, Handling agent, S&D Officer, Marketing Officer, etc. This leaves room for errors and makes it difficult to take prompt actions.</p>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3"><span className="font-bold">Solution:</span> Integrated Logistics Management platform - Bring all these disjointed systems under a ‘Single Integrated Platform’ through back end interface with different systems such as SAP, FOIS, Agri Sales Portal, and iFMS using cutting edge technologies. This ensures data to be electronically collected, shared, and stored securely across the platform.</p>

                                </div>
                            </div>
                        </div>


                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px] rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl bg-red-100 ">
                                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Timely2} alt="blog" /> */}
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3"></h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#F85A47] mb-3"> 2)Fertilizer companies are losing government subsidy due to lack of location-based e-Proof of Delivery (ePoD). Furthermore, the absence of advanced Real Time Tracking of dedicated & market vehicles makes it difficult to monitor trucks carrying expensive cargo.</p>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3"> <span className="font-bold">Solution:</span> Smart Vehicle Tracking System - Commission Telematics with location-based tracking and intelligence for dedicated and market vehicles along with live photo capturing option with latitude and longitude coordinates. This gives the Customer 100% ground coverage and intelligence of their entire distribution network under one single integrated platform. It also helps in identifying the exact location of trip completion, along with electronic proof of delivery.</p>


                                </div>
                            </div>
                        </div>

                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px] rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl bg-gray-100">
                                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Timely2} alt="blog" /> */}
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3"></h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#3A0749] mb-3">3) Historically, the lack of visibility and control during loading of Rake often results in counterproductive exercises, errors, and demurrage</p>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3"> <span className="font-bold">Solution:</span> Deploy Industrial IOT devices . This leads to capture critical information such as Count of bags loaded/unloaded in wagons, Labor count, Crew/staff performance, Activity efficiency, and Real-time performance. This improves efficiency, decreases TAT and saves costs.</p>


                                </div>
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
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${fertilizers1}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className=" w-auto md:w-4/5 text-start mt-36 text-white  grid content-end">
                    <h1 className="font-heebo text-4xl font-bold mb-5 ">
                        Fertilizer Industry
                    </h1>
                    <p className="font-heebo text-lg font-normal text-justify mb-20 ">
                        Managing Outbound Supply chain for Fertilizer sector is often cumbersome as the allocation and distribution is under the control market by govt of India. Moreover, 99% transportation of raw materials and finished goods is managed by Indian Railways
                    </p>
                </div>
            </div>

        </div>
    )
}
