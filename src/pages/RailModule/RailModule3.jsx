import React from 'react'
import Mines from '../../assets/images/Mines.png'
import Cement from '../../assets/images/Cement.png'
import Thermal from '../../assets/images/Thermal.png'
import Fertilizer from '../../assets/images/Fertilizer.png'
import Down from '../../assets/images/Down.png'
import Agro from '../../assets/images/Agro.png'
import Blog1 from "../../assets/images/Blog1.png";
import Wagon3 from "../../assets/images/Wagon3.png";
import Automatic3 from "../../assets/images/Automatic3.png";
import ICement from "../../assets/images/ICement.png";
import Automated3 from "../../assets/images/Automated3.png";
import Integration3 from "../../assets/images/Integration3.png";
import Agriculture from "../../assets/images/Agriculture.png";
import Backgrnd3 from "../../assets/images/Backgrnd3.png";
import Identification3 from "../../assets/images/Identification3.png";
import Railbg1 from "../../assets/images/Railbg1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import customised1 from "../../assets/images/customised1.jpg";


export default function RailModule3() {
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
                            Rail Solution Module 3
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



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px]  ">Rake</span><span className=" text-[40px] font-heebo font-bold "> Inspection/Sick Wagon Identification</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">Planning Rake Arrival and Placement for the loading of material is a critical logistics operation that involves multiple components to ensure efficient and cost-effective cargo handling.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl ">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Wagon3} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Wagon Inspection Automation</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]mb-3">Automated systems equipped with various sensors, cameras, and technology are used to inspect wagons for any defects, damage, or non-compliance with safety standards.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl ">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Automatic3} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Automatic Wagon Number Capture</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]mb-3">Advanced optical character recognition (OCR) and imaging technology are employed to automatically capture wagon numbers in the correct sequence as the wagons pass through the inspection point. This eliminates the need for manual data entry, reducing errors and speeding up the process.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Automated3} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3"> Automated Wagon Bill Generation</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]mb-3">The captured wagon data is instantly used to generate wagon bills or documentation, including information about the contents, destination. This ensures accurate and timely record-keeping.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Integration3} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Integration with Batch Loading:</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]mb-3">The automated system seamlessly feeds the captured data into the automated batch loading system, ensuring that wagons are allocated and loaded according to their specific requirements and destinations. This integration optimizes the loading process and minimizes errors.</p>

                                </div>
                            </div>
                        </div>


                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Identification3} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Identification of Sick Wagons</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]mb-3">By continuously monitoring wagon condition and performance data, the system can identify "sick" or malfunctioning wagons without the need for physical inspection of each and every wagon.</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Backgrnd2})` }}>
                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold text-start"></h1>
                    <p className=" text-lg"></p>
                </div>
            </div> */}
            <div
                className="flex items-center justify-center  bg-cover bg-no-repeat "
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${customised1}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
                    <h1 className="font-heebo text-4xl font-bold mb-5 ">

                    </h1>
                    <p className="font-heebo text-lg font-normal text-justify mb-20 ">
                        Flying Chital helps to meticulously orchestrate these elements in the process of Rake Arrival and Placement for material loading, logistics managers can minimize downtime, reduce operational costs, and ensure that goods are transported swiftly and cost-effectively, benefiting both shippers and the rail transport system.
                    </p>





                </div>
            </div>




        </div>
    )
}
