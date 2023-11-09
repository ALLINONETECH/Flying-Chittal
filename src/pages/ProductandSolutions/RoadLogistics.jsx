import React from 'react'
import Card from '../../assets/images/card-media.png'
import Card2 from '../../assets/images/card-media2.png'
import Card3 from '../../assets/images/card-media3.png'
import Card4 from '../../assets/images/card-media4.png'
import Card5 from '../../assets/images/card-media5.png'
import Card6 from '../../assets/images/card-media6.png'
import Card7 from '../../assets/images/card-media7.png'
import Card8 from '../../assets/images/card-media8.png'
import Card9 from '../../assets/images/card-media9.png'
import Card10 from '../../assets/images/card-media10.png'
import Card11 from '../../assets/images/card-media11.png'
import Blog1 from "../../assets/images/Blog1.png";


export default function RoadLogistics() {
    return (
        <div>
            {/* Section-1 Industry */}
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
                            RoadLogistics
                        </h1>
                        <p className="mt-6 text-white text-xl not-italic font-bold leading-8 font-heebo w-full">
                            Challenge, Ideate & Create
                        </p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button>
                        <p className="mt-3 text-sm text-gray-400 "></p>
                    </div>
                </div>
            </section>



            {/* Section-2  */}
            <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-5">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Road Logistics</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div class="flex justify-center">
                            <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                        </div>
                    </div>
                    <div className="container px-5  mx-auto">
                        <div class="text-center mb-5">
                            <p class="text-center leading-relaxed xl:w-2/3 lg:w-1/4 mx-auto text-gray-500s">oad logistics in a truck company involve 6
                                the planning, implementation, and control of the movement and storage of goods and services from one place to another
                                using trucks and other road vehicles. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-32 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Digital Workspace with Digital Profiles</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">A digital workspace is an integrated technology framework that
                                        centralizes an organization's applications, data, and collaboration tools into a single user interface
                                        accessible from anywhere with an internet connection. It provides employees with a unified platform to
                                        access their work-related resources, applications, and data. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card2} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Automated Transaction Points</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Automated Transaction Points in Business: In business,
                                        automated transaction points can refer to specific stages in a sales or service process where transactions are automatically processed.
                                        <br />
                                        <br />
                                        <p>•Vehicle and Driver Assignment</p>
                                        <br />
                                        <p>•Entry and Exit</p>
                                        <br />
                                        <p>•Weighment – Man-less & Near Man-less</p>
                                        <br />
                                        <p>•Electronic Proof of Delivery</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card3} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Automated Validation & Verification</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Automated Validation and Verification (V&V) refers to the use
                                        of automated tools, techniques, and processes to confirm that a product, system, or software application meets its specified requirements and functions correctly.
                                        <br />
                                        <br />
                                        <p>•Vehicle & Driver</p>
                                        <br />
                                        <p>•Tamperproof Transactions</p>
                                        <br />
                                        <p>•Minimized Manual Intervention</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card4} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Automated Documentation</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Automated documentation refers to the process of automatically
                                        generating documentation for software applications, APIs, or any other technology-related projects without manual intervention.
                                        <br />
                                        <br />
                                        <p>•Generation</p>
                                        <br />
                                        <p>•Printing</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card5} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Invoicing & Payment</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Create an Invoice: Include your business name, logo, and contact
                                        information. Add the client's details: name, address, and contact information. Assign a unique invoice number
                                        and date. Clearly outline the products or services provided, along with their quantities and prices. Calculate
                                        the total amount, including any taxes or discounts. Specify the payment terms (e.g., due upon receipt, net 30 days).</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card6} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Reverse Bidding</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Reverse bidding is a procurement strategy in which buyers post
                                        their requirements for a service or product, and sellers then bid to win the business. Unlike traditional
                                        bidding where sellers compete to offer the lowest price, in reverse bidding, sellers compete to offer the
                                        best value, which may include factors such as quality, delivery time, and additional services.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card7} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Integrated Transporter Module</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">An Integrated Transporter Module could refer to a comprehensive
                                        software or hardware solution that combines several functions essential for efficient trucking operations.
                                        Here are some key features such a module might include. Fleet Management: Tracking the location, fuel consumption, and maintenance schedules of all trucks</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card8} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Rich Analytics</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Implementing rich analytics in a truck company can significantly
                                        improve operational efficiency, reduce costs, enhance safety, and optimize various aspects of the business.
                                        Here are some key areas where rich analytics can be applied in a truck company. Route Optimization Predictive
                                        Analysis: Use historical data and real-time traffic information to predict optimal routes for trucks, reducing fuel consumption and delivery times. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card9} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Customized Reports</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Certainly! It looks like you're interested in customized reports.
                                        If you could provide more specific details about the type of report you need, such as the purpose, the data
                                        you want to include, the format, or any specific questions you have, I'd be happy to assist you further in creating a customized report. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card10} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Centralized Command and Control Room</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">A Centralized Command and Control Room (CCR) is a facility used
                                        by organizations, such as emergency services, military, transportation, and large corporations, to monitor,
                                        manage, and coordinate various operations and activities from a single location. This room is equipped with
                                        advanced technologies and systems that allow operators to gather real-time information.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img className="rounded-tr-[80px] w-full" src={Card11} alt="" />
                                </div>

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">Integrated Telematics</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-justify">Integrated telematics refers to the combination of telecommunications and informatics
                                        technologies in various fields, such as vehicle tracking, fleet management, insurance, and healthcare.
                                        <br />
                                        <br />
                                        <p>•GPS – Fixed/Portable/Solar</p>
                                        <br />
                                        <p>•IoT</p>
                                        <br />
                                        <p>•RFID</p>
                                        <br />
                                        <p>•ANPR</p>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]  bg-gray-200">
                <div className="container px-32 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 ">

                        <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px] bg-gray-200">
                            <div className="container px-5 py-10 mx-auto">
                                <div class="text-center mb-5">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-1">Modules & Features</h1>
                                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                                    <div class="flex justify-center">
                                        <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                                    </div>
                                </div>
                                <div className="container px-5  mx-auto">
                                    <div class="text-center mb-5">
                                        <p class="text-center leading-relaxed xl:w-2/3 lg:w-1/4 mx-auto text-gray-500s">oad logistics in a truck company involve 6
                                            the planning, implementation, and control of the movement and storage of goods and services from one place to another
                                            using trucks and other road vehicles. </p>
                                    </div>
                                </div>
                            </div>
                        </section>




                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Mines outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Efficient route planning is crucial to ensure timely deliveries and reduce
                                        transportation costs. Companies use specialized software and GPS technology to optimize routes based on factors like distance, traffic conditions, and delivery schedules. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">Plants inbound and outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Inbound logistics involve receiving raw materials, components,
                                        or products from suppliers or other facilities. In the context of a trucking company, this could mean receiving parts for the trucks, fuel, or any other materials necessary for operations.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">port inbound and outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Define Your Services: Specify whether you'll focus on local,
                                        regional, or national transportation. Will you handle general freight, specialized goods, or perishable items?Market Analysis: Research your competitors, target market, and industry trends. </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full bg-red-400 shadow-lg  md:shadow-xl border-2 border-black"
                                style={{
                                    width: 'full',
                                    height: 'full',
                                    backgroundSize: 'cover',
                                    // backgroundImage:`url(${Card10})`,
                                    backgroundColor: 'black'
                                }}
                            >
                                <h2 className="text-4xl text-white font-bold title-font mt-60 p-6">railway sliding in and outbound</h2>
                                <div className="px-6 pb-6">
                                    <p className="leading-relaxed text-white text-justify">Choose a Business Structure: Decide whether you want to operate as a
                                        sole proprietorship, partnership, LLC, or corporation. Each has different legal and tax implications.Register Your Business. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    )
}
