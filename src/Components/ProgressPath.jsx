import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProgressPath.css";

gsap.registerPlugin(ScrollTrigger);

const ProgressPath = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Animate the height of the inner bar based on scroll
    gsap.to(progressBarRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3, // Smoother follow
      },
    });
  }, []);

  return (
    <div className="progress-container">
      {/* Background Track */}
      <div className="progress-track">
        {/* The Animated Glowing Fill */}
        <div ref={progressBarRef} className="progress-fill">
          {/* Glowing head of the line */}
          <div className="progress-head" />
        </div>
      </div>
      
      {/* Optional: Section Markers (Add more as needed) */}
      <div className="section-markers">
        <div className="marker" style={{ top: '20%' }}></div>
        <div className="marker" style={{ top: '50%' }}></div>
        <div className="marker" style={{ top: '80%' }}></div>
      </div>
    </div>
  );
};

export default ProgressPath;