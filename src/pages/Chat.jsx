import React from "react";
import Blog1 from "../assets/images/Blog1.png";
import Phone from "../assets/images/Phone.png";
import Email from "../assets/images/Email.png";
import contactusbluebg from "../assets/images/contactusbluebg.png";
import cardmedia from "../assets/images/cardmedia.png";
import HomeIcon from "../assets/images/HomeIcon.png";
import map from "../assets/images/map.png";

export default function Chat() {
    return (
        <div>
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${contactusbluebg})`,
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

                        <div className="flex lg:hidden"></div>
                    </div>

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
                    <div className="max-w-lg ">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl">
                            Contact Us
                        </h1>

                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div>
                                    <span>
                                        <img className="" src={HomeIcon} alt="" />
                                    </span>
                                </div>
                                <div classNAme="justify">

                                    <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">

                                        Home
                                    </span>
                                    <span className="font-[700] font-heebo text-[32px]">     / Contact Us
                                    </span>{" "}
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center my-8 text-gray-900">
                    <span className=" font-heebo text-[40px] text-primary">
                        <span className="border-b-2 border-secondary">Connect&nbsp;</span>
                    </span>
                    With Us
                </h1>
                <div className="flex justify-center items-center">
                    <p className="text-xl not-italic  font-normal leading-7  text-center mt-4 w-5/6">
                        We kindly request all our valued clients to submit their queries
                        using the following format. This will enable us to provide you with
                        more accurate and timely assistance. Thank you for your cooperation,
                        and we look forward to assisting you effectively.
                    </p>
                </div>

                <div className="container px-24 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 md:w-1/2 lg:pl-28 lg:text-left text-center  ">
                        <div className="flex flex-col mt-4 lg:items-start items-center ">
                            <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px] shadow-lg  w-2/3 md:shadow-xl  bg-white h-full  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 ml-32 ">
                                    <img className="p-1" src={Phone} alt="" />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium text-center  p-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-base mb-20 text-center  p-4">
                                    +91 8095355400
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-10 lg:items-start items-center ">
                            <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-2/3 md:shadow-xl  bg-white h-full  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 ml-32 ">
                                    <img className="p-1" src={Email} alt="" />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium text-center  p-4">
                                    EMAIL
                                </h2>
                                <p className="leading-relaxed text-base mb-20 text-center  p-4">
                                    inquiry@atulyabhinav.com.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 mx-auto mb-10 lg:mb-0 rounded-lg overflow-hidden  rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white ">
                        <div className="flex flex-col text-center w-full mb-12">
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-10">
                                Our friendly team would love to hear from you
                            </p>
                        </div>

                        <div className="flex flex-wrap -m-2 p-3">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="First Name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Organization "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        placeholder="Contact Number "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Region
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Region "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Inquiry Type
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        placeholder="Inquiry Type "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full ">
                                <div className="relative ">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder=" Enter Message "
                                        className="w-full bg-gray-100 shadow-lg  md:shadow-xl  bg-white  bg-opacity-50 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        defaultValue={""}
                                    />
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
                    z
                </div>
            </section>

            <div
                className="flex items-center justify-center  bg-cover bg-no-repeat "
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${map}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className="   text-center  text-white  mt-20 mb-20  grid content-end">
                    <div className="flex w-full flex-row gap-16 lg:items-start items-center ">
                        <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  bg-white h-full  ">
                            <h2 className="text-3xl not-italic font-bold leading-9 font-heebo text-[#3A0749] mr-10 pt-8 w-full p-10">
                                Registered Office
                            </h2>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Sector V, Niladri Vihar
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Bhubaneswar, Odisha
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                India - 751021
                            </p>
                        </div>
                        <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  bg-white h-full  ">
                            <h2 className="text-3xl not-italic font-bold leading-9 font-heebo text-[#3A0749] m-6 pt-8">
                                Head Office
                            </h2>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Devanahalli, Bangalore,
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Karnataka,
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                India - 562110
                            </p>
                        </div>
                        <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  bg-white h-full  ">
                            <h2 className="text-3xl not-italic font-bold leading-9 font-heebo text-[#3A0749] m-6 pt-8">
                                Branch Office
                            </h2>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Geneva, Switzerland
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                Pin- 1296
                            </p>
                            <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2"></p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> Registered Office</h1>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                    Sector V, Niladri Vihar
                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                    Bhubaneswar, Odisha

                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">

                                    India - 751021
                                </p>


                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> Head Office</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Branch  Office</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
















        </div>
    );
}