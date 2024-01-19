import React from 'react'
import homebg from '../assets/home.mp4'
import HomeTwo from '../Components/Home/HomeTwo';
import HomeThree from '../Components/Home/HomeThree';
import HomeFive from '../Components/Home/HomeFive';
import HomeSeven from '../Components/Home/HomeSeven';
import HomeEight from '../Components/Home/HomeEight';
import { Link } from 'react-router-dom';
import HomeFour from '../Components/Home/HomeFour';

function Home() {

  return (
    <div className='w-full h-full bg-white'>
      <div id='Home' className='relative flex flex-col items-center justify-center w-full h-screen space-y-5 bg-center '>
        <div className='absolute inset-0 w-full h-full '>
          <div className='absolute  gap-2 lg:gap-5 pt-20 inset-0 w-full h-full flex flex-col items-center justify-center bg-[#00000061] z-10 text-center px-3 py-16 md:px-10 lg:px-10 xl:px-36 lg:py-20 xl:py-24'>
            <h2 className='font-sans m-0 text-4xl md:text-5xl lg:text-[55px] font-bold text-white uppercase'>Maximizing Talent Acceleration</h2>
            <p className='font-sans text-white lg:text-lg text-md '>Amri Foundation, rooted in India with a global vision, <br /> operates with the philosophy of 'Vasudhaiva Kutumbakam'  <br /> - the world is one family</p>
            <button className=" p-1.5 md:p-2 px-7 md:px-10 mt-4 font-sans text-md lg:text-lg text-white bg-transparent border-2 border-white transition-colors duration-400 hover:border-[#3a869c] hover:bg-[#3a869c] rounded-3xl font-semibold'">
              <Link to='/aboutUs'>
                Know More
              </Link>
            </button>
          </div>
          <video loop autoPlay className='object-cover w-full h-full ' src={homebg} />
        </div>
      </div>
      <HomeTwo />
      <HomeThree />
      {/* <HomeFive /> */}
      <HomeEight />
      <HomeFour/>
      <HomeSeven />
    </div>
  )
}

export default Home