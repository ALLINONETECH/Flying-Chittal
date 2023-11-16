import React from 'react'

// import Cement from '../../assets/images/Cement.png'
// import Thermal from '../../assets/images/Thermal.png'
// import Fertilizer from '../../assets/images/Fertilizer.png'
// import Down from '../../assets/images/Down.png'
// import Agro from '../../assets/images/Agro.png'
import Blog1 from "../assets/images/Blog1.png";
// import Efficiency4 from "../../assets/images/Efficiency4.png";
// import Resource4 from "../../assets/images/Resource4.png";
// import Realtime4 from "../../assets/images/Realtime4.png";
// import Reduced4 from "../../assets/images/Reduced4.png";
// import Data4 from "../../assets/images/Data4.png";
// import Safety4 from "../../assets/images/Safety4.png";
// import Customer4 from "../../assets/images/Customer4.png";
import Telematics2 from "../assets/images/Telematics2.png";
import Telematicsbg from "../assets/images/Telematicsbg.png";
import HomeIcon from "../assets/images/HomeIcon.png";


export default function Telematics() {
    return (
        <div>

            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Telematicsbg})`,
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
                            Telematics
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">Flying Chital</span><span className="font-[700] font-heebo text-[32px] ">/Telematics</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>



            <div class="text-center mb-14 mt-10">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                    <span className=" text-indigo-800 font-bold text-[40px]  ">Telematics</span></h1>
                <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">Advanced telematics, RFID, Automatic Number Plate Recognition, IoT sensors, and edge computing are integral components of Logistics 4.0, as they enable real-time data collection, analysis, and decision-making in supply chain management.</p>
            </div>




            <div className="  ">

                <img
                    className="object-cover object-center  drop-shadow-lg"
                    alt="hero"
                    src={Telematics2}
                />
            </div>







        </div>
    )
}
