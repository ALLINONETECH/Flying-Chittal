import React from "react";
import intelligent from "../assets/images/intelligent.png";
import Safety from "../assets/images/Safety.png";
import Driver from "../assets/images/Driver.png";
import Fuel from "../assets/images/Fuel.png";
import Drivertruck from "../assets/images/Drivertruck.png";
import Rich from "../assets/images/Rich.png";
import Rightarr from "../assets/images/Rightarr.png";
import Hem from "../assets/images/Hem.png";
import Hem1 from "../assets/images/Hem1.png";
import Monitoring1 from "../assets/images/Monitoring1.png";
import Monitoring2 from "../assets/images/Monitoring2.png";
import Parking from "../assets/images/Parking.png";
import Transit from "../assets/images/Transit.png";
import Loading from "../assets/images/Loading.png";
import Unloading from "../assets/images/Unloading.png";
import Blog1 from "../assets/images/Blog1.png";
import Drivers from "../assets/images/Drivers.png";
import IconFC from "../assets/images/IconFC.png";
import DriverAp from "../assets/images/DriverAp.png";
import RichA from "../assets/images/RichA.png";
import FuelM from "../assets/images/FuelM.png";
import DriverS1 from "../assets/images/DriverS1.png";
import SafetyS from "../assets/images/SafetyS.png";
import bluebgmobile from "../assets/images/bluebgmobile.png";
import pinkbgmobile from "../assets/images/pinkbgmobile.png";
import assestcontent from "../assets/images/assestcontent.png";
export default function AssetManagement() {
    return (
        <div className="">
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
                <div className="container px-6 py-16 mx-auto text-start">
                    <div className="mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
                            Flying Chital HEM/HMV/LMV Mobile
                            <br /> Asset Management System
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>

                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            Home / Flying Chital HEM/HMV/LMV Mobile Asset Management System
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font mt-40">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
                        <img
                            className="object-cover object-center absolute ml-60 bottom-52"
                            alt="hero"
                            src={bluebgmobile}
                        />
                        <img
                            className="object-cover object-center  rounded-bl-lg"
                            alt="hero"
                            src={pinkbgmobile}
                        />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">High</span>
                            lights
                        </h1>
                        <div className="flex mt-5 gap-2">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                                Dynamic/ Automatic Dispatch - Trip Level Management <br /> –
                                Start, In transit, Stopped, Trip End with Location
                            </p>
                        </div>

                        <div className="flex mt-5 gap-2">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                                Material Movement Management – Correct Location, <br /> Correct
                                Quantity, Correct Grade, Designated Equipment
                            </p>
                        </div>
                        <div className="flex mt-5">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                                API Integration with Onboard Systems
                                <div className="flex gap-2">
                                    <span>
                                        <img className="" src={IconFC} alt="" />
                                    </span>
                                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                                        Real Time Health Monitoring
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span>
                                        <img className="" src={IconFC} alt="" />
                                    </span>
                                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                                        Predictive Maintenance
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span>
                                        <img className="" src={IconFC} alt="" />
                                    </span>
                                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                                        Fuel Monitoring{" "}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span>
                                        <img className="" src={IconFC} alt="" />
                                    </span>
                                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                                        Proximity Sensing - Collision Avoidance
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span>
                                        <img className="" src={IconFC} alt="" />
                                    </span>
                                    <p className="text-xl not-italic font-normal leading-7 font-heebo ">
                                        Payload Management
                                    </p>
                                </div>
                            </p>
                        </div>
                        <div className="flex mt-5 gap-2">
                            <span>
                                <img className="p-1" src={IconFC} alt="" />
                            </span>
                            <p className="text-xl not-italic font-medium leading-relaxed font-heebo ">
                                MIS Reports, Dashboard{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section-2  */}
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-20">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                HEM/HMV/LMV
                            </span>
                            -Mobile Asset Management
                        </h1>

                        <p class="text-xl not-italic font-normal leading-7  xl:w-4/5 lg:w-3/4 mx-auto text-gray-500s font-heebo text-[#30343F]">
                            Move beyond Track & Trace with an ultra easy to use interface that
                            integrates with 2.2k devices and it accessible on mobile app and
                            web for desktop in over 15 language
                        </p>
                        <div class="flex mt-6 justify-center"></div>
                    </div>

                    <div className="flex flex-wrap ">
                        <div className=" xl:w-1/2 md:w-1/2  bg-white  ">
                            {/* <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white h-full   "> */}
                            {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Intelligent 24*7 Real time tracking</h2>
                                <div className="flex">
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" mr-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full gap-8 ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={Drivers}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2  mt-4">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Intelligent 24*7 Real Time <br />
                                            Tracking
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Live location updates on app,
                                                <br /> web, and email
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Automated Trip Management
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Unlimited movement history
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Track multiple vehicles <br />
                                                simulataneously
                                            </p>
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
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full gap-8 ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={SafetyS}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2  pt-4 ">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Safety & Theft Prevention
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                SOS alerts
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Geofence with real time vehicle <br />
                                                entry and exit alerts
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Remove vehicle lock with <br />
                                                immobillizer
                                            </p>
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
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full gap-8 ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={DriverS1}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2  pt-4 ">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Driver Scorecards
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Track and rank drivers performance
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Define exception and incident
                                                <br /> threshold such as over speeding,
                                                <br /> non economical driving
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Coach drivers with real examples
                                            </p>
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
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={FuelM}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10 mt-4 ">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Fuel Monitoring & Tracking
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Alerts on fuel drainage
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Visibility on refueling, draining and mileage on trips
                                            </p>
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
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={RichA}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10 mt-4  ">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Rich Analytics & Reporting
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Customizable reports
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Data driven information for preventive maintenance
                                            </p>
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
                                    <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-base">Alerts on fuel drainage<br /> </p>
                                </div> */}
                            <div className=" ml-2  ">
                                <div className="flex flex-col sm:flex-row justify-center border-2 border-gray-200  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  md:shadow-xl  bg-white h-full  ">
                                    <div className="  w-1/3 md:w-1/3 ">
                                        <img
                                            className="object-cover object-center "
                                            alt="hero"
                                            src={DriverAp}
                                        />
                                    </div>
                                    <div className=" h-full xl:w-2/3 md:w-1/2 ml-10 mt-4 ">
                                        <h2 className="text-2xl not-italic font-bold leading-8  text-gray-900  title-font mb-2 ml-2 font-heebo">
                                            Driver App
                                        </h2>
                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Task management between driver and operator
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <span>
                                                <img className="p-1" src={IconFC} alt="" />
                                            </span>
                                            <p className="text-xl not-italic font-normal leading-7 text-[#30343F]">
                                                Electronic Proof of Delivery (EPoD)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3a Image Section */}
            <div className=" mb-20">
                <img
                    className="object-cover object-center w-full drop-shadow-lg"
                    alt="hero"
                    src={assestcontent}
                />
            </div>

            {/* Section-4 Monitoring at all the Transaction Points */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                Monitoring&nbsp;
                            </span>
                            At All Transaction Points
                        </h1>
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
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Parking</h2>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    The transport supervisor allocates the vehicle and the driver
                                    on Mobile Application.
                                </p>
                            </div>

                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Real time up dation on the dashboard informing allocation of
                                    vehicle and driver.
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Time of exit from the parking area through RFID and Geo Fence.
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Trip Management - Real time trace and track of location and
                                    route taken during transit
                                    <br />
                                    to the designated operations site.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-24 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Transit</h2>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Alerts and Alarms - route deviation, unauthorized stoppage,
                                    entry to red zones, over speeding etc.
                                </p>
                            </div>

                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Exact kilometers covered, ignition status.
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Exact Location on Google Map
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Average speed and distance covered during the trips
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Incident investigation, root cause analysis
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Total no of trips per shift/per day/per week/per month.
                                </p>
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
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Loading</h2>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Time of entry at loading site
                                </p>
                            </div>

                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Location of vehicle on map at loading site
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Time of exit from loading site
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Turn Around Time (TAT) at loading site
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-24 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Unloading</h2>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Time of entry at unloading site
                                </p>
                            </div>

                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Location of vehicle on map at unloading site
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Time of exit from unloading site
                                </p>
                            </div>
                            <div className="flex">
                                <span>
                                    <img className="p-1" src={IconFC} alt="" />
                                </span>
                                <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                    Turn Around Time (TAT) at unloading site
                                </p>
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
            {/* <section className="text-gray-600 body-font mt-40">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
            <img
              className="object-cover object-center absolute ml-60 bottom-48"
              alt="hero"
              src={Monitoring2}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Monitoring1}
            />
          </div>
          <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
            <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">
              Close Monitoring for Controlled Operations
            </h1>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Critical Operation Parameters Monitored
                <div className="flex ">
                  <span>
                    <img className="" src={IconFC} alt="" />
                  </span>
                  <p className="leading-relaxed text-base ">
                    Number of trips made, operator name, speed of the truck,
                    time status, origin - destination, remaining fuel, etc
                  </p>
                </div>
              </p>
            </div>

            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="leading-relaxed text-base">MAP Interface</p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Equipment visible in a single view, with icon /symbols
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                Route deviation, wrong arrival, speed, delay, overloading, wrong
                dump, incorrect material information.
              </p>
            </div>
            <div className="flex mt-5">
              <span>
                <img className="p-1" src={IconFC} alt="" />
              </span>
              <p className="leading-relaxed text-base">
                {" "}
                Vehicle speed, operator, payload, assignments etc. available for
                post -mining analysis
              </p>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    );
}