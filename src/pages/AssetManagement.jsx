import React from 'react'
import intelligent from '../assets/images/intelligent.png'
import Safety from '../assets/images/Safety.png'
import Driver from '../assets/images/Driver.png'
import Fuel from '../assets/images/Fuel.png'
import Drivertruck from '../assets/images/Drivertruck.png'
import Rich from '../assets/images/Rich.png'
import Rightarr from '../assets/images/Rightarr.png'
import Hem from '../assets/images/Hem.png'
import Hem1 from '../assets/images/Hem1.png'
import Monitoring1 from '../assets/images/Monitoring1.png'
import Monitoring2 from '../assets/images/Monitoring2.png'
import Parking from '../assets/images/Parking.png'
import Transit from '../assets/images/Transit.png'
import Loading from '../assets/images/Loading.png'
import Unloading from '../assets/images/Unloading.png'
import Blog1 from '../assets/images/Blog1.png'
import Drivers from '../assets/images/Drivers.png'
import IconFC from '../assets/images/IconFC.png'
import DriverAp from '../assets/images/DriverAp.png'
import RichA from '../assets/images/RichA.png'
import FuelM from '../assets/images/FuelM.png'
import DriverS1 from '../assets/images/DriverS1.png'
import SafetyS from '../assets/images/SafetyS.png'


export default function AssetManagement() {
    return (
        <div className="">

            <section className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
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
                        <div className="flex lg:hidden">

                        </div>
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
                        {/* <h1 className="text-6xl font-semibold  dark:text-white lg:text-6xl mt-6 text-gray-200 dark:text-gray-300">Flying Chital HEM/HMV/LMV  Mobile Asset Management System</h1> */}
                        <h2 className="mt-6 text-gray-200 dark:text-gray-300  text-4xl font-semibold">Flying Chital HEM/HMV/LMV  Mobile Asset Management System</h2>
                        <p className='mt-6 text-gray-200 dark:text-gray-300 '>We provide Smart Solutions to Simplify Your Future</p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">

                        </button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>





                </div>
            </section>


            <section className="text-gray-600 body-font mt-40">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={Hem1} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={Hem} />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Highlights</h1>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Dynamic/ Automatic Dispatch - Trip Level Management – Start, In transit, Stopped, Trip End with Location </p>
                        </div>

                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Material Movement Management – Correct Location, Correct Quantity, Correct Grade, Designated Equipment </p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">API Integration with Onboard Systems

                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Real Time Health Monitoring  </p>

                                </div>
                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Predictive Maintenance </p>

                                </div>
                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Fuel Monitoring </p>

                                </div>

                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base  ">Proximity Sensing - Collision Avoidance t </p>

                                </div>
                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base text-[#30343F]">Payload Management </p>

                                </div>

                            </p>

                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">MIS Reports, Dashboard </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Section-2  */}
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">HEM/HMV/LMV – Mobile Asset Management</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Move beyond Track & Trace with an ultra easy to use interface that integrates with 2.2k devices and it accessible on mobile app and web for desktop in over 15 language</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap ">
                        <div className=" xl:w-1/2 md:w-1/2  bg-white  ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" mr-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={Drivers} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2  ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-2">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage  </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" xl:w-1/2 md:w-1/2  bg-white  ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={SafetyS} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2   ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" xl:w-1/2 md:w-1/2  bg-white mt-10 ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" mr-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={DriverS1} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10  ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-2">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" xl:w-1/2 md:w-1/2  bg-white mt-10  ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={FuelM} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10  ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-2">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" xl:w-1/2 md:w-1/2  bg-white mt-10   ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" mr-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={RichA} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10  ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-2">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" xl:w-1/2 md:w-1/2  bg-white mt-10  ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img className="object-cover object-center " alt="hero" src={DriverAp} />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10  ">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ml-2">Intelligent 24*7 Real Time Tracking </h2>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>
                                        <div className="flex">
                                            <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>






            {/* Section-4 Monitoring at all the Transaction Points */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Monitoring at All Transaction Points</h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
                    </div>
                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white  ">
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-20 px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Parking}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5">
                            <h2>Parking</h2>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">The transport supervisor allocates the vehicle and the driver on Mobile Application. </p>
                            </div>

                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">

                        <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 ml-20 ">
                            <h2>Transit</h2>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">The transport supervisor allocates the vehicle and the driver on Mobile Application. </p>
                            </div>

                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>

                        </div>
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0 mr-28  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Transit}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-20  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Loading}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2  lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 ">
                            <h2>Loading</h2>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">The transport supervisor allocates the vehicle and the driver on Mobile Application. </p>
                            </div>

                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">

                        <div className="lg:flex-grow md:w-1/6 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 ml-20 ">
                            <h2>Unloading</h2>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">The transport supervisor allocates the vehicle and the driver on Mobile Application. </p>
                            </div>

                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>
                            <div className="flex">
                                <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage Alerts on fuel drainage </p>
                            </div>

                        </div>
                        <div className="lg:max-w-lg lg:w-1/2 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-2 px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Unloading}
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* Section-4 */}
            <section className="text-gray-600 body-font mt-40">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
                        <img className="object-cover object-center absolute ml-60 bottom-48" alt="hero" src={Monitoring2} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={Monitoring1} />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Close Monitoring for Controlled Operations</h1>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Critical Operation Parameters Monitored



                                <div className="flex ">
                                    <span><img className="" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base ">Number of trips made, operator name, speed of the truck, time status, origin - destination, remaining fuel, etc</p>

                                </div>



                            </p>

                        </div>

                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">MAP Interface</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Equipment visible in a single view, with icon /symbols
                            </p>

                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base">Route deviation, wrong arrival, speed, delay, overloading, wrong dump, incorrect material information.</p>
                        </div>
                        <div className="flex mt-5">
                            <span><img className="p-1" src={Rightarr} alt="" /></span><p className="leading-relaxed text-base"> Vehicle speed, operator, payload, assignments etc. available for post -mining analysis</p>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    )
}
