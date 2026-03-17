import React, { useRef, useState, useEffect, useCallback } from "react";

// Build looped list: [...last N clones, ...originals, ...first N clones]
const CLONE_COUNT = 3;

function buildLoopedImages(images) {
  if (images.length === 0) return [];
  const pre = images.slice(-CLONE_COUNT);
  const post = images.slice(0, CLONE_COUNT);
  return [...pre, ...images, ...post];
}

export default function SampleScreenshots({
  images = [],
  title = "Sample Screenshots",
}) {
  const n = images.length;
  const looped = buildLoopedImages(images);

  const trackRef = useRef(null);
  // activeIndex tracks position within the ORIGINAL images (0-based)
  const [activeIndex, setActiveIndex] = useState(0);
  // loopIndex tracks position within the looped array
  const loopIndexRef = useRef(CLONE_COUNT); // start at first real image
  const isJumpingRef = useRef(false);

  // Scroll to a looped-array index without animation (for infinite jump)
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
    // Allow next scroll events after a tick
    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  }, []);

  // Smooth scroll to a looped-array index
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

  // Scroll to an original image index (smooth)
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

    // Map looped index → real index
    const realIdx = (((closest - CLONE_COUNT) % n) + n) % n;
    setActiveIndex(realIdx);

    // Infinite loop: if we're in the pre-clone zone, jump to real end equivalent
    if (closest < CLONE_COUNT) {
      const target = closest + n;
      jumpTo(target);
      loopIndexRef.current = target;
    }
    // If we're in the post-clone zone, jump to real start equivalent
    else if (closest >= CLONE_COUNT + n) {
      const target = closest - n;
      jumpTo(target);
      loopIndexRef.current = target;
    }
  }, [n, jumpTo]);

  // Initialise scroll position to start of real images (no animation)
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
      <style>{`.ss-track::-webkit-scrollbar { display: none; }`}</style>

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-medium title-font text-gray-900 mb-1">
          {title}
        </h1>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 rounded-full bg-orange-400" />
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="ss-track flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "12vw",
          paddingRight: "12vw",
        }}
      >
        {looped.map((src, loopIdx) => {
          // Map looped index to real index for visual distance calculation
          const realIdx = (((loopIdx - CLONE_COUNT) % n) + n) % n;
          // Circular distance from active
          const rawDiff = realIdx - activeIndex;
          const diff = Math.min(Math.abs(rawDiff), n - Math.abs(rawDiff));

          const scale = diff === 0 ? 1 : diff === 1 ? 0.84 : 0.7;
          const opacity = diff === 0 ? 1 : diff === 1 ? 0.65 : 0.45;
          const shadow =
            diff === 0
              ? "0 25px 60px rgba(55,52,169,0.35)"
              : "0 8px 24px rgba(0,0,0,0.15)";

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
                width: "clamp(220px, 70vw, 320px)",
                transform: `scale(${scale})`,
                opacity,
                boxShadow: shadow,
                transition:
                  "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.55s ease, box-shadow 0.55s ease",
                cursor: diff === 0 ? "default" : "pointer",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`screenshot-${realIdx + 1}`}
                className="w-full h-auto block select-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Dot indicators (only real images) */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to screenshot ${index + 1}`}
            onClick={() => scrollToReal(index)}
            style={{
              transition: "all 0.35s ease",
              width: index === activeIndex ? "24px" : "8px",
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
