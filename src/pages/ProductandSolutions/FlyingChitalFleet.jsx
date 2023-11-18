import React from "react";
import Blog1 from "../../assets/images/Blog1.png";
import FCFleet from "../../assets/images/FCFleet.png";
import FleetContent from "../../assets/images/FleetContent.png";
import vehiclefleetbg from "../../assets/images/vehiclefleetbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import home1 from "../../assets/images/home1.jpg";

export default function FlyingChitalFleet() {
    return (
        <div>
            {/* Section-1 Industry */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${vehiclefleetbg})`,
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
                            Flying Chital Smart Fleet Monitoring
                            <br /> System
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button> */}
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] "> Home</span><span className="font-[700] font-heebo text-[32px] "> / Flying Chital Smart Fleet Monitoring System</span>  </div>
                            </div>


                        </p>
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
                            src={FCFleet}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        {/* <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Flying Chital
              Smart Fleet Management System (FCSFMS)
            </h1> */}
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                Flying&nbsp;
                            </span>
                            Chital Smart Fleet
                            <br />
                            Management System <br /> (
                            <span className="border-b-2 border-secondary">FC</span>SFMS)
                        </h1>
                        <p className="text-xl not-italic font-normal leading-7 mb-8 text-justify  w-4/5">
                            FCSFMS is a pivotal tool for enhancing logistics and
                            transportation operations. It boasts numerous advantages that
                            cater to the evolving needs of the industry. The Smart Fleet
                            Management System is a game-changer for businesses seeking to stay
                            competitive and responsive in the ever-evolving transportation
                            landscape.
                        </p>
                    </div>
                </div>
            </section>

            <div
                className="flex items-center justify-center  bg-cover bg-no-repeat "
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${home1}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className=" w-auto md:w-4/5 text-start mt-20 text-white  grid content-end">
                    <h1 className="font-heebo text-4xl font-bold mb-5 ">
                        Highlights
                    </h1>
                    <p className="font-heebo text-lg font-normal text-justify  ">
                        First and foremost, it empowers businesses to create effective and efficient shipping plans, a crucial aspect of streamlined operations
                    </p>
                    <p className="font-heebo text-lg font-normal text-justify  ">The system provides end-to-end visibility of the entire fleet of vehicles, enabling better monitoring and control, which is essential for safeguarding the integrity and security of cargo.</p>
                    <p className="font-heebo text-lg font-normal text-justify  ">This advanced application goes beyond conventional fleet management by offering innovative services related to various modes of transport and traffic management, providing users with real-time inputs to make informed decisions. By doing so, it ensures the optimization of vehicle utility, enhances efficiency, and promotes the safety of cargo movement.</p>
                    <p className="font-heebo text-lg font-normal text-justify  ">Importantly, it shifts the paradigm from reactive corrective action to proactive preventive action, preventing issues before they escalate.</p>
                    <p className="font-heebo text-lg font-normal text-justify mb-12 ">With the ability to manage all transportation activities throughout the supply chain, this system combines user-friendliness with industry-leading capabilities, resulting in more efficient logistics operations, reduced freight costs, and optimized service levels.</p>

                </div>
            </div>
        </div>
    );
}