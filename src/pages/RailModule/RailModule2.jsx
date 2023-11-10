import React from 'react'

import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import RailMod1 from "../../assets/images/RailMod1.png";


export default function RailModule2() {
    return (
        <div>
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
                        <h1 className="text-xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-4xl">
                            Rail Solution Modules 2
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>




        </div>
    )
}
