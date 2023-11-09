import React from 'react'
import intelligent from '../assets/images/intelligent.png'
import Safety from '../assets/images/Safety.png'
import Driver from '../assets/images/Driver.png'
import Fuel from '../assets/images/Fuel.png'
import Drivertruck from '../assets/images/Drivertruck.png'
import Rich from '../assets/images/Rich.png'
import Rightarr from '../assets/images/Rightarr.png'
import Values1 from '../assets/images/Values1.png'
import Values2 from '../assets/images/Values2.png'

export default function Values() {
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
                        <h2 className="mt-6 text-gray-200 dark:text-gray-300  text-4xl font-semibold">Values</h2>
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
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={Values1} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={Values2} />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900  mt-5">Values</h1>
                        <p className="mb-8 leading-relaxed">"Our vision is to empower individuals living in remote and underserved areas with accessible, affordable and cutting-edge technology solutions that enhance their quality of life, bridge the digital divide and foster inclusive development. We aim to be the catalyst for positive change, enabling everyone to enjoy the benefits of modern technology."</p>

                    </div>
                </div>
            </section>


            {/* Section-3  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Key Components of the Values</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">By pursuing this vision, our business aims to empower individuals living in remote areas, enabling them to connect, learn, work, and thrive in an increasingly digital world. We believe that technology should be an equalizer, not a divider, and we are committed to making this vision a reality</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className=" md:w-1/4 p-4 ">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  bg-white ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Integrity</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We uphold the highest ethical standards, always acting with honesty, transparency, and respect for all stakeholders </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  bg-white ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Safety} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Accountability</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We take full responsibility for our actions, ensuring that we deliver on our promises and hold ourselves accountable for the results. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  bg-white">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}

                                    <img className="p-1" src={Driver} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Commitment to Customers</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing exceptional service, and exceeding their expectations </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl h-full  bg-white ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Fuel} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Employee Development</h2>

                                <div className="flex">
                                    <p className="leading-relaxed text-base">We believe in nurturing our employees' talents, encouraging growth, and fostering a collaborative and inclusive work environment that promotes learning and professional development.</p>
                                </div>





                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl  bg-white">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Rich} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Innovation</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We constantly seek new and groundbreaking solutions to empower our customers and enhance their experiences. We embrace creativity, out-of-the-box thinking, and adaptability to stay ahead of the curve. </p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl  bg-white">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Quality</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">Delivering excellence is our priority. We are committed to providing innovative, reliable, and top-notch products and services that consistently meet or exceed the highest industry standards</p>
                                </div>


                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 h-full rounded-tr-[30px] rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg> */}
                                    <img className="p-1" src={Drivertruck} alt="" />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Simplicity</h2>
                                <div className="flex">
                                    <p className="leading-relaxed text-base">We strive to simplify technology for everyone, making it easy to understand, access, and implement. We design user-friendly solutions that bring convenience and efficiency to our customers' lives </p>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>








        </div>
    )
}
