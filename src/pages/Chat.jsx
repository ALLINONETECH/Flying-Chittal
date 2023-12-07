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
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="max-w-lg ">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Contact Us
            </h1>

            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div classNAme="justify">
                  <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">
                    Home
                  </span>
                  <span className="font-[700] font-heebo text-[32px]">
                    {" "}
                    / Contact Us
                  </span>{" "}
                </div>
              </div>
            </div>
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

        <div className="container px-10 py-10 mx-auto flex flex-wrap ">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-2/6 md:w-2/6 lg:pl-20 lg:text-left text-center  ">
            {/* <div className="flex flex-col mt-5 lg:items-start items-center ">
                            <div className=" flex-grow rounded-tr-[50px] rounded-bl-[50px] shadow-lg   md:shadow-xl  bg-white h-full border-2 border-green-700 ">
                                <div className=" inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 ml-32 ">
                                    <img className="p-1" src={Phone} alt="" />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium text-center  p-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-base mb-20 text-center  p-4">
                                    +91 8095355400
                                </p>
                            </div>
                        </div> */}

            <div className="flex flex-col mb-4 lg:items-start items-center  sm:mr-16">
              <div className=" flex-grow  py-4 px-10 rounded-tr-[50px] rounded-bl-[50px]  shadow-lg   md:shadow-xl  bg-white h-full w-full ">
                <div className=" inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 md:ml-20 sm:ml-20 ">
                  <img className="p-1" src={Phone} alt="" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-bold text-center  p-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-base mb-20 font-semibold text-center  p-4">
                  +91 8095355400
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center mt-5 sm:mr-16 ">
              <div className=" flex-grow   py-6 px-10 rounded-tr-[50px] rounded-bl-[50px]  shadow-lg   md:shadow-xl  bg-white h-full  w-full ">
                <div className=" inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mt-10 md:ml-20 sm:ml-20 ">
                  <img className="p-1" src={Email} alt="" />
                </div>
                <h2 className="text-gray-900 text-2xl  font-bold text-center  p-4">
                  EMAIL
                </h2>
                <p className="leading-relaxed text-base  font-semibold mb-20 text-center  p-4">
                  inquiry@atulyabhinav.com.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="lg:w-4/6 md:w-4/6 mx-auto  sm:mt-20 sm:mb-10 lg:mb-0 rounded-lg overflow-hidden  rounded-bl-[30px]  shadow-lg  md:shadow-xl  bg-white ">
                        <div className="flex flex-col text-center w-full mb-12">
                            <p className="lg:w-full mx-auto text-[20px] font-[400] leading-7 font-heebo text-black mt-10">
                                Our friendly team would love to hear from you
                            </p>
                        </div>

                        <div className="flex flex-wrap -m-2 p-3">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="First Name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg  md:shadow-xl  bg-white  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base  font-heebo outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                                        className="text-[20px] font-[400] leading-7 font-heebo text-black"
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
                    </div> */}
          <div id="contact-form" className="lg:w-4/6 md:w-5/6 sm:w-full mx-auto lg:mt-10 sm:mt-16 sm:mb-10 lg:mb-10 rounded-tr-[50px] overflow-hidden rounded-bl-[30px] shadow-lg md:shadow-xl border-1 bg-white">
            <div className="flex flex-col text-center w-full mb-8">
              <p className="lg:w-full mx-auto text-[20px] font-[400] leading-7 font-heebo text-black mt-10">
                Our friendly team would love to hear from you
              </p>
            </div>

            <div className="flex flex-wrap -m-2 p-5">
              {/* Input fields go here */}
              <div className="p-3 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-3 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail "
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-3 w-full sm:w-1/2 ">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Organization"
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className=" p-3 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Contact Number"
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-3 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    Region
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="  Region"
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-3 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-lg font-normal font-heebo text-black"
                  >
                    Inquiry Type
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Inquiry Type"
                    className="w-full bg-gray-100 bg-opacity-50 rounded shadow-lg md:shadow-xl bg-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base md:text-lg lg:text-lg outline-none text-gray-700 py-1 px-3 sm:px-4 md:py-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-3 w-full ">
                <div className="relative ">
                  <label
                    htmlFor="message"
                    className="text-[20px] font-[400] leading-7 font-heebo text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" Enter Message "
                    className="w-full bg-gray-100 shadow-lg  md:shadow-xl  bg-white  bg-opacity-50 rounded focus:border-indigo-500 focus:bg-white md:text-lg lg:text-lg focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="mb-2  p-6">
              <button
                type="submit"
                className="block w-full rounded-full bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className="flex items-center justify-center  bg-cover bg-no-repeat "
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${map}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-white sm:text-4xl font-bold  mb-5 ml-4">
            Location
          </h1>
          <div className="flex flex-wrap ">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  overflow-hidden">
                <h1 className="title-font sm:text-3xl text-3xl font-bold font-heebo text-[#3A0749] py-6 text-center">
                  Registered Office
                </h1>
                <div className="p-6">
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    Sector V, Niladri Vihar
                  </p>
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    Bhubaneswar, Odisha
                  </p>
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    India - 751021
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the structure for the other office sections */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg overflow-hidden">
                <h1 className="title-font sm:text-3xl text-3xl font-bold font-heebo text-[#3A0749] py-6 text-center">
                  Head Office
                </h1>
                <div className="p-6">
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    Devanhalli, Bangalore
                  </p>
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    Karnataka, India
                  </p>
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    India - 562110
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  overflow-hidden">
                <h1 className="title-font sm:text-3xl text-3xl font-bold font-heebo text-[#3A0749] py-6 text-center">
                  Branch Office
                </h1>
                <div className="p-6">
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    Geneva, Switzerland
                  </p>
                  {/* Empty paragraph for spacing */}
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3"></p>
                  <p className="text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black mb-3">
                    India - 751021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  text-center ">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 className="title-font sm:text-4xl  font-bold font-heebo text-[#3A0749]  mb-3 py-10"> Registered Office</h1>
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
                            <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  text-center ">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 className="title-font sm:text-4xl text-4xl font-bold font-heebo text-[#3A0749] py-10 "> Head Office</h1>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                    Devanhalli,Bangalore
                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                    Karnataka, India

                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">

                                    India - 562110
                                </p>


                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white  rounded-tr-[50px] rounded-bl-[50px]  shadow-lg  w-full md:shadow-xl  text-center ">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 className="title-font sm:text-4xl text-4xl font-bold font-heebo text-[#3A0749] py-10  "> Branch Office </h1>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                    Geneva, Switerzland
                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">
                                </p>
                                <p className=" text-xl not-italic font-normal font-heebo leading-relaxed text-center text-black p-2">

                                    India - 751021
                                </p>



                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
  );
}
