import React from 'react'
import intelligent from '../assets/images/intelligent.png'
import Safety from '../assets/images/Safety.png'
import Driver from '../assets/images/Driver.png'
import Fuel from '../assets/images/Fuel.png'
import Drivertruck from '../assets/images/Drivertruck.png'
import Rich from '../assets/images/Rich.png'
import Rightarr from '../assets/images/Rightarr.png'
import Mission21 from '../assets/images/Mission21.png'
import Mission12 from '../assets/images/Mission12.png'
import Missionbg from '../assets/images/Missionbg.png'
import HomeIcon from "../assets/images/HomeIcon.png";

export default function Mission() {
    return (
        <div className="">

            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${Missionbg})`,
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
                            Mission
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div><span><img className="" src={HomeIcon} alt="" /></span></div>
                                <div classNAme="justify"> <span className="text-[#F85A47] font-[700] font-heebo text-[32px] "> About Us</span><span className="font-[700] font-heebo text-[32px] "> / Mission</span>  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font mt-40">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                    <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg ">
                        <img className="object-cover object-center absolute ml-52 bottom-48" alt="hero" src={Mission21} />
                        <img className="object-cover object-center  rounded-bl-lg" alt="hero" src={Mission12} />
                    </div>
                    <div className=" relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bottom-20  ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Mission</span><span className=" text-[40px] font-heebo font-bold "> </span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
                        <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] w-4/5">
                            Traditionally, this process relied on manual paperwork and communication, leading to delays and errors. Customers willing to transport their consignments in rake loads/wagonloads should get registered on FBD portal of Indian Railways and place an online indent for supply wagons/rakes duly paying the prescribed wagon demand registration fee notified from time to time. Flying Chital Application helps stakeholders to get all information about Rake Indent and Approval on a real time basis.
                        </p>
                    </div>
                </div>
            </section>


            {/* Section-3  */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Key</span><span className=" text-[40px] font-heebo font-bold "> Components Of The Mission</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">Through our mission, we endeavour to transform industries, improve lives, and pave the way for sustainable development in remote and underserved areas, fostering a brighter future for all.</p>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className=" md:w-1/4 p-4 ">
                            <div className="border border-gray-200 p-6 h-full  rounded-tr-[30px] rounded-bl-[30px]  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-tr-lg  rounded-bl-lg bg-indigo-100 text-indigo-500 mb-4">
                                    <img className="p-1" src={intelligent} alt="" />
                                </div>
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Customer-Centric Approach</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We put our customers at the forefront of our mission, tailoring our technology solutions to meet their specific needs and offering exceptional support throughout their journey with us. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Innovation Hub</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We aspire to be a hub of innovation, continuously developing and implementing groundbreaking technologies that address the unique challenges faced by industries in remote and underserved regions. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Supply Chain Excellence</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">Our mission centers on optimizing supply chain and logistics operations, reducing lead times, minimizing costs, and maximizing the flow of goods to fuel economic growth. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Industrial Efficiency</h2>

                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We are dedicated to improving industrial processes in mining, ore processing, cement and fertilizer production, and warehousing through smart technologies, automation, and data driven insights. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Affordability</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We believe that advanced technology should be accessible to all, and our mission is to make it cost-effective for industries operating in remote areas </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Reliability</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We strive to enhance the reliability and predictability of operations, reducing downtime and disruptions, thus improving overall productivity.</p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Sustainability</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We are committed to promoting sustainability by implementing eco-friendly practices and solutions that minimize environmental impact and support responsible resource management. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Community Empowerment</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">Our mission extends to empowering local communities by creating job opportunities, fostering economic growth, and contributing to the well-being of the regions we serve  </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Collaborative Partnerships:</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">We actively seek collaboration with industrial players, government agencies, and logistics providers to create comprehensive, holistic solutions that benefit all stakeholders. </p>
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
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]mb-2">Global Reach</h2>
                                <div className="flex">
                                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]">While our focus is on remote areas, we aim to have a global impact by setting new industry standards and sharing our expertise and technology solutions worldwide</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </section>








        </div>
    )
}
