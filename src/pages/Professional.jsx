import React from 'react'
import Blog1 from "../assets/images/Blog1.png"
import FCAgriculture from "../assets/images/FCAgriculture.png"
import Agriculture from "../assets/images/Agriculture.png"
import IconFC from "../assets/images/IconFC.png"
import Professionalbg from "../assets/images/Professionalbg.png"
import HomeIcon from "../assets/images/HomeIcon.png"
import customised1 from "../assets/images/customised1.jpg"

import CDAC from "../assets/images/CDAC.png"


export default function Professional() {
    return (
        <div>

            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Professionalbg})`,
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
                            Professional Mobile Radio (TETRA)
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify "> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] "> Home</span><span className="font-[700] font-heebo text-[32px] "> /  Professional Mobile Radio (TETRA)</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>




            {/* Section-2- Flying Chital Smart Vehicle  */}
            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center ml-10">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={FCAgriculture}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Indigenous</span><span className=" text-[40px] font-heebo font-bold ">  TETRA Trunked Radio System/PMR</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>

                        <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] w-4/5">
                            The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
                        </p>
                    </div>
                </div>
            </section>



            <div
                className="flex items-center justify-center  bg-cover bg-no-repeat "
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${customised1}) lightgray 50% / cover no-repeat`,
                }}
            >
                <div className=" w-auto md:w-4/5 text-start mt-40 text-white  grid content-end">
                    <h1 className="font-heebo text-4xl font-bold mb-5 ">

                    </h1>
                    <p className="font-heebo text-lg font-normal text-justify mb-20 ">
                        The indigenous technology provided by Atulya Abhinav Tech Private Limited is a result of the Transfer of Technology (ToT) from C-DAC Thiruvananthapuram, who have independently developed the entire system. Clients can rely on our expertise to deliver a robust communication infrastructure that enhances operational efficiency and safety in these vital industries.
                    </p>





                </div>
            </div>
            <section className="text-gray-600 body-font mt-0">
                <div class="text-center mt-16 mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                        <span className=" text-indigo-800 font-bold text-[40px]  ">High</span><span className=" text-[40px] font-heebo font-bold ">lights</span></h1>
                    <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                    <p class="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">Terrestrial Trunked Radio (TETRA) is a digital trunked mobile radio standard developed to meet the needs of traditional Professional Mobile Radio (PMR) user organizations such as: Public Safety. Transportation. Utilities. Government.</p>
                </div>


                <div className="container mx-auto  px-5 py-12 md:flex-row flex-col items-center ml-10">
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="flex">
                        <span><img className="p-1" src={IconFC} alt="" /></span><p className="leading-relaxed text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] ">Alerts on fuel drainage Alerts on fuel drainage </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">

                    </div>
                    {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Agriculture Automation Solution (SAgAS)</h1>
            <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
              The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
            </p>
          </div> */}
                </div>
            </section>

            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <img
                        className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg ml-10"
                        alt="hero"
                        src={CDAC}
                    />
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">

                    </div>
                    {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className="border-b-2 border-secondary"></span>Agriculture Automation Solution (SAgAS)</h1>
            <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
              The Flying Chital Smart Vehicle Tracking System stands as a transformative solution in the domain of logistics and transportation. By offering end-to-end visibility of cargo movement, this system allows businesses to stay informed about their assets' whereabouts in real-time. The holistic approach of this Smart Vehicle Tracking System signifies a comprehensive solution for businesses seeking to streamline operations, mitigate risks of pilferage and revenue leakage, and ensure seamless and secure cargo transportation
            </p>
          </div> */}
                </div>
            </section>

        </div>
    )
}