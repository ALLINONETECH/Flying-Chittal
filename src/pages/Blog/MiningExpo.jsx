import React from "react";
import BlogMining from "../../assets/images/BlogMining.png";
import MiningExpoCollage from "../../assets/images/MiningExpoCollage.jpg";

import HomeIcon from "../../assets/images/HomeIcon.png";

export default function MiningExpo() {
  return (
    <div>
      {/* {/ Section-1 /} */}
      <section
        className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${BlogMining})`,
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
          {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                    </div> */}
        </nav>
        <div className="container px-6 py-16 mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-4.5xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Atulya Abhinav Tech Private Limited's Impactful Presence at the
              2nd Odisha Mining & Infrastructure International Expo 2024
            </h1>
            <p className=" text-xl md:text-xl lg:text-2xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Challenge, Ideate & Create
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div classNAme="justify">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo text-[20px] ">
                    Home
                  </span>
                  <span className="font-[700] font-heebo text-[20px] ">
                    {" "}
                    / Blogs
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-tr-[50px]  overflow-hidden shadow-lg md:shadow-xl">
                <img
                  className="object-cover object-center rounded-bl-[50px]"
                  src={MiningExpoCollage}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="text-[20px] font-[700] font-heebo leading-[38px] text-[#30343F] mb-3">
                    Introduction:
                  </h1>
                  <div className="flex">
                    <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                      At 2nd Odisha Mining & Infrastructure International Expo
                      2024, stood Atulya Abhinav Tech Private Limited (AATPL), a
                      beacon of innovation and digital transformation. With a
                      strategic focus on revolutionizing businesses and
                      pioneering technological advancements, AATPL's
                      participation at the expo marked a significant milestone
                      in the realm of industrial innovation.
                    </p>
                  </div>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    AATPL: A Vanguard of Digital Transformation:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    AATPL's journey embodies a relentless pursuit of excellence
                    in the digital landscape. Specializing in the seamless
                    automation of enterprise workflows, the company leverages
                    cutting-edge technologies such as cloud computing, IoT, data
                    analytics, and artificial intelligence to enhance
                    operational efficiency and drive sustainable growth. Its
                    comprehensive suite of managed IT services empowers
                    organizations to navigate the complexities of the digital
                    age with ease.
                  </p>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Vision, Mission, and Values:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Guided by a visionary outlook, AATPL's vision is to empower
                    individuals in remote and underserved areas with accessible
                    and cutting-edge technology solutions. At the core of its
                    mission lies the commitment to pioneer innovation in supply
                    chain and logistics operations, catalyzing industrial
                    processes across diverse landscapes. Upheld by values of
                    integrity, excellence, and collaboration, AATPL sets the
                    benchmark for ethical business conduct and transformative
                    innovation.
                  </p>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Leadership:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The leadership ensemble at AATPL comprises distinguished
                    professionals, each bringing a wealth of experience and
                    expertise to the table. From Pradyumna Mishra's strategic
                    acumen to Amar Pradeep Swain's visionary leadership, the
                    team embodies the essence of innovation and operational
                    excellence. Debashis Mohanty's entrepreneurial spirit and
                    Sitanshu Jena's technical prowess further fortify AATPL's
                    position as a trailblazer in the tech industry.
                  </p>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    AATPL's Expo Showcase:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    At the 2nd Odisha Mining & Infrastructure International
                    Expo, AATPL shone bright with its groundbreaking offering:
                    the Flying Chital platform. This innovative solution marks a
                    significant leap forward in logistics management by
                    seamlessly integrating advanced technologies to enhance
                    supply chain operations across various industries. With its
                    blend of cutting-edge analytics, real-time data processing,
                    and end-to-end visibility, Flying Chital is revolutionizing
                    the logistics landscape, delivering unmatched efficiency and
                    flexibility.
                  </p>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The foundation of AATPL's success lies in its dedication to
                    innovation and operational excellence. By harnessing the
                    capabilities of cloud computing, IoT, and artificial
                    intelligence, AATPL has developed a solution that transcends
                    traditional logistics practices. Flying Chital equips
                    logistics managers with crucial decision-making information
                    on the go, enabling quick and informed actions in dynamic
                    operational settings.
                  </p>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Exploring Opportunities and Strengths:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    The Odisha Mining & Infrastructure International Expo
                    provided a strategic platform for AATPL to showcase the
                    transformative potential of the Flying Chital platform. As
                    industry congregated at the expo, AATPL seized the
                    opportunity to foster collaborations and discussions, paving
                    the way for future partnerships and innovations. The expo
                    served as an ideal stage for AATPL to underscore the
                    strength of its tech solutions, particularly the
                    groundbreaking features of Flying Chital. Through live demos
                    and interactive sessions, AATPL illustrated how Flying
                    Chital empowers logistics managers with actionable insights
                    and operational intelligence. The platform's seamless
                    integration with regulatory portals further enhances its
                    value proposition, ensuring compliance and adherence to
                    regulations in complex operational environments. Flying
                    Chital's emergence as a disruptive force in Logistics 4.0
                    was evident at the expo, as industry stakeholders were
                    captivated by its potential to transform supply chain
                    dynamics. From optimized route planning to advanced asset
                    tracking, Flying Chital promises to reshape the logistics
                    landscape, driving efficiency, transparency, and
                    sustainability across the value chain. As AATPL navigates
                    the evolving digital landscape, the expo reaffirms its
                    unwavering commitment to innovation and customer-centricity.
                    By leveraging technology as a catalyst for progress, AATPL
                    is poised to shape the future of logistics management,
                    driving operational excellence and value creation for its
                    partners and stakeholders. By showcasing the revolutionary
                    Flying Chital platform at the 2nd Odisha Mining &
                    Infrastructure International Expo, AATPL has not only made a
                    lasting impression but also laid a solid foundation for
                    future growth and success in the dynamic world of logistics.
                  </p>
                  <h3 className="text-[20px] font-[700] font-heebo leading-[28px] text-[#30343F] mb-3">
                    Conclusion:
                  </h3>
                  <p className="text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F] mb-3">
                    AATPL's participation at the 2nd Odisha Mining &
                    Infrastructure International Expo 2024 epitomizes its
                    unwavering commitment to innovation and excellence. As the
                    company continues to redefine industry standards and push
                    the boundaries of technological advancement, it remains
                    steadfast in its mission to empower businesses and
                    communities with transformative technology solutions. With
                    Flying Chital leading the charge, AATPL charts a course
                    towards a future of unparalleled efficiency, productivity,
                    and sustainable growth in the digital age.
                  </p>
                  {/* Continue with the rest of the content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
        {/* Previous content */}
        {/* New section for YouTube videos */}
        <div className="container px-5 py-10 mx-auto pb-16 md:h-40">
          {" "}
          {/* Added pb-16 for large padding */}
          <h2 className="text-2xl font-bold mb-4">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/W8Rdo3vi-Z4"
                title="YouTube Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ta4QepLSgSI"
                title="YouTube Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
