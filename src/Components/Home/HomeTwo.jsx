import React from 'react';
import bgAcademic from '../../assets/Img/bgPattern.jpg';
import { ServiceData } from '../../Data/ServiceData'
import ServiceCard from '../ServiceCard';




function HomeTwo() {

  return (
    <div id="Academics" style={{ backgroundImage: `url(${bgAcademic})` }} className='relative flex flex-col items-center justify-center w-full h-full px-3 py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24 md:px-10 lg:px-10 xl:px-36'>
      <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
      <h2 className='w-full text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl'>Sustainable Development Goals</h2>
      <div className='grid h-auto gap-3 pt-10 lg:pt-20 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5 lg:gap-4 xl:gap-10 md:grid-rows-2'>
        {ServiceData.map((data) => (
          <ServiceCard
            img={data.img}
            title={data.title}
            buttonTo={data.buttonTo}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeTwo;
