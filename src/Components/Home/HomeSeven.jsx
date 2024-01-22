import React from 'react'
import globalImpact from '../../assets/amriimg/world-map.jpg'


function HomeSeven() {
  return (
    <div className='w-full h-auto px-5 py-10 bg-white md:px-10 lg:px-10 xl:px-36 md:py-16 lg:py-20 xl:py-28'> 
    <div className='flex flex-col items-center w-full h-full space-y-5 text-center lg:space-y-7 xl:space-y-9'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Global Impact </h2>
        <img className='object-cover w-full h-auto rounded-b-3xl' src={globalImpact} alt="Amri Global Impact" />
    </div>
    </div>
  )
}

export default HomeSeven