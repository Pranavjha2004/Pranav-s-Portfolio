import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

// Asset Imports
import frontendIcon from "../assets/frontend_icon.png";
import backendIcon from "../assets/backend_icon.png";
import designIcon from "../assets/figma_icon.png";
import fullstackIcon from "../assets/fullstack_icon.png";
import dsaIcon from "../assets/dsa_icon.png";
import ai_ml_icon from "../assets/ai_ml_icon.png";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Frontend Development", icon: frontendIcon, desc: "Crafting responsive and visually engaging interfaces using React, Tailwind CSS and modern frontend tools." },
  { title: "Backend Development", icon: backendIcon, desc: "Developing scalable APIs and backend systems with Node.js, Express and database integration." },
  { title: "UI / UX Design", icon: designIcon, desc: "Designing modern user experiences and clean interfaces with strong usability principles." },
  { title: "Full Stack Development", icon: fullstackIcon, desc: "Building complete applications from frontend interfaces to backend architecture." },
  { title: "Data Structures & Algorithms", icon: dsaIcon, desc: "Applying efficient algorithms and optimized logic to solve complex problems." },
  { title: "AI/ML Development", icon: ai_ml_icon, desc: "Creating smart AI-powered solutions that learn from data, improve performance, and deliver meaningful insights." }
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight Variable
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // Magnetic Tilt Logic
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) * 0.15;
    const moveY = (y - centerY) * 0.15;

    gsap.to(card, {
      x: moveX,
      y: moveY,
      rotateX: -moveY * 0.1,
      rotateY: moveX * 0.1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const resetMagnetic = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--x", `50%`);
    card.style.setProperty("--y", `50%`);
    
    gsap.to(card, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <section ref={sectionRef} className="about-section" id="about">
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: ["#33CCFF", "#A000FF"] },
            links: { enable: true, color: "#33CCFF", opacity: 0.1, distance: 150 },
            move: { enable: true, speed: 0.8 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } }
          }
        }}
      />

      <div className="about-content container mx-auto px-6">
        <header className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            WHO <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">I AM</span>
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full" />
        </header>

        <div className="services-container">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetMagnetic}
            >
              <div className="card-inner">
                <div className="icon-box">
                  <img src={service.icon} className="service-icon" alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-border-gradient"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;