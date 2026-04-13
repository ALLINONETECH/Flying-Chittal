import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const CLONE_COUNT = 2;

function buildLoopedProducts(products) {
  if (products.length === 0) return [];
  const pre = products.slice(-CLONE_COUNT);
  const post = products.slice(0, CLONE_COUNT);
  return [...pre, ...products, ...post];
}

export default function ProductShowcase({
  products = [],
  title = "Our Products & Solutions",
}) {
  const n = products.length;
  const looped = buildLoopedProducts(products);

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
    <section className="py-16 bg-white overflow-hidden">
      <style>{`.ps-track::-webkit-scrollbar { display: none; }`}</style>

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <div className="flex justify-center">
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" />
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="ps-track flex gap-5 sm:gap-7 lg:gap-10 overflow-x-auto pb-6"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "max(10vw, 16px)",
          paddingRight: "max(10vw, 16px)",
        }}
      >
        {looped.map((product, loopIdx) => {
          const realIdx = (((loopIdx - CLONE_COUNT) % n) + n) % n;
          const rawDiff = realIdx - activeIndex;
          const diff = Math.min(Math.abs(rawDiff), n - Math.abs(rawDiff));

          const scale = diff === 0 ? 1 : diff === 1 ? 0.82 : 0.65;
          const opacity = diff === 0 ? 1 : diff === 1 ? 0.75 : 0.45;
          const shadow =
            diff === 0
              ? "0 30px 70px rgba(55,52,169,0.4)"
              : "0 10px 25px rgba(0,0,0,0.1)";

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
                width: "clamp(260px, 80vw, 360px)",
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
              <Link to={product.link || "#"} className="block h-full group">
                <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden h-full flex flex-col hover:border-orange-300 transition-colors duration-300">
                  {/* Image / Logo Section */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden px-4 py-3 group-hover:from-gray-100 group-hover:to-gray-200 transition-colors duration-300">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain max-h-[160px] group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-6xl">{product.icon || "📦"}</div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                        Explore
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {products.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to product ${index + 1}`}
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
