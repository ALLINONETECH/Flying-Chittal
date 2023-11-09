import React from 'react'
import Blog1 from '../assets/images/Blog1.png'
import Phone from '../assets/images/Phone.png'
import Email from '../assets/images/Email.png'


export default function Chat() {
    return (
        <div>
            {/* Section-1 About us */}
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
                            Contact Us
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>


            {/* Section-2 */}
            <section className="text-gray-600 body-font">
                <h2 className="text-gray-900 text-4xl title-font font-bold text-center p-4">Connect With Us</h2>
                <p className="leading-relaxed text-base  text-center">We kindly request all our valued clients to submit their queries using the following format. This will enable us to provide you with more accurate and timely assistance. Thank you for your cooperation, and we look forward to assisting you effectively.</p>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center ">
                        <div className="flex flex-col mt-4 lg:items-start items-center ">

                            <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px] shadow-lg  w-2/3 md:shadow-xl  bg-white h-full  ">
                                {/* <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={ApiFirst} /> */}
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 ml-44 ">

                                    <img className="p-1" src={Phone} alt="" />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium text-center  p-4">PHONE</h2>
                                <p className="leading-relaxed text-base mb-20 text-center  p-4">+91 8095355400</p>

                            </div>
                        </div>
                        <div className="flex flex-col mt-10 lg:items-start items-center ">

                            <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-2/3 md:shadow-xl  bg-white h-full  ">
                                {/* <img alt="" className="object-cover object-center rounded-tr-[30px]   " src={ApiFirst} /> */}
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 ml-44 ">

                                    <img className="p-1" src={Email} alt="" />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium text-center  p-4">EMAIL</h2>
                                <p className="leading-relaxed text-base mb-20 text-center  p-4">inquiry@atulyabhinav.com.</p>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto mb-10 lg:mb-0 rounded-lg overflow-hidden  rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white ">

                        <div className="flex flex-col text-center w-full mb-12">
                            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1> */}
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-10">Our friendly team would love to hear from you</p>
                        </div>

                        <div className="flex flex-wrap -m-2 p-3">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-mail</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Organization</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Contact Number</label>
                                    <input type="name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">name</label>
                                    <input type="name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full ">
                                <div className="relative ">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 shadow-lg  md:shadow-xl  bg-white  bg-opacity-50 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                            </div>



                        </div>
                        <div className="mt-6 p-4">
                            <button
                                type="submit"
                                className="block w-full rounded-full bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                SUBMIT
                            </button>
                        </div>

                    </div>


                    {/* <img alt="feature" className="object-cover object-center " src={Scalability} /> */}

                </div>
            </section>

        </div>
    )
}
