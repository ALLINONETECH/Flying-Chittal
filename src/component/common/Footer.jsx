import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/FlyingchitalTransperant.png";
import footerImage from "../../assets/images/footer.jpg";
import { navItem } from "./navList";

const quickLinks = [
  { label: "Careers", to: "/career" },
  { label: "Contact Us", to: "/chat", primary: true },
];

const getFooterPath = (path = "") => path.replace(/\?$/, "");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-gray-600 body-font bg-[#1d2939]"
      style={{
        background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.2), rgb(96 1 72 / 98%)),url('${footerImage}')`,
        backgroundSize: "6px, auto, cover",
      }}
    >
      <div className="container px-5 py-20 mx-auto">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] items-start">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-flex title-font font-medium items-center justify-center md:justify-start"
            >
              <img
                src={brandLogo}
                alt="Flying Chital logo"
                className="w-full max-w-[260px]"
              />
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-200">
              Explore the same navigation structure from the header and reach the
              right section faster.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    item.primary
                      ? "bg-secondary text-white hover:bg-primary"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {navItem.map((section) => (
              <div key={section.label} className="text-center md:text-left">
                <h2 className="title-font mb-4 text-md font-bold tracking-widest text-gray-200">
                  {section.label}
                </h2>

                <ul className="space-y-3">
                  {section.subMenu?.map((subItem) => (
                    <li key={`${section.label}-${subItem.label}`}>
                      <Link
                        to={getFooterPath(subItem.to)}
                        className="text-sm leading-6 text-gray-200 transition-colors hover:text-white"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/15">
        <div className="container mx-auto flex flex-wrap flex-col px-5 py-4 sm:flex-row">
          <p className="text-center text-sm text-gray-200 sm:text-left">
            © {currentYear} Flying Chital Tech Pvt. Ltd.
          </p>

          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-200 transition-colors hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200 transition-colors hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200 transition-colors hover:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-200 transition-colors hover:text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="h-5 w-5"
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
  );
}
