import React, { useRef, useState, useEffect, useCallback } from "react";

const CLONE_COUNT = 2;

function buildLoopedCards(cards) {
  if (cards.length === 0) return [];
  const pre = cards.slice(-CLONE_COUNT);
  const post = cards.slice(0, CLONE_COUNT);
  return [...pre, ...cards, ...post];
}

export default function CarouselCards({ cards = [], title = "" }) {
  const n = cards.length;
  const looped = buildLoopedCards(cards);

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
    <div className="w-full">
      <style>{`.cc-track::-webkit-scrollbar { display: none; }`}</style>

      {/* Title (optional) */}
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 rounded-full bg-orange-400" />
          </div>
        </div>
      )}

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="cc-track flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-6"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "max(12vw, 20px)",
          paddingRight: "max(12vw, 20px)",
        }}
      >
        {looped.map((card, loopIdx) => {
          const realIdx = (((loopIdx - CLONE_COUNT) % n) + n) % n;
          const rawDiff = realIdx - activeIndex;
          const diff = Math.min(Math.abs(rawDiff), n - Math.abs(rawDiff));

          const scale = diff === 0 ? 1 : diff === 1 ? 0.85 : 0.7;
          const opacity = diff === 0 ? 1 : diff === 1 ? 0.7 : 0.4;
          const shadow =
            diff === 0
              ? "0 20px 50px rgba(55,52,169,0.3)"
              : "0 8px 20px rgba(0,0,0,0.1)";

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
                width: "clamp(280px, 85vw, 380px)",
                transform: `scale(${scale})`,
                opacity,
                boxShadow: shadow,
                transition:
                  "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.55s ease, box-shadow 0.55s ease",
                cursor: diff === 0 ? "default" : "pointer",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 text-left shadow-sm h-full flex flex-col justify-between">
                {/* Icon */}
                {card.icon && <div className="text-4xl mb-4">{card.icon}</div>}

                {/* Title */}
                <p className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
                  {card.title}
                </p>

                {/* Description */}
                <p className="text-base md:text-lg font-normal leading-relaxed text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {cards.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to card ${index + 1}`}
            onClick={() => scrollToReal(index)}
            style={{
              transition: "all 0.35s ease",
              width: index === activeIndex ? "28px" : "8px",
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
    </div>
  );
}
