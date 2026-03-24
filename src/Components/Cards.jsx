import React, { useState, useEffect } from "react";

function Cards({ imgAddress, title, content, demolink, githublink }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check for touch device to optimize performance/UX
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => !isTouchDevice && setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        flex-none snap-center group relative 
        /* Responsive Widths */
        w-[80vw] sm:w-[320px] md:w-[360px] lg:w-[380px]
        /* Responsive Heights: Shorter on small mobile to prevent cut-off */
        h-[480px] sm:h-[520px]
        rounded-3xl cursor-pointer overflow-hidden
        bg-[#0f172a]/40 border border-white/10 backdrop-blur-md
        transition-all duration-500 ease-out
        /* Hover Effects: Subtle on mobile, intense on desktop */
        hover:border-cyan-500/50 hover:-translate-y-2 md:hover:-translate-y-4 
        hover:shadow-[0_20px_50px_rgba(8,112,184,0.2)]
      "
    >
      {/* Dynamic Spotlight Glow (Disabled for touch devices) */}
      {!isTouchDevice && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 rounded-3xl z-10"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(51, 204, 255, 0.15), transparent 40%)`,
            opacity: opacity,
          }}
        />
      )}

      {/* Image Section */}
      <div className="relative h-[45%] sm:h-1/2 w-full overflow-hidden">
        <img
          src={imgAddress}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
        
        {/* Floating Badge - Smaller on mobile */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[9px] sm:text-[10px] uppercase tracking-widest px-2 py-1 sm:px-3 rounded-full z-20">
          Project
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-5 sm:p-6 flex flex-col h-[55%] sm:h-1/2 justify-between z-20">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
            {content}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 mt-2">
          <a
            href={demolink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-sm sm:text-base font-bold py-2 sm:py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Live Demo
          </a>
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Source on GitHub"
            className="p-2 sm:p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-[20px] sm:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;