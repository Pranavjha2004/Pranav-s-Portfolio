import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: If scrolled more than 50px, add the glass effect
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The wrapper must ALWAYS have navbar-wrapper for the fixed positioning
    <nav className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className='navbar-container'>
        <div className='logo-section'>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500} className="logo-text">
            PRANAV<span className="text-cyan-400">.</span>
          </Link>
        </div>

        <ul className='hidden md:flex items-center gap-8'>
          {['About', 'Experience', 'Projects', 'Certificate', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
                activeClass="nav-link-active"
              >
                {item === 'Certificate' ? 'Certifications' : item}
              </Link>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className={`hamburger-btn ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <ul className='mobile-nav-list'>
          {['About', 'Experience', 'Projects', 'Certificate', 'Contact'].map((item) => (
            <li key={item} className="w-full text-center">
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleMenu}
                className="mobile-nav-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;