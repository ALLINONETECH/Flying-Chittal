import React from "react";
import Blog1 from "../../assets/images/Blog1.png";
import FCFleet from "../../assets/images/FCFleet.png";
import FleetContent from "../../assets/images/FleetContent.png";
import vehiclefleetbg from "../../assets/images/vehiclefleetbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import home1 from "../../assets/images/home1.jpg";

export default function FlyingChitalFleet() {
  return (
    <div>
      {/* Section-1 Industry */}

      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${vehiclefleetbg})`,
        }}
      >
        <div className="container px-4 lg:px-6 py-10 lg:py-16 mx-auto text-start">
          <div className="mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-gray-100 dark:text-white ">
              Flying Chital Smart Fleet Monitoring
              <br /> System
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              We provide Smart Solutions to Simplify Your Future
            </p>

            <div className="text-xl lg:text-2xl not-italic font-normal  text-white bg-opacity-80 mt-4 lg:mt-6 ">
              <div className="flex lg:flex-row  gap-2">
                <div>
                  <span>
                    <img className="" src={HomeIcon} alt="" />
                  </span>
                </div>
                <div className="justify">
                  {" "}
                  <span className="text-[#F85A47] font-[700] font-heebo text-[18px] lg:text-[32px]">
                    {" "}
                    Home
                  </span>
                  <span className="font-[700] font-heebo text-[18px] lg:text-[32px]">
                    {" "}
                    / Flying Chital Smart Fleet Monitoring System
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2- Flying Chital Smart Vehicle  */}
      {/* <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex flex-col-reverse px-5 py-12 md:flex-row items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={FCFleet}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
              <span className=" font-heebo text-[40px] text-primary">
                Flying&nbsp;
              </span>
              Chital Smart Fleet
              <br />
              Management System <br /> (
              <span className="border-b-2 border-secondary">FC</span>SFMS)
            </h1>
            <p className="text-xl not-italic font-normal leading-7 mb-8 text-justify  w-4/5">
              FCSFMS is a pivotal tool for enhancing logistics and
              transportation operations. It boasts numerous advantages that
              cater to the evolving needs of the industry. The Smart Fleet
              Management System is a game-changer for businesses seeking to stay
              competitive and responsive in the ever-evolving transportation
              landscape.
            </p>
          </div>
        </div>
      </section> */}

      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
            <img
              className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
              alt="hero"
              src={FCFleet}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="sm:text-xl text-2xl font-medium title-font text-gray-900 ">
              <span className=" text-indigo-800 font-bold text-[40px] ">
                Flying&nbsp;
              </span>
              <span className=" text-[40px] font-heebo mb-4  font-bold ">
                Chital Smart Fleet <br />
                Management System <br /> (FCSFMS)
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="mb-8 text-justify text-[20px] font-[400] font-heebo leading-[28px] text-[#30343F]  w-4/5">
              FCSFMS is a pivotal tool for enhancing logistics and
              transportation operations. It boasts numerous advantages that
              cater to the evolving needs of the industry. The Smart Fleet
              Management System is a game-changer for businesses seeking to stay
              competitive and responsive in the ever-evolving transportation
              landscape.
            </p>
          </div>
        </div>
      </section>

      <div
        className="flex items-center justify-center bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), url(${home1}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="w-full md:w-4/5 text-start mt-20 text-white grid content-end px-4">
          <h1 className="font-heebo text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Highlights
          </h1>
          <p className="font-heebo text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-justify">
            First and foremost, it empowers businesses to create effective and
            efficient shipping plans, a crucial aspect of streamlined operations
          </p>
          <p className="font-heebo text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-justify">
            The system provides end-to-end visibility of the entire fleet of
            vehicles, enabling better monitoring and control, which is essential
            for safeguarding the integrity and security of cargo.
          </p>
          <p className="font-heebo text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-justify">
            This advanced application goes beyond conventional fleet management
            by offering innovative services related to various modes of
            transport and traffic management, providing users with real-time
            inputs to make informed decisions. By doing so, it ensures the
            optimization of vehicle utility, enhances efficiency, and promotes
            the safety of cargo movement.
          </p>
          <p className="font-heebo text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-justify">
            Importantly, it shifts the paradigm from reactive corrective action
            to proactive preventive action, preventing issues before they
            escalate.
          </p>
          <p className="font-heebo text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-justify mb-12">
            With the ability to manage all transportation activities throughout
            the supply chain, this system combines user-friendliness with
            industry-leading capabilities, resulting in more efficient logistics
            operations, reduced freight costs, and optimized service levels.
          </p>
        </div>
      </div>
    </div>
  );
}
