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
import logo from "../../../src/assets/images/companylogo.png";
const navItems = [
  {
    label: "Home",
    to: "/",
    current: false,
  },
  {
    label: "Industries",
    to: "industry/",
    current: false,
  },
  {
    label: "Product & Solutions",
    to: "/services",
    current: false,
  },
  {
    label: "Resources",
    to: "/contact",
    current: false,
  },
  {
    label: "Company",
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

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const navList = (
  //     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 drop-shadow-sm text-base">
  //         <Typography
  //             as="li"
  //             variant="small"
  //             color="blue-gray"
  //             className="p-1 font-normal"
  //         >
  //             <Link
  //                 to="/"
  //                 className="flex items-center text-black font-poppins  text-base"
  //             >
  //                 Home
  //             </Link>
  //         </Typography>
  //         <Typography
  //             as="li"
  //             variant="small"
  //             color="blue-gray"
  //             className="p-1 font-normal"
  //         >
  //             <Link
  //                 to="/about"
  //                 className="flex items-center  text-black font-poppins text-base"
  //             >
  //                 About Us
  //             </Link>
  //         </Typography>
  //         <Typography
  //             as="li"
  //             variant="small"
  //             color="blue-gray"
  //             className="p-1 font-normal"
  //         >
  //             <Link
  //                 to="/contact"
  //                 className="flex items-center  text-black font-poppins text-base"
  //             >
  //                 Contact
  //             </Link>
  //         </Typography>
  //         <Typography
  //             as="li"
  //             variant="small"
  //             color="blue-gray"
  //             className="p-1 font-normal"
  //         >
  //             <Link
  //                 to="/services"
  //                 className="flex items-center  text-black font-poppins text-base"
  //             >
  //                 Services
  //             </Link>
  //         </Typography>
  //     </ul>
  // );

  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#000048]  hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center md:justify-between  sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                      src="/img/companylogo.png"
                      alt=""
                      className="border-blue h-16  "
                    /> */}
                    <img
                      className="h-24 w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                    {/* <h2 className="text-3xl font-semibold mr-36 ml-4 font-Secondary ">
                      Flying Chittal
                    </h2> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:block ml-40 ">
                    <div className="flex justify-end  space-x-4  ">
                      {/* {navList} */}
                      {/* {navList.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-black text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-4xl font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))} */}

                      <ul className="font-Secondary mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 drop-shadow-sm pt-3 ">
                        {navItems.map((item, index) => (
                          <Typography
                            key={index}
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className={classNames(
                              item.current
                                ? "bg-black text-white"
                                : "text-gray-900 hover:bg-[#000048]  hover:text-white",
                              "rounded-md px-3 py-2 text-xl font-medium"
                            )}
                          >
                            <Link to={item.to} className={item.className}>
                              {item.label}
                            </Link>
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
                {/* {navList} */}

                {/* {navList.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))} */}

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
                        "rounded-md px-3 py-2 text-4xl font-medium"
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
      {/* </div >
            </header > */}
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   MenuHandler,
//   MenuItem,
//   MenuList,
// } from "@material-tailwind/react";

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../../../public/logo.png";
// const navItems = [
//   {
//     label: "Home",
//     to: "/",
//     current: false,
//   },
//   {
//     label: "Industries",
//     to: "/industry",
//     current: false,
//     children: [
//       { label: "Child Route 1", to: "/industry/child1", current: false },
//       { label: "Child Route 2", to: "/industry/child2", current: false },
//       // Add more child routes as needed
//     ],
//   },
//   {
//     label: "Services",
//     to: "/services",
//     current: false,
//   },
//   {
//     label: "Inside",
//     to: "/contact",
//     current: false,
//   },
//   {
//     label: "About",
//     to: "/about",
//     current: false,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [openNav, setOpenNav] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     navItems.forEach((item) => {
//       item.current = location.pathname === item.to;

//       // Update child routes if they exist
//       if (item.children) {
//         item.children.forEach((childItem) => {
//           childItem.current = location.pathname === childItem.to;
//         });
//       }
//     });
//   }, [location.pathname]);

//   return (
//     <>
//       <Disclosure as="nav" className="">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-8">
//               <div className="relative flex h-16 items-center justify-between">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#000048]  hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex flex-1 items-center md:justify-between  sm:items-stretch sm:justify-start">
//                   <div className="flex flex-shrink-0 items-center">
//                     <img
//                       src="/img/logo.png"
//                       alt=""
//                       className="border-blue h-16  "
//                     />
//                     <img
//                       className="h-14 w-auto"
//                       src={logo}
//                       alt="Your Company"
//                     />
//                     {/* <h2 className="text-3xl font-semibold mr-36 ml-4 font-Secondary ">
//                       Flying Chittal
//                     </h2> */}
//                   </div>
//                   <div className="hidden sm:ml-6 sm:block ml-40 ">
//                     <div className="flex justify-end  space-x-4  ">
//                       <ul className="font-Secondary mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 drop-shadow-sm pt-3 ">
//                         {navItems.map((item, index) => (
//                           <Typography
//                             key={index}
//                             as="li"
//                             variant="small"
//                             color="blue-gray"
//                             className={classNames(
//                               item.current
//                                 ? "bg-black text-white"
//                                 : "text-gray-900 hover:bg-[#000048]  hover:text-white",
//                               "rounded-md px-3 py-2 text-xl font-medium"
//                             )}
//                           >
//                             <Link
//                               to={item.to}
//                               className={classNames(
//                                 item.current
//                                   ? "bg-black text-white"
//                                   : "text-gray-900 hover:bg-[#000048]  hover:text-white",
//                                 "rounded-md px-3 py-2 text-xl font-medium"
//                               )}
//                             >
//                               {item.label}
//                             </Link>
//                             {item.children && (
//                               <ul className="ml-4">
//                                 {item.children.map((childItem, childIndex) => (
//                                   <li key={childIndex}>
//                                     <Link
//                                       to={childItem.to}
//                                       className={classNames(
//                                         childItem.current
//                                           ? "bg-black text-white"
//                                           : "text-gray-900 hover:bg-[#000048]  hover:text-white",
//                                         "rounded-md px-3 py-2 text-xl font-medium"
//                                       )}
//                                     >
//                                       {childItem.label}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </Typography>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
//               </div>
//             </div>

//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2">
//                 <ul className="">
//                   {navItems.map((item, index) => (
//                     <Typography
//                       key={index}
//                       as="li"
//                       variant="small"
//                       color="blue-gray"
//                       className={classNames(
//                         item.current
//                           ? "bg-black text-white"
//                           : "text-gray-900 hover:bg-gray-700 hover:text-white",
//                         "rounded-md px-3 py-2 text-4xl font-medium"
//                       )}
//                     >
//                       <Link to={item.to} className={item.className}>
//                         {item.label}
//                       </Link>
//                     </Typography>
//                   ))}
//                 </ul>
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//       {/* </div >
//             </header > */}
//     </>
//   );
// }
