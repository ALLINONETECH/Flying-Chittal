import React, { useRef, useState, useEffect, useCallback } from "react";

const CLONE_COUNT = 2;

function buildLoopedTestimonials(testimonials) {
  if (testimonials.length === 0) return [];
  const pre = testimonials.slice(-CLONE_COUNT);
  const post = testimonials.slice(0, CLONE_COUNT);
  return [...pre, ...testimonials, ...post];
}

export default function TestimonialCarousel({
  testimonials = [],
  title = "What Our Clients Say",
}) {
  const n = testimonials.length;
  const looped = buildLoopedTestimonials(testimonials);

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const loopIndexRef = useRef(CLONE_COUNT);
  const isJumpingRef = useRef(false);

  const jumpTo = useCallback((loopIdx) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[loopIdx];
    if (!item) return;
    isJumpingRef.current = true;
    track.scrollTo({
      left: item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2,
      behavior: "instant",
    });
    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  }, []);

  const smoothScrollTo = useCallback((loopIdx) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[loopIdx];
    if (!item) return;
    track.scrollTo({
      left: item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const scrollToReal = useCallback(
    (realIdx) => {
      const loopIdx = realIdx + CLONE_COUNT;
      loopIndexRef.current = loopIdx;
      setActiveIndex(realIdx);
      smoothScrollTo(loopIdx);
    },
    [smoothScrollTo],
  );

  const updateActive = useCallback(() => {
    if (isJumpingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((item, i) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(trackCenter - itemCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    loopIndexRef.current = closest;
    const realIdx = (((closest - CLONE_COUNT) % n) + n) % n;
    setActiveIndex(realIdx);

    if (closest < CLONE_COUNT) {
      const target = closest + n;
      jumpTo(target);
      loopIndexRef.current = target;
    } else if (closest >= CLONE_COUNT + n) {
      const target = closest - n;
      jumpTo(target);
      loopIndexRef.current = target;
    }
  }, [n, jumpTo]);

  useEffect(() => {
    jumpTo(CLONE_COUNT);
  }, [jumpTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActive, { passive: true });
    return () => track.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  if (n === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden rounded-3xl">
      <style>{`.tc-track::-webkit-scrollbar { display: none; }`}</style>

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-4">
          Trusted by industry leaders and forward-thinking enterprises
        </p>
        <div className="flex justify-center">
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" />
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="tc-track flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto pb-6 px-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "max(8vw, 16px)",
          paddingRight: "max(8vw, 16px)",
        }}
      >
        {looped.map((testimonial, loopIdx) => {
          const realIdx = (((loopIdx - CLONE_COUNT) % n) + n) % n;
          const rawDiff = realIdx - activeIndex;
          const diff = Math.min(Math.abs(rawDiff), n - Math.abs(rawDiff));

          const scale = diff === 0 ? 1 : diff === 1 ? 0.88 : 0.75;
          const opacity = diff === 0 ? 1 : diff === 1 ? 0.8 : 0.5;
          const shadow =
            diff === 0
              ? "0 25px 60px rgba(55,52,169,0.25)"
              : "0 8px 20px rgba(0,0,0,0.08)";

          return (
            <div
              key={loopIdx}
              onClick={() => {
                loopIndexRef.current = loopIdx;
                const ri = (((loopIdx - CLONE_COUNT) % n) + n) % n;
                setActiveIndex(ri);
                smoothScrollTo(loopIdx);
              }}
              style={{
                scrollSnapAlign: "center",
                flexShrink: 0,
                width: "clamp(300px, 85vw, 420px)",
                transform: `scale(${scale})`,
                opacity,
                boxShadow: shadow,
                transition:
                  "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.55s ease, box-shadow 0.55s ease",
                cursor: diff === 0 ? "default" : "pointer",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-7 md:p-8 h-full flex flex-col justify-between hover:border-orange-300 transition-colors duration-300">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ),
                  )}
                </div>

                {/* Quote text */}
                <div className="flex-grow mb-6">
                  <svg
                    className="w-8 h-8 text-orange-200 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h6v-2H6v2zm0-5h6v-2H6v2zm0-5h6V5H6v2zm12 13h6v-2h-6v2zm0-5h6v-2h-6v2zm0-5h6V5h-6v2z" />
                  </svg>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author info */}
                <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                    {testimonial.company && (
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => scrollToReal(index)}
            style={{
              transition: "all 0.35s ease",
              width: index === activeIndex ? "32px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: index === activeIndex ? "#3734a9" : "#d1d5db",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}
