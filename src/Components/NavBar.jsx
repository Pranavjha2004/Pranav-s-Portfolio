import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container fixed top-0 right-0 left-0 z-[1000] bg-custom-gradient text-white'>
      <div className='flex justify-between items-center font-ubuntu pt-6 pb-6 px-6 md:px-20'>
        <div className='cursor-pointer font-bold text-3xl'>
          <Link to="hero" spy={true} smooth={true} offset={10} duration={500}>
            Portfolio
          </Link>
        </div>
        <div className='md:hidden'>
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-between gap-5 font-bold text-xl cursor-pointer'>
          <li className='nav-items'><Link to="about" spy={true} smooth={true} offset={-95} duration={500}>About</Link></li>
          <li className='nav-items'><Link to="experience" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link></li>
          <li className='nav-items'><Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>Projects</Link></li>
          <li className='nav-items'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center gap-6 font-bold text-xl bg-custom-gradient pb-6'>
          <li className='nav-items'><Link to="about" spy={true} smooth={true} offset={-95} duration={500} onClick={toggleMenu}>About</Link></li>
          <li className='nav-items'><Link to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleMenu}>Experience</Link></li>
          <li className='nav-items'><Link to="projects" spy={true} smooth={true} offset={-120} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li className='nav-items'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>Contact Me</Link></li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
