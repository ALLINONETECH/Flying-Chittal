import React from "react";
import HomeIcon from "../../assets/images/HomeIcon.png";
import IconFC from "../../assets/images/IconFC.png";
import { Link } from "react-router-dom";

import traksBg from "../../assets/images/traks/Industrial_field_operation_site_e89024ec9e.jpeg";
import traksLogo from "../../assets/images/traks/Tracks Logo (Square)).png";
import fieldWorker from "../../assets/images/traks/Field_worker_tapping_checkin_app_7745895b51.jpeg";
import gpsCheckin from "../../assets/images/traks/Smartphone_gps_checkin_animation_46a24813a9.jpeg";
import nightShift from "../../assets/images/traks/Supervisor_dashboard_night_shift_d9818895db.jpeg";
import industrialSite from "../../assets/images/traks/Industrial_field_operation_site_66cf9c52a1.jpeg";
import highlight1 from "../../assets/images/traks/hf_20260129_163028_786c0689-3eb0-4fc9-a373-288ee3040c33.png";
import highlight2 from "../../assets/images/traks/hf_20260129_163210_7706eae1-9356-4c72-a269-7e42ed1bf1f5.png";
import highlight3 from "../../assets/images/traks/hf_20260130_014143_fa3b1e6e-1b4a-4227-bf77-2f0cd078b6fd.png";
import highlight4 from "../../assets/images/traks/hf_20260130_030926_c3bb045e-a591-4c63-b062-03f0db2baf2c.png";
import highlight5 from "../../assets/images/traks/hf_20260131_060818_e2819554-ff54-4e0b-983c-7ccf9f7b3ec6.png";
import conclusionImg from "../../assets/images/traks/Clean_electrostruction_animation_style_wide_169_da_cb799d3b35.jpeg";

export default function Traks() {
  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section
        className="bg-no-repeat bg-center bg-cover rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.75) 12%, rgba(55, 52, 169, 0.55) 120%), url(${traksBg})`,
        }}
      >
        <div className="container px-6 py-16 mx-auto text-start">
          <div className="mx-auto text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-gray-100">
              Traks
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start">
              Intelligent Field Force Management Suite
            </p>
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-4xl">
              An AI &amp; Data Analytics Powered Solution by Flying Chital
              Private Limited — designed to digitise, monitor, and optimise
              field sales, service, and security operations with real-time
              visibility, workforce accountability, and measurable performance.
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
                    {" "}/ Traks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center gap-10">
          <div className="lg:max-w-sm lg:w-full md:w-1/3 w-full flex flex-col items-center gap-4">
            <img
              className="object-contain rounded-2xl shadow-xl"
              alt="Traks Logo"
              src={traksLogo}
            />
            <div className="w-full px-3 py-4 bg-[#EAEFF3] rounded-lg">
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-primary bg-[#dce0ee] mb-3">
                Real-Time Attendance
              </div>
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-secondary bg-[#ece3e6] mb-3">
                Geo-Spatial Control
              </div>
              <div className="flex px-3 py-5 justify-center items-start rounded-xl font-heebo text-lg font-medium text-black bg-[#dddde6]">
                Workforce Cost Management
              </div>
            </div>
          </div>

          <div className="lg:flex-grow md:w-2/3 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl font-bold text-primary font-heebo mb-2">
              AI-Powered Field Force Intelligence
            </h1>
            <div className="my-2 rounded-md p-3 bg-slate-100">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl font-heebo">
                Traks is a comprehensive Field Force Management Software Suite
                that digitises, monitors, and optimises field sales, service,
                and security operations. With real-time visibility and workforce
                accountability, it delivers measurable performance gains across
                every operational layer.
              </p>
            </div>
            <h1 className="text-2xl font-bold text-primary font-heebo my-2">
              Single Platform. Total Control.
            </h1>
            <div className="bg-orange-50 my-2 rounded-md p-3">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl">
                From geo-fenced attendance to automated payroll computation,
                Traks unifies every aspect of workforce management on one
                secure, scalable digital platform — accessible anytime, on any
                device, from any location.
              </p>
            </div>
            <h1 className="text-2xl font-bold text-primary font-heebo my-2">
              Smarter Supervision. Measurable ROI.
            </h1>
            <div className="my-2 rounded-md p-3 bg-zinc-100">
              <p className="not-italic font-normal leading-7 text-[#30343F] text-xl">
                Traks helps organisations reduce operational costs, prevent
                financial leakages, enhance workforce productivity, and achieve
                sustainable, data-driven growth through automated compliance,
                accurate payroll, and real-time dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Grid ── */}
      <section className="text-gray-600 body-font rounded-tl-[50px] rounded-br-[50px] bg-gray-100">
        <div className="container md:px-16 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[highlight1, highlight2, highlight3, highlight4, highlight5].map(
              (img, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="border border-gray-200 rounded-tr-[60px] rounded-bl-[40px] shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img
                      className="w-full h-56 object-cover"
                      src={img}
                      alt={`Traks highlight ${i + 1}`}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Section 1: Attendance ── */}
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center gap-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              alt="Field worker checking in"
              src={fieldWorker}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">Real-Time Attendance</span>{" "}
              <span className="font-heebo">with Location Intelligence</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Real-time attendance with GPS validation",
                "Live headcount at every operational site",
                "Accurate working hours tracking with automated computation",
                "Flexible, policy-driven custom leave management",
                "Instant absentee notifications to supervisors",
                "Geo-fence enabled check-in / check-out with Lat, Long, Date & Time stamps",
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

      {/* ── Section 2: Location Tracking ── */}
      <section className="text-gray-600 body-font mt-4 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-12 gap-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">Real-Time Location Tracking</span>{" "}
              <span className="font-heebo">&amp; Geo-Spatial Control</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Continuous real-time location monitoring of all personnel",
                "Up to 95% accurate distance calculation across field routes",
                "Geo-fence creation with automated compliance and safety alerts",
                "Live headcount within each geo-fenced operational zone",
                "Entry and exit alerts with instant notifications",
                "Enhanced operational visibility for supervisors and command centres",
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              alt="GPS check-in animation"
              src={gpsCheckin}
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Alertness Monitoring ── */}
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center gap-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              alt="Supervisor dashboard night shift"
              src={nightShift}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">System-Managed Efficiency</span>{" "}
              <span className="font-heebo">&amp; Alertness Monitoring</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Ensures all scheduled positions are visited as planned",
                "Patrol monitoring to track skipped or delayed checkpoints",
                "Static guard monitoring to confirm alertness at assigned posts",
                "Night shift oversight to reduce fatigue-related lapses",
                "Exception alerts for inactivity or missed patrols",
                "Promotes discipline, accountability, and performance benchmarking",
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

      {/* ── Section 4: Financial Control ── */}
      <section className="text-gray-600 body-font mt-4 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-12 gap-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-1">
              <span className="text-primary font-heebo">Financial Control</span>{" "}
              <span className="font-heebo">&amp; Workforce Cost Management</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <div className="flex flex-col mt-2 space-y-3">
              {[
                "Track and maintain detailed records of employee business expenses",
                "Digital submission, approval workflows, and expense analytics",
                "Automated salary and wage calculation based on actual attendance and working hours",
                "System-driven computation of statutory contributions including ESIC, EPFO, and other compliances",
                "Accurate payroll data generation to reduce errors and prevent revenue leakage",
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              alt="Industrial field operation site"
              src={industrialSite}
            />
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="text-gray-600 body-font mt-10 pb-10 container">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mt-5 text-start ml-12">
            <span className="text-primary">Highlights</span>
          </h1>
          <div className="flex text-start ml-12">
            <div className="w-16 h-1 mt-2 rounded-full bg-orange-400 inline-flex"></div>
          </div>
          <div className="mx-auto flex flex-col lg:flex-row py-10">
            <div className="lg:w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left ml-12">
              {[
                { title: "Field Digitisation", sub: "Eliminate paper-based processes end-to-end" },
                { title: "GPS Geo-Fencing", sub: "Automated check-in, check-out with location stamps" },
                { title: "Mobile + Web Access", sub: "Anytime, anywhere, any device" },
                { title: "Patrol & Guard Monitoring", sub: "Night shift and static post alertness tracking" },
                { title: "AI Analytics", sub: "Real-time dashboards and custom reports" },
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
            <div className="lg:w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left ml-12">
              {[
                { title: "Expense Management", sub: "Digital submission and approval workflows" },
                { title: "Automated Payroll", sub: "Salary, ESIC, EPFO and statutory computations" },
                { title: "Live Headcount", sub: "Per site and per geo-fenced zone" },
                { title: "Exception Alerts", sub: "Inactivity, missed patrols, absentee notifications" },
                { title: "Scalable Platform", sub: "Secure, cloud-based, enterprise-grade" },
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
      <section className="text-gray-600 body-font mt-4 rounded-tl-[50px] rounded-br-[50px] bg-gray-100 pb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-12 gap-10">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-6 md:mb-0 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
            <img
              className="object-cover object-center w-full"
              alt="Traks platform"
              src={conclusionImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-start text-start">
            <h1 className="sm:text-3xl text-2xl font-bold mb-1">
              <span className="text-primary font-heebo">Smarter Supervision.</span>{" "}
              <span className="font-heebo">Stronger Compliance. Measurable ROI.</span>
            </h1>
            <div className="w-16 h-1 mb-6 rounded-full bg-orange-400 inline-flex"></div>
            <p className="text-lg not-italic font-normal leading-7 text-[#30343F] font-heebo">
              With integrated AI analytics, automated compliance, payroll
              accuracy, and real-time dashboards, Traks helps organisations
              reduce operational costs, prevent financial leakages, enhance
              workforce productivity, and achieve sustainable, data-driven growth
              through a secure and scalable platform.
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
