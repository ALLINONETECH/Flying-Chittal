import React, { useEffect, useState } from "react";
import clogo from "../../assets/images/clogo.png";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import flogo from "../../assets/images/flogo.png";
import { Navbar as NavBarTailWind, MobileNav } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { navItem } from "./navList";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState(prefersDark);
  useEffect(() => {
    if (prefersDark) {
      setDark(true);
    }
  }, [dark, prefersDark]);

  const handleDropdownClick = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };
  const navList = (
    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8">
      {navItem.map((item) => (
        <li key={item.label}>
          <button
            id={`mega-menu-icons-dropdown-button-${item.label}`}
            data-dropdown-toggle={`mega-menu-icons-dropdown-${item.label}`}
            className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium ${
              dark ? "text-white" : "text-gray-900"
            } border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
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
                        className="flex items-center  text-gray-500 dark:text-white  hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span className="sr-only">{subItem.label}</span>

                        {subItem.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
      <li>
        <Link
          to="/career"
          className="text-gray-800  dark:text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none"
        >
          Careers
        </Link>
      </li>
      <li>
        <button id="contact-cta">
          <Link
            to="/chat"
            className="text-white bg-[#f85a47] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 md:px-2 md:py-2.5 mr-1 md:mr-2 md:mt-2 dark:bg-[#f85a47] dark:hover:bg-blue-700 focus:outline-none dark:focus:bg-[#f85a47]"
          >
            Contact Us
          </Link>
        </button>
      </li>
    </ul>
  );

  return (
    <NavBarTailWind className={`mx-auto ${dark ? "bg-gray-900" : "bg-white"}`}>
      {/* desktop nav  */}
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex ">
          <div>
            <Link to="/">
              {!dark && (
                <img
                  src={clogo}
                  className="h-20 mr-3"
                  alt="FlyingChital Logo"
                />
              )}
              {dark && (
                <img
                  src={flogo}
                  className="h-20 mr-3"
                  alt="FlyingChital Logo"
                />
              )}
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">{navList}</div>
        {/* toggle switch  */}

        <div
          // variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
          // ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-black ml-auto" />
          ) : (
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-black ml-auto" />
          )}
        </div>
      </div>
      {/* mobile nav */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </NavBarTailWind>
  );
}
