import React from 'react'
import Manphoto from '../../assets/images/Manphoto.png'
import siemens from '../../assets/images/siemens.png'
import car from '../../assets/images/car.png'
import header from '../../assets/images/header.jpg'

export default function Home() {
    return (
        <div>
            {/* Section-Header */}
            <section className="text-gray-600 body-font bg-[#000048] ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col   items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Imagine a business that can act with Human Insights
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Ahead Faster</button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center rounded" alt="hero" src={Manphoto} />
                    </div>
                </div>
            </section>

            {/* Section-CaseStudies */}
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:flex-row flex-col py-2 ">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"> Case Studies</h1>
                    </div>
                    <div className="mt-10"><p>We deliver excellence by hiring and partnering with the best in the business.</p></div>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className=" " src={Manphoto} />
                            </div>

                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={siemens} />
                            </div>

                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={siemens} />
                            </div>

                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className=" h-[400px]  w-full" src={Manphoto} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* section:-Engineering Excellence */}
            {/* <section className="text-gray-600 body-font"> */}
            <div className="w-full h-screen bg-non repeat bg-cover bg-fixed bg-[url('/car.png')]">
                {/* <img alt="content" className=" " src={car} /> */}
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">

                    <div className="flex flex-wrap sm:flex-row flex-col py-2 ">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Engineering excellence</h1>
                    </div>
                    <div className="mt-10"><p>We deliver excellence by hiring and partnering with the best in the business.</p></div>

                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className=" h-[400px]  w-full" src={Manphoto} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">RECOGNITION</h2>
                        <p className="text-base leading-relaxed mt-2">Recognized for our product innovation, process innovation and innovation culture by Fortune and Statista, Inc., the world-leading statistics portal and industry-ranking provider.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={siemens} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">ACCOLADE</h2>
                        <p className="text-base leading-relaxed mt-2">Cognizant is positioned as a 'Leader' in the ISG Provider Lens™ - Salesforce Ecosystem Partners 2023 Report across the US, UK, Germany, and France markets.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Read The Report
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className=" h-[400px]  w-full" src={Manphoto} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">RECOGNITION</h2>
                        <p className="text-base leading-relaxed mt-2">Cognizant ranks ahead of 32 providers as a Leader in Everest Group’s PEAK Matrix® Assessment for creating prominent market impact in Enterprise QA services.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Read the Report
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* </section> */}


        </div>
    )
}
