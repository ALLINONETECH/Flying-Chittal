import React from 'react'
import Mines from '../../assets/images/Mines.png'
import Cement from '../../assets/images/Cement.png'
import Thermal from '../../assets/images/Thermal.png'
import Fertilizer from '../../assets/images/Fertilizer.png'
import Down from '../../assets/images/Down.png'
import Agro from '../../assets/images/Agro.png'
import Blog1 from "../../assets/images/Blog1.png";
import Reduced from "../../assets/images/Reduced.png";
import IManufacture from "../../assets/images/IManufacture.png";
import Reliable from "../../assets/images/Reliable.png";
import RealTime from "../../assets/images/RealTime.png";
import RichAnalytics from "../../assets/images/RichAnalytics.png";
import IDown from "../../assets/images/IDown.png";
import IAgro from "../../assets/images/IAgro.png";
import FCVehicle from "../../assets/images/FCVehicle.png";
import Best from "../../assets/images/Best.png";


export default function FlyingChitalVehicle() {
    return (
        <div>
            {/* Section-1 Industry */}
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
                            flyingChitalVehicle
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>


            {/* Section-2- Flying Chital Smart Vehicle  */}
            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={FCVehicle}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className="border-b-2 border-secondary"></span>Flying Chital Smart Vehicle Tracking System (FCSVTS)
                        </h1>
                        <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
                            The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
                        </p>
                    </div>
                </div>
            </section>










            {/* Section-3  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Highlights</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center " src={Reduced} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Reduced Operational Costs</h1>
                                    <p className="leading-relaxed mb-3">The Indian mining sector is a vital component of the country's economy, responsible for the extraction of various minerals and metals. India possesses significant mineral resources, including coal, iron ore, bauxite, and more.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Best} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Best-in-class GPS Devices</h1>
                                    <p className="leading-relaxed mb-3">Metal manufacturing plants in India form a crucial part of the country's industrial landscape. India has a strong and diverse metal manufacturing sector, producing various metals like steel, aluminum, copper, and more. These plants support infrastructure development, automotive industries, and numerous other sectors.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Reliable} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Reliable and Robust</h1>
                                    <p className="leading-relaxed mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure..</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={RealTime} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Real Time Alerts and Alarms</h1>
                                    <p className="leading-relaxed mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={RichAnalytics} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Rich Analytical Insights and Customized Reports</h1>
                                    <p className="leading-relaxed mb-3">Fertilizer and Chemical manufacturing plants are significant contributors to India's agricultural and industrial sectors. These plants produce a wide range of chemical products, including fertilizers, pesticides, and other chemicals used in agriculture, manufacturing, and healthcare. The Indian fertilizer industry plays a crucial role in supporting the country's agricultural sector, ensuring food security and promoting rural development.</p>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}
