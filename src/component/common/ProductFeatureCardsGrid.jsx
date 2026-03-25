import React from "react";

export default function ProductFeatureCardsGrid({
  eyebrow,
  title,
  description,
  cards = [],
}) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,52,169,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(248,90,71,0.10),_transparent_30%)]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-primary font-heebo">
            <span className="h-2 w-2 rounded-full bg-orange-400"></span>
            {eyebrow}
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 font-heebo sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <div className="mt-5 flex justify-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-orange-400"></div>
            <div className="h-1.5 w-8 rounded-full bg-indigo-300"></div>
          </div>

          <p className="mt-5 text-base leading-7 text-gray-600 font-heebo sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
                {card.icon ? (
                  <img
                    className="h-6 w-6 object-contain"
                    src={card.icon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-sm font-bold text-primary font-heebo">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-bold leading-tight text-gray-900 font-heebo">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 font-heebo sm:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
