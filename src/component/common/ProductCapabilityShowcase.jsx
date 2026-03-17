import React from "react";
import { Link } from "react-router-dom";

export default function ProductCapabilityShowcase({
  eyebrow,
  title,
  description,
  stats = [],
  cards = [],
}) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,52,169,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(248,90,71,0.12),_transparent_28%)]"></div>
      <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-indigo-100/70 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-orange-100/60 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="rounded-[32px] border border-indigo-100 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-primary font-heebo">
                <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                {eyebrow}
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 font-heebo sm:text-4xl">
                {title}
              </h2>

              <div className="mt-5 flex gap-2">
                <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
                <div className="h-1.5 w-9 rounded-full bg-indigo-300"></div>
              </div>

              <p className="mt-5 text-base leading-7 text-gray-600 font-heebo sm:text-lg">
                {description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-[24px] border px-5 py-4 shadow-sm ${
                      index % 3 === 0
                        ? "border-indigo-100 bg-indigo-50/80"
                        : index % 3 === 1
                          ? "border-orange-100 bg-orange-50/80"
                          : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className="text-2xl font-bold text-gray-900 font-heebo">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-gray-500 font-heebo">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {cards.map((card, index) => {
                const featuredCard = index === 0;
                const CardWrapper = card.href ? Link : "div";
                const cardWrapperProps = card.href ? { to: card.href } : {};

                return (
                  <CardWrapper
                    key={card.title}
                    {...cardWrapperProps}
                    className={`group relative overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] ${
                      featuredCard ? "md:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative ${featuredCard ? "h-[320px] sm:h-[380px]" : "h-[260px] sm:h-[300px]"}`}
                    >
                      <img
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={card.image}
                        alt={card.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/45 to-transparent"></div>

                      <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-5 sm:p-6">
                        <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm font-heebo sm:text-xs">
                          {card.kicker}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold text-white backdrop-blur-sm font-heebo">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <div className="max-w-2xl rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
                          <h3 className="text-xl font-bold leading-tight text-white font-heebo sm:text-2xl">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/85 font-heebo sm:text-base">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
