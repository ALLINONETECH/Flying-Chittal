/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";

// import Dev from "../../assets/images/Dev1.png";
import Dev from "../../assets/images/Debashis Sir.jpg";
import Sitanshu from "../../assets/images/Sitanshu Sir.jpg";
import Vijaya from "../../assets/images/vijay.jpeg";
// import Pradyumna from "../../assets/images/Pradyumna1.png";
import Pradyumna from "../../assets/images/Praduman Sir.jpg";
// import Amar from "../../assets/images/Amar1.png";
import Amar from "../../assets/images/Amar Sir.jpg";
// import parshu from "../../assets/images/parshu.jpeg";
import parshu from "../../assets/images/Parshu sir.jpg";
// import kalki from "../../assets/images/kalki.jpeg";
import kalki from "../../assets/images/KK Panda Sir.jpg";
import Bibhu from "../../assets/images/Bibhu Sir.jpg";
import Abhijit from "../../assets/images/Abhijit Radke.jpg";
import Amit from "../../assets/images/Amit.jpg";
import Jaya from "../../assets/images/jaya.png";
import Bhawna from "../../assets/images/bhawna.jpeg";
import Chiranjiv from "../../assets/images/Chiranjiv sir 2.jpg";
import Biplab from "../../assets/images/Biplab JI.jpg";
import Debashis from "../../assets/images/Debashis Sahoo ji.jpg";
import Nayan from "../../assets/images/nayan.jpeg";

import Samba from "../../assets/images/Samba1.png";
import Who1 from "../../assets/images/Who1.png";
import Who2 from "../../assets/images/Who2.png";
import Why from "../../assets/images/Whyimg.png";
import Eye from "../../assets/images/Eye.png";
import Heart from "../../assets/images/Heart.png";
import Goal from "../../assets/images/Goal.png";
import Aboutus from "../../assets/images/Aboutus.png";
import AboutImage1 from "../../assets/images/AboutImage1.png";
import AboutImage2 from "../../assets/images/AboutImage2.png";
import Tata from "../../assets/images/Tata.png";
import Nippon from "../../assets/images/nipponsteel.png";
import Nalco from "../../assets/images/Nalco.png";
import JSW from "../../assets/images/JSW.png";
import BMC from "../../assets/images/bmclogo.png";
import YCS from "../../assets/images/ycs.png";
import Arcelor from "../../assets/images/Arcelor.png";
import Jindal from "../../assets/images/jindal.png";
import JSL from "../../assets/images/JSL.png";
import VlAccess from "../../assets/images/vlaccess.jpeg";
import Idtech from "../../assets/images/idtech.jpeg";
import TataSteel from "../../assets/images/TataSteel.png";
import BRPL from "../../assets/images/BRPL.png";
import SAIL from "../../assets/images/sail.jpeg";
import SJSPL from "../../assets/images/SJSPL.png";
import MYTHRI from "../../assets/images/MYTHRI.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import aboutusbluebg from "../../assets/images/aboutusbluebg.png";
import Socialicon from "../../assets/images/Socialicon.png";
import TeamSection from "../../component/common/TeamSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export default function About() {
  const whoRef = useRef();
  const whyRef = useRef();
  const missionRef = useRef();
  const leadersRef = useRef();
  const customersRef = useRef();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const page = params.get("page");

  useEffect(() => {
    if (page == "who") {
      whoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "why") {
      whyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "mission") {
      missionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "leaders") {
      leadersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (page == "customers") {
      customersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const deploymentClients = [
    { name: "SAIL", logo: SAIL },
    { name: "BMC", logo: BMC },
    { name: "JSW", logo: JSW },
    { name: "SJSPL", logo: SJSPL },
    { name: "YCS", logo: YCS },
    { name: "Vl Access", logo: VlAccess },
    { name: "Id tech", logo: Idtech },
    { name: "Tata", logo: Tata },
    { name: "Nippon Steel", logo: Nippon },
    { name: "Tata Steel", logo: TataSteel },
    { name: "Arcelor", logo: Arcelor },
    { name: "Jindal", logo: Jindal },
    { name: "Nalco", logo: Nalco },
    { name: "JSL", logo: JSL },
    { name: "MYTHRI", logo: MYTHRI },
    { name: "BRPL", logo: BRPL },
  ];

  const leadershipTeam = [
    // {
    //   name: "Vijay Anand Krishnan",
    //   role: "Director, Business Strategy, Growth & Sustainability",
    //   image: Vijaya,
    //   bio: "Mr. Vijay Anand Krishnan is a seasoned entrepreneur having extensive experience across Asia Africa and Middle East. He has founded and led companies operating in various infrastructure verticals such as oil and gas infrastructure, power generation, telecom networks, and water infrastructure. As Director - Business Strategy and Growth at Flying Chital Private Limited, he brings deep global market insight, strong government and industry relationships, and proven expertise in structuring complex infrastructure projects. His presence strengthens the Board by enhancing Flying Chital's capability to expand internationally, build strategic partnerships, and pursue high-value industrial and technology projects.",
    // },
    {
      name: "Pradyumna Mishra",
      role: "Co-Founder & CEO",
      image: Pradyumna,
      bio: "At our helm is Pradyumna Mishra, a visionary leader with over 30 years of distinguished experience spanning 20 years in the Indian Navy and a decade in the corporate sector with Larsen & Toubro, Mahindra Group, Fre8wise and Atulya Abhinav Tech Private Limited. With a strong technology foundation, he has delivered state-of-the-art solutions to defence forces, government agencies, and global enterprises. A committed advocate of the Make in India initiative, he champions indigenisation, innovation, ethical governance, and strategic foresight, embodying discipline, operational excellence and cutting-edge technological leadership.",
    },

    {
      name: "Sitansu Jena",
      role: "Director Engineering and Development",
      image: Sitanshu,
      bio: "Sitansu is a seasoned Technology Architect bringing deep expertise in Agentic AI, Generative AI, and Advanced Data Analytics to our innovation ecosystem. With strong proficiency across Android Application Development, React.js, Node.js, Java, JavaScript, HTML, Python, and Machine Learning, he designs intelligent, scalable, and future-ready digital solutions. He has led the development of AI-driven systems that leverage autonomous agents, large language models, and predictive analytics to deliver real-time insights and decision intelligence. His blend of AI innovation, architectural foresight, and hands-on technical leadership enables the creation of intelligent platforms that power automation, optimisation and data-driven excellence.",
    },
  ];

  const developmentTeam = [
    {
      name: "Bibhudutta Das",
      role: "Principal Software Architect",
      image: Bibhu,
      bio: "Full-stack technologist specializing in building and scaling production systems for enterprises and high-growth startups. He drives architecture, delivery, and reliability from concept to deployment.",
    },
    {
      name: "Abhijit Radke",
      role: "Software Developer",
      image: Abhijit,
      bio: "Software developer focused on building scalable and maintainable web applications. He translates complex requirements into clean, reliable code with strong attention to quality.",
    },
    {
      name: "Amit Mazumdar",
      role: "Software Developer",
      image: Amit,
      bio: "Software developer with strong backend and application performance expertise. He builds secure, efficient systems using modern engineering practices and clean code principles.",
    },
    {
      name: "Bhawna Mishra",
      role: "Manager– Business Development & Strategy",
      image: Bhawna,
      bio: "Business development and strategy leader focused on growth, partnerships, and market expansion. She aligns client needs with technology solutions to drive sustainable business outcomes.",
    },
  ];

  const operationTeam = [
    {
      name: "Chiranjeev Bindhani",
      role: "Senior Operation Manager",
      image: Chiranjiv,
      bio: "Senior operations leader managing large-scale execution and field delivery. He drives process efficiency, service quality, and reliable outcomes across client engagements.",
    },
    {
      name: "Biplab Kumar Naik",
      role: "Operations Manager",
      image: Biplab,
      bio: "Operations manager overseeing workflows, resource planning, and on-ground execution. He ensures projects are delivered efficiently while maintaining high quality and performance standards.",
    },
    {
      name: "Debashish Sahoo",
      role: "Field Executive",
      image: Debashis,
      bio: "Field executive focused on smooth on-site execution and timely delivery. He supports deployments with a strong commitment to client satisfaction and operational discipline.",
    },
    {
      name: "P Nayan Kumar Dora",
      role: "Field Executive",
      image: Nayan,
      bio: "Field executive supporting implementation, service continuity, and client support on site. He ensures tasks are completed on schedule with close attention to quality.",
    },
  ];

  const whyChooseUsPoints = [
    {
      title: "Commitment to Excellence",
      description:
        "Choosing Flying Chital over others in the digital transformation and innovation landscape is a decision grounded in our unwavering commitment to excellence and the distinct value we bring to the table. We understand that the digital terrain is constantly evolving, and that's why we stand out. Our deep-rooted expertise in digital transformation, automation of enterprise workflows, edge computing, mobility, and managed IT services is second to none.",
    },
    {
      title: "Solutions Customized to Your SOPs",
      description:
        "We don't offer a one-size-fits-all approach; we craft customized strategies that empower businesses to thrive in the digital age. Businesses don't change their standard operational procedures to adopt our solution. Instead, we customize and improvise our solutions so established, time-tested SOPs remain intact.",
    },
    {
      title: "Proven Track Record",
      description:
        "With a proven track record of delivering results, we provide not just technology, but a comprehensive partnership in achieving your goals. Our dedication to staying on the cutting edge ensures that clients stay ahead through increased efficiency, enhanced productivity, and future-proofed operations.",
    },
  ];

  const visionMissionValues = [
    {
      title: "Vision",
      description:
        "Flying Chital Private Limited envisions building a future-ready enterprise where Artificial Intelligence and Data Analytics form the strategic core of every solution we create, transforming complex challenges into intelligent, market-ready products and platforms.",
      icon: Eye,
      link: "/vision",
      accent: "from-indigo-100 to-indigo-50",
    },
    {
      title: "Mission",
      description:
        "Flying Chital Private Limited is committed to designing and delivering intelligent, scalable, and commercially viable technology solutions powered by Artificial Intelligence and Data Analytics. Our mission is to transform data into actionable insight and build market-ready products.",
      icon: Goal,
      link: "/mission",
      accent: "from-orange-100 to-orange-50",
    },
    {
      title: "Values",
      description:
        "At Flying Chital Private Limited, our foundation rests on unwavering ethics, strong corporate governance, and absolute integrity in every decision we make. We foster a culture of transparency, accountability, and responsible leadership.",
      icon: Heart,
      link: "/values",
      accent: "from-indigo-100 to-orange-50",
    },
  ];

  return (
    <div>
      {/* Section-1 About us */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${aboutusbluebg})`,
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
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
         
          </div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              About us
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              We provide Smart and Intelligent Solutions to Simplify Your Future
            </p>

            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div classNAme="justify ">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                    Home
                  </span>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / About Us
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section- Who We are*/}
      {/* <section className="text-gray-600 body-font mt-40">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div
            className=" flex relative items-start lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-lg "
            style={{ marginTop: "-120px" }}
          >
            <img
              className="object-cover object-center absolute ml-56 bottom-48"
              alt="hero"
              src={Who1}
            />
            <img
              className="object-cover object-center  rounded-bl-lg"
              alt="hero"
              src={Who2}
            />
          </div>
          <div
            ref={whoRef}
            className=" relative bottom-28 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16  flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className=" font-heebo text-[40px] text-primary">
                <span className="border-b-2 border-secondary">Wh</span>o&nbsp;
              </span>
              we are
            </h1>
            <p className="text-xl not-italic font-normal leading-7 mb-8 text-justify font-heebo w-5/6">
              Welcome to Flying Chital, a pioneering force in the
              realm of digital transformation and innovation. With a dedicated
              focus on revolutionizing businesses, we specialize in the seamless
              automation of enterprise workflows, leveraging cutting-edge
              technologies to enhance efficiency and productivity. Our expertise
              extends to the realm of edge computing and mobility, enabling
              businesses to harness the power of real-time data processing at
              the edge. <br />
              <br />
              Moreover, our comprehensive suite of managed IT services empowers
              organizations to streamline their operations and drive sustainable
              growth in an ever-evolving digital landscape. At Flying Chital
              Tech Private Limited, we are committed to propelling businesses
              towards a future of unparalleled technological advancement and
              operational excellence.
            </p>
          </div>
        </div>
      </section> */}

      {/* /test */}
      <section
        ref={whoRef}
        className="relative overflow-hidden text-gray-700 body-font mt-20"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100/60 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-orange-100/50 blur-3xl"></div>

        <div className="container mx-auto px-5 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white shadow-xl p-4 sm:p-5">
                <img
                  className="w-full h-auto object-cover object-center rounded-2xl"
                  alt="Who We Are"
                  src={Who2}
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-indigo-100 bg-white/90 backdrop-blur-sm shadow-lg p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-indigo-50 text-primary border border-indigo-100 font-semibold text-sm font-heebo">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  About Flying Chital
                </div>

                <h1 className="font-heebo text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-gray-900">
                  <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                    Who We Are
                  </span>
                </h1>

                <p className="text-base sm:text-lg font-normal leading-relaxed font-heebo text-gray-700">
                  Welcome to Flying Chital, a pioneering force in the realm of
                  digital transformation and innovation. With a dedicated focus
                  on revolutionizing businesses, we specialize in the seamless
                  automation of enterprise workflows, leveraging cutting-edge
                  technologies to enhance efficiency and productivity. Our
                  expertise extends to the realm of edge computing and mobility,
                  enabling businesses to harness the power of real-time data
                  processing at the edge.
                </p>

                <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed font-heebo text-gray-700">
                  Moreover, our comprehensive suite of managed IT services
                  empowers organizations to streamline their operations and
                  drive sustainable growth in an ever-evolving digital
                  landscape. At Flying Chital Tech Private Limited, we are
                  committed to propelling businesses towards a future of
                  unparalleled technological advancement and operational
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /test */}

      {/* Section-why Choose you */}

      <section
        ref={whyRef}
        className="relative overflow-hidden text-gray-700 body-font mt-12 rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-br from-slate-50 via-white to-orange-50"
      >
        <div className="absolute -top-20 -right-16 w-60 h-60 rounded-full bg-indigo-100/60 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-orange-100/50 blur-3xl"></div>

        <div className="container mx-auto px-5 py-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-primary font-semibold text-sm font-heebo">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Our Value Proposition
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heebo text-gray-900">
              Why Choose
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                {" "}
                Us
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-heebo leading-relaxed">
              We combine domain expertise, intelligent technology, and practical
              execution to deliver solutions that adapt to your business and
              create lasting operational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[32px] overflow-hidden shadow-lg border border-gray-200 bg-white p-2 translate-y-6">
                  <img
                    id="AboutImage1"
                    className="w-full h-full object-cover object-center rounded-[24px]"
                    alt="Why Choose Us"
                    src={AboutImage2}
                  />
                </div>
                <div className="rounded-[32px] overflow-hidden shadow-lg border border-gray-200 bg-white p-2 -translate-y-4">
                  <img
                    id="whychooseusimg"
                    className="w-full h-full object-cover object-center rounded-[24px]"
                    alt="Flying Chital team"
                    src={AboutImage1}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              {whyChooseUsPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-100 to-orange-100 flex items-center justify-center text-primary font-bold">
                      •
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl text-primary font-bold leading-8 mb-2 font-heebo">
                        {point.title}
                      </h2>
                      <p className="text-base sm:text-lg font-heebo font-normal leading-relaxed text-gray-700">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission , Vision, Values */}

      <section
        ref={missionRef}
        className="relative overflow-hidden text-gray-700 body-font bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-tl-[50px] rounded-br-[50px] mt-10"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100/60 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-orange-100/50 blur-3xl"></div>

        <div className="container px-5 py-14 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-primary font-semibold text-sm font-heebo">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Our Guiding Principles
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heebo text-gray-900">
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                Vision, Mission
              </span>{" "}
              & Values
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-heebo leading-relaxed">
              The principles that shape how we build products, lead with
              purpose, and deliver long-term value through intelligent
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {visionMissionValues.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-br ${item.accent} p-6 border-b border-gray-100`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                    <img
                      className="w-8 h-8 object-contain"
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <h2 className="text-2xl sm:text-[28px] text-[#30343F] font-[700] font-heebo mb-1">
                    {item.title}
                  </h2>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <p className="text-base sm:text-lg font-normal leading-relaxed font-heebo text-gray-700 flex-grow">
                    {item.description}
                  </p>

                  <Link to={item.link} className="mt-6 inline-flex">
                    <span className="inline-flex items-center text-white font-bold bg-gradient-to-r from-orange-500 to-orange-600 border-0 py-2.5 px-6 hover:from-primary hover:to-indigo-600 rounded-full text-sm font-heebo transition-all duration-300 shadow-md hover:shadow-lg">
                      READ MORE
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LeaderShip */}
      <TeamSection
        sectionRef={leadersRef}
        badge="Leadership Core"
        title="Leadership"
        subtitle="Meet the leadership team shaping strategy, innovation, and long-term growth at Flying Chital."
        members={leadershipTeam}
        showBio
        variant="rows"
        sectionClassName="mt-20 rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-br from-slate-50 via-white to-indigo-50"
      />

      <TeamSection
        badge="Engineering Excellence"
        title="Development Team"
        subtitle="Our builders and architects delivering scalable, intelligent software products."
        members={developmentTeam}
        showBio
      />

      <TeamSection
        badge="Execution Engine"
        title="Operation Team"
        subtitle="The operational experts ensuring reliability, speed, and high-quality on-ground delivery."
        members={operationTeam}
        showBio
      />

      <section
        ref={customersRef}
        className="relative overflow-hidden text-gray-700 body-font bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-tl-[50px] rounded-br-[50px] mt-8"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-200/25 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-200/25 blur-3xl"></div>

        <div className="container px-5 py-14 mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-primary font-semibold text-sm font-heebo">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Trusted Enterprise Deployments
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heebo text-gray-900">
              We Are Experienced
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                {" "}
                In Deployments
              </span>{" "}
              At
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 font-heebo leading-relaxed">
              Our solutions are deployed across leading industrial and
              enterprise organizations with consistent delivery quality,
              reliability, and measurable business outcomes.
            </p>
          </div>

          <div className="flex flex-wrap -m-3">
            {deploymentClients.map((client) => (
              <div key={client.name} className="w-1/2 md:w-1/3 lg:w-1/4 p-3">
                <div className="group h-40 rounded-2xl border border-gray-200/80 bg-white/95 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-5 py-4 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 w-auto object-contain grayscale-[8%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
