import React from 'react'
import LogisticIntel from "../../assets/images/LogisticIntel.png"
import FCContainer from "../../assets/images/FCContainer.png";
import LogisticConet from "../../assets/images/LogisticConet.png";
import RealVirtual from "../../assets/images/RealVirtual.png";
import Logisticintel1 from "../../assets/images/Logisticintel1.png";
import IconFC from '../../assets/images/IconFC.png'
import LogisticArt from '../../assets/images/LogisticArt.png'
import HomeIcon from '../../assets/images/HomeIcon.png'

export default function LogisticsIntelligence() {
    return (
        <div>
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${LogisticIntel})`,
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
                            Logistics Intelligence, Logistics <br /> Connectivity and Real-Time Virtualization
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            Challenge, Ideate & Create
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





            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-[40px] font-heebo font-bold "> Logistics</span>
                            <span className=" text-indigo-800 font-bold text-[40px] "> Intelligence,</span><span className=" text-[40px] font-heebo font-bold "> Logistics</span><span className=" text-indigo-800 font-bold text-[40px] "> Connectivity,</span><span className=" text-[40px] font-heebo font-bold  "> and Real-Time <br /><span className="p-2"> Virtualization</span></span> </h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">These concepts represent the convergence of advanced technologies and data-driven approaches in the field of logistics. By leveraging Logistics Intelligence, ensuring Logistics Connectivity, and implementing Real-Time Virtualization, businesses can achieve more efficient, agile, and responsive supply chain operations, ultimately leading to improved customer satisfaction and competitive advantage in the market.</p>
                    </div>

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex items-center lg:w-4/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
                            <div className="inline-flex items-center justify-center flex-shrink-0 ">
                                <img className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84" alt="hero" src={LogisticConet} />
                            </div>

                            <div className="flex-grow sm:text-left text-center mt-6 ml-3 sm:mt-0">
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]">Logistics Connectivity</h2>
                                <p className=" leading-1 text-md ml-3 font-heebo">Logistics Connectivity plays a vital role in creating a seamless flow of information between different stakeholders involved in the logistics processes, such as suppliers, manufacturers, transportation providers, and customers</p>

                            </div>
                        </div>

                        <div className="flex items-center lg:w-4/5 mx-auto    sm:flex-row flex-col">
                            <div className="inline-flex items-center justify-center flex-shrink-0 ">
                                <img className="rounded-tr-[50px] rounded-bl-[50px] h-84 w-84" alt="hero" src={RealVirtual} />
                            </div>

                            <div className="flex-grow sm:text-left text-center ml-3 sm:mt-0">
                                <h2 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]">Real-Time Virtualization</h2>
                                <p className=" leading-1 text-md ml-3 font-heebo">Real-Time Virtualization empowers us to monitor and track the movement of material, machinery & equipment and hold ups in real-time. By integrating IoT sensors and smart devices, we can create a digital representation of the entire logistics network.</p>

                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center " src={Logisticintel1} />
                    </div>
                    <div className="flex mt-20 ">
                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically.</p></div>
                    </div>
                    <div className="flex ">
                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically.</p></div>
                    </div>
                    <div className="flex ">
                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically.</p></div>
                    </div>

                </div>
            </section>


            <div className="  ">
                <img
                    className="object-cover object-center  drop-shadow-lg"
                    alt="hero"
                    src={LogisticArt}
                />
            </div>
        </div>
    )
}
