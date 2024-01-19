import React from 'react';
import humanitarian from '../../assets/amriimg/aboutImg.jpg';


function HomeEight() {
  return (
      <div style={{ backgroundImage: `url(${humanitarian})` }} className=" crelative w-full bg-no-repeat bg-cover">
        <div className='flex bg-[#000000ae] flex-col px-7 py-16 items-center justify-center w-full z-10 h-full text-center gap-4 p-8 lg:gap-8 md:px-20 lg:px-36 xl:px-44 md:py-20 lg:py-24 xl:py-32'>
          <h2 className='text-3xl font-bold text-[#91cadb] md:text-4xl lg:text-5xl'>Know About Us</h2>
          <p className='font-sans text-base text-white md:text-lg lg:text-xl '>Join us in this video where we explore the ongoing projects, motivational speeches, mind-healing sessions, and global peace initiatives of the Amri Foundation, an inspiring NGO dedicated to positive change in the world.</p>
          <button className='mt-2 lg:mt-5 p-1.5 lg:p-2 px-7 lg:px-10  font-sans text-sm lg:text-lg text-white bg-transparent border-2 border-white transition-colors duration-400 hover:border-[#3a869c] hover:bg-[#3a869c] rounded-3xl font-semibold'>
            <a href="https://www.youtube.com/@AMRI_FOUNDATION">
              Catch up us on Youtube
            </a>
          </button>
        </div>
      </div>
  )
}

export default HomeEight



