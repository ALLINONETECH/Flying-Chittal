import React from "react";
import { Link } from "react-router-dom";
import Blogbg from "../../assets/images/Blogbg.png";
import HomeIcon from "../../assets/images/HomeIcon.png";
import blogImageMap from "../../assets/json/blogImageMap";

// ─── Themes ──────────────────────────────────────────────────────────────────
// Available: indigo | teal | rose | amber | emerald | blue
const THEMES = {
  indigo: {
    heroGradient: "rgba(55,52,169,0.88), rgba(79,70,229,0.78)",
    accent: "text-indigo-700",
    accentBg: "bg-indigo-600",
    accentLight: "bg-indigo-100 text-indigo-700",
    divider: "bg-indigo-400",
    ctaBg: "bg-gradient-to-r from-indigo-800 to-indigo-600",
    iconBg: "bg-indigo-600",
    numberBg: "bg-indigo-600",
    statBorder: "border-indigo-200",
    statAccent: "text-indigo-700",
  },
  teal: {
    heroGradient: "rgba(13,148,136,0.88), rgba(20,184,166,0.78)",
    accent: "text-teal-700",
    accentBg: "bg-teal-600",
    accentLight: "bg-teal-100 text-teal-700",
    divider: "bg-teal-400",
    ctaBg: "bg-gradient-to-r from-teal-800 to-teal-600",
    iconBg: "bg-teal-600",
    numberBg: "bg-teal-600",
    statBorder: "border-teal-200",
    statAccent: "text-teal-700",
  },
  rose: {
    heroGradient: "rgba(136,19,55,0.88), rgba(225,29,72,0.78)",
    accent: "text-rose-700",
    accentBg: "bg-rose-600",
    accentLight: "bg-rose-100 text-rose-700",
    divider: "bg-rose-400",
    ctaBg: "bg-gradient-to-r from-rose-800 to-rose-600",
    iconBg: "bg-rose-600",
    numberBg: "bg-rose-600",
    statBorder: "border-rose-200",
    statAccent: "text-rose-700",
  },
  amber: {
    heroGradient: "rgba(180,83,9,0.88), rgba(217,119,6,0.78)",
    accent: "text-amber-700",
    accentBg: "bg-amber-600",
    accentLight: "bg-amber-100 text-amber-700",
    divider: "bg-amber-400",
    ctaBg: "bg-gradient-to-r from-amber-800 to-amber-600",
    iconBg: "bg-amber-600",
    numberBg: "bg-amber-600",
    statBorder: "border-amber-200",
    statAccent: "text-amber-700",
  },
  emerald: {
    heroGradient: "rgba(6,95,70,0.88), rgba(16,185,129,0.78)",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-600",
    accentLight: "bg-emerald-100 text-emerald-700",
    divider: "bg-emerald-400",
    ctaBg: "bg-gradient-to-r from-emerald-800 to-emerald-600",
    iconBg: "bg-emerald-600",
    numberBg: "bg-emerald-600",
    statBorder: "border-emerald-200",
    statAccent: "text-emerald-700",
  },
  blue: {
    heroGradient: "rgba(30,64,175,0.88), rgba(59,130,246,0.78)",
    accent: "text-blue-700",
    accentBg: "bg-blue-600",
    accentLight: "bg-blue-100 text-blue-700",
    divider: "bg-blue-400",
    ctaBg: "bg-gradient-to-r from-blue-800 to-blue-600",
    iconBg: "bg-blue-600",
    numberBg: "bg-blue-600",
    statBorder: "border-blue-200",
    statAccent: "text-blue-700",
  },
};

// ─── Icon library ─────────────────────────────────────────────────────────────
// Use these names in highlights/keyStats icon fields.
// Available: map | eye | currency | shield | chart-bar | users | clock | star
//            lightning | check | truck | leaf | globe | cpu | rocket | layers
const ICON_PATHS = {
  map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  currency:
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "chart-bar":
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  users:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  lightning: "M13 10V3L4 14h7v7l9-11h-7z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  truck:
    "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m18 0h-2",
  leaf: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  globe:
    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9",
  cpu: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  rocket:
    "M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.981 14.981 0 00-6.16 12.12A14.982 14.982 0 0114.37 15.59",
  layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
};

function BlogIcon({ name, className = "w-6 h-6" }) {
  const d = ICON_PATHS[name] || ICON_PATHS.star;
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// ─── Section renderers ────────────────────────────────────────────────────────

/**
 * intro — centered intro block
 * { type:"intro", heading?:"", text:"paragraph..." }
 */
function SectionIntro({ s, t }) {
  return (
    <section className="pb-12 px-6 pt-14">
      <div className="container mx-auto max-w-4xl text-center">
        {s.heading && (
          <>
            <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-gray-900 mb-2">
              {s.heading}
            </h2>
            <div
              className={`w-16 h-1 rounded-full ${t.divider} mx-auto mb-6`}
            />
          </>
        )}
        <p className="text-lg text-gray-600 font-heebo leading-relaxed max-w-3xl mx-auto">
          {s.text}
        </p>
      </div>
    </section>
  );
}

/**
 * highlights — icon feature cards grid
 * { type:"highlights", title?:"", items:[{icon:"map", title:"", description:""}] }
 */
function SectionHighlights({ s, t }) {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {s.title && (
          <h3
            className={`text-2xl font-bold font-heebo ${t.accent} text-center mb-10`}
          >
            {s.title}
          </h3>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex gap-4"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl ${t.iconBg} text-white flex items-center justify-center`}
              >
                <BlogIcon name={item.icon || "star"} className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heebo text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 font-heebo leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * narrative — two-column text + image
 * { type:"narrative", badge?:"", heading:"", paragraphs:[""], imageKey:"", imageAlt:"", imageRight?:true }
 */
function SectionNarrative({ s, t }) {
  const imgEl = (
    <div className="rounded-2xl overflow-hidden shadow-xl">
      <img
        src={blogImageMap[s.imageKey]}
        alt={s.imageAlt || s.heading}
        className="w-full h-full object-cover"
      />
    </div>
  );
  const textEl = (
    <div>
      {s.badge && (
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${t.accentLight} font-heebo mb-4`}
        >
          {s.badge}
        </span>
      )}
      <h3 className="text-2xl lg:text-3xl font-bold font-heebo text-slate-900 mb-4 leading-snug">
        {s.heading}
      </h3>
      {s.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-base text-gray-600 font-heebo leading-relaxed mb-4 last:mb-0"
        >
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <section className="py-14 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {s.imageRight ? textEl : imgEl}
          {s.imageRight ? imgEl : textEl}
        </div>
      </div>
    </section>
  );
}

/**
 * gallery — image grid
 * { type:"gallery", title?:"", images:[{imageKey:"", alt:"", fullWidth?:true}] }
 */
function SectionGallery({ s, t }) {
  return (
    <section className="py-10 pb-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {s.title && (
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heebo text-gray-900 mb-2">
              {s.title}
            </h3>
            <div
              className={`w-12 h-1 rounded-full ${t.divider} mx-auto mt-3`}
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.images.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300${img.fullWidth ? " md:col-span-2" : ""}`}
            >
              <img
                src={blogImageMap[img.imageKey]}
                alt={img.alt || "Blog image"}
                className={`w-full object-cover${img.fullWidth ? " max-h-[480px]" : " h-64"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * bullets — numbered/bulleted list
 * { type:"bullets", title?:"", items:["point 1", "point 2"] }
 */
function SectionBullets({ s, t }) {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {s.title && (
          <h3
            className={`text-2xl font-bold font-heebo ${t.accent} text-center mb-10`}
          >
            {s.title}
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.items.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex gap-4"
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full ${t.numberBg} text-white text-sm font-bold flex items-center justify-center`}
              >
                {i + 1}
              </div>
              <p className="text-gray-700 font-heebo leading-relaxed text-base">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * richText — flexible section with heading and paragraphs
 * { type:"richText", heading?:"", paragraphs:[""] }
 */
function SectionRichText({ s, t }) {
  return (
    <section className="py-14 px-6">
      <div className="container mx-auto max-w-4xl">
        {s.heading && (
          <h3
            className={`text-2xl lg:text-3xl font-bold font-heebo ${t.accent} mb-6`}
          >
            {s.heading}
          </h3>
        )}
        {s.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base text-gray-600 font-heebo leading-relaxed mb-4 last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/**
 * keyStats — stat numbers in a row
 * { type:"keyStats", title?:"", stats:[{value:"800+", label:"Vehicles Managed"}] }
 */
function SectionKeyStats({ s, t }) {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {s.title && (
          <h3
            className={`text-2xl font-bold font-heebo ${t.accent} text-center mb-10`}
          >
            {s.title}
          </h3>
        )}
        <div
          className={`grid grid-cols-2 sm:grid-cols-${Math.min(s.stats.length, 4)} gap-6`}
        >
          {s.stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center border-2 ${t.statBorder} rounded-2xl py-8 px-4 bg-white shadow-md`}
            >
              <p
                className={`text-4xl font-extrabold font-heebo ${t.statAccent} mb-2`}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-heebo leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * cta — closing call-to-action banner
 * { type:"cta", heading:"", text?:"", buttonText:"", buttonLink:"" }
 */
function SectionCta({ s, t }) {
  return (
    <section className={`py-20 px-6 ${t.ctaBg}`}>
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-heebo text-white mb-4 leading-tight">
          {s.heading}
        </h2>
        {s.text && (
          <p className="text-lg font-heebo text-white/80 mb-8 leading-relaxed">
            {s.text}
          </p>
        )}
        {s.buttonText && (
          <Link
            to={s.buttonLink || "/contact"}
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold font-heebo px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-base"
          >
            {s.buttonText}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DynamicBlog({ blog }) {
  const t = THEMES[blog.theme] || THEMES.indigo;
  const coverImg = blogImageMap[blog.imageKey];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-no-repeat bg-center bg-cover rounded-br-[60px] md:rounded-br-[100px]"
        style={{
          backgroundImage: `linear-gradient(120deg, ${t.heroGradient}), url(${Blogbg})`,
        }}
      >
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <span
              className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ${t.accentLight} font-heebo mb-5`}
            >
              {blog.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold font-heebo text-white leading-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-base text-white/80 font-heebo leading-relaxed max-w-2xl mb-8">
              {blog.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-white font-heebo">
              <img src={HomeIcon} alt="Home" className="h-5 w-5" />
              <Link
                to="/"
                className="text-[#F85A47] hover:text-[#ff796a] transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="hover:text-white/70 transition-colors text-white/70"
              >
                Blogs
              </Link>
              <span>/</span>
              <span className="text-white">{blog.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {coverImg && (
        <section className="py-14 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={coverImg}
                alt={blog.title}
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* Dynamic sections */}
      {(blog.content || []).map((s, i) => {
        switch (s.type) {
          case "intro":
            return <SectionIntro key={i} s={s} t={t} />;
          case "highlights":
            return <SectionHighlights key={i} s={s} t={t} />;
          case "narrative":
            return <SectionNarrative key={i} s={s} t={t} />;
          case "gallery":
            return <SectionGallery key={i} s={s} t={t} />;
          case "bullets":
            return <SectionBullets key={i} s={s} t={t} />;
          case "richText":
            return <SectionRichText key={i} s={s} t={t} />;
          case "keyStats":
            return <SectionKeyStats key={i} s={s} t={t} />;
          case "cta":
            return <SectionCta key={i} s={s} t={t} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
