import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import PranavPic from '../assets/Pic.jpg'
import { Link } from 'react-scroll';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='font-ubuntu md:ml-40 mt-22 pt-36 text-white flex justify-between mb-32' id='hero'>
        <div className='flex flex-col gap-10 w-3/5 items-center justify-center mx-auto text-center sm:items-start sm:text-left'>
            <div className='rounded-full relative box overflow-hidden w-[205px] h-[205px] sm:hidden'>
                <img className='w-[200px] h-[200px] rounded-full relative z-10' src={PranavPic} alt="Pranav's Pic" />
            </div>
            <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl text-center lg:text-left'>Hi, I'm <span className='text-red-600'><Typewriter words={['Pranav Jha.', 'A Front-End Developer.']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/></span></h1>
            <p className='leading-7 font-medium md:pr-40 md:text-sm lg:text-lg sm:pr-0'>Frontend Web Development. Possess a strong grasp of HTML, CSS, JavaScript, and Tailwind CSS. Passionate about creating responsive, user-friendly web interfaces and committed to learning and applying modern web development practices. Eager to contribute to dynamic projects and collaborate with experienced developers to enhance my skills and knowledge.</p>
            <button className='bg-sky-500 w-32 h-12 rounded-3xl font-bold shadow-custom hover:bg-[#576cbc]'><a href="https://drive.google.com/file/d/1gQh6Cs5_jmzPr5acAec6ilXBCJO7qINt/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></button>
        </div>
        <div className='hidden md:w-[250px] md:h-[250px] md:block rounded-full mr-40 relative box overflow-hidden lg:w-[350px] lg:h-[350px]'>
            <img className='md:w-[245px] md:h-[246px] rounded-full relative z-10 lg:w-[342px] lg:h-[342px]' src={PranavPic} alt="Pranav's Pic" />
        </div>
    </div>
  )
}

export default HeroSection