import { useEffect, useRef, useState } from "react";

// The page's one moving part: the bar fills to `value`% when it scrolls into view.
const ScopeBar = ({ value, label }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.6 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-6">
      <div className="h-2.5 w-full bg-haze" role="img" aria-label={`Scope: ${label}`}>
        <div
          className="h-full bg-cobalt transition-[width] duration-[1100ms] ease-out motion-reduce:transition-none"
          style={{ width: shown ? `${value}%` : "0%" }}
        />
      </div>
      <p className="mt-2 text-base text-slate">What my work touched: {label}</p>
    </div>
  );
};

export default ScopeBar;
