import React from 'react'
import MACHArch from "../../assets/images/MACHArch.png"
import Headles from "../../assets/images/Headles.png";
import Assess from "../../assets/images/Assess.png";
import Stratee from "../../assets/images/Stratee.png";
import Scalability from "../../assets/images/Scalability.png";
import MicroSer from "../../assets/images/MicroSer.png";
import ApiFirst from "../../assets/images/ApiFirst.png";
import Implement from "../../assets/images/Implement.png";
import Integration from "../../assets/images/Integration.png";
import CloudNa from "../../assets/images/CloudNa.png";
import Articles from "../../assets/images/Articles.png";

export default function MACHArchitecture() {
    return (
        <div>
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${MACHArch})`,
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
                            MACH Architecture
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            Home / Blogs
                        </p>
                    </div>
                </div>
            </section>




            {/* Section-2 */}
            <section className="text-gray-600 body-font">
                {/* <h2 className="text-gray-900 text-4xl title-font font-bold text-center p-4">Blog</h2>
                <p className="leading-relaxed text-base  text-center">MACH architecture, which stands for "Microservices, API-first, Cloud-native, and Headless," allows businesses to deploy an ecosystem of pluggable, scalable, and replaceable third-party solutions to solve discrete business problems. Here's how MACH architecture principles can be applied to digitalization initiatives</p> */}
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">MACH</span><span className=" text-[40px] font-heebo font-bold "> Architecture</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">The term "MACH architecture" refers to a modern approach in designing and building software applications. The acronym "MACH" stands for Microservices, API-first, Cloud-native, and Headless. This architecture is gaining popularity due to its flexibility, scalability, and ability to adapt to the changing demands of digital businesses.</p>
                    </div>

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center   ">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px] " src={MicroSer} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">Micrservices Based</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  p-3">Digitalization often involves transforming and modernizing existing systems and processes. Microservices can help break down monolithic legacy systems into smaller, more manageable components. These microservices can be independently developed, deployed, and scaled, making it easier to iteratively improve and adapt your technology stack to meet digital transformation goals.</p>

                            </div>
                        </div>
                        <div className="flex flex-col mt-10 lg:items-start items-center">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={ApiFirst} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">API-First</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] p-3">In digitalization efforts, APIs as primary conduits for business functionality through a well-defined set of contracts, enabling interaction between two or more systems and allowing greater collaboration. This strategy supports efficient API development across devices, platforms, and applications in multi-channel environments</p>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden lg:pl-36 ">
                        <img alt="feature" className="object-cover object-center " src={CloudNa} />
                    </div>
                </div>
            </section>


            {/* Section-3 */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center " src={Headles} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center   ">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={Assess} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">Assessment</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] p-3">Begin by assessing your current technology stack, identifying areas that need improvement, and understanding the specific digitalization goals of your organization.</p>

                            </div>
                        </div>
                        <div className="flex flex-col mt-10 lg:items-start items-center">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={Stratee} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">Strategy</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] p-3">Develop a clear digitalization strategy that aligns with your business objectives. Determine how MACH principles can help you achieve these objectives and create a roadmap for Implement.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section-4 */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center   ">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px] " src={Implement} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">Implementation</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] p-3">Start by breaking down legacy systems into microservices, creating APIs for seamless data exchange, migrating to cloud-native infrastructure, and decoupling where necessary. This can be a phased approach to minimize disruption.</p>

                            </div>
                        </div>
                        <div className="flex flex-col mt-10 lg:items-start items-center">

                            <div className=" flex-grow rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white   ">
                                <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={Integration} />
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F] p-4">Integration</h2>
                                <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] p-3">Ensure that your new systems and components can integrate effectively with existing tools and data sources. Integration is a critical part of digitalization to avoid siloed data and processes.</p>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden lg:pl-36 ">
                        <img alt="feature" className="object-cover object-center " src={Scalability} />
                    </div>
                </div>
            </section>

            <div className="  ">
                <img
                    className="object-cover object-center  drop-shadow-lg"
                    alt="hero"
                    src={Articles}
                />
            </div>
        </div>
    )
}
