import React from 'react';
import bgAcademic from '../../assets/Img/bgPattern.jpg';
import ServiceCard from '../ServiceCard';
import {InitiativesData} from '../../Data/InitiativesData';



function HomeTwo() {

  return (
    <div id="Academics" style={{ backgroundImage: `url(${bgAcademic})` }} className='relative flex flex-col items-center justify-center w-full h-full px-5 py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24 md:px-10 lg:px-10 xl:px-36'>
      <h2 className='w-full text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl'>Sustainable Development Goals</h2>
      <div className='grid h-full gap-3 pt-10 lg:pt-20 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:gap-10 '>
        {InitiativesData.map((data) => (
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
