import React, { useRef, useState, useEffect } from "react";
import Cards from "./Cards";

// Asset Imports
import netflix from "../assets/netflix_logo.jpg";
import deck_flare from "../assets/Deck-logo.png";
import zomato from "../assets/zomato_logo.png";
import portfolio_logo from "../assets/portfolio_logo.png";
import weather from "../assets/weather_logo.png";
import movie_logo from "../assets/movie_logo.jpg";
import news_icon from "../assets/news-icon.png";
import nirman from "../assets/nirman_logo.jpg";
import game1_logo from "../assets/game1_logo.jpg";
import pdf_studio_logo from "../assets/pdf_studio_logo.jpg";
import quiz_logo from "../assets/quiz_logo.jpg";
import ai_image_gen_logo from "../assets/ai_image_gen_logo.jpg";
import reel_logo from "../assets/reel_logo.jpg";
import masterofkeys_logo from "../assets/masterofkeys_logo.jpg";
import urbanloop_logo from "../assets/urbanloop_logo.jpg";

import "./Projects.css";

// The missing data array
const projectsData = [
  {
    imgAddress: netflix,
    title: "Netflix Landing Page Clone",
    content: "Replicated the Netflix landing page using HTML5, CSS, and JavaScript with high fidelity animations.",
    demolink: "https://netflix-clone-two-gray.vercel.app/",
    githublink: "",
  },
  {
    imgAddress: deck_flare,
    title: "Deck Flare Agency Website",
    content: "Built a responsive agency website with React.js and Tailwind CSS featuring smooth scroll and glassmorphism.",
    demolink: "https://deck-flare.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/DeckFlare/tree/main/DeckFlare",
  },
  {
    imgAddress: zomato,
    title: "Zomato Clone",
    content: "Built a Zomato-inspired food delivery UI clone with responsive design and optimized layout using modern frontend technologies.",
    demolink: "https://zomato-olive.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Zomato",
  },
  {
    imgAddress: portfolio_logo,
    title: "Personal Portfolio Website",
    content: "Modern portfolio website using React and Tailwind CSS with framer-motion animations.",
    demolink: "https://pranavs-portfolio.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Pranav-s-Portfolio",
  },
  {
    imgAddress: weather,
    title: "Weather Dashboard",
    content: "Weather forecast web app using OpenWeather API with dynamic background changes based on climate.",
    demolink: "https://weather-app-project-ashy-nine.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Weather_App_Project",
  },
  {
    imgAddress: movie_logo,
    title: "Simple TMDB Movie Website",
    content: "Developed a movie browsing website using TMDB API to fetch and display trending movies and dynamic search results.",
    demolink: "https://mov-flix-tau.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/MovFlix",
  },
  {
    imgAddress: news_icon,
    title: "Beast News",
    content: "Built a dynamic news platform using API calls to fetch real-time news with responsive design and seamless content updates.",
    demolink: "https://beast-news.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Beast_News",
  },
  {
    imgAddress: nirman,
    title: "NIRMAN Website",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://nirman-green.vercel.app/",
    githublink: "https://github.com/SWITCH-SU/Nirman",
  },
  {
    imgAddress: game1_logo,
    title: "Tic-Tac-Toe Fun Game",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://tic-tac-toe-game-ten-phi.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Tic_Tac_Toe_Game",
  },
  {
    imgAddress: pdf_studio_logo,
    title: "PDF Studio",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://pdf-studio-five.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/PDF-Studio",
  },
  {
    imgAddress: quiz_logo,
    title: "React QUIZ Platform",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://quiz-app-ruddy-theta.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/Quiz_App",
  },
  {
    imgAddress: ai_image_gen_logo,
    title: "DreamForge- AI image generator",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://dream-forge-bay.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/DreamForge",
  },
  {
    imgAddress: reel_logo,
    title: "Giggle Grid - Reel Platform",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://giggle-grid-rho.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/GiggleGrid",
  },
  {
    imgAddress: masterofkeys_logo,
    title: "Master Of Keys",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "https://master-of-keys.vercel.app/",
    githublink: "https://github.com/Pranavjha2004/MasterOfKeys",
  },
  {
    imgAddress: urbanloop_logo,
    title: "Urban Loop",
    content: "Built an engaging and fully responsive landing page for NIRMAN tech fest using React, GSAP animations, and Tailwind CSS to enhance user experience.",
    demolink: "#",
    githublink: "https://github.com/Pranavjha2004/Urban-Loop",
  },
];

function Projects() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // Calculate which dot should be active
    const index = Math.round(scrollLeft / (scrollWidth / projectsData.length));
    setActiveIndex(index);

    // Update arrows
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollState();
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen py-24 bg-[#020617] overflow-hidden" id="projects">
      {/* Background Blobs ... */}

      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Selected <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full" />
        </header>

        <div className="relative group/container">
          {/* Desktop Arrows (Hidden on Mobile) */}
          {showLeftArrow && (
            <button onClick={() => scroll("left")} className="nav-arrow left-arrow">❮</button>
          )}
          {showRightArrow && (
            <button onClick={() => scroll("right")} className="nav-arrow right-arrow">❯</button>
          )}

          {/* Right-side "More Content" Gradient Hint (Mobile Only) */}
          <div className={`mobile-scroll-hint ${showRightArrow ? 'opacity-100' : 'opacity-0'}`} />

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 no-scrollbar snap-x snap-mandatory"
          >
            {projectsData.map((project, index) => (
              <Cards key={index} {...project} />
            ))}
          </div>

          {/* NEW: Pagination Dots for Mobile/Tablet Indicator */}
          <div className="flex justify-center gap-3 mt-4">
            {projectsData.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "w-8 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" 
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;