import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

// Asset Imports
import cert1 from "../assets/cert-1.jpeg";
import cert2 from "../assets/cert-2.png";

const certificates = [
  { id: 1, img: cert1, title: "Full Stack Development" },
  { id: 2, img: cert2, title: "Delloite Data Analytics" },
];

function Certificates() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [zoomImg, setZoomImg] = useState(null); // Lightbox State

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="certificates-section" id="certificate">
      {/* Lightbox Overlay */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cert-lightbox-overlay"
            onClick={() => setZoomImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-lightbox" onClick={() => setZoomImg(null)}>✕</button>
              <img src={zoomImg.img} alt={zoomImg.title} className="lightbox-img" />
              <p className="lightbox-caption">{zoomImg.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="cert-bg-blob blob-1"></div>
      <div className="cert-bg-blob blob-2"></div>

      <header className="cert-header">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full" />
      </header>

      <div className="cert-slider-container">
        <button className="cert-nav-btn left" onClick={prevSlide}>❮</button>

        <div className="cert-display-area">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="cert-glass-card"
              onClick={() => setZoomImg(certificates[index])}
              /* ... keep your variants and drag props from previous step ... */
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -50) nextSlide();
                else if (offset.x > 50) prevSlide();
              }}
            >
              <div className="cert-image-wrapper">
                <img src={certificates[index].img} alt={certificates[index].title} />
                <div className="cert-view-hint">
                   <span>Click to View Full Size</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="cert-nav-btn right" onClick={nextSlide}>❯</button>
      </div>

      <div className="cert-pagination">
        {certificates.map((_, i) => (
          <button
            key={i}
            className={`pagination-dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;