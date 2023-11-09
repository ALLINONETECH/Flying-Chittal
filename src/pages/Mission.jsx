import React from 'react'
import intelligent from '../assets/images/intelligent.png'
import Safety from '../assets/images/Safety.png'
import Driver from '../assets/images/Driver.png'
import Fuel from '../assets/images/Fuel.png'
import Drivertruck from '../assets/images/Drivertruck.png'
import Rich from '../assets/images/Rich.png'
import Rightarr from '../assets/images/Rightarr.png'
import Mission2 from '../assets/images/Mission2.png'
import Mission1 from '../assets/images/Mission1.png'

export default function Mission() {
    return (
        <div className="">

            <section className="bg-[#3734a9]  dark:bg-gray-900 rounded-br-[100px]">
                <nav x-data="{ isOpen: false }" className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        {/* <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt />
                        </a> */}
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">

                        </div>
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
                        {/* <h1 className="text-6xl font-semibold  dark:text-white lg:text-6xl mt-6 text-gray-200 dark:text-gray-300">Flying Chital HEM/HMV/LMV  Mobile Asset Management System</h1> */}
                        <h2 className="mt-6 text-gray-200 dark:text-gray-300  text-4xl font-semibold">Mission</h2>
                        <p className='mt-6 text-gray-200 dark:text-gray-300 '>We provide Smart Solutions to Simplify Your Future</p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">

                        </button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>





                </div>
            </section>


            <section className="text-gray-600 body-font mt-40">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={Mission2} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={Mission1} />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Mission</h1>
                        <p className="mb-8 leading-relaxed">"At Atulya Abhinav Tech Private Limited, our mission is to pioneer innovation in supply chain and logistics operations, revolutionizing industrial processes across remote and underserved areas. We are committed to delivering cutting-edge technology solutions that enhance efficiency, reliability and sustainability in mining, ore processing, metal industry, cement production, fertilizer manufacturing and warehousing. By doing so, we strive to simplify lives, invigorate industries, and empower communities with affordable state-of-the-art technologies."</p>

                    </div>
                </div>
            </section>


            {/* Section-3  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Key Components of the Mission</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Through our mission, we endeavour to transform industries, improve lives, and pave the way for sustainable development in remote and underserved areas, fostering a brighter future for all.</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className=" md:w-1/4 p-4 ">
                            <div className="border border-gray-200 p-6 h-full  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Customer-Centric Approach</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We put our customers at the forefront of our mission, tailoring our technology solutions to meet their specific needs and offering exceptional support throughout their journey with us. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Safety} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Innovation Hub</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We aspire to be a hub of innovation, continuously developing and implementing groundbreaking technologies that address the unique challenges faced by industries in remote and underserved regions. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                                    <img className="p-1" src={Driver} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Supply Chain Excellence</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">Our mission centers on optimizing supply chain and logistics operations, reducing lead times, minimizing costs, and maximizing the flow of goods to fuel economic growth. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  h-full  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Fuel} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Industrial Efficiency</h2>

                                <div className="flex">
                                    <p className="leading-relaxed text-base">We are dedicated to improving industrial processes in mining, ore processing, cement and fertilizer production, and warehousing through smart technologies, automation, and data driven insights. </p>
                                </div>





                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Rich} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Affordability</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We believe that advanced technology should be accessible to all, and our mission is to make it cost-effective for industries operating in remote areas </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6   h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Reliability</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We strive to enhance the reliability and predictability of operations, reducing downtime and disruptions, thus improving overall productivity.</p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center  justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Sustainability</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We are committed to promoting sustainability by implementing eco-friendly practices and solutions that minimize environmental impact and support responsible resource management. </p>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Community Empowerment</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">Our mission extends to empowering local communities by creating job opportunities, fostering economic growth, and contributing to the well-being of the regions we serve  </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Collaborative Partnerships:</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We actively seek collaboration with industrial players, government agencies, and logistics providers to create comprehensive, holistic solutions that benefit all stakeholders. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6  h-full rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Global Reach</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">While our focus is on remote areas, we aim to have a global impact by setting new industry standards and sharing our expertise and technology solutions worldwide</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </section>








        </div>
    )
}
