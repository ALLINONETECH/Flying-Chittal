import React from 'react'
import BlogMining from "../../assets/images/BlogMining.png"
import MinMetal from "../../assets/images/MinMetal.png"
import IconFC from '../../assets/images/IconFC.png'
import HomeIcon from '../../assets/images/HomeIcon.png'

export default function MiningMetal() {
    return (
        <div>
            {/* {/ Section-1 /} */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${BlogMining})`,
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
                            Mining And Metal
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



            {/* Section-2 */}
            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-14">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">
                            <span className=" text-indigo-800 font-bold text-[40px] ">Mining</span><span className=" text-[40px] font-heebo font-bold "> And Metal</span></h1>
                        <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>


                        <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  xl:w-3/4 lg:w-3/4 mx-auto ">A blog focused on mining and metal industry would typically cover a wide range of topics related to the extraction, processing, and utilization of minerals and metals. Here's a breakdown of what such a blog might include</p>
                    </div>
                    <div className="flex flex-wrap -m-4">



                        <div className="p-4 ">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px]  overflow-hidden  shadow-lg md:shadow-xl">
                                <img className="lg:h-72 md:h-full w-full object-cover object-center rounded-bl-[50px]" src={MinMetal} alt="blog" />
                                <div className="p-6">

                                    <h1 className="text-[32px] font-[700] font-heebo leading-[38px] text-[#30343F]  mb-3"></h1>
                                    <div className="flex ">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically.</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3 mr-10">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1 " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Given the nature of logistics operation, there is a huge scope for revenue leakage (approx. 10-15 % of the inbound loaded trucks exit plant without proof of delivery). The major reason being a lack of e-PoD solution across touch points.</p></div>
                                    </div>


                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Increase in transportation cost by the transporters because of the amount of time it used to take for a truck to get inside the plant, load the material, and exit the plant in addition to the time taken for manual generation of multiple set of invoices and e-WAY bills.</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">First drawback is the manual collection of data from various entities like transporters, SAP, plants, plots, railway sidings, etc. There are a lot of errors making it difficult to get meaningful insights required for immediate action. Entry/Exit are paper based and not captured electronically</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Incorporate cutting edge technology such as RPA (Robotics Process Automation) for Auto Invoicing Generation and Auto e-WAY bill generation. This will help customers in improving TAT tremendously, reduce costly errors, and help negotiate better rates with transporters.</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Incorporate the 'Lat-Long e-PoD' module that helps unloading operators to close the trip with e-POD, by auto registering the Lat-Long at unloading point. This will eliminate various cases of trip closures during transit.</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1" src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Incorporate cutting edge technology such as RPA (Robotics Process Automation) for Auto Invoicing Generation and Auto e-WAY bill generation. This will help customers in improving TAT tremendously, reduce costly errors, and help negotiate better rates with transporters.</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-12 w-24"><img className="p-1  " src={IconFC} alt="" /></div>
                                        <div><p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">Incorporate cutting edge technology such as RPA (Robotics Process Automation) for Auto Invoicing Generation and Auto e-WAY bill generation. This will help customers in improving TAT tremendously, reduce costly errors, and help negotiate better rates with transporters.</p></div>
                                    </div>


                                </div>
                            </div>
                        </div>












                    </div>


                </div>
            </section>






        </div>
    )
}
