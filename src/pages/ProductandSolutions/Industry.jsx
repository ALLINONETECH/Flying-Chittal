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
import HomeIcon from "../../assets/images/HomeIcon.png";


export default function Industry() {
    return (
        <div>
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Blog1})`,
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
                            Industries
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">Home</span><span className="font-[700] font-heebo text-[32px] ">/Industries</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14 mt-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px]  ">Industries</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 ">
                            <div className="h-full border-2 border-gray-200 bg-white shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IMining} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Mining</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">The Indian mining sector is a vital component of the country's economy, responsible for the extraction of various minerals and metals. India possesses significant mineral resources, including coal, iron ore, bauxite, and more.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IManufacture} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Manufacturing Plants</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Metal manufacturing plants in India form a crucial part of the country's industrial landscape. India has a strong and diverse metal manufacturing sector, producing various metals like steel, aluminum, copper, and more. These plants support infrastructure development, automotive industries, and numerous other sectors.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ICement} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Cement</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure..</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IThermal} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Thermal Power Plants</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Thermal power plants hold immense criticality in India's energy landscape. They are the backbone of the country's electricity generation, accounting for a substantial portion of its power supply. These plants predominantly rely on coal, natural gas, or oil for power generation, and they provide the much-needed base load power, ensuring a steady supply of electricity to industries, households, and infrastructure.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200  bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IFertilizer} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Fertilizers and Chemicals</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Fertilizer and Chemical manufacturing plants are significant contributors to India's agricultural and industrial sectors. These plants produce a wide range of chemical products, including fertilizers, pesticides, and other chemicals used in agriculture, manufacturing, and healthcare. The Indian fertilizer industry plays a crucial role in supporting the country's agricultural sector, ensuring food security and promoting rural development.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IDown} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Downstream Sector</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">The Indian downstream sector is of paramount importance in the country's energy industry. This sector encompasses the refining and distribution of petroleum and petrochemical products. It plays a critical role in ensuring the availability of essential fuels like petrol, diesel, and natural gas, which power various industries, transportation, and households across India. The downstream sector is pivotal for meeting energy demands and facilitating economic growth.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 shadow-lg md:shadow-xl overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={IAgro} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Agro Products</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Agricultural products are the lifeblood of India's economy and culture. Agriculture is the backbone of the nation, employing a significant portion of the population and contributing substantially to the country's GDP. India is one of the world's leading producers of a wide range of agricultural commodities, including rice, wheat, cotton, and spices.</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>







        </div>
    )
}
