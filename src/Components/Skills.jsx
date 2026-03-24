import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

// Asset Imports
import reactImg from '../assets/React_icon.png';
import htmlImg from '../assets/html_icon.png';
import cssImg from '../assets/css_icon.png';
import jsImg from '../assets/js_icon.png';
import githubImg from '../assets/github_icon.png';
import tailwind from '../assets/tailwindcss_icon.png';
import nodejs from '../assets/nodejs_icon.png';
import mongodb from '../assets/mongodb_icon.png';
import java from '../assets/java_icon.png';
import firebase from '../assets/firebase_icon.png';
import cpp from '../assets/cpp_icon.png';
import figma from '../assets/figma_icon.png'; 
import python from '../assets/Python_logo.png';
import ai_ml from "../assets/ai_ml_icon.png";
import numpy_icon from "../assets/numpy_icon.png";
import cv_icon from "../assets/cv_icon.jpg";
import pandas_icon from "../assets/pandas_icon.png";
import ml_icon from "../assets/ml_icon.png";
import nlp_icon from "../assets/nlp-icon.png";
import Scikit_learn_icon from "../assets/Scikit_learn_icon.png";
import pytorch_icon from "../assets/pytorch_icon.png";
import dl_icon from "../assets/dl_icon.png";

function Skills() {
  const allSkills = [
    { src: reactImg, alt: "React", proficiency: "Advanced" },
    { src: htmlImg, alt: "HTML", proficiency: "Advanced" },
    { src: cssImg, alt: "CSS", proficiency: "Advanced" },
    { src: jsImg, alt: "JavaScript", proficiency: "Advanced" },
    { src: tailwind, alt: "Tailwind CSS", proficiency: "Advanced" },
    { src: nodejs, alt: "Node.js", proficiency: "Intermediate" },
    { src: mongodb, alt: "MongoDB", proficiency: "Intermediate" },
    { src: firebase, alt: "Firebase", proficiency: "Intermediate" },
    { src: githubImg, alt: "GitHub", proficiency: "Advanced" },
    { src: java, alt: "Java", proficiency: "Intermediate" },
    { src: cpp, alt: "C++", proficiency: "Intermediate" },
    { src: python, alt: "Python", proficiency: "Intermediate" },
    { src: figma, alt: "Figma", proficiency: "Beginner" },
    { src: ai_ml, alt: "AI/ML", proficiency: "Intermediate" },
    { src: numpy_icon, alt: "NUMPY", proficiency: "Intermediate" },
    { src: pandas_icon, alt: "PANDAS", proficiency: "Intermediate" },
    { src: ml_icon, alt: "Machine Learning", proficiency: "Intermediate" },
    { src: Scikit_learn_icon, alt: "Scikit learn", proficiency: "Intermediate" },
    { src: dl_icon, alt: "Deep Learning", proficiency: "Intermediate" },
    { src: nlp_icon, alt: "NLP", proficiency: "Intermediate" },
    { src: cv_icon, alt: "Computer Vision", proficiency: "Intermediate" },
    { src: pytorch_icon, alt: "Pytorch", proficiency: "Intermediate" },
  ];

  const glassContainerRef = useRef(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = glassContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setGlowPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="skills-wrapper" id="skills">
      {/* Background Decorative Blobs */}
      <div className="skills-blob skills-blob-purple" />
      <div className="skills-blob skills-blob-cyan" />
      
      <div className="skills-inner-container">
        <header className="skills-header">
          <h2 className="skills-title">
            Tech <span className="title-gradient">Arsenal</span>
          </h2>
          <div className="title-underline" />
        </header>

        <div 
          ref={glassContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="skills-glass-container"
        >
          {/* Mouse Following Glow */}
          <div
            className="skills-mouse-glow"
            style={{
              background: `radial-gradient(600px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(51, 204, 255, 0.12), transparent 70%)`,
              opacity: isHovered ? 1 : 0
            }}
          />

          {/* Infinity Marquee */}
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {/* Triple mapping for a truly seamless transition on any screen width */}
              {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-pill ${skill.proficiency.toLowerCase()}`}
                >
                  <div className="skill-pill-inner">
                    <div className="skill-img-box">
                       <img src={skill.src} alt={skill.alt} className="skill-icon-img" />
                    </div>
                    <div className="skill-info">
                      <span className="skill-text">{skill.alt}</span>
                      <span className="skill-level">{skill.proficiency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;