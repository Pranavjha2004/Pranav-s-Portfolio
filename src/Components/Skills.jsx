import React from 'react';
import './Skills.css';
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

function Skills() {
  return (
    <div className="skills-container">
      <h1 className='text-white text-3xl text-center font-ubuntu font-bold mt-11 mb-4'>My Skills</h1>
      <div className="marquee overflow-hidden relative">
        <div className="marquee-track flex items-center animate-scroll">
          <img src={reactImg} alt="React" className="skill-icon" />
          <img src={htmlImg} alt="HTML" className="skill-icon" />
          <img src={cssImg} alt="CSS" className="skill-icon" />
          <img src={jsImg} alt="JavaScript" className="skill-icon" />
          <img src={githubImg} alt="GitHub" className="skill-icon" />
          <img src={tailwind} alt="Tailwind CSS" className="skill-icon" />
          <img src={nodejs} alt="Node.js" className="skill-icon" />
          <img src={mongodb} alt="MongoDB" className="skill-icon" />
          <img src={firebase} alt="Firebase" className="skill-icon" />
          <img src={java} alt="Java" className="skill-icon" />
          <img src={cpp} alt="C++" className="skill-icon" />
          <img src={figma} alt="Figma" className="skill-icon" />
          <img src={python} alt="Python" className="skill-icon" />
          <img src={reactImg} alt="React" className="skill-icon" />
          <img src={htmlImg} alt="HTML" className="skill-icon" />
          <img src={cssImg} alt="CSS" className="skill-icon" />
          <img src={jsImg} alt="JavaScript" className="skill-icon" />
          <img src={githubImg} alt="GitHub" className="skill-icon" />
          <img src={mongodb} alt="MongoDB" className="skill-icon" />
          <img src={firebase} alt="Firebase" className="skill-icon" />
          <img src={java} alt="Java" className="skill-icon" />
          <img src={cpp} alt="C++" className="skill-icon" />
          <img src={figma} alt="Figma" className="skill-icon" />
          <img src={python} alt="Python" className="skill-icon" />
          <img src={reactImg} alt="React" className="skill-icon" />
          <img src={htmlImg} alt="HTML" className="skill-icon" />
          <img src={cssImg} alt="CSS" className="skill-icon" />
          <img src={jsImg} alt="JavaScript" className="skill-icon" />
          <img src={githubImg} alt="GitHub" className="skill-icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
