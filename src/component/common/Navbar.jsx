import React, { useEffect, useRef, useState } from "react";
import brandLogo from "../../assets/images/logos1.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { navItem } from "./navList";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpenNav(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRootRef.current?.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCurrentRoute = (to) => {
    if (!to) return false;
    return (
      location.pathname + location.search === to || location.pathname === to
    );
  };

  const isSubmenuActive = (menu) =>
    menu.subMenu?.some((s) => isCurrentRoute(s.to));

  return (
    <header
      ref={navRootRef}
      className="absolute top-0 left-0 z-50 w-full text-white"
    >
      <div className="mx-auto flex h-[90px] w-full max-w-[1280px] items-center gap-7 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="shrink-0 inline-flex items-center py-1.5 transition-opacity duration-200 hover:opacity-90"
        >
          <img
            src={brandLogo}
            className="h-16 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
            alt="FlyingChital Logo"
          />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center gap-2 lg:flex">
          {navItem.map((item) => (
            <li key={item.label} className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.label ? null : item.label,
                  )
                }
                className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition-all duration-150 ${
                  activeDropdown === item.label || isSubmenuActive(item)
                    ? "bg-white/18 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
                    : "text-white/90 hover:bg-white/18 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
                }`}
              >
                {item.label}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-150 ${
                    activeDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 mt-3 w-[350px]">
                  <div
                    className="rounded-3xl border border-white/25 p-2.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(18,20,74,0.45)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(145deg, rgba(55, 52, 169, 0.88) 0%, rgba(84, 89, 229, 0.82) 55%, rgba(126, 88, 232, 0.8) 100%)",
                    }}
                  >
                    <ul className="space-y-1">
                      {item.subMenu?.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.to}
                            className={`block rounded-2xl px-4 py-3 text-[18px] leading-tight transition-all duration-150 ${
                              isCurrentRoute(sub.to)
                                ? "bg-white/20 font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                                : "text-white/90 hover:bg-white/18 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            to="/career"
            className="rounded-full px-3.5 py-2.5 text-[15px] font-semibold text-white/90 transition-all duration-150 hover:bg-white/18 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
          >
            Careers
          </Link>
          <Link
            to="/chat"
            className="rounded-full bg-orange-500 px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-orange-400 hover:shadow-[0_8px_22px_rgba(249,115,22,0.45)]"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="ml-auto rounded-lg p-2 text-white/90 transition-all duration-150 hover:bg-white/18 hover:text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle menu"
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {openNav && (
        <div
          className="border-t border-white/15 px-4 pb-4 pt-2 lg:hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(55, 52, 169, 0.96) 0%, rgba(99, 102, 241, 0.94) 50%, rgba(139, 92, 246, 0.92) 100%)",
          }}
        >
          <ul className="space-y-1">
            {navItem.map((item) => (
              <li key={item.label}>
                <button
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[15px] font-semibold text-white/90 transition-all duration-150 hover:bg-white/18 hover:text-white"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === item.label && (
                  <ul className="ml-3 mt-1 space-y-0.5 border-l border-white/20 pl-3">
                    {item.subMenu?.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          to={sub.to}
                          className={`block rounded-lg px-2 py-2 text-sm transition-all duration-150 ${
                            isCurrentRoute(sub.to)
                              ? "font-semibold text-white bg-white/12"
                              : "text-white/75 hover:bg-white/12 hover:text-white"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link
                to="/career"
                className="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-white/90 transition-all duration-150 hover:bg-white/18 hover:text-white"
              >
                Careers
              </Link>
            </li>
          </ul>

          <div className="mt-3 border-t border-white/10 pt-3">
            <Link
              to="/chat"
              className="flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-orange-400 hover:shadow-[0_8px_22px_rgba(249,115,22,0.45)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
