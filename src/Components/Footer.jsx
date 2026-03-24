import React from 'react';
import logo1 from '../assets/gmail-logo.png';
import logo2 from '../assets/linkedin-icon.png';
import logo3 from '../assets/github-logo.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-container'>
      {/* Decorative Top Border Line */}
      <div className="footer-top-line"></div>

      <div className='footer-content container mx-auto px-6 py-12 flex flex-col items-center gap-8'>
        
        {/* Social Links Group */}
        <div className='flex justify-center items-center gap-6 md:gap-10'>
          
          {/* Gmail */}
          <a href="mailto:jhapranav2004@gmail.com" target="_blank" rel="noopener noreferrer" className="social-orb-wrapper">
            <div className='social-orb group gmail'>
              <img className='social-icon' src={logo1} alt="Gmail" />
              <div className="orb-glow"></div>
            </div>
            <span className="tooltip">Email</span>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/Pranavjha2004" target="_blank" rel="noopener noreferrer" className="social-orb-wrapper">
            <div className='social-orb group github'>
              <img className='social-icon github-icon-filter' src={logo3} alt="GitHub" />
              <div className="orb-glow"></div>
            </div>
            <span className="tooltip">GitHub</span>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/pranav-kumar-jha-2669722b5/" target="_blank" rel="noopener noreferrer" className="social-orb-wrapper">
            <div className='social-orb group linkedin'>
              <img className='social-icon linkedin-icon-filter' src={logo2} alt="LinkedIn" />
              <div className="orb-glow"></div>
            </div>
            <span className="tooltip">LinkedIn</span>
          </a>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col items-center gap-2">
          <p className='text-center text-sm md:text-base text-slate-400 font-medium tracking-wide'>
            Copyright © {currentYear} | Designed & Developed with <span className="heart-beat">❤️</span> by <span className="text-white font-bold">Pranav Jha</span>
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;