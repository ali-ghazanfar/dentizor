import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCREENS = [
  { src: "/screens/dentizor-calendar.webp", label: "Calendar", alt: "Dentizor weekly appointment calendar for a dentist" },
  { src: "/screens/dentizor-cases.webp", label: "Cases", alt: "Dentizor cases list with treatments, status, totals and balances" },
];

const INTERVAL_MS = 4500;

const ScreenSlider = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setPaused] = useState(false);

  const go = (step) => setActive((current) => (current + step + SCREENS.length) % SCREENS.length);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || reduceMotion) return undefined;
    const timer = setInterval(() => setActive((current) => (current + 1) % SCREENS.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, active]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Dentizor app screens"
    >
      <div className="rounded-t-[18px] border border-black/80 bg-brand-charcoal p-2 sm:p-2.5 shadow-[0_40px_80px_-30px_rgba(30,36,35,0.45)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-white">
          {SCREENS.map((screen, index) => (
            <img
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== active}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
      <div className="relative mx-[-4%] h-3.5 rounded-b-[14px] bg-gradient-to-b from-[#d9dcdc] to-[#a9aeae]">
        <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-[8px] bg-[#bfc3c3]" />
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-brand-200 bg-white text-brand-charcoal transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-3">
          {SCREENS.map((screen, index) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${screen.label}`}
              aria-current={index === active}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${index === active ? "w-8 bg-brand-primary" : "w-2 bg-brand-200 hover:bg-brand-300"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-brand-200 bg-white text-brand-charcoal transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ScreenSlider;
