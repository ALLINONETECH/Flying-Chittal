import React from 'react'
import Blog1 from "../../assets/images/Blog1.png";
import FCContainer from "../../assets/images/FCContainer.png";
import Seamless from "../../assets/images/Seamless.png";
import Facilitating from "../../assets/images/Facilitating.png";
import Enhanced from "../../assets/images/Enhanced.png";

export default function FlyingChitalContainer() {
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
                        <h1 className="text-3xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl">
                            Flying Chital Smart Container
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
                            src={FCContainer}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className="border-b-2 border-secondary"></span>Flying Chital Smart Container Tracking System (FCSCTS)
                        </h1>
                        <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
                            The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
                        </p>
                    </div>
                </div>
            </section>


            {/* Section-3 */}


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex items-center lg:w-4/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
                            <div className="inline-flex items-center justify-center flex-shrink-0 ">
                                <img className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84" alt="hero" src={Seamless} />
                            </div>

                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium">Seamless Integration</h2>
                                <p className=" leading-1 text-md ml-3">Through seamless integration with a dedicated, integrated application using API, the system captures and transmits all container status events, organizing and displaying the data based on container numbers or Bills of Lading. This capability significantly enhances visibility, reducing the need for frequent communication, thus minimizing the burden on the logistics team.</p>

                            </div>
                        </div>

                        <div className="flex items-center lg:w-4/5 mx-auto  pb-10 mt-10  sm:flex-row flex-col">
                            <div className="inline-flex items-center justify-center flex-shrink-0 ">
                                <img className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84" alt="hero" src={Facilitating} />
                            </div>

                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium">Facilitating Precise Tracking and Monitoring</h2>
                                <p className=" leading-1 text-md ml-3">Leveraging data from the Automatic Identification System (AIS) utilized on ships and vessel traffic services (VTS), the system accurately identifies and traces the precise location of containers, facilitating precise tracking and monitoring. By utilizing AIS, the system can determine the exact berthing time, leading to enhanced data accuracy derived from shipping lines.</p>

                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
                        <img alt="feature" className="object-cover object-center h-full w-full" src={Enhanced} />
                    </div>
                </div>
            </section>




        </div>
    )
}
