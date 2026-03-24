import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import PranavPic from "../assets/Pic.png";
import "./HeroSection.css";

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="hero-wrapper font-ubuntu text-white min-h-screen relative flex items-center justify-center overflow-hidden" 
      id="hero"
    >
      {/* Interactive Cursor Spotlight */}
      <div 
        className="hero-spotlight" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }}
      />

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="hero-orb orb-purple"></div>
        <div className="hero-orb orb-cyan"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Swapped order: Profile on Left, Text on Right. Used justify-center for balance */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-40">
          
          {/* PROFILE IMAGE SECTION */}
          <div className="flex-none relative flex justify-center items-center">
            <div className="hero-img-frame">
              {/* Profile Image with Glow */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-700"></div>
                <img
                  src={PranavPic}
                  alt="Pranav Jha"
                  className="hero-profile-img relative"
                />
              </div>

              {/* Decorative Tech Rings */}
              <div className="tech-ring ring-1"></div>
              <div className="tech-ring ring-2"></div>
            </div>
          </div>

          {/* TEXT CONTENT SECTION */}
          <div className="flex-none max-w-2xl text-center lg:text-left space-y-7">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              Available for Work
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent hero-name-glow">
                Pranav Jha
              </span>
            </h1>

            <div className="text-xl sm:text-2xl font-medium text-slate-400 min-h-[40px] tracking-wide">
              <span className="text-cyan-400 font-mono">&gt; </span>
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "AI/ML Engineer",
                  "Deep Learning & Generative AI Engineer",
                  "DSA & Problem Solving Enthusiast",
                  "UI/UX Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Crafting high-performance full-stack applications with 
              <span className="text-white font-normal"> React and Node.js. </span> 
              Building intelligent AI-powered experiences using
              <span className="text-white font-normal"> Machine Learning, Deep Learning, Generative AI, and LangChain. </span>
              Turning complex problems into elegant, scalable, and pixel-perfect digital solutions.
            </p>

            {/* CTA and Social Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
              <a
                href="https://drive.google.com/file/d/1dkv6JmU1QOyq4b7PGSRYlWTeCb59GNiF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-primary-btn"
              >
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
              
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-cyan-500 flex items-center justify-center text-[10px] font-bold shadow-lg">JS</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-purple-500 flex items-center justify-center text-[10px] font-bold shadow-lg">⚛️</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-blue-600 flex items-center justify-center text-[10px] font-bold shadow-lg">C++</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-zinc-500 flex items-center justify-center text-[10px] font-bold shadow-lg">Py</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;