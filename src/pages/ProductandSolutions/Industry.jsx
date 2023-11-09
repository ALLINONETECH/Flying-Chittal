import React from 'react'
import Mines from '../../assets/images/Mines.png'
import Cement from '../../assets/images/Cement.png'
import Thermal from '../../assets/images/Thermal.png'
import Fertilizer from '../../assets/images/Fertilizer.png'
import Down from '../../assets/images/Down.png'
import Agro from '../../assets/images/Agro.png'
import Blog1 from "../../assets/images/Blog1.png";
import IMining from "../../assets/images/IMining.png";
import IManufacture from "../../assets/images/IManufacture.png";
import ICement from "../../assets/images/ICement.png";
import IThermal from "../../assets/images/IThermal.png";
import IFertilizer from "../../assets/images/IFertilizer.png";
import IDown from "../../assets/images/IDown.png";
import IAgro from "../../assets/images/IAgro.png";


export default function Industry() {
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
                            Industry
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Industries</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IMining} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mining</h1>
                                    <p className="leading-relaxed mb-3">The Indian mining sector is a vital component of the country's economy, responsible for the extraction of various minerals and metals. India possesses significant mineral resources, including coal, iron ore, bauxite, and more.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IManufacture} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Manufacturing Plants</h1>
                                    <p className="leading-relaxed mb-3">Metal manufacturing plants in India form a crucial part of the country's industrial landscape. India has a strong and diverse metal manufacturing sector, producing various metals like steel, aluminum, copper, and more. These plants support infrastructure development, automotive industries, and numerous other sectors.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ICement} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cement</h1>
                                    <p className="leading-relaxed mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure..</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IThermal} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Thermal Power Plants</h1>
                                    <p className="leading-relaxed mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IFertilizer} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fertilizers and Chemicals</h1>
                                    <p className="leading-relaxed mb-3">Fertilizer and Chemical manufacturing plants are significant contributors to India's agricultural and industrial sectors. These plants produce a wide range of chemical products, including fertilizers, pesticides, and other chemicals used in agriculture, manufacturing, and healthcare. The Indian fertilizer industry plays a crucial role in supporting the country's agricultural sector, ensuring food security and promoting rural development.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IDown} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Downstream Sector</h1>
                                    <p className="leading-relaxed mb-3">The Indian downstream sector is of paramount importance in the country's energy industry. This sector encompasses the refining and distribution of petroleum and petrochemical products. It plays a critical role in ensuring the availability of essential fuels like petrol, diesel, and natural gas, which power various industries, transportation, and households across India. The downstream sector is pivotal for meeting energy demands and facilitating economic growth.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IAgro} alt="blog" />
                                <div className="p-6">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Agro Products</h1>
                                    <p className="leading-relaxed mb-3">Agricultural products are the lifeblood of India's economy and culture. Agriculture is the backbone of the nation, employing a significant portion of the population and contributing substantially to the country's GDP. India is one of the world's leading producers of a wide range of agricultural commodities, including rice, wheat, cotton, and spices.</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>







        </div>
    )
}
