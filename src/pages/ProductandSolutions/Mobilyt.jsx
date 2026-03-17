import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/images/HomeIcon.png";
export default function Mobilyt() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary/90 to-primary rounded-br-[80px]">
        <div className="container mx-auto px-6 py-14 text-white">
          <h1 className="text-3xl md:text-5xl font-heebo font-bold">Mobilyt</h1>
          <p className="mt-4 text-base md:text-xl max-w-5xl">
            Mobilyt is an intelligent, AI-enabled Smart Vehicle Management
            System engineered to transform fleet operations across Light Motor
            Vehicles, Heavy Motor Vehicles, Mobile Equipment and Heavy Earth
            Movers through real-time visibility, automation and data-driven
            control.
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
              <Link to="/" className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                <span className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]">
                  {" "}
                  Home
                </span>
              </Link>
              <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                {" "}
                / Mobilyt
              </span>{" "}
            </div>
          </div>
        </div>
        </div>
     
      </section>

      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-divider p-6 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              🚘 Real-Time Tracking & Control
            </h2>
            <p className="mt-2 text-body text-base md:text-lg">
              Monitor every vehicle live on an interactive map with route
              history, geo-fencing alerts, idle-time detection, and trip
              analytics. Gain complete operational visibility and ensure route
              discipline, fuel efficiency, and asset security.
            </p>
          </div>

          <div className="rounded-2xl border border-divider p-6 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              🤖 Intelligent Automation & Monitoring
            </h2>
            <p className="mt-2 text-body text-base md:text-lg">
              Mobilyt leverages AI-powered analytics and smart sensors to
              automate attendance validation, utilisation tracking, preventive
              maintenance alerts, and performance benchmarking — reducing manual
              oversight and operational inefficiencies.
            </p>
          </div>

          <div className="rounded-2xl border border-divider p-6 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              📊 Data-Driven Decision Intelligence
            </h2>
            <p className="mt-2 text-body text-base md:text-lg">
              Transform fleet data into actionable insights with real-time
              dashboards, predictive analytics, and automated reports. Identify
              bottlenecks, optimise deployment, and enhance productivity with
              measurable KPIs.
            </p>
          </div>

          <div className="rounded-2xl border border-divider p-6 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              🏛 Governance & Enterprise Enablement
            </h2>
            <p className="mt-2 text-body text-base md:text-lg">
              Designed for scalability and security, Mobilyt enhances
              transparency, accountability, and service delivery — making it
              ideal for municipal corporations, public transport systems,
              defence establishments, and private fleet operators.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
          <h3 className="text-lg md:text-2xl font-bold text-[#30343F]">
            Driving Efficiency. Ensuring Compliance. Protecting Revenue.
          </h3>
          <p className="mt-2 text-base md:text-lg text-body">
            Mobilyt reduces operational costs, prevents fuel and resource
            leakages, improves asset utilisation, and strengthens financial
            control delivering tangible ROI while building smarter, safer and
            more accountable mobility ecosystems.
          </p>
        </div>
      </section>
    </div>
  );
}
