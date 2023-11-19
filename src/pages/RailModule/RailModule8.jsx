import React from 'react'

import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import Controlled8 from "../../assets/images/Controlled8.png";
import HomeIcon from "../../assets/images/HomeIcon.png";


import Railbg1 from "../../assets/images/Railbg1.png";


export default function RailModule8() {
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
                            Rail Solution Module 8
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




            {/* Section-2- Flying Chital Smart Vehicle  */}
            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={Controlled8}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className="text-indigo-800 font-bold text-[40px] ">Controlled</span> <span> Unloading - Wagon Tippler, Hopper Line, Manual</span> </h1>
                        <div class="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                        <p className="mb-8 text-justify text-[20px] text-[#30343F] font-[400] font-heebo leading-7 w-4/5">
                            This transformation is especially evident in the context of unloading bulk materials from railway wagons, including wagon tipplers, hopper wagon lines, and manual unloading operations. IoT sensors and RFID tags are now employed to provide real-time tracking and data collection on the material flow, wagon conditions, and equipment status. With these technologies, operators can remotely monitor and control the unloading process, ensuring efficiency and safety. Moreover, digital solutions enable predictive maintenance, reducing downtime and optimizing resource allocation. Whether it's the automated precision of wagon tipplers, the continuous flow of hopper wagon lines, or the precision of manual unloading, these advancements are streamlining operations and enhancing the overall productivity of material handling in various industries.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
