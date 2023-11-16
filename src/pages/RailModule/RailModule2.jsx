import React from 'react'
import Mines from '../../assets/images/Mines.png'
import Cement from '../../assets/images/Cement.png'
import Thermal from '../../assets/images/Thermal.png'
import Fertilizer from '../../assets/images/Fertilizer.png'
import Down from '../../assets/images/Down.png'
import Agro from '../../assets/images/Agro.png'
import Blog1 from "../../assets/images/Blog1.png";
import Rake2 from "../../assets/images/Rake2.png";
import Line2 from "../../assets/images/Line2.png";
import Equipment2 from "../../assets/images/Equipment2.png";
import Consumables2 from "../../assets/images/Consumables2.png";
import Backgrnd2 from "../../assets/images/Backgrnd2.png";
import IFertilizer from "../../assets/images/IFertilizer.png";
import IDown from "../../assets/images/IDown.png";
import Timely2 from "../../assets/images/Timely2.png";
import Railbg1 from "../../assets/images/Railbg1.png";


export default function RailModule2() {
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
                            Rail Solution Modules 2
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            Home / Rail Logistics
                        </p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Rake</span><span className=" text-[40px] font-heebo font-bold "> Arrival and Placement for Loading</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">Planning Rake Arrival and Placement for the loading of material is a critical logistics operation that involves multiple components to ensure efficient and cost-effective cargo handling.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden   shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Rake2} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Rake Scheduling</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">The process begins with the scheduling of the arrival of railway rakes or wagons at the loading site. This scheduling is essential to ensure that the required transportation capacity is available when needed.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Line2} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Free Line Allocation</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Allocating a free line or track for the incoming rake is crucial. It ensures that the train can be positioned for loading without disrupting other rail operations. Efficient line allocation minimizes congestion and delays.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Equipment2} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Equipment and Manpower Deployment</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">To facilitate loading, the appropriate equipment, such as cranes, forklifts, and conveyors, along with skilled manpower, need to be deployed. Proper planning and coordination are essential to optimize the utilization of resources and prevent idle time.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-bl-[50px]  rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Consumables2} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Consumables and Fixtures</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Positioning of consumables such as saddles, fixtures, or any specialized equipment required for securing the material within the railcars is crucial. This preparation ensures that the loading process is smooth and safe</p>

                                </div>
                            </div>
                        </div>


                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px] overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Timely2} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3">Timely Loading</h1>
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Timely loading is critical to minimize demurrage costs, which can accrue when a train is detained beyond its scheduled departure time. Efficient planning and execution of the loading process are key to preventing unnecessary financial penalties.</p>

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
            <div className="  ">
                <img
                    className="object-cover object-center  drop-shadow-lg"
                    alt="hero"
                    src={Backgrnd2}
                />
            </div>






        </div>
    )
}
