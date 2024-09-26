import React from 'react'
import logo1 from '../assets/gmail-logo.png'
import logo2 from '../assets/linkedin-icon.png'
import logo3 from '../assets/github-logo.png'

function Footer() {
  return (
    <div className='mt-10 bg-[#1d1d20] flex flex-col justify-center items-center p-4 gap-3 text-white'>
        <div className='flex justify-center items-center gap-7'>
        <a href="mailto:jhapranav2004@gmail.com"><div className='w-12 rounded-[100%] bg-[#f6e3d3] p-2 hover:bg-[#7b7b7c] cursor-pointer'><img className='w-10' src={logo1} alt="Gmail-Logo" /></div></a>
        <a href="https://github.com/Pranavjha2004" target="_blank" rel="noopener noreferrer"><div className='w-12 rounded-[100%] bg-[#f6e3d3] p-2 hover:bg-[#7b7b7c] cursor-pointer'><img className='w-10' src={logo3} alt="Github-logo" /></div></a>
        <a href="https://www.linkedin.com/in/pranav-kumar-jha-2669722b5/" target="_blank" rel="noopener noreferrer"><div className='w-12 rounded-[100%] bg-[#f6e3d3] p-2 hover:bg-[#7b7b7c] cursor-pointer'><img className='w-10' src={logo2} alt="Linkedln-Logo"/></div></a>
        </div>
        <p className='text-center'>Copyright © 2024. Designed with ❤️ Pranav Jha ❤️</p>
    </div>
  )
}

export default Footer;