import React from "react";
import Manphoto from "../../assets/images/Manphoto.png";
import siemens from "../../assets/images/siemens.png";
import Automation1 from "../../assets/images/Automation1.png";
import Edge1 from "../../assets/images/Edge1.png";
import Empower from "../../assets/images/Empower.png";
import Software from "../../assets/images/Software.png";
// import logos1 from "../../assets/images/logos1.png";
import smalllogo from "../../assets/images/smalllogo.png";
// import Digital from "../../assets/images/Homenew.png";
import Home1 from "../../assets/images/Home.png";
import vectorImage from "../../assets/images/vector.png";

import car from "../../assets/images/car.png";
import header from "../../assets/images/header.jpg";

export default function Home() {
    return (
        <div className="static">
            {/* Section-Header */}
            {/* <section className="text-gray-600 relative body-font bg-primary  rounded-br-[100px]"> */}
            <section
                className="text-gray-600 relative body-font bg-primary rounded-br-[100px]"
                style={{
                    backgroundImage: `url(${vectorImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col   items-center ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb- md:mb-0 items-center text-center">
                        <h1 className=" not-italic font-bold mb-8 font-heebo title-font sm:text-6xl  text-4xl title-font text-white ">
                            Digital
                            <br /> Transformation & <br /> Innovation
                        </h1>
                        <p className=" text-xl not-italic font-normal leading-7 font-heboo text-white  ">
                            Unlock Your Digital Transformation & Innovation Potential.
                            <br /> We Help Implement Modern Digital Technologies to Solve.
                            <br /> Business Problems, Optimise Processes and Save Cost.
                        </p>
                        <div className="flex justify-center mt-6">
                            <button className="inline-flex text-primary font-bold bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                LEARN MORE{" "}
                                <span>
                                    {" "}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2 "
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className=" mt-10">
                            <div className="absolute flex justify-center mt-10">
                                <button className=" text-sm not-italic font-bold  text-white border-0 py-2 px-1  focus:outline-none hover:border-b-2 hover:border-white">
                                    Digital Transformation and Innovation
                                </button>
                                <button className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none  hover:border-b-2 hover:border-white ">
                                    Automation of Enterprise Workflows
                                </button>
                                <button className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white">
                                    Edge Computing and Mobility
                                </button>

                                <button className="inline-flex text-sm not-italic font-bold leading-5 text-white border-0 py-2 px-6 focus:outline-none hover:border-b-2 hover:border-white">
                                    Managed IT Services
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absoulte lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-blend-lighten bg-cover bg-no-repeat">
                        <img
                            className="object-cover object-center rounded bg-lightgray"
                            alt="hero"
                            src={Home1}
                            style={{
                                mixBlendMode: "lighten",
                            }}
                        />
                    </div>

                    {/* <div className="absoulte lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Digital}
            />
          </div> */}
                </div>
            </section>

            {/* Section-Flying Chital - Smart Agile Logistics at Fingertip */}

            <section className="text-gray-600 body-font relative  z-20 -mt-20 ">
                <div className="container mx-auto flex px-1 py-5   bg-white  rounded-xl md:flex-col flex-col items-center border-2 border-gray-200 ">
                    <div>
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900 font-heebo">
                            Flying Chital - Smart Agile Logistics at Fingertip...
                        </h1>
                    </div>

                    <div className="flex flex-row">
                        <div className="lg:max-w-lg lg:w-1/6 md:w-1/3 w-1/6 mb-10 md:mb-0  ml-2">
                            <img
                                className="object-cover object-center "
                                alt="hero"
                                src={smalllogo}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center font-heebo">
                            <p className="mb-4 text-justify mt-2 mr-2">
                                Flying Chital stands as a trailblazing, multi-modal integrated
                                logistics management platform, revolutionizing the logistics
                                landscape with its comprehensive suite of services. By combining
                                advanced analytics, customized reporting capabilities and
                                infographics it seamlessly streamlines and optimizes logistics
                                operations, providing invaluable logistics intelligence,
                                connectivity, and real-time virtualization. Positioned at the
                                forefront of its category, Flying Chital's mobility feature
                                offers 'Smart Agile Logistics Operations at Fingertip,' ensuring
                                unparalleled accessibility and 100% visibility, irrespective of
                                location or device. Moreover, its integrated digital platform
                                interfaces effortlessly with various Government Regulatory
                                Portals, including Vahan, Parivahan, GST Portal, Govt Mining
                                Regulatory Portals, ERP/SAP, and more, enabling real-time data
                                access through customizable dashboards and reports. This
                                innovative platform not only ensures end-to-end visibility from
                                source to destination but also significantly reduces turnaround
                                times, operational expenses, and the risks of pilferage and
                                revenue leakages. With its adaptability to multiple
                                transportation modes, including road, rail, container, and port
                                terminals, this digital logistics management system serves as a
                                versatile, comprehensive solution for businesses operating in
                                the modern logistics landscape. Flying Chital is a cost
                                effective conveneient door way to Logistics 4.0.
                            </p>
                            <div className="flex justify-center ">
                                <button className="inline-flex text-primary font-bold bg-white border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-full text-sm font-heebo">
                                    LEARN MORE{" "}
                                    <span>
                                        {" "}
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2 "
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section- Automation of Enterprise Workflows */}
            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={Automation1}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className="border-b-2 border-secondary">Au</span>tomation of
                            Enterprise Workflows
                        </h1>
                        <p className="mb-8 text-justify text-base not-italic font-normal leading-6 w-4/5">
                            Automate Your Enterprise Digital Workflows for Enhanced
                            Resilience, Scalability, and Sustainability. We Help Automate
                            Enterprise Digital Workflows to Streamline Processes, Boost
                            Productivity and Provide Data-Driven Insights. Automate Your
                            Enterprise Digital Workflows for Enhanced Resilience, Scalability,
                            and Sustainability. We Help Automate Enterprise Digital Workflows
                            to Streamline Processes, Boost Productivity, and Provide
                            Data-Driven Insights
                        </p>
                    </div>
                </div>
            </section>

            {/* Section-Edge Computing and Mobility */}
            <section className="text-gray-600 body-font bg-[#F6F7F8] rounded-tl-[70px] rounded-br-[70px]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            Edge Computing and Mobility
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Our Edge Computing and Mobility Solutions enable non-connected
                            equipment, Industrial IoT devices, and workstations to capture and
                            process data without having to collaborate with a centralized
                            database system. Aligned with Industries 4.0 key driver for
                            Digital Transformation and Industrial Automation. Our Edge
                            Computing and Mobility Solutions enable non-connected equipment,
                            Industrial IoT devices, and workstations to capture and process
                            data without having to collaborate with a centralized database
                            system
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={Edge1}
                        />
                    </div>
                </div>
            </section>

            {/* Section- Managed IT Services*/}

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            Managed IT Services
                        </h1>
                    </div>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src={Empower}
                                />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 text-start">
                                Empowering Business Through IT Solutions
                            </h2>
                            <p className="leading-relaxed text-base text-start">
                                We manage IT Services for applications and infrastructure, so
                                that our clients can run their businesses. We help build and
                                manage IT Infrastructure including private wireless, local area
                                networks, wide area networks, edge networks, data centers and
                                cloud networks.
                            </p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src={Software}
                                />
                            </div>

                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 text-start">
                                Comprehensive Software Solutions for Business
                            </h2>
                            <p className="leading-relaxed text-base text-start">
                                Build and Manage software Applications from core accounting,
                                stock tracking, bank reconciliation, project management to
                                automating workflows, payroll, CRM, manufacturing etc
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
