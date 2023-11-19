import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Atulya from "../../assets/images/Atulya.png";
import Abhinav from "../../assets/images/Abhinav.png";
import Tech from "../../assets/images/Tech.png";
import Pvt from "../../assets/images/Pvt.png";
import Ltd from "../../assets/images/Ltd.png";
import clogo from "../../assets/images/clogo.png";

const Navbar = () => {
  const navItem = [
    {
      label: "Industry",
      to: "/home",
      subMenu: [
        { label: "Transportation & Logistics", to: "/industry" },
        { label: "Mining", to: "/roadLogistics" },
        { label: "Ore Processing and Metals", to: "/railLogistics" },
        { label: "Cement", to: "/mission" },
        { label: "Fertilisers ", to: "/vision" },
        { label: "Oil & Gas ", to: "/values" },
        { label: "Warehousing ", to: "/professional" },
        { label: "Agriculture ", to: "/railmodule1" },
        { label: "Aquaculture ", to: "/railmodule2" },
      ],
    },
    {
      label: "Products & Solutions",
      to: "/products",
      subMenu: [
        {
          label: "Flying Chital Integrated Logistics Management System",
          to: "/flyingchital",
        },
        {
          label: "Flying Chital Smart Vehicle Tracking System",
          to: "/flyingChitalVehicle",
        },
        {
          label: "Flying Chital Smart Fleet Monitoring System",
          to: "/flyingChitalFleet",
        },
        {
          label: "Flying Chital Smart ContainerTracking System",
          to: "/flyingChitalContainer",
        },
        {
          label: "Flying Chital HEM/HMV/LMV Mobile Asset Management System",
          to: "/Asset",
        },
        {
          label: "Agriculture Automation Solution",
          to: "/agricultureAutomation",
        },
        {
          label: "Aquaculture Automation Solution",
          to: "/aquacultureAutomation",
        },
        {
          label: "Indigenous Professional Mobile Radio (TETRA PMR)",
          to: "/aquacultureAutomation",
        },
      ],
    },
    {
      label: "Resources",
      to: "/services",
      subMenu: [
        // { label: "Blog", to: "/blog" },
        { label: "Blog", to: "/challenge" },
        { label: "Help Centre", to: "/service2" },
        // { label: "Market updates", to: "/service3" },
      ],
    },
    {
      label: "Company",
      to: "/services",
      subMenu: [
        { label: "About Us", to: "/about?" },
        { label: "Who We Are", to: "/about?page=who" },
        { label: "Why Choose Us", to: "/about?page=why" },
        { label: "Mission, Vision and Values", to: "/about?page=mission" },
        { label: "Leadership", to: "/about?page=leaders" },
        { label: "Customers", to: "/about?page=customers" },
      ],
    },

    // {
    //     label: "RailModule",
    //     to: "/services",
    //     subMenu: [
    //         { label: "RailModule1", to: "/railmodule1" },
    //         { label: "RailModule2", to: "/railmodule2" },
    //         { label: "RailModule3", to: "/railmodule3" },
    //         { label: "RailModule4", to: "/railmodule4" },
    //         { label: "RailModule5", to: "/railmodule5" },
    //         { label: "RailModule6", to: "/railmodule6" },
    //         { label: "RailModule7", to: "/railmodule7" },
    //         { label: "RailModule8", to: "/railmodule8" },
    //         { label: "RailModule9", to: "/railmodule9" },
    //         { label: "logisticsIntelligence", to: "/logisticsIntelligence" },
    //         { label: "miningMetal", to: "/miningMetal" },
    //         { label: "mACHArchitecture", to: "/mACHArchitecture" },
    //     ]
    // },
  ];
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 ">
        {/* Your logo and brand */}

        <div className="flex ">
          <div>
            <Link to="/">
              <img src={clogo} className="h-20 mr-3" alt="FlyingChital Logo" />
            </Link>
          </div>
        </div>

        {/* <a href="https://flowbite.com" className="flex items-center">
                    <img
                        src={logo}
                        className="h-20 mr-3"
                        alt="FlyingChital Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <img
                            src={Atulya}
                            className="h-4 mr-3"
                            alt="FlyingChital Logo"
                        />
                    </span>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <img
                            src={Abhinav}
                            className="h-4 mr-3"
                            alt="FlyingChital Logo"
                        />

                    </span>

                    <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <img
                            src={Tech}
                            className="h-4 mr-1"
                            alt="Flowbite Logo"
                        />

                    </div>
                    <img
                        src={Pvt}
                        className="h-4 mr-3"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <img
                            src={Ltd}
                            className="h-4 mr-3"
                            alt="Flowbite Logo"
                        />
                    </span>
                </a> */}

        {/* Buttons and Toggle */}
        <div className="flex items-center md:order-2">
          <Link
            to="/career"
            className="text-gray-800 dark:text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none"
          >
            Careers
          </Link>
          <Link
            to="/chat"
            className="text-white bg-[#f85a47] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Contact Us
          </Link>
          {/* <button
                        onClick={toggleDropdown}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu-icons"
                        aria-expanded={isDropdownOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button> */}
        </div>

        {/* Dropdown Menu */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900 z-10">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <div
              id="mega-menu-icons"
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 ">
                {navItem.map((item) => (
                  <li key={item.label}>
                    <button
                      id={`mega-menu-icons-dropdown-button-${item.label}`}
                      data-dropdown-toggle={`mega-menu-icons-dropdown-${item.label}`}
                      className="flex items-center  justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={() => handleDropdownClick(item.label)}
                    >
                      {item.label}
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id={`mega-menu-icons-dropdown-${item.label}`}
                      className={`absolute z-10 grid ${
                        activeDropdown === item.label ? "grid-cols-2" : "hidden"
                      } w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700`}
                    >
                      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white ">
                        <ul
                          className="space-y-4"
                          aria-labelledby={`mega-menu-icons-dropdown-button-${item.label}`}
                        >
                          {item.subMenu &&
                            item.subMenu.map((subItem) => (
                              <li key={subItem.label}>
                                <a
                                  href={subItem.to}
                                  className="flex items-center  text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                                >
                                  <span className="sr-only">
                                    {subItem.label}
                                  </span>

                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
