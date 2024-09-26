import React from 'react';
import Cards from './Cards';
import img1 from '../assets/netflix_logo.jpg'
import img2 from '../assets/Deck-logo.png'
import img3 from '../assets/news-icon.png'

function Projects(props) {
  return (
    <div className='mt-14'>
        <h1 className='text-center font-ubuntu text-white text-3xl font-bold mb-10' id='projects'>Projects</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 md:px-20 mx-auto'>
        <Cards imgAddress={img1} title="Netflix Landing Page Clone" content="Created a responsive clone of the Netflix landing page using HTML5, CSS, and JavaScript. This project showcases my ability to replicate complex layouts and design elements, emphasizing skills in responsive web design and front-end development."></Cards>
        <Cards imgAddress={img2} title="Created Agency Website" content="During my internship at Deckflare, I built a responsive agency website using React.js and Tailwind CSS, focusing on a modern interface and cross-device compatibility. This project sharpened my skills in creating optimized, user-friendly applications."></Cards>
        <Cards imgAddress={img3} title="News Hub" content="Developed a dynamic news website using the News API to fetch the latest updates. Built with HTML5, CSS, and JavaScript, this project highlights my skills in API integration, handling asynchronous data, and creating a user-friendly interface for real-time updates."></Cards>
    </div>
    </div>
  );
}

export default Projects;
