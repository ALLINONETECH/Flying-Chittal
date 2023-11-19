import React from 'react'

import Blog1 from "../../assets/images/Blog1.png";
import FCAgriculture from "../../assets/images/FCAgriculture.png";
import CDAC from "../../assets/images/CDAC.png";
import IconFC from "../../assets/images/IconFC.png";
import RailMod1 from "../../assets/images/RailMod1.png";
import Railbg1 from "../../assets/images/Railbg1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";


export default function RailModule1() {
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
                            Rail Solution Module 1
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
                            src={RailMod1}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Rake</span><span className=" text-[40px] font-heebo font-bold "> Indent Status Monitoring</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                        <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] w-4/5">
                            Traditionally, this process relied on manual paperwork and communication, leading to delays and errors. Customers willing to transport their consignments in rake loads/wagonloads should get registered on FBD portal of Indian Railways and place an online indent for supply wagons/rakes duly paying the prescribed wagon demand registration fee notified from time to time. Flying Chital Application helps stakeholders to get all information about Rake Indent and Approval on a real time basis.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
