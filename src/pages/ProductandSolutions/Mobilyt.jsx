import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";

import mobilytBg from "../../assets/images/Mobilyt/Smart_city_highway_with_vehicles_ea81c9f835.jpeg";
import mobilytLogo from "../../assets/images/Mobilyt/Mobilyt Logo.png";
import gpsVehicles from "../../assets/images/Mobilyt/Vehicles_moving_with_gps_pins_288f0e22fc.jpeg";
import aiBrain from "../../assets/images/Mobilyt/Ai_brain_connected_to_fleet_f1b7e45b07.jpeg";
import dashboard from "../../assets/images/Mobilyt/An_elegant_floating_dashboard_hologram_above_a_dar_816984ee38.jpeg";
import enterprise from "../../assets/images/Mobilyt/A_secure_enterprise_network_visualization_a_large__a70d3f3383.jpeg";
import highlight1 from "../../assets/images/Mobilyt/hf_20260211_134606_9e015697-7408-40d3-abf8-ac9fcb82242e.png";
import highlight2 from "../../assets/images/Mobilyt/hf_20260211_174023_27a98aef-62cb-468d-b707-8027fe545939.jpeg";
import highlight3 from "../../assets/images/Mobilyt/hf_20260211_174259_3c331f70-afd2-4647-8433-6cee5b9db258.jpeg";
import highlight4 from "../../assets/images/Mobilyt/hf_20260211_183645_ca0869ab-e197-424b-a355-f810caa48f8b.jpeg";
import highlight5 from "../../assets/images/Mobilyt/hf_20260211_184106_36b76779-78bd-44c8-a670-89b6ac02eaff.jpeg";
import conclusionImg from "../../assets/images/Mobilyt/A_powerful_cinematic_photorealistic_render_of_a_fl_delpmaspu.png";

export default function Mobilyt() {
  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[40px] md:rounded-br-[70px] lg:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.75) 12%, rgba(55, 52, 169, 0.55) 120%), url(${mobilytBg})`,
        }}
      >
        <div className="container px-4 sm:px-6 py-10 sm:py-14 lg:py-24 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-gray-100">
              Mobilyt
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start">
              Intelligent Smart and Intelligent Vehicle Management System
            </p>
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
              An AI-enabled platform engineered to transform fleet operations
              across Light Motor Vehicles, Heavy Motor Vehicles, Mobile
              Equipment and Heavy Earth Movers — through real-time visibility,
              automation, and data-driven control.
            </p>
            <div className="text-xl lg:text-2xl not-italic font-normal text-white bg-opacity-80 mt-4 lg:mt-6">
              <div className="flex lg:flex-row gap-2">
                <div>
                  <span>
                    <img src={HomeIcon} alt="" />
                  </span>
                </div>
                <div>
                  <Link
                    to="/"
                    className="text-[#F85A47] font-[700] font-heebo lg:text-[32px] text-[18px]"
                  >
                    Home
                  </Link>
                  <span className="font-[700] font-heebo lg:text-[32px] text-[18px]">
                    {" "}
                    / Mobilyt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row px-4 sm:px-6 py-8 md:py-14 lg:py-20 items-center gap-8 md:gap-10">
          <div className="lg:max-w-sm lg:w-full md:w-1/3 w-full flex flex-col items-center gap-4">
            <img
              className="object-contain rounded-2xl shadow-xl"
              alt="Mobilyt Logo"
              src={mobilytLogo}
            />
            <div className="w-full px-3 py-4 bg-[#EAEFF3] rounded-lg">
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-primary bg-[#dce0ee] mb-3">
                Real-Time Tracking &amp; Control
              </div>
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-secondary bg-[#ece3e6] mb-3">
                Intelligent Automation
              </div>
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-black bg-[#dddde6]">
                Enterprise Governance
              </div>
            </div>
          </div>

          <div className="w-full md:flex-1 lg:pl-14 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-primary font-heebo mb-2">
              AI-Powered Fleet Intelligence
            </h1>
            <div className="my-2 rounded-md p-3 bg-slate-100">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl font-heebo">
                Mobilyt is a fully integrated Smart and Intelligent Vehicle
                Management System that provides end-to-end visibility across
                every vehicle in your fleet. From real-time GPS tracking to
                automated maintenance alerts, it puts complete control at your
                fingertips.
              </p>
            </div>
            <h1 className="text-2xl font-bold text-primary font-heebo my-2">
              One Platform. Every Vehicle. Total Control.
            </h1>
            <div className="bg-orange-50 my-2 rounded-md p-3">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl">
                Mobilyt unifies fleet tracking, driver analytics, fuel
                management, compliance monitoring, and predictive maintenance on
                a single secure platform — accessible anytime, on any device,
                from any location.
              </p>
            </div>
            <h1 className="text-2xl font-bold text-primary font-heebo my-2">
              Smarter Fleets. Stronger ROI.
            </h1>
            <div className="my-2 rounded-md p-3 bg-zinc-100">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl">
                By automating data collection, compliance checks, and
                performance reporting, Mobilyt reduces operational costs,
                prevents fuel leakages, improves asset utilisation, and delivers
                tangible, measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Grid ── */}
      <section className="text-gray-600 body-font rounded-tl-[20px] sm:rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[40px] md:rounded-br-[50px] bg-gray-100">
        <div className="container px-4 sm:px-6 md:px-16 py-6 md:py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[highlight1, highlight2, highlight3, highlight4, highlight5].map(
              (img, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="border border-gray-200 rounded-tr-[60px] rounded-bl-[40px] shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img
                      className="w-full h-56 object-cover"
                      src={img}
                      alt={`Mobilyt highlight ${i + 1}`}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Section 1: Real-Time Tracking ── */}
      <section className="text-gray-600 body-font mt-6 md:mt-10">
        <div className="container mx-auto flex flex-col md:flex-row px-4 sm:px-6 py-8 md:py-14 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2 lg:max-w-lg rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg min-h-[220px] md:min-h-0">
            <img
              className="object-cover object-center w-full h-full"
              alt="GPS vehicle tracking"
              src={gpsVehicles}
            />
          </div>
          <div className="w-full md:flex-1 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">
                Real-Time Tracking
              </span>{" "}
              <span className="font-heebo">&amp; Control</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Live vehicle monitoring on an interactive map",
                "Complete route history, playback and deviation alerts",
                "Geo-fencing with automated entry / exit notifications",
                "Idle-time detection and trip analytics",
                "Fuel efficiency monitoring and theft alerts",
                "Enhanced asset security and route discipline",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img className="p-1 mt-1 flex-shrink-0" src={IconFC} alt="" />
                  <p className="text-lg not-italic font-medium leading-relaxed font-heebo">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Intelligent Automation ── */}
      <section className="text-gray-600 body-font mt-4 md:mt-6 rounded-tl-[20px] sm:rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[40px] md:rounded-br-[50px] bg-gray-100 pb-8 md:pb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 md:py-14 gap-6 md:gap-10">
          <div className="w-full md:flex-1 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">
                Intelligent Automation
              </span>{" "}
              <span className="font-heebo">&amp; Monitoring</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "AI-powered analytics and Smart and Intelligent sensor integration",
                "Automated attendance validation with GPS verification",
                "Vehicle utilisation tracking and performance benchmarking",
                "Preventive maintenance alerts based on real usage data",
                "Driver behaviour monitoring — harsh braking, overspeeding",
                "Reduced manual oversight and operational inefficiencies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img className="p-1 mt-1 flex-shrink-0" src={IconFC} alt="" />
                  <p className="text-lg not-italic font-medium leading-relaxed font-heebo">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:max-w-lg rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg min-h-[220px] md:min-h-0">
            <img
              className="object-cover object-center w-full h-full"
              alt="AI brain connected to fleet"
              src={aiBrain}
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Data-Driven Intelligence ── */}
      <section className="text-gray-600 body-font mt-4 md:mt-6">
        <div className="container mx-auto flex flex-col md:flex-row px-4 sm:px-6 py-8 md:py-14 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2 lg:max-w-lg rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg min-h-[220px] md:min-h-0">
            <img
              className="object-cover object-center w-full h-full"
              alt="Floating dashboard analytics"
              src={dashboard}
            />
          </div>
          <div className="w-full md:flex-1 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">Data-Driven</span>{" "}
              <span className="font-heebo">Decision Intelligence</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Real-time dashboards with live KPIs and alerts",
                "Predictive analytics to prevent breakdowns and delays",
                "Automated customisable reports for management and compliance",
                "Identify deployment bottlenecks and cost overruns instantly",
                "Optimise fleet utilisation with data-backed scheduling",
                "360° visibility from source to destination",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img className="p-1 mt-1 flex-shrink-0" src={IconFC} alt="" />
                  <p className="text-lg not-italic font-medium leading-relaxed font-heebo">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Governance & Enterprise ── */}
      <section className="text-gray-600 body-font mt-4 md:mt-6 rounded-tl-[20px] sm:rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[40px] md:rounded-br-[50px] bg-gray-100 pb-8 md:pb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 md:py-14 gap-6 md:gap-10">
          <div className="w-full md:flex-1 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">Governance</span>{" "}
              <span className="font-heebo">&amp; Enterprise Enablement</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Scalable, secure and enterprise-grade architecture",
                "Transparent accountability for municipal and public fleets",
                "Ideal for corporations, public transport and defence establishments",
                "Integration with ERP, SAP and Government Regulatory Portals",
                "Role-based access control and multi-level approvals",
                "Builds smarter, safer and more accountable mobility ecosystems",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img className="p-1 mt-1 flex-shrink-0" src={IconFC} alt="" />
                  <p className="text-lg not-italic font-medium leading-relaxed font-heebo">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:max-w-lg rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg min-h-[220px] md:min-h-0">
            <img
              className="object-cover object-center w-full h-full"
              alt="Enterprise network visualization"
              src={enterprise}
            />
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="text-gray-600 body-font mt-6 md:mt-10 pb-8 md:pb-10">
        <div className="container px-4 sm:px-6 py-6 md:py-10 mx-auto">
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mt-4 text-start ml-4 sm:ml-8 md:ml-12">
            <span className="text-primary">Highlights</span>
          </h1>
          <div className="flex text-start ml-4 sm:ml-8 md:ml-12">
            <div className="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
          </div>
          <div className="mx-auto flex flex-col lg:flex-row py-6 md:py-10">
            <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col items-start text-left ml-4 sm:ml-8 md:ml-12">
              {[
                {
                  title: "Live Fleet Tracking",
                  sub: "Interactive map with route history and playback",
                },
                {
                  title: "Geo-Fencing",
                  sub: "Automated alerts on zone entry and exit",
                },
                {
                  title: "AI Automation",
                  sub: "Smart and Intelligent sensors and predictive maintenance",
                },
                {
                  title: "Driver Analytics",
                  sub: "Behaviour monitoring and performance scoring",
                },
                {
                  title: "Fuel Management",
                  sub: "Consumption tracking and theft prevention",
                },
              ].map((item, i) => (
                <div key={i} className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo mb-0">
                    {item.title}
                    <div className="flex gap-2">
                      <span>
                        <img src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo mb-0">
                        {item.sub}
                      </p>
                    </div>
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col md:items-start md:text-left ml-4 sm:ml-8 md:ml-12 mt-2 lg:mt-0">
              {[
                {
                  title: "Real-Time Dashboards",
                  sub: "Live KPIs, exception alerts and custom reports",
                },
                {
                  title: "Preventive Maintenance",
                  sub: "Alerts based on usage, mileage and faults",
                },
                {
                  title: "ERP / SAP Integration",
                  sub: "Seamless data flow with enterprise systems",
                },
                {
                  title: "Compliance Monitoring",
                  sub: "Statutory compliance and audit-ready records",
                },
                {
                  title: "Multi-Modal Support",
                  sub: "LMV, HMV, HEM across road, rail and port",
                },
              ].map((item, i) => (
                <div key={i} className="flex mt-5">
                  <span>
                    <img className="p-1" src={IconFC} alt="" />
                  </span>
                  <p className="text-xl not-italic font-medium leading-relaxed font-heebo">
                    {item.title}
                    <div className="flex gap-2">
                      <span>
                        <img src={IconFC} alt="" />
                      </span>
                      <p className="text-xl not-italic font-normal leading-7 font-heebo">
                        {item.sub}
                      </p>
                    </div>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conclusion Banner ── */}
      <section className="text-gray-600 body-font mt-4 md:mt-6 rounded-tl-[20px] sm:rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[40px] md:rounded-br-[50px] bg-gray-100 pb-8 md:pb-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 md:py-14 gap-6 md:gap-10">
          <div className="w-full md:w-1/2 lg:max-w-xl rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full"
              alt="Mobilyt fleet platform"
              src={conclusionImg}
            />
          </div>
          <div className="w-full md:flex-1 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              <span className="text-primary font-heebo">
                Driving Efficiency.
              </span>{" "}
              <span className="font-heebo">
                Ensuring Compliance. Protecting Revenue.
              </span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="text-lg not-italic font-normal leading-7 text-[#30343F] font-heebo">
              Mobilyt reduces operational costs, prevents fuel and resource
              leakages, improves asset utilisation, and strengthens financial
              control — delivering tangible ROI while building smarter, safer
              and more accountable mobility ecosystems for every type of fleet
              operator.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-heebo font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
