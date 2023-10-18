import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import companylogo from "../../../src/assets/images/companylogo.png";

const navItems = [
  {
    label: "Home",
    to: "/",
    current: false,
    submenu: [
      {
        label: "Submenu Item 1",
        to: "/submenu-item-1",
      },
      {
        label: "Submenu Item 2",
        to: "/submenu-item-2",
      },
    ],
  },
  {
    label: "Industries",
    to: "/services",
    current: false,
    submenu: [
      {
        label: "Transportation & Logistics",
        to: "/transportation",
      },
      {
        label: "Mining",
        to: "/mining",
      },
      {
        label: "Ore Processing and Metals",
        to: "/OreProcessing",
      },
      {
        label: "Cement",
        to: "/cement",
      },
      {
        label: "Fertilisers",
        to: "/fertilisers",
      },
      {
        label: "Oil & Gas",
        to: "/oilgas",
      },
      {
        label: "Agriculture",
        to: "/agriculture",
      },
      {
        label: "Aquaculture",
        to: "/aquaculture",
      },
    ],
  },
  {
    label: "Product & Solution",
    to: "/Industry",
    current: false,
    submenu: [
      {
        label: "Flying Chital Integrated Logistics Management System (FCILMS)",
        to: "/product-1",
      },
      {
        label: "Flying Chital Smart Vehicle Tracking System (FCSVTS) ",
        to: "/product-2",
      },
      {
        label: "Flying Chital Smart Vehicle Tracking System (FCSVTS) ",
        to: "/product-2",
      },
      {
        label: "Flying Chital Smart Vehicle Tracking System (FCSVTS) ",
        to: "/product-2",
      },
      {
        label: "Flying Chital Smart Vehicle Tracking System (FCSVTS) ",
        to: "/product-2",
      },
    ],
  },
  {
    label: "Resources",
    to: "/resources",
    current: false,
    submenu: [
      {
        label: "Blog",
        to: "/resource-1",
      },
      {
        label: "Market Updates",
        to: "/resource-2",
      },
      {
        label: "Help Centre",
        to: "/resource-2",
      },
    ],
  },
  {
    label: "Company",
    to: "/about",
    current: false,
    submenu: [
      {
        label: "About Us",
        to: "/team",
      },
      {
        label: "Leadership",
        to: "/mission",
      },
      {
        label: "Customers",
        to: "/mission",
      },
      {
        label: "Careers",
        to: "/mission",
      },
      {
        label: "Contact Us",
        to: "/mission",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHomeSubMenu, setShowHomeSubMenu] = useState(false);
  const [showIndustriesSubMenu, setShowIndustriesSubMenu] = useState(false);
  const [showProductsSolutionsSubMenu, setShowProductsSolutionsSubMenu] =
    useState(false);
  const [showResourcesSubMenu, setShowResourcesSubMenu] = useState(false);
  const [showCompanySubMenu, setShowCompanySubMenu] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#000048] hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {menuOpen && (
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    <ul className="">
                      {navItems.map((item, index) => (
                        <Typography
                          key={index}
                          as="li"
                          variant="small"
                          color="blue-gray"
                          className={classNames(
                            item.current
                              ? "bg-black text-white"
                              : "text-gray-900 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-4xl font-medium relative"
                          )}
                          onMouseEnter={() => {
                            setShowHomeSubMenu(item.label === "Home");
                            setShowIndustriesSubMenu(
                              item.label === "Industries"
                            );
                            setShowProductsSolutionsSubMenu(
                              item.label === "Product & Solution"
                            );
                            setShowResourcesSubMenu(item.label === "Resources");
                            setShowCompanySubMenu(item.label === "Company");
                          }}
                          onMouseLeave={() => {
                            setShowHomeSubMenu(false);
                            setShowIndustriesSubMenu(false);
                            setShowProductsSolutionsSubMenu(false);
                            setShowResourcesSubMenu(false);
                            setShowCompanySubMenu(false);
                          }}
                        >
                          <Link to={item.to} className={item.className}>
                            {item.label}
                          </Link>
                          {item.label === "Home" && showHomeSubMenu && (
                            <div className="absolute left-0 w-64 border border-[blue] p-2 bg-white shadow-lg rounded-lg">
                              {item.submenu.map((subitem, subindex) => (
                                <Link
                                  key={subindex}
                                  to={subitem.to}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-600"
                                >
                                  {subitem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                          {item.label === "Industries" &&
                            showIndustriesSubMenu && (
                              <div className="absolute left-0 mt-2 w-64 border border-[blue] p-2 bg-white shadow-lg rounded-lg">
                                {item.submenu.map((subitem, subindex) => (
                                  <Link
                                    key={subindex}
                                    to={subitem.to}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-600"
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          {item.label === "Product & Solution" &&
                            showProductsSolutionsSubMenu && (
                              <div className="absolute left-0 mt-2 w-[700px] border border-[blue] p-2 bg-white shadow-lg rounded-lg">
                                {item.submenu.map((subitem, subindex) => (
                                  <Link
                                    key={subindex}
                                    to={subitem.to}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-600"
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          {item.label === "Resources" &&
                            showResourcesSubMenu && (
                              <div className="absolute left-0 mt-2 w-64 border border-[blue] p-2 bg-white shadow-lg rounded-lg">
                                {item.submenu.map((subitem, subindex) => (
                                  <Link
                                    key={subindex}
                                    to={subitem.to}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-600"
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          {item.label === "Company" && showCompanySubMenu && (
                            <div className="absolute left-0 mt-8 w-64 border border-[blue] p-2 bg-white shadow-lg rounded-lg">
                              {item.submenu.map((subitem, subindex) => (
                                <Link
                                  key={subindex}
                                  to={subitem.to}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-600"
                                >
                                  {subitem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Typography>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-1 items-center md:justify-between sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      src="/img/companylogo.png"
                      alt=""
                      className="border-blue h-26"
                    />
                    <img
                      className="h-14 w-auto"
                      src={companylogo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block ml-40 relative">
                    <div className="flex justify-end space-x-4">
                      <ul className="font-Secondary mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 drop-shadow-sm pt-3">
                        {navItems.map((item, index) => (
                          <Typography
                            key={index}
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className={classNames(
                              item.current
                                ? "bg-black text-white"
                                : "text-gray-900 hover:bg-[#000048] hover:text-white",
                              "rounded-md px-3 py-2 text-xl font-medium relative"
                            )}
                            onMouseEnter={() => {
                              setShowHomeSubMenu(item.label === "Home");
                              setShowIndustriesSubMenu(
                                item.label === "Industries"
                              );
                              setShowProductsSolutionsSubMenu(
                                item.label === "Product & Solution"
                              );
                              setShowResourcesSubMenu(
                                item.label === "Resources"
                              );
                              setShowCompanySubMenu(item.label === "Company");
                            }}
                            onMouseLeave={() => {
                              setShowHomeSubMenu(false);
                              setShowIndustriesSubMenu(false);
                              setShowProductsSolutionsSubMenu(false);
                              setShowResourcesSubMenu(false);
                              setShowCompanySubMenu(false);
                            }}
                          >
                            <Link to={item.to} className={item.className}>
                              {item.label}
                            </Link>
                            {item.label === "Home" && showHomeSubMenu && (
                              <div className="absolute left-0 mt-2 w-64 p-2 bg-white shadow-lg rounded-lg">
                                <div className="absolute top-0 left-16 transform -translate-x-1/2 -mt-0 w-6 h-6 bg-white border-t-10 border-r-0 border-l-0 rotate-45"></div>

                                {item.submenu.map((subitem, subindex) => (
                                  <Link
                                    key={subindex}
                                    to={subitem.to}
                                    className="block mt-6 px-4  text-gray-800 hover:bg-gray-600"
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                            {item.label === "Industries" &&
                              showIndustriesSubMenu && (
                                <div className="absolute left-0 mt-2 w-64  p-2 bg-white shadow-lg rounded-lg">
                                  <div className="absolute top-0 left-16 transform -translate-x-1/2 -mt-0 w-6 h-6 bg-white border-t-10 border-r-0 border-l-0 rotate-45"></div>

                                  {item.submenu.map((subitem, subindex) => (
                                    <Link
                                      key={subindex}
                                      to={subitem.to}
                                      className="block mt-6 px-4  text-gray-800 hover:bg-gray-600"
                                    >
                                      {subitem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            {item.label === "Product & Solution" &&
                              showProductsSolutionsSubMenu && (
                                <div className="absolute left-0 mt-2 w-[600px] p-2  bg-white shadow-lg rounded-lg">
                                  <div className="absolute top-0 left-16 transform -translate-x-1/2 -mt-0 w-6 h-6 bg-white border-t-10 border-r-0 border-l-0 rotate-45"></div>
                                  {item.submenu.map((subitem, subindex) => (
                                    <Link
                                      key={subindex}
                                      to={subitem.to}
                                      className="block mt-6 px-4 py-2 text-gray-800 hover:bg-gray-600"
                                    >
                                      {subitem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            {item.label === "Resources" &&
                              showResourcesSubMenu && (
                                <div className="absolute left-0 mt-2 w-64  p-2 bg-white shadow-lg rounded-lg">
                                  <div className="absolute top-0 left-16 transform -translate-x-1/2 -mt-0 w-6 h-6 bg-white border-t-10 border-r-0 border-l-0 rotate-45"></div>

                                  {item.submenu.map((subitem, subindex) => (
                                    <Link
                                      key={subindex}
                                      to={subitem.to}
                                      className="block  mt-6 px-4  text-gray-800 hover:bg-gray-600"
                                    >
                                      {subitem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            {item.label === "Company" && showCompanySubMenu && (
                              <div className="absolute right-0 mt-2 w-64  p-2 bg-white shadow-lg rounded-lg">
                                <div className="absolute top-0 right-16 transform -translate-x-1/2 -mt-0 w-6 h-6 bg-white border-t-10 border-r-0 border-l-0 rotate-45"></div>

                                {item.submenu.map((subitem, subindex) => (
                                  <Link
                                    key={subindex}
                                    to={subitem.to}
                                    className="block mt-6 px-4  text-gray-800 hover:bg-gray-600"
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </Typography>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <ul className="">
                  {navItems.map((item, index) => (
                    <Typography
                      key={index}
                      as="li"
                      variant="small"
                      color="blue-gray"
                      className={classNames(
                        item.current
                          ? "bg-black text-white"
                          : "text-gray-900 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-4xl font-medium relative"
                      )}
                    >
                      <Link to={item.to} className={item.className}>
                        {item.label}
                      </Link>
                    </Typography>
                  ))}
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
