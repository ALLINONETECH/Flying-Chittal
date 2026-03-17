import React from "react";

export default function TeamSection({
  sectionRef,
  badge,
  title,
  subtitle,
  members = [],
  showBio = false,
  variant = "grid",
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

        {variant === "rows" ? (
          <div className="space-y-12 sm:space-y-16">
            {members.map((member, index) => (
              <article
                key={member.name}
                className={`container mx-auto flex px-2 sm:px-5 py-2 md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "flex-col-reverse" : "flex-col"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="lg:flex-grow md:w-1/2 md:px-2 lg:px-10 flex flex-col md:items-start md:text-left items-center text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight title-font mb-3 font-heebo text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-lg sm:text-xl font-bold leading-6 font-heebo text-primary">
                    {member.role}
                  </p>
                  {member.bio ? (
                    <p className="text-base sm:text-lg font-normal leading-7 font-heebo text-gray-700 text-justify mt-3">
                      {member.bio}
                    </p>
                  ) : null}
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <div className="rounded-tr-[70px] rounded-bl-[70px] overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto object-contain object-center bg-white"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
