import React, { useEffect, useRef, useState } from "react";
import brandLogo from "../../assets/images/fclogofh.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Navbar as NavBarTailWind, MobileNav } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { navItem } from "./navList";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpenNav(false);
    setActiveDropdown(null);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navRootRef.current?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isCurrentRoute = (to) => {
    if (!to) return false;
    return (
      location.pathname + location.search === to || location.pathname === to
    );
  };

  const navList = (
    <ul className="flex flex-col lg:items-center mt-3 lg:mt-0 font-medium md:flex-row md:space-x-1 lg:space-x-2">
      {navItem.map((item) => (
        <li key={item.label} className="relative">
          <button
            id={`mega-menu-icons-dropdown-button-${item.label}`}
            data-dropdown-toggle={`mega-menu-icons-dropdown-${item.label}`}
            className={`group flex items-center justify-between w-full py-2 px-4 text-[15px] font-semibold rounded-full border-b border-gray-100 md:w-auto md:border-0 transition-all duration-300 ${
              activeDropdown === item.label
                ? "text-primary bg-gradient-to-r from-indigo-50 to-orange-50 shadow-sm"
                : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-orange-50/80 hover:text-primary"
            }`}
            onClick={() => handleDropdownClick(item.label)}
          >
            {item.label}
            <ChevronDownIcon
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                activeDropdown === item.label ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            id={`mega-menu-icons-dropdown-${item.label}`}
            className={`z-20 ${
              activeDropdown === item.label ? "block" : "hidden"
            } lg:absolute lg:top-full lg:left-0 lg:mt-2 w-full lg:w-80`}
          >
            <div className="p-3 lg:p-4 bg-white/95 backdrop-blur-xl border border-indigo-100 rounded-2xl shadow-[0_20px_50px_rgba(55,52,169,0.16)]">
              <ul
                className="space-y-1"
                aria-labelledby={`mega-menu-icons-dropdown-button-${item.label}`}
              >
                {item.subMenu &&
                  item.subMenu.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        to={subItem.to}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isCurrentRoute(subItem.to)
                            ? "bg-gradient-to-r from-indigo-50 to-orange-50 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50/70 hover:to-orange-50/70 hover:text-primary"
                        }`}
                      >
                        {subItem.label}
                      </Link>
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
          className={`text-[15px] font-semibold rounded-full px-4 py-2 mr-1 md:mr-2 transition-all duration-300 ${
            isCurrentRoute("/career")
              ? "bg-gradient-to-r from-indigo-50 to-orange-50 text-primary shadow-sm"
              : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-orange-50/80 hover:text-primary"
          }`}
        >
          Careers
        </Link>
      </li>

      <li>
        <button id="contact-cta" className="w-full md:w-auto">
          <Link
            to="/chat"
            className="inline-flex items-center justify-center w-full md:w-auto text-white bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:from-primary hover:to-indigo-600 focus:ring-4 focus:ring-orange-200 font-semibold rounded-full text-sm px-5 py-2 mr-1 md:mr-2 md:mt-0 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Contact Us
          </Link>
        </button>
      </li>
    </ul>
  );

  return (
    <div ref={navRootRef} className="sticky top-0 z-50">
      <NavBarTailWind className="mx-auto bg-gradient-to-r from-[#f8f9ff]/95 via-white/95 to-[#fff6ed]/95 backdrop-blur-xl border-b border-indigo-100/70 rounded-none max-w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-2 lg:px-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 py-1">
          <div className="flex items-center">
            <Link
              to="/"
              className="rounded-xl px-1.5 py-1 bg-white/90 border border-indigo-100/80 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={brandLogo}
                className="h-10 md:h-12 lg:h-14 w-auto"
                alt="FlyingChital Logo"
              />
            </Link>
          </div>

          <div className="hidden lg:block">{navList}</div>

          <div
            className="ml-auto h-9 w-9 rounded-xl text-inherit hover:bg-indigo-50 focus:bg-indigo-50 active:bg-indigo-100 lg:hidden cursor-pointer flex items-center justify-center transition-colors duration-300"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </div>
        </div>

        <MobileNav
          open={openNav}
          className="border-0 shadow-none bg-gradient-to-r from-[#f8f9ff]/95 via-white/95 to-[#fff6ed]/95 backdrop-blur-xl rounded-b-2xl"
        >
          <div className="container mx-auto pb-3">{navList}</div>
        </MobileNav>
      </NavBarTailWind>
    </div>
  );
}
