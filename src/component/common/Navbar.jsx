import React, { useEffect, useState } from "react";
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
    <ul className="flex flex-col lg:items-center mt-3 lg:mt-0 font-medium md:flex-row md:space-x-2 lg:space-x-3">
      {navItem.map((item) => (
        <li key={item.label} className="relative">
          <button
            id={`mega-menu-icons-dropdown-button-${item.label}`}
            data-dropdown-toggle={`mega-menu-icons-dropdown-${item.label}`}
            className="flex items-center justify-between w-full py-2.5 px-3.5 text-[15px] font-semibold text-gray-700 rounded-lg border-b border-gray-100 md:w-auto md:border-0 hover:bg-indigo-50 hover:text-primary transition-colors"
            onClick={() => handleDropdownClick(item.label)}
          >
            {item.label}
            <ChevronDownIcon
              className={`w-4 h-4 ml-2 transition-transform ${
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
            <div className="p-3 lg:p-4 bg-white border border-gray-200 rounded-xl shadow-lg">
              <ul
                className="space-y-1"
                aria-labelledby={`mega-menu-icons-dropdown-button-${item.label}`}
              >
                {item.subMenu &&
                  item.subMenu.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        to={subItem.to}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isCurrentRoute(subItem.to)
                            ? "bg-indigo-50 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
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
          className={`text-[15px] font-semibold rounded-lg px-4 py-2.5 mr-1 md:mr-2 transition-colors ${
            isCurrentRoute("/career")
              ? "bg-indigo-50 text-primary"
              : "text-gray-700 hover:bg-indigo-50 hover:text-primary"
          }`}
        >
          Careers
        </Link>
      </li>

      <li>
        <button id="contact-cta" className="w-full md:w-auto">
          <Link
            to="/chat"
            className="inline-flex items-center justify-center w-full md:w-auto text-white bg-secondary hover:bg-primary focus:ring-4 focus:ring-blue-200 font-semibold rounded-full text-sm px-5 py-2.5 mr-1 md:mr-2 md:mt-0 transition-colors"
          >
            Contact Us
          </Link>
        </button>
      </li>
    </ul>
  );

  return (
    <NavBarTailWind className="mx-auto sticky top-0 z-50 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-none max-w-full shadow-sm px-2 lg:px-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 py-1">
        <div className="flex">
          <Link to="/">
            <img
              src={brandLogo}
              className="h-14 md:h-16 w-auto mr-2"
              alt="FlyingChital Logo"
            />
          </Link>
        </div>

        <div className="hidden lg:block">{navList}</div>

        <div
          className="ml-auto h-9 w-9 rounded-lg text-inherit hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 lg:hidden cursor-pointer flex items-center justify-center"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </div>
      </div>

      <MobileNav open={openNav} className="border-0 shadow-none">
        <div className="container mx-auto pb-3">{navList}</div>
      </MobileNav>
    </NavBarTailWind>
  );
}
