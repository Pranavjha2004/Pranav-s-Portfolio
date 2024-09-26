import React from 'react';

function Cards(props) {
  return (
    <div className='flex flex-col text-white justify-center items-center w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-xl cursor-pointer bg-[#1d1d20] transform transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-custom m-4'>
      <div className='w-full'>
        <img 
          className='w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] xl:h-[300px] rounded-t-xl object-cover' 
          src={props.imgAddress} 
          alt="Illustration-Img" 
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-4 p-4'>
        {/* Title with ellipsis to handle overflow */}
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center overflow-hidden text-ellipsis whitespace-nowrap w-full'>
          {props.title}
        </h1>

        {/* Content with overflow handling */}
        <p className='text-xs sm:text-sm md:text-base text-center text-[#8F8F8F] overflow-hidden break-words'>
          {props.content}
        </p>

        {/* Buttons Container */}
        <div className='flex justify-center flex-wrap gap-4 md:gap-6 w-full'>
          <a href="https://deck-flare.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className='bg-yellow-500 text-black w-32 sm:w-36 md:w-40 text-center py-2 px-4 rounded-3xl font-bold cursor-pointer'>
              Demo
            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className='bg-yellow-500 text-black w-32 sm:w-36 md:w-40 text-center py-2 px-4 rounded-3xl font-bold cursor-pointer'>
              Source
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
