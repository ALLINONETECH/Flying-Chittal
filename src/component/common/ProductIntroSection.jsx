import React from "react";

export default function ProductIntroSection({
  logo,
  productName,
  eyebrow,
  title,
  subtitle,
  capabilityTags = [],
  sections = [],
}) {
  return (
    <section className="relative overflow-hidden text-gray-700 body-font py-14 sm:py-16">
      <div className="absolute -top-20 left-0 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/60 to-orange-50/80 shadow-xl p-5 sm:p-6 sticky top-24">
              <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-5 sm:p-6 mb-5">
                <img
                  className="w-full h-auto max-h-40 object-contain object-center"
                  alt={productName}
                  src={logo}
                />
              </div>

              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-primary font-semibold text-sm font-heebo">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold leading-tight font-heebo text-gray-900 mb-3">
                {productName}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-heebo mb-5">
                {subtitle}
              </p>

              <div className="space-y-3">
                {capabilityTags.map((tag, index) => (
                  <div
                    key={tag}
                    className={`rounded-2xl px-4 py-4 font-heebo text-sm sm:text-base font-semibold shadow-sm ${
                      index % 3 === 0
                        ? "bg-indigo-100 text-primary"
                        : index % 3 === 1
                          ? "bg-orange-100 text-orange-700"
                          : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-sm shadow-lg p-6 sm:p-8 lg:p-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heebo text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <div className="flex gap-2 mb-8">
                <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
                <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
              </div>

              <div className="space-y-5">
                {sections.map((section, index) => (
                  <div
                    key={section.heading}
                    className={`rounded-3xl border p-5 sm:p-6 transition-all duration-300 hover:shadow-lg ${
                      index % 3 === 0
                        ? "border-indigo-100 bg-indigo-50/50"
                        : index % 3 === 1
                          ? "border-orange-100 bg-orange-50/50"
                          : "border-slate-200 bg-slate-50/70"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight text-primary font-heebo mb-3">
                      {section.heading}
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-heebo">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
