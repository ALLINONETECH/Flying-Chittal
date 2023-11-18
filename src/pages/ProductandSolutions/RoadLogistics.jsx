import React from "react";
import Card from "../../assets/images/card-media.png";
import Card2 from "../../assets/images/card-media2.png";
import Card3 from "../../assets/images/card-media3.png";
import Card4 from "../../assets/images/card-media4.png";
import Card5 from "../../assets/images/card-media5.png";
import Card6 from "../../assets/images/card-media6.png";
import Card7 from "../../assets/images/card-media7.png";
import Card8 from "../../assets/images/card-media8.png";
import Card9 from "../../assets/images/card-media9.png";
import Card10 from "../../assets/images/card-media10.png";
import Card11 from "../../assets/images/card-media11.png";
import Blog1 from "../../assets/images/Blog1.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import raillogistic1 from "../../assets/images/raillogistic1.jpg";
import raillogistic2 from "../../assets/images/raillogistic2.jpg";
import raillogistic3 from "../../assets/images/raillogistic3.jpg";
import raillogistic4 from "../../assets/images/raillogistic4.jpg";
import raillogistic5 from "../../assets/images/raillogistic5.jpg";

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
                <div className="container px-6 py-16 mx-auto text-start">
                    <div className=" mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
                            Road Logistics
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            <div className="flex gap-2">
                                <div>
                                    <span>
                                        <img className="" src={HomeIcon} alt="" />
                                    </span>
                                </div>
                                <div classNAme="justify">

                                    <span className="text-[#F85A47] font-[700] font-heebo text-[32px] ">
                                        Flying Chital
                                    </span>
                                    <span className="font-[700] font-heebo text-[32px] ">

                                        / Raod Logistics
                                    </span>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>

            {/* Section-2  */}
            <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px]">
                <div className="container px-5 py-10 mx-auto">
                    <div class="text-center mb-5">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-center text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary ">
                                Flying Chital&nbsp;
                            </span>
                            Integrated Road Logistics Management System
                            <br />
                            (FCI
                            <span className="border-b-4 border-secondary">RL</span>MS)
                        </h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                    </div>
                    <div className="container px-5  mx-auto">
                        <div class="text-start mb-5">
                            <p class=" text-xl not-italic font-normal leading-7 font-heebo xl:w-full lg:w-full mx-auto text-gray-500s text-justify text-[#30343F]">
                                Leveraging technologies in rail logistics management offers
                                improved operational efficiency, real-time tracking, and
                                predictive maintenance capabilities. It enhances the accuracy of
                                scheduling, reduces delays, and minimizes costs, ultimately
                                leading to a more reliable and cost-effective rail
                                transportation system, which is essential for the modern supply
                                chain.
                                <br /> Technology-driven efficient rail logistics have brought
                                significant advancements to the transportation industry.
                                Real-time monitoring, automation, and data analytics optimize
                                the movement of goods by rail. GPS, RFID, IoT and sensor
                                technologies enable precise tracking, reducing transit times and
                                enhancing the safety of cargo. Digital platforms and smart
                                systems facilitate the coordination of shipments and real-time
                                communication among stakeholders, making rail logistics more
                                efficient and responsive. The integration of these technologies
                                promotes sustainability, cost-efficiency, and reliability.
                            </p>
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

                                <h2 className="text-4xl text-gray-900 font-bold title-font p-6">
                                    Digital Workspace with Digital Profiles
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        We create a digital ecosystem through integration of
                                        advanced technologies, such as AI, cloud computing, and IoT,
                                        to streamline and digitize business processes. It results in
                                        a digital workplace where tasks, communication, and
                                        collaboration occur seamlessly and efficiently. Digital
                                        profiles for employees and stakeholders provide a
                                        comprehensive view of their roles, preferences, and
                                        interactions, enhancing personalized experiences. Moreover,
                                        a digital interface connects all stakeholders, including
                                        customers, suppliers, and employees, fostering real-time
                                        data sharing and decision-making. This digital
                                        transformation optimizes operations, increases productivity,
                                        and positions businesses to stay competitive.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card2}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Automated Validation & Verification
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Our digital solutions enhance efficiency and accuracy by
                                        automating the validation & verification process, reducing
                                        human error and saving time. They provide a secure and
                                        tamper-proof digital record of all transactions, ensuring
                                        transparency and trust among stakeholders. In logistics
                                        management, this technology allows for real-time tracking,
                                        reducing delays, and enhancing supply chain visibility.
                                        Additionally, it streamlines compliance, mitigates fraud,
                                        and ensures that all parties involved in the process can
                                        rely on the integrity and authenticity of the data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card3}
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Automated Validation & Verification
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Our digital solutions enhance efficiency and accuracy by
                                        automating the validation & verification process, reducing
                                        human error and saving time. They provide a secure and
                                        tamper-proof digital record of all transactions, ensuring
                                        transparency and trust among stakeholders. In logistics
                                        management, this technology allows for real-time tracking,
                                        reducing delays, and enhancing supply chain visibility.
                                        Additionally, it streamlines compliance, mitigates fraud,
                                        and ensures that all parties involved in the process can
                                        rely on the integrity and authenticity of the data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card4}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Automated Documentation
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Technology-driven automated document generation and printing
                                        at transaction/transit points offer a host of advantages in
                                        modern business operations. By automating this process,
                                        businesses can ensure the swift and accurate creation of
                                        essential documents, reducing the likelihood of errors and
                                        saving valuable time. Real-time data updating further
                                        enhances the efficiency of this system, allowing for
                                        immediate access to the most up-to-date information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card5}
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Invoicing & Payment
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Create an Invoice: Include your business name, logo, and
                                        contact information. Add the client's details: name,
                                        address, and contact information. Assign a unique invoice
                                        number and date. Clearly outline the products or services
                                        provided, along with their quantities and prices. Calculate
                                        the total amount, including any taxes or discounts. Specify
                                        the payment terms (e.g., due upon receipt, net 30 days).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card6}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Reverse Bidding
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Reverse bidding is a procurement strategy in which buyers
                                        post their requirements for a service or product, and
                                        sellers then bid to win the business. Unlike traditional
                                        bidding where sellers compete to offer the lowest price, in
                                        reverse bidding, sellers compete to offer the best value,
                                        which may include factors such as quality, delivery time,
                                        and additional services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card7}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Integrated Transporter Module
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        We provide a digital platform to tag vehicles on government
                                        regulatory portals, verify vehicle and driver credentials
                                        from platforms like Vahan and Parivahan, and seamlessly link
                                        them to permits, delivery orders (DO), and shipping orders
                                        (SO) it offers significant advantages. Transporters can use
                                        the portal for reverse bidding and making payments. This
                                        integrated approach minimizes administrative burden, reduces
                                        human error, and ensures regulatory compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card8}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Descriptive, Predictive & Prescriptive Analytics
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Data mining-based descriptive, predictive, and prescriptive
                                        analytics are essential components of Integrated Logistics
                                        Management Systems (ILMS). Descriptive analytics help in
                                        understanding past performance, offering insights into
                                        historical trends and identifying areas for improvement.
                                        Predictive analytics enable ILMS to forecast future trends,
                                        demands, and potential issues, allowing proactive planning
                                        and resource allocation. Prescriptive analytics takes it a
                                        step further by providing actionable recommendations,
                                        optimizing decisions, and offering solutions to enhance
                                        efficiency and reduce costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card9}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Customized Reports
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        Customized, tailor-made reports with infographics, including
                                        shift-wise, day-wise, weekly, monthly, and quarterly
                                        insights, are integral to an Integrated Logistics Management
                                        System (ILMS). These reports offer a comprehensive view of
                                        logistics operations, making it easier to identify patterns,
                                        bottlenecks, and areas for improvement. Infographics enhance
                                        data visualization, enabling stakeholders to quickly grasp
                                        complex information. This level of customization empowers
                                        decision-makers to fine-tune strategies, allocate resources
                                        efficiently, and optimize processes, leading to cost
                                        reductions, improved performance, and a competitive edge in
                                        the fast-paced logistics industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-1/2 p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card10}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Centralized Command and Control Room
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        A Centralized Logistics Operation Command and Control Room
                                        serves as the nerve center of logistics management,
                                        aggregating all aspects of operations onto one digital wall.
                                        This centralized approach enables proactive decision-making,
                                        as it offers real-time visibility into the entire supply
                                        chain. It provides access to alerts, alarms, and performance
                                        metrics, allowing for immediate responses to potential
                                        issues. This shift from reactive to proactive action can
                                        significantly reduce disruptions, enhance efficiency, and
                                        mitigate risks, ultimately ensuring a more reliable and
                                        responsive logistics operation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto md:w-full p-4  ">
                            <div className="border border-gray-200  rounded-tr-[80px] rounded-bl-[50px] h-full  bg-white shadow-lg  md:shadow-xl ">
                                <div className="w-full h-auto inline-flex items-center justify-center rounded-tr-[80px] rounded-bl-lg bg-indigo-100 text-indigo-500 ">
                                    <img
                                        className="rounded-tr-[80px] w-full"
                                        src={Card11}
                                        alt=""
                                    />
                                </div>

                                <h2 className="text-3xl not-italic font-bold leading-9 text-[#121113] title-font font-heebo p-6">
                                    Integrated Telematics
                                </h2>
                                <div className="px-6 pb-6">
                                    <p className=" text-xl not-italic font-normal leading-7 font-heebo text-[#121113] text-justify">
                                        {" "}
                                        Integrated with Vahan & Parivahan Interface with Vahan
                                        enables swift digital vehicle inspections using just the
                                        vehicle number, providing access to crucial information like
                                        registration, insurance, fitness, and taxation status. This
                                        expedites security checks and prevents penalties and delays
                                        by ensuring compliance with all vehicle details.
                                        <br />
                                        Interface with Sarathi facilitates rapid digital driver
                                        inspections using only the driver's license number and date
                                        of birth, offering details such as a photograph, license
                                        expiration date, and current status. This streamlines
                                        security checks and prevents penalties and delays by
                                        ensuring compliance with all driver information.
                                        <br />
                                        Key benefits:
                                        <br />• Ensuring complete compliance and verification of
                                        both the vehicle and driver before task allocation.
                                        <br />• Access to real-time information to avoid penalties
                                        for violating government compliance rules (e.g., expired
                                        licenses or lack of insurance).
                                        <br />• Preventing potential sales losses due to
                                        non-compliance with government regulations, such as taxation
                                        and fitness certification.
                                        <br />• Eliminating paperwork and the need for
                                        cross-verification of driver and vehicle information, as it
                                        comes directly from government APIs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]  ">
                <div className="container px-32 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px] bg-gray-200">
                            <div className="container px-5 py-10 mx-auto">
                                <div class="text-center mb-5">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                                        <span className=" text-indigo-800 font-bold text-[40px] ">
                                            Module &nbsp;
                                        </span>
                                        <span className=" text-[40px] font-heebo font-bold ">
                                            & Features
                                        </span>
                                    </h1>
                                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                                    <div class="flex justify-center">
                                        <div class="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
                                    </div>
                                </div>
                                <div className="container px-5  mx-auto">
                                    <div class="text-center mb-5">
                                        <p class="text-xl not-italic font-normal leading-7 text-center xl:w-4/5 lg:w-4/5 mx-auto text-gray-500">
                                            Road logistics in a truck company involve 6 the planning,
                                            implementation, and control of the movement and storage of
                                            goods and services from one place to another using trucks
                                            and other road vehicles.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex flex-wrap -m-4 mb-2 ">
                            <div className=" w-auto md:w-1/2 p-4">
                                <div
                                    className="flex items-center justify-center  bg-cover bg-no-repeat rounded-tr-[50px] rounded-bl-[50px]  shadow-lg "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${raillogistic1}) lightgray 50% / cover no-repeat`,
                                    }}
                                >
                                    <div className=" w-auto md:w-4/5 text-start text-white  grid content-end">
                                        <h1 className="font-heebo text-4xl font-bold mb-5 mt-60">
                                            Outbound From Mines
                                        </h1>
                                        <p className="font-heebo text-lg font-normal text-justify  mb-20">
                                            Efficient route planning is crucial to ensure timely
                                            deliveries and reduce transportation costs. Companies use
                                            specialized software and GPS technology to optimize routes
                                            based on factors like distance, traffic conditions, and
                                            delivery schedules.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-auto md:w-1/2 p-4">
                                <div
                                    className="flex items-center justify-center  bg-cover bg-no-repeat rounded-tr-[80px] rounded-bl-[50px]  shadow-lg "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%),url(${raillogistic3})  lightgray 50% / cover no-repeat`,
                                    }}
                                >
                                    <div className=" w-auto md:w-4/5 text-start  text-white  grid content-end">
                                        <h1 className="font-heebo text-4xl font-bold mb-5 mt-52 ">
                                            Inbound To Plants
                                        </h1>
                                        <p className="font-heebo text-lg font-normal text-justify  ">
                                            Leveraging high-end technologies in logistics management
                                            for sourcing raw materials and other essentials is a
                                            game-changer in the modern business landscape. These
                                            technologies offer real-time visibility and optimization
                                            capabilities that streamline the entire supply chain
                                            process. They enable companies to track the movement of
                                            raw materials from source to destination, anticipate
                                            potential disruptions, and ensure timely deliveries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-auto md:w-1/2 p-4">
                                <div
                                    className="flex items-center justify-center  bg-cover bg-no-repeat rounded-tr-[80px] rounded-bl-[50px]  shadow-lg "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${raillogistic2}) lightgray 50% / cover no-repeat`,
                                    }}
                                >
                                    <div className=" w-auto md:w-4/5 text-start  text-white  grid content-end">
                                        <h1 className="font-heebo text-4xl font-bold mb-5  mt-40 ">
                                            Outbound From Plants
                                        </h1>
                                        <p className="font-heebo text-lg font-normal text-justify ">
                                            Technology is paramount in managing outbound logistics
                                            from ports, serving as the linchpin of efficient and
                                            effective global trade. Ports are the gateway for exports
                                            and outbound shipments, and the integration of advanced
                                            tools such as real-time tracking, automation, and
                                            predictive analytics is crucial in optimizing the movement
                                            of goods. These technologies enable the timely loading of
                                            cargo onto vessels, streamline customs processes, and
                                            enhance security and compliance
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" w-auto md:w-1/2 p-4">
                                <div
                                    className="flex items-center justify-center  bg-cover bg-no-repeat rounded-tr-[80px] rounded-bl-[50px]  shadow-lg "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%),url(${raillogistic4})  lightgray 50% / cover no-repeat`,
                                    }}
                                >
                                    <div className=" w-auto md:w-4/5 text-start  text-white  grid content-end">
                                        <h1 className="font-heebo text-4xl font-bold mb-5 mt-80 ">
                                            Inbound To Ports
                                        </h1>
                                        <p className="font-heebo text-lg font-normal text-justify mb-10 ">
                                            Technologies play a pivotal role in managing inbound
                                            logistics to ports, ensuring the efficiency and
                                            effectiveness of this critical gateway in global trade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-auto md:w-1/2 p-4">
                                <div
                                    className="flex items-center justify-center  bg-cover bg-no-repeat rounded-tr-[80px] rounded-bl-[50px]  shadow-lg "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${raillogistic5})  lightgray 50% / cover no-repeat`,
                                    }}
                                >
                                    <div className=" w-auto md:w-4/5 text-start  text-white  grid content-end">
                                        <h1 className="font-heebo text-4xl font-bold mb-5 mt-80 ">
                                            Outbound From Ports
                                        </h1>
                                        <p className="font-heebo text-lg font-normal text-justify mb-10 ">
                                            Technologies play a pivotal role in managing inbound
                                            logistics to ports, ensuring the efficiency and
                                            effectiveness of this critical gateway in global trade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}