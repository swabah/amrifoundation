import React from 'react';

function TeamiCard({ item }) {
  return (
    <div className='w-full h-auto border-l-8 lg:border-l-[18px] rounded-l-3xl border-[#295e6e] bg-white shadow-md cursor-pointer'>
      <div className='bg-[#E5E7EB] rounded-l-xl h-[20vh] md:h-[25vh] lg:h-[35vh] w-full overflow-hidden relative'>
        <img className='absolute inset-0 top-0 object-cover w-full h-full transition-all duration-300 hover:scale-110' src={item.img} alt='' />
      </div>
      <div className='w-full h-full p-3 text-center lg:py-6 lg:px-8'>
        <h3 className='text-lg leading-5 md:text-xl lg:text-2xl'>{item.name}</h3>
        <p className='py-2 font-sans text-sm md:text-base lg:pb-5 lg:text-xl'>{item.position}</p>
        {/* <div className='w-full py-2 lg:py-2.5  text-center'>
            <a herf={item.buttonTo} className='rounded-lg w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 lg:pt-1 px-5 pb-1.5 text-sm lg:text-lg font-sans  '>Learn More</a>
        </div> */}
      </div>
    </div>
  );
}

export default TeamiCard;
