import React from "react";

export default function TeamSection({
  sectionRef,
  badge,
  title,
  subtitle,
  members = [],
  showBio = false,
  sectionClassName = "",
}) {
  return (
    <section
      ref={sectionRef}
      className={`text-gray-700 body-font py-14 sm:py-16 ${sectionClassName}`}
    >
      <div className="container mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {badge ? (
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-primary font-semibold text-sm font-heebo">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              {badge}
            </div>
          ) : null}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heebo text-gray-900">
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {subtitle ? (
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-heebo leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <article
              key={member.name}
              className="group h-full rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative bg-gradient-to-br from-indigo-50 to-orange-50 p-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full ${showBio ? "h-56" : "h-64"} object-cover object-center group-hover:scale-[1.03] transition-transform duration-500`}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="px-5 pb-6 pt-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heebo">
                  {member.name}
                </h3>
                <p className="mt-1 text-primary font-semibold font-heebo">
                  {member.role}
                </p>

                {showBio && member.bio ? (
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-heebo">
                    {member.bio}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
