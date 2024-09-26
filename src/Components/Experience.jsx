import React, { useEffect, useRef, useState } from 'react';
import CompanyALogo from '../assets/Su_logo.jpg';
import CompanyBLogo from '../assets/Deck-logo.png';
import CompanyCLogo from '../assets/Switchclub_logo.jpg';

const experiences = [
  {
    company: "Silicon University",
    position: "MERN Stack",
    duration: "Jun 2024 - Jul 2024",
    description: "Worked on developing scalable web applications and enhancing user experiences.",
    logo: CompanyALogo,
  },
  {
    company: "DeckFlare",
    position: "Web Developer and Manager",
    duration: "Jul 2024 - Present",
    description: "Led a team to design and implement responsive web designs using React and Tailwind CSS.",
    logo: CompanyBLogo,
  },
  {
    company: "Switch Club",
    position: "Core-Member (Tech Team)",
    duration: "Sept 2024 - Present",
    description: "Collaborated on various projects focusing on improving UX/UI and web performance.",
    logo: CompanyCLogo,
  }
];

const Experience = () => {
  const [activeCards, setActiveCards] = useState(new Set()); // Use Set to prevent duplicates
  const lineRef = useRef(null); // Ref for the timeline line

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCards(prev => new Set(prev).add(entry.target.id)); // Ensure unique entries
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.experience-card');
    elements.forEach(el => observer.observe(el));

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-5 py-10 mt-12 overflow-x-hidden" id='experience'>
      <h2 className="text-3xl font-bold text-center mb-8 text-white font-ubuntu">Work Experience</h2>
      
      {/* Timeline Line */}
      <div
        ref={lineRef}
        className={`overflow-x-hidden h-[715px] w-1 bg-gray-300 absolute transition-all duration-[2000ms] ease-in-out 
          ${activeCards.has('timeline-line') ? 'h-full opacity-100 shadow-xl' : 'h-0 opacity-0 shadow-none'}`}
        id="timeline-line"
        style={{ left: '50%', transform: 'translateX(-50%)' }} // Center the timeline line
      ></div>

      {experiences.map((experience, index) => (
        <div
          key={index}
          id={`card-${index}`}
          className={`experience-card mb-14 w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:ml-auto md:pr-16' : 'md:mr-auto md:pl-16'
          } relative transition-all duration-[1500ms] ease-out opacity-0 
            ${activeCards.has(`card-${index}`) 
              ? `opacity-100 translate-x-0` 
              : index % 2 === 0 
              ? 'translate-x-12' // Right side cards translate from the right
              : '-translate-x-12' // Left side cards translate from the left
            }`}
        >
          {/* Timeline Dot with Company Logo */}
          <span className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white object-cover`}>
            <img className='rounded-full w-full h-full' src={experience.logo} alt={`${experience.company} logo`} />
          </span>

          {/* Experience Card */}
          <div className="overflow-x-hidden bg-white px-10 mr-10 ml-7 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold pt-5 text-gray-800">{experience.company}</h3>
            <span className="text-sm font-medium text-gray-600">{experience.position}</span>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <p className="mt-2 text-gray-700">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
