/* eslint-disable no-unused-vars */
import React from "react";
import flogo from "../../assets/images/flogo.png";
import footerImage from "../../assets/images/footer.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-gray-600 body-font bg-[#1d2939]"
        style={{
          background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.2), rgb(96 1 72 / 98%)),url('${footerImage}')`,
          backgroundSize: "6px, auto, cover",
        }}
      >
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">
                <img src={flogo} alt />
              </span>
            </a>
            {/* <p className="mt-2  text-white text-[14px]  font-normal leading-5 ml-5">
              Unlock your digital{" "}
              <span className="text-secondary text-[14px] not-italic font-normal leading-5">
                transformation <br /> & innovation
              </span>{" "}
              potential.
            </p> */}
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
                Industries
              </h2>
              <nav className="list-none mb-10">
                {/* <li>
                  <a className="text-gray-200 hover:text-gray-400">
                    Transportation & Logistics
                  </a>
                </li> */}
                <Link
                  to="/industry?page=transport"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Transportation & Logistics</li>
                </Link>

                <Link
                  to="/industry?page=mining"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Mining</li>
                </Link>

                <Link
                  to="/industry?page=metals"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Ore Processing and Metals</li>
                </Link>

                <Link
                  to="/industry?page=cement"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Cement</li>
                </Link>

                <Link
                  to="/industry?page=fertiliser"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Fertilisers</li>
                </Link>

                <Link
                  to="/industry?page=oil"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Oil & Gas</li>
                </Link>

                <Link
                  to="/industry?page=warehousing"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Warehousing</li>
                </Link>

                <Link
                  to="/industry?page=agriculture"
                  
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Agriculture</li>
                </Link>

                <Link
                  to="/aquacultureAutomation"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Aquaculture</li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-10">
              <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
                Product & Solutions
              </h2>
              <nav className="list-none mb-10">
                <Link
                  to="/flyingchital"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Flying Chital ILMS</li>
                </Link>

                <Link
                  to="/flyingChitalVehicle"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Flying Chital Smart VTS</li>
                </Link>

                <Link
                  to="/flyingChitalFleet"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Flying Chital Smart FMS</li>
                </Link>

                <Link to="/Asset" className="text-gray-200 hover:text-gray-400">
                  <li>Flying Chital HEM/HMV/LMV MS</li>
                </Link>

                <Link
                  to="/agricultureAutomation"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li> Agriculture Automation Solution</li>
                </Link>

                <Link
                  to="/aquacultureAutomation"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Aquaculture</li>
                </Link>

                <Link
                  to="/professional"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Professional Mobile Radio (TETRA PMR)</li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-20">
              <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-200 hover:text-gray-400"
                  >
                    About Us
                  </Link>
                  {/* <a className="text-gray-200 hover:text-gray-400">About Us</a> */}
                </li>
                <Link
                  to="/about?page=leaders"
                  className="text-gray-200 hover:text-gray-400"
                >
                  <li>Leadership</li>
                </Link>

                {/* <li>

                  <a className="text-gray-200 hover:text-gray-400">Customers</a>
                </li> */}

                <Link to="/about?page=customers">
                  <li>
                    <a className="text-gray-200 hover:text-gray-400">
                      Customers
                    </a>
                  </li>
                </Link>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-200 hover:text-gray-400"
                  >
                    Blog
                  </Link>
                  {/* <a className="text-gray-200 hover:text-gray-400">Blog</a> */}
                </li>
                <li>
                  <a className="text-gray-200 hover:text-gray-400">
                    Market Updates
                  </a>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-gray-200 hover:text-gray-400"
                  >
                    Help Centre
                  </Link>

                  {/* <a className="text-gray-200 hover:text-gray-400">
                    Help Centre
                  </a> */}
                </li>

                {/* <li>
                  <a className="text-gray-200 hover:text-gray-400">Careers</a>
                </li> */}
                <Link to="/career">
                  <li>
                    <a className="text-gray-200 hover:text-gray-400">Careers</a>
                  </li>
                </Link>

                <li>
                  <Link
                    to="/help"
                    className="text-gray-200 hover:text-gray-400"
                  >
                    Contact us
                  </Link>
                  {/* <a className="text-gray-200 hover:text-gray-400">
                    Contact us
                  </a> */}
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div> */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 ATULYA ABHINAV TECH PVT. LTD.
              {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
