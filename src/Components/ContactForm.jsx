import React, { useState } from 'react';
import contact_illustration from '../assets/contact-illustration.png';

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "372f0c13-0728-472a-a8d0-a88fcb409a1a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='flex justify-center py-8'>
      <div className='bg-[#091019] mx-4 sm:mx-10 md:mx-16 lg:mx-20 mt-16 text-white font-ubuntu rounded-xl flex flex-col md:flex-row lg:gap-72 shadow-custom w-full max-w-[1200px]'>
        <img className='w-full md:w-[400px] md:ml-10' src={contact_illustration} alt="Contact Illustration" />
        <div className='flex flex-col gap-7 p-4 md:p-10'>
          <h1 className='text-center font-bold text-3xl mt-4 md:mt-12'>Contact Me</h1>
          <form className='flex flex-col w-full max-w-sm mx-auto gap-8 text-black' onSubmit={onSubmit}>
            <input className='p-2 rounded-3xl bg-[#f6e3d3] placeholder:text-black font-medium font-ubuntu pl-5 outline-none' type="text" name="name" placeholder='Name' required />
            <input className='p-2 rounded-3xl bg-[#f6e3d3] placeholder:text-black font-medium font-ubuntu pl-5 outline-none' type="email" name="email" placeholder='Email' required />
            <textarea className='p-2 rounded-3xl bg-[#f6e3d3] placeholder:text-black font-medium font-ubuntu pl-5 outline-none' placeholder='Message' required name="message"></textarea>
            <button className='self-center text-white bg-[#eab308] w-36 rounded-full py-1 mt-3 hover:bg-[#faa41a]' type="submit">Submit</button>
          </form>
          <span className='text-center'>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
