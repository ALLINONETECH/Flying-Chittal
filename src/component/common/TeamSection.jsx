import React, { useState } from "react";

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
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMemberBio = (memberName) => {
    setExpandedMember((current) =>
      current === memberName ? null : memberName,
    );
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
            {members.map((member, idx) => (
              <article
                key={member.name}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                {/* Photo area */}
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-orange-50 h-72 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Bottom fade into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  {/* Index badge */}
                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-indigo-700 text-xs font-bold font-heebo flex items-center justify-center shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Info */}
                <div className="relative z-10 px-6 pt-4 pb-7">
                  <h3 className="text-xl font-bold text-gray-900 font-heebo leading-tight break-words">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="block w-5 h-0.5 bg-orange-400 rounded-full" />
                    <p className="text-sm font-semibold font-heebo text-indigo-600">
                      {member.role}
                    </p>
                  </div>

                  {showBio && member.bio ? (
                    <>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed font-heebo line-clamp-2">
                        {member.bio}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleMemberBio(member.name)}
                        className="mt-3 text-sm font-semibold font-heebo text-indigo-600 hover:text-indigo-700 transition-colors"
                        aria-expanded={expandedMember === member.name}
                      >
                        {expandedMember === member.name
                          ? "Show less"
                          : "Read bio"}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedMember === member.name
                            ? "max-h-40 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed font-heebo">
                          {member.bio}
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>

                {/* Animated bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
