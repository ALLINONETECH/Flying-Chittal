import React from "react";

export default function ProductFeatureDeepDive({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  bullets = [],
  bulletGroups = [],
  stats = [],
  reverse = false,
  overlayLabel = "Operational Deep Dive",
  overlayText = "The section translates core product capabilities into a more structured operational story.",
}) {
  const groupedBullets =
    bulletGroups.length > 0
      ? bulletGroups
      : [{ title: "Key Capabilities", items: bullets }];

  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(55,52,169,0.10),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(248,90,71,0.10),_transparent_30%)]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 ${reverse ? "" : ""}`}
        >
          <div
            className={`order-2 ${reverse ? "lg:order-2" : "lg:order-1"} lg:col-span-7`}
          >
            <div className="h-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-primary font-heebo">
                <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                {eyebrow}
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 font-heebo sm:text-4xl lg:text-[2.65rem]">
                {title}
              </h2>

              <div className="mt-5 flex gap-2">
                <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
                <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 font-heebo sm:text-lg">
                {description}
              </p>

              {stats.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={stat}
                      className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm font-heebo ${
                        index % 3 === 0
                          ? "bg-indigo-100 text-primary"
                          : index % 3 === 1
                            ? "bg-orange-100 text-orange-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {groupedBullets.map((group, groupIndex) => (
                  <div
                    key={group.title}
                    className={`rounded-[28px] border p-5 sm:p-6 ${
                      groupIndex % 3 === 0
                        ? "border-indigo-100 bg-indigo-50/60"
                        : groupIndex % 3 === 1
                          ? "border-orange-100 bg-orange-50/70"
                          : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-900 font-heebo sm:text-xl">
                      {group.title}
                    </h3>

                    <div className="mt-4 space-y-3">
                      {group.items.map((item, itemIndex) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-sm font-heebo">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm leading-6 text-gray-700 font-heebo sm:text-base">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`order-1 ${reverse ? "lg:order-1" : "lg:order-2"} lg:col-span-5`}
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_26px_80px_rgba(15,23,42,0.12)] sm:min-h-[420px]">
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={imageAlt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/25 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80 font-heebo">
                    {overlayLabel}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white font-heebo sm:text-xl">
                    {overlayText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
