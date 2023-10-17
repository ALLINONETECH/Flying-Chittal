import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
import logo from "../../../public/logo.png";

const navItems = [
  {
    label: "Home",
    to: "/",
    current: false,
  },
  {
    label: "Industries",
    to: "/industry",
    current: false,
    children: [
      { label: "Child Route 1", to: "/industry/child1", current: false },
      { label: "Child Route 2", to: "/industry/child2", current: false },
      // Add more child routes as needed
    ],
  },
  {
    label: "Services",
    to: "/services",
    current: false,
  },
  {
    label: "Inside",
    to: "/contact",
    current: false,
  },
  {
    label: "About",
    to: "/about",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Update the "current" property based on the current route
  useEffect(() => {
    navItems.forEach((item) => {
      item.current = location.pathname === item.to;

      // Update child routes if they exist
      if (item.children) {
        item.children.forEach((childItem) => {
          childItem.current = location.pathname === childItem.to;
        });
      }
    });
  }, [location.pathname]);

  return (
    <>
      <Disclosure as="nav">
        {/* Rest of your code remains the same */}
        {/* ... */}
        {/* Add code to render child routes if they exist */}
        {navItems.map((item, index) => (
          <div key={index}>
            <Link
              to={item.to}
              className={classNames(
                item.current
                  ? "bg-black text-white"
                  : "text-gray-900 hover:bg-[#000048]  hover:text-white",
                "rounded-md px-3 py-2 text-xl font-medium"
              )}
            >
              {item.label}
            </Link>
            {item.children && (
              <ul className="ml-4">
                {item.children.map((childItem, childIndex) => (
                  <li key={childIndex}>
                    <Link
                      to={childItem.to}
                      className={classNames(
                        childItem.current
                          ? "bg-black text-white"
                          : "text-gray-900 hover:bg-[#000048]  hover:text-white",
                        "rounded-md px-3 py-2 text-xl font-medium"
                      )}
                    >
                      {childItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Disclosure>
    </>
  );
}
