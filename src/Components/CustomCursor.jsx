import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorType, setCursorType] = useState("default");
  const [clicks, setClicks] = useState([]);
  
  // New State: Check if the device is mobile/tablet
  const [isVisible, setIsVisible] = useState(true);

  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Logic to detect mobile/tablet (Touch capability or width < 1024px)
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsVisible(!isTouch && !isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // If on mobile, don't attach listeners or start animation
    if (!isVisible) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const target = e.target.closest("[data-cursor]");
      setCursorType(target ? target.getAttribute("data-cursor") : "default");
    };

    const handleMouseDown = () => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: mousePos.current.x, y: mousePos.current.y }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    let rafId;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("resize", checkDevice);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]); // Re-run if visibility status changes

  // Return nothing if on mobile/tablet
  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${cursorType}`} />
      <div ref={ringRef} className={`cursor-ring ${cursorType}`} />
      
      {clicks.map((click) => (
        <div
          key={click.id}
          className="cursor-ripple"
          style={{ left: click.x, top: click.y }}
        />
      ))}
    </>
  );
};

export default CustomCursor;