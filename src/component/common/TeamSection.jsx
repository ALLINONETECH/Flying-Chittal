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
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                {/* Photo area */}
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-orange-50 h-[25rem] p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm text-indigo-700 text-xs font-bold font-heebo flex items-center justify-center shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {showBio && member.bio ? (
                    <>
                      <div className="absolute left-5 right-5 bottom-5 z-20 rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-md p-5 shadow-lg transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-y-3">
                        <p className="text-sm font-semibold font-heebo text-indigo-600">
                          {member.role}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-gray-900 font-heebo leading-tight break-words">
                          {member.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => toggleMemberBio(member.name)}
                          className="mt-4 inline-block px-4 py-2 text-sm font-semibold font-heebo text-white bg-indigo-600/80 hover:bg-indigo-700/90 backdrop-blur-md border border-indigo-500/50 rounded-lg transition-all duration-300 md:hidden"
                          aria-expanded={expandedMember === member.name}
                        >
                          {expandedMember === member.name
                            ? "Show less"
                            : "Read bio"}
                        </button>
                      </div>

                      <div className="pointer-events-none absolute left-5 right-5 bottom-5 z-30 rounded-2xl border-2 border-indigo-500/60 bg-white/75 backdrop-blur-md p-5 shadow-xl opacity-0 translate-y-4 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
                        <p className="text-sm font-semibold font-heebo text-gray-500">
                          {member.role}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-gray-900 font-heebo leading-tight break-words">
                          {member.name}
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed font-heebo line-clamp-4">
                          {member.bio}
                        </p>
                      </div>

                      <div
                        className={`absolute left-5 right-5 bottom-5 z-30 rounded-2xl border-2 border-indigo-500/60 bg-white/75 backdrop-blur-md p-5 shadow-xl transition-all duration-300 md:hidden ${
                          expandedMember === member.name
                            ? "opacity-100 translate-y-0"
                            : "pointer-events-none opacity-0 translate-y-4"
                        }`}
                      >
                        <p className="text-sm font-semibold font-heebo text-gray-500">
                          {member.role}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-gray-900 font-heebo leading-tight break-words">
                          {member.name}
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed font-heebo line-clamp-4">
                          {member.bio}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="absolute left-5 right-5 bottom-5 z-20 rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-md p-5 shadow-lg">
                      <p className="text-sm font-semibold font-heebo text-indigo-600">
                        {member.role}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-gray-900 font-heebo leading-tight break-words">
                        {member.name}
                      </h3>
                    </div>
                  )}
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
