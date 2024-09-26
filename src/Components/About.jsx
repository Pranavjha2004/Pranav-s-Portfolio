import React from 'react';
import AboutHero from '../assets/AboutHero.png';
import frontendIcon from '../assets/frontend_icon.png';
import backendIcon from '../assets/backend_icon.png';
import designIcon from '../assets/figma_icon.png';

function About() {
  return (
    <div className='flex flex-col bg-[#091019] text-white font-ubuntu mx-4 md:mx-8 lg:mx-20 rounded-2xl mt-20 shadow-custom overflow-hidden' id='about'>
      <h1 className='text-2xl font-bold ml-6 md:ml-10 lg:ml-14 mt-10'>ABOUT</h1>
      <div className='flex flex-col-reverse md:flex-row items-center px-4 md:px-8 lg:px-12'>
        <div className='flex-1 max-w-full md:max-w-xs lg:max-w-md'>
          <img className='w-full h-auto object-cover rounded-lg' src={AboutHero} alt="About-Hero-Img" />
        </div>
        <div className='flex-1 mt-8 md:mt-0'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-start bg-gradient-to-r backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg hover:from-white/30 hover:to-white/10 transition duration-500 py-4 px-4'>
              <img className='w-10 md:w-12 lg:w-14 h-auto' src={frontendIcon} alt="Frontend-illustration" />
              <div>
                <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>Frontend Developer</h2>
                <p className='text-sm md:text-base lg:text-lg'>I'm a Frontend Developer with experience in building responsive and optimized sites.</p>
              </div>
            </div>
            <div className='flex gap-4 items-start bg-gradient-to-r backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg hover:from-white/30 hover:to-white/10 transition duration-500 py-4 px-4'>
              <img className='w-10 md:w-12 lg:w-14 h-auto' src={backendIcon} alt="Backend-illustration" />
              <div>
                <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>Backend Developer</h2>
                <p className='text-sm md:text-base lg:text-lg'>I have experience in developing fast and optimized back-end systems and APIs.</p>
              </div>
            </div>
            <div className='flex gap-4 items-start bg-gradient-to-r backdrop-blur-lg bg-opacity-10 rounded-lg shadow-lg hover:from-white/30 hover:to-white/10 transition duration-500 py-4 px-4'>
              <img className='w-10 md:w-12 lg:w-14 h-auto' src={designIcon} alt="Design-illustration" />
              <div>
                <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>UI Designer</h2>
                <p className='text-sm md:text-base lg:text-lg'>I have designed multiple sites' landing pages and created design systems as well.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
