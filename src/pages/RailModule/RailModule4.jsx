import React from 'react'
import Mines from '../../assets/images/Mines.png'
import Cement from '../../assets/images/Cement.png'
import Thermal from '../../assets/images/Thermal.png'
import Fertilizer from '../../assets/images/Fertilizer.png'
import Down from '../../assets/images/Down.png'
import Agro from '../../assets/images/Agro.png'
import Blog1 from "../../assets/images/Blog1.png";
import Efficiency4 from "../../assets/images/Efficiency4.png";
import Resource4 from "../../assets/images/Resource4.png";
import Realtime4 from "../../assets/images/Realtime4.png";
import Reduced4 from "../../assets/images/Reduced4.png";
import Data4 from "../../assets/images/Data4.png";
import Safety4 from "../../assets/images/Safety4.png";
import Customer4 from "../../assets/images/Customer4.png";
import Agriculture from "../../assets/images/Agriculture.png";
import Backgrnd4 from "../../assets/images/Backgrnd4.png";
import Railbg1 from "../../assets/images/Railbg1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import customised1 from "../../assets/images/customised1.jpg";

export default function RailModule4() {
    return (
        <div>
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Railbg1})`,
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
                            Rail Solution Modules 4
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] "> Home</span><span className="font-[700] font-heebo text-[32px] "> / Rail Logistics</span>  </div>
                            </div>

                        </p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        {/* <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1"> Solution Modules 2</h1> */}
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px]  ">Digitised</span><span className=" text-[40px] font-heebo font-bold "> Automated Loading Management</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                        {/* <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div> */}
                        <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">Planning Rake Arrival and Placement for the loading of material is a critical logistics operation that involves multiple components to ensure efficient and cost-effective cargo handling.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Efficiency4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Efficiency and Optimization</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Technology streamlines the entire loading process, enabling the efficient allocation and utilization of resources. It ensures that loading equipment, such as cranes and forklifts, and manpower are deployed precisely when and where they are needed, minimizing idle time and resource wastage.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Resource4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Resource Planning</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Technology facilitates the proactive management of loading equipment, consumables, and manpower. It helps in maintaining an inventory of consumables, such as saddles and fixtures, ensuring their availability when required. This reduces downtime and delays associated with equipment or consumable shortages.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Realtime4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Real-time Monitoring</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Real-time data collection and monitoring provide a comprehensive view of the loading process. It allows for immediate intervention in case of any issues, helping to prevent bottlenecks, disruptions, and ensuring that loading progresses as scheduled.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Reduced4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Demurrage Reduction</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Technology helps calculate demurrage charges accurately. By monitoring the real-time status of rakes and optimizing loading operations, demurrage costs can be minimized. This is especially crucial in reducing financial penalties for delayed departures.</p>

                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Data4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Data-Driven Decision-Making</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">The data collected during the loading process is invaluable for making informed decisions and optimizing future operations. By analyzing historical data, trends, and performance metrics, railway operators can continually refine their processes for greater efficiency and cost-effectiveness.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Safety4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Safety and Compliance</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Technology can help ensure that loading processes comply with safety regulations. It can monitor weight limits, hazardous cargo handling, and other safety considerations to prevent accidents and regulatory violations.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Customer4} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">Customer Satisfaction</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  mb-3">Efficient loading processes, enabled by technology, lead to timely deliveries and reduced transit times. This, in turn, enhances customer satisfaction, as shippers can rely on the railway for cost-effective and reliable transportation.</p>

                                </div>
                            </div>
                        </div>
                        {/* <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IAgro} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Agro Products</h1>
                                    <p className="leading-relaxed mb-3">Agricultural products are the lifeblood of India's economy and culture. Agriculture is the backbone of the nation, employing a significant portion of the population and contributing substantially to the country's GDP. India is one of the world's leading producers of a wide range of agricultural commodities, including rice, wheat, cotton, and spices.</p>

                                </div>
                            </div>
                        </div> */}
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
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${customised1}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
                    <h1 className="font-heebo text-4xl font-bold mb-5 ">

                    </h1>
                    <p className="font-heebo text-lg font-normal text-justify mb-20 ">
                        Flying Chital helps to meticulously orchestrate these elements in the process of Rake Arrival and Placement for material loading, logistics managers can minimize downtime, reduce operational costs, and ensure that goods are transported swiftly and cost-effectively, benefiting both shippers and the rail transport system.
                    </p>





                </div>
            </div>







        </div>
    )
}
