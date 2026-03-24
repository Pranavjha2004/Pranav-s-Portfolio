import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
// Asset Imports
import CompanyALogo from "../assets/Su_logo.jpg";
import CompanyBLogo from "../assets/Deck-logo.png";
import CompanyCLogo from "../assets/Switchclub_logo.jpg";
import "./Experience.css";

const experiences = [
  {
    company: "Silicon University",
    position: "MERN Stack Intern",
    duration: "Jun 2024 - Jul 2024",
    description: "Worked on developing scalable web applications and enhancing user experiences through modern MERN architectures.",
    logo: CompanyALogo,
  },
  {
    company: "DeckFlare",
    position: "Web Developer & Manager",
    duration: "Jul 2024 - Aug 2024",
    description: "Led a team to design and implement responsive web designs using React and Tailwind CSS, focusing on performance and SEO.",
    logo: CompanyBLogo,
  },
  {
    company: "Switch Club",
    position: "Joint-Secretary",
    duration: "Sept 2024 - Present",
    description: "Coordinated hackathons and technical events, and delivered sessions to foster practical learning, collaboration, and innovation among students.",
    logo: CompanyCLogo,
  }
];

const Experience = () => {
  const [activeCards, setActiveCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".experience-card, .timeline-path");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="experience-wrapper" id="experience">
      {/* Dynamic Background Glow */}
      <div className="experience-bg-glow" />

      <div className="container mx-auto px-6 relative">
        <header className="experience-header">
          <h2 className="experience-title">
            Professional <span className="title-gradient">Journey</span>
          </h2>
          <div className="title-underline" />
        </header>

        <div className="timeline-container">
          {/* Central Timeline Line (Desktop) / Left Line (Mobile) */}
          <div className="timeline-line">
            <div 
              className={`timeline-path ${activeCards.has("timeline-path") ? "active" : ""}`}
              id="timeline-path"
            />
          </div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div
                key={index}
                id={`exp-card-${index}`}
                className={`experience-card ${index % 2 === 0 ? "left-card" : "right-card"} 
                  ${activeCards.has(`exp-card-${index}`) ? "is-visible" : ""}`}
                onMouseMove={handleMouseMove}
              >
                {/* Timeline Node (The Logo Portal) */}
                <div className="timeline-node">
                  <div className="node-portal">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="node-pulse" />
                </div>

                {/* Content Card */}
                <div className="card-outer-border">
                  <div className="card-inner-content">
                    <div className="card-glow-effect" />
                    
                    <div className="card-header">
                      <div className="header-main">
                        <h3>{exp.company}</h3>
                        <p className="position-tag">{exp.position}</p>
                      </div>
                      <span className="duration-badge">{exp.duration}</span>
                    </div>
                    
                    <p className="description-text">{exp.description}</p>

                    {/* Progress Fill Bottom */}
                    <div 
                      className="card-progress-line" 
                      style={{ width: activeCards.has(`exp-card-${index}`) ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;