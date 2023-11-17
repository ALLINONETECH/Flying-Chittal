import React from 'react'
import Revolution from "../../assets/images/Revolution.png";
import Revolution2 from "../../assets/images/Revolution2.png";
import Empowering1 from "../../assets/images/Empowering1.png";
import Streamline from "../../assets/images/Streamline.png";
import Optimize from "../../assets/images/Optimize.png";
import Unloading from "../../assets/images/Unloading.png";
import Blogbg from "../../assets/images/Blogbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";

export default function Challenge() {
    return (
        <div>

            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Blogbg})`,
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
                            Challenge, Ideate & Create
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">Home</span><span className="font-[700] font-heebo text-[32px] "> / Blogs</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>



            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Inspiring</span><span className=" text-[40px] font-heebo font-bold "> Minds, Igniting Ideas: Your Gateway to Thoughtful Perspectives and Creative Expression.</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white  ">
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-20 px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Revolution}
                            />
                        </div>
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Revolutionizing Data Management for Enterprise Digital Transformation</h2>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                MACH architecture, which stands for "Microservices, API-first, Cloud-native, and Headless," allows businesses to deploy an ecosystem of pluggable, scalable, and replaceable third-party solutions to solve discrete business problems.
                            </p>

                            <div className="flex justify-start mt-3 p-3">
                                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    READ MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-24 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Empowering Businesses with MACH Architecture</h2>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                The Digital Transformation initiative of enterprises is typically focused on the enablement of better products, services, experience, or business models. At the heart of such transformation is data; but often fundamental changes are only possible when the organization can make substantive shifts in how data is gathered, moved, stored, or processed
                            </p>
                            <div className="flex justify-start mt-3 p-3">
                                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    READ MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0 mr-16  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Empowering1}
                            />

                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-20  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Streamline}
                            />
                        </div>
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Streamlining Fertilizer Supply Chain</h2>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Managing Outbound Supply chain for Fertilizer sector is often cumbersome as the allocation and distribution is under the control market by govt of India. Moreover, 99% transportation of raw materials and finished goods is managed by Indian Railways
                            </p>
                            <div className="flex justify-start mt-3 p-3">
                                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    READ MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-24 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Revolutionizing Mining and Ore Processing</h2>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Let's revolutionize the way we manage logistics in the mining and ore processing industry by harnessing the power of IoT and smart technologies. Together, we can unlock an era of unprecedented efficiency and optimization. Feel free to reach out for more information or to discuss this exciting transformation further!
                            </p>
                            <div className="flex justify-start mt-3 p-3">
                                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    READ MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0 mr-16  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Revolution2}
                            />

                        </div>
                    </div>

                    <div className="flex flex-row shadow-lg  md:shadow-xl  bg-white mt-10">
                        <div className="lg:max-w-lg lg:w-1/4 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-20  px-3 py-10">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={Optimize}
                            />
                        </div>
                        <div className="text-3xl not-italic font-bold leading-9 lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo mt-5 text-[#30343F] ">
                            <h2 className="mt-6 mb-2">Optimizing Operations in Mining and Metal Industries</h2>
                            <p className="text-xl not-italic font-normal leading-relaxed text-black ">
                                Some of the typical challenges faced in day–to–day operation by a Mining and Metal Industries whose business is diversified to Iron and Steel Plants and mines. First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc.
                            </p>
                            <div className="flex justify-start mt-3 p-3">
                                <button className="inline-flex text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    READ MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>


                </div>
            </section>

        </div>
    )
}
