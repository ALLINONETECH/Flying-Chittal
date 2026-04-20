import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/FlyingchitalTransperant.png";
import { navItem } from "./navList";

const quickActions = [
  { label: "Get in touch", to: "/contact", primary: true },
  { label: "Explore blogs", to: "/blog" },
  { label: "Careers", to: "/career" },
];

const utilityLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Help Centre", to: "/help" },
  { label: "Terms", to: "/termsandcondition" },
  { label: "Privacy Policy", to: "/privacy" },
];

const capabilityBadges = [
  "Fleet Telematics",
  "Rail Logistics",
  "Industrial IoT",
  "Field Automation",
  "Control Tower Visibility",
  "Operational Analytics",
];

const getFooterPath = (path = "") => path.replace(/\?$/, "");

function FooterIcon({ children }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-200">
      {children}
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.26),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.22),_transparent_28%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative container mx-auto px-6 pt-8 pb-6">
        <div className="mb-6 rounded-[24px] border border-white/10 bg-gradient-to-r from-indigo-500/15 via-white/8 to-orange-500/15 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-sm lg:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-100/90">
                Ready to transform operations?
              </p>
              <h2 className="mt-2 max-w-2xl text-xl font-bold leading-tight text-white font-heebo md:text-3xl">
                Book a product walkthrough and see how Flying Chital fits your
                logistics and industrial workflows.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200/85">
                Get a focused conversation around deployment, visibility gaps,
                field execution, and the right operating model for your team.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              <Link
                to="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Request a Demo
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-[22px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.28)] backdrop-blur-sm lg:p-6">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] lg:items-start">
            <div>
              <Link to="/" className="inline-flex items-center">
                <img
                  src={brandLogo}
                  alt="Flying Chital logo"
                  className="w-full max-w-[210px]"
                />
              </Link>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                Flying Chital builds connected platforms for logistics,
                telematics, field operations, and industrial visibility. The
                footer should help users act fast, not force them to hunt.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {capabilityBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {quickActions.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      item.primary
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-950/30 hover:bg-orange-400"
                        : "border border-white/15 bg-white/5 text-white hover:border-indigo-300/40 hover:bg-white/12"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:info@flyingchital.com"
                  className="group rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition-colors hover:border-indigo-300/30 hover:bg-slate-950/70"
                >
                  <FooterIcon>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z"
                      />
                    </svg>
                  </FooterIcon>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white break-all group-hover:text-indigo-200">
                    info@flyingchital.com
                  </p>
                </a>

                <a
                  href="tel:+917894567778"
                  className="group rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition-colors hover:border-indigo-300/30 hover:bg-slate-950/70"
                >
                  <FooterIcon>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.37l1.03 3.09a2 2 0 01-.45 2.05l-1.28 1.28a16 16 0 006.99 6.99l1.28-1.28a2 2 0 012.05-.45l3.09 1.03A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.16 24 0 14.84 0 3V2a2 2 0 012-2h1z"
                      />
                    </svg>
                  </FooterIcon>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white group-hover:text-indigo-200">
                    +91 7676429520
                  </p>
                </a>

              </div>

              <div className="rounded-[20px] border border-white/10 bg-slate-950/25 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
                  Office Address (Registered Office)
                </p>
                <div className="space-y-1.5 text-sm leading-6 text-slate-300">
                  <p>Flying Chital Private Limited</p>
                  <p>Room No 228, Second Floor, DLF Cyber City</p>
                  <p>IDCO Info Park, Technology Corridor</p>
                  <p>Chandaka Industrial Estate, Patia</p>
                  <p>Bhubaneswar, Dist - Khorda, Odisha 751024</p>
                  <p>
                    Email: <a className="text-indigo-200 hover:text-white transition-colors" href="mailto:info@flyingchital.com">info@flyingchital.com</a>
                  </p>
                </div>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-slate-950/25 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
                    Navigation
                  </p>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                  {navItem.map((section) => (
                    <div key={section.label}>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                        {section.label}
                      </h3>
                      <ul className="space-y-2">
                        {section.subMenu?.map((subItem) => (
                          <li key={`${section.label}-${subItem.label}`}>
                            <Link
                              to={getFooterPath(subItem.to)}
                              className="text-sm leading-5 text-slate-400 transition-colors hover:text-white"
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
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-slate-950/35">
        <div className="container mx-auto flex flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center text-sm text-slate-400 lg:text-left">
            © {currentYear} Flying Chital Tech Pvt. Ltd.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
            {utilityLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
