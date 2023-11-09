import React from 'react'
import rail1 from '../../assets/images/rail1.png'
import rail2 from '../../assets/images/rail2.png'
import rail3 from '../../assets/images/rail3.png'
import rail4 from '../../assets/images/rail4.png'
import truck1 from '../../assets/images/truck1.png'
import truck2 from '../../assets/images/truck2.png'
import truck3 from '../../assets/images/truck3.png'
import truck4 from '../../assets/images/truck4.png'
import truck5 from '../../assets/images/truck5.png'
import truck6 from '../../assets/images/truck6.png'
import Rightarr from '../../assets/images/Rightarr.png'
import item1 from '../../assets/images/rail-item1.png'
import item2 from '../../assets/images/rail-item2.png'
import item3 from '../../assets/images/rail-item3.png'
import item4 from '../../assets/images/rail-item4.png'
import item5 from '../../assets/images/rail-item5.png'
import Blog1 from "../../assets/images/Blog1.png";

export default function RoadLogistics() {
    return (
        <div>
            {/* Section-1  RoadLogistics */}

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
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl">
                            RailLogistics
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>

            {/* 1st heading */}
            <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-32 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 ">

                        <section className="text-gray-600 body-font  rounded-tl-[50px] rounded-br-[50px] ">
                            <div className="container px-5 py-10 mx-auto">
                                <div class="text-center mb-5">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Modules & Features</h1>
                                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                                    <div class="flex justify-center">
                                        <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                                    </div>
                                </div>
                                <div className="container px-5  mx-auto">
                                    <div class="text-center mb-5">
                                        <p class="text-center leading-relaxed xl:w-2/3 lg:w-1/4 mx-auto text-gray-500s">Rail logistics involve the management, planning, and coordination of
                                            transportation, storage, and distribution of goods via railroads. Various modules and features are essential for efficient rail logistics management. </p>
                                    </div>
                                </div>
                            </div>
                        </section>




                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Plants inbound and outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Inbound logistics involve receiving raw materials,
                                        components, or products from suppliers or other facilities. In the context of a trucking company, this could
                                        mean receiving parts for the trucks, fuel, or any other materials necessary for operations. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Mines outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Efficient route planning is crucial to ensure timely deliveries and reduce
                                        transportation costs. Companies use specialized software and GPS technology to optimize routes based on factors like distance, traffic conditions, and delivery schedules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd heading  */}
            <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-20">
                <div className="container px-32 py-5 mx-auto">

                    <div class="text-center mb-10 mt-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Rail Solution Modules</h1>
                        <p class="text-base leading-relaxed xl:w-1/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                    </div>


                    <div className="flex flex-wrap -m-4 ">
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[15px] w-full" src={rail1} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Planned Monitored Consumables Charging – Saddles and Fixtures Readiness for Loading</h2>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[15px] w-full" src={rail2} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Tracking /Monitoring Material Scheduled for Loading as per Preapproved plan</h2>

                            </div>
                        </div>
                        <div className=" w-auto h-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[15px] w-full" src={rail3} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Monitored and Controlled Wagon Loading</h2>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[15px] w-full" src={rail4} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Asset Utilisation and Planning for Loading /Yard Equipment and Machines</h2>

                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {/* 3rd headingg  */}

            <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] ">
                <div className="container px-32 py-5 mx-auto">

                    <div class="text-center mb-10 mt-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Rail Solution Modules</h1>
                        <p class="text-base leading-relaxed xl:w-1/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                    </div>
                    <div className="container px-5  mx-auto">
                        <div class="text-center mb-5">
                            <p class="text-center leading-relaxed xl:w-2/3 lg:w-1/4 mx-auto text-gray-500s">It seems like you are looking for information on rail solution modules.
                                Rail solution modules typically refer to the various components or features that are integrated into a comprehensive rail transportation system. These modules can cover a wide range of functionalities. </p>
                        </div>
                    </div>


                    <div className="flex flex-wrap -m-4 ">
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck1} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rake Indent Status Monitoring</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rake Planning Module</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck3} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Inventory Manage ment Module</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck4} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Digitization of Rake Entry Process</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck1} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Wagon Number and Correct Sequence Mapping</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Post loading process</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Weighment capture-load cells/EIMWB</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck1} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Security inspiration</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck5} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">rake release process</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck1} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Payment and invoicing-Demurrage calculation</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rake exit</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck4} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rack tracking- GPS or integrated with FOIS</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck5} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rake pre arrival process</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Rake receipt at sliding/yard</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck6} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Inventory Manage ment Module</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck5} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Analytical customized reports and turn around time(TAT)</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8 ">
                                    <img className="w-40 m-auto" src={truck6} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Automated Wagon Number Recording, Generation of Wagon Bill</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck3} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Monitored and controlled unloading including wagon tippler planning</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck2} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Automated Wagon Health Determination, Declaration of Sick Wagons</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck5} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Tracking/monitoring schedule for loading as per pre approved plan</h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck4} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Asset utilization and planning for loading/yard equipment and machines </h3>

                            </div>
                        </div>
                        <div className=" w-auto md:w-1/4 p-4  ">
                            <div className=" border-2 border-gray-200  rounded-tr-[15px] rounded-bl-[15px] h-full  bg-white shadow-lg  md:shadow-xl">
                                <div className="flex-wrap w-auto h-auto  place-items-center justify-items-center rounded-bl-lg mt-8 ml-8 mr-8  ">
                                    <img className="w-40 m-auto" src={truck3} alt="" />
                                </div>

                                <h3 className="text-2xl text-gray-900 font-bold title-font p-6 pb-12 text-center">Planned monitored charging-saddles and fixtures-readiness for loading</h3>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* 4th heading  */}
            <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">

                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Rail Solution Modules</h1>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Post Loading Process</p>
                        </div>

                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Weighment Capture - Load Cells/ EIMWB </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Security Inspection </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Rake Release Process </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Payment and Invoicing - Demurrage Calculation Rake Exit</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Rake Exit</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Rake Tracking – GPS or integrated with FOIS</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Analytical Customised Reports and Turn Around Time (TAT)</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Rake Pre -Arrival Process</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Rake Receipt at Siding/ Yard</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Monitored and Controlled Unloading including Wagon Tippler/Hopper Line Planning</p>
                        </div>

                    </div>
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={item2} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={item1} />
                    </div>
                </div>

            </section>
            {/* 5ht heading  */}

            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex pl-56 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={item3}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">Dashboards</h1>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Active and Completed Trips</p>
                        </div>

                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Customer/Client Management </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Contractor Management </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">User/Operator Management  </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base"> Equipment/Machinery Management</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Wagon Management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6th heading  */}
            <section className="text-gray-600 body-font mt-10 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">

                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Conclusion</h1>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Single Integrated Digital Platform

                                <div className="flex mt-2">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Real Time Situational Awareness- Proactive Action not Reactive Response  </p>

                                </div>

                            </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Multi Modal Transport

                                <div className="flex mt-2">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Road and Rail Network – Combined/ Independent as Stand Alone </p>

                                </div>

                            </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Complete Visibility

                                <div className="flex mt-2">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Inbound/Outbound – Within Mines/Plants/Ports/Railway Yards</p>

                                </div>

                            </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Automation Eliminates Inefficient Manual Processes. </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Reduced Costs, Wastage, Pilferage – Revenue Leakage</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Enhanced Efficiency, Transparency, Reliability </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Seamless Interface with Govt. & Regulatory Portals</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Aligned with Logistics 4.0</p>
                        </div>

                    </div>
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg">
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={item5} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={item4} />
                    </div>
                </div>

            </section>

        </div>
    )
}
