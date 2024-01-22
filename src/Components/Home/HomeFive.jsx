import React from 'react'
import groundtwo from '../../assets/amriimg/AboutEdu.jpg'
import donation from '../../assets/amriimg/donation.jpeg';
import {ChartJS} from '../../assets/ChartJS'


function HomeFive() {
  return (
    <div className='w-full h-auto'>
      <img src={groundtwo} className='object-cover w-full h-52 md:h-96' alt="" />
      <div  className='flex flex-col items-center justify-center w-full h-full gap-10 px-5 py-10 overflow-hidden lg:flex-row md:px-10 lg:px-10 xl:px-36 md:py-16 lg:py-20 xl:py-28'>
        <div className='xl:w-1/2'>
          <ChartJS/>
        </div>
          <img className='hidden w-1/2 xl:block rounded-3xl' src={donation} alt="" />
      </div>
    </div>
  )
}

export default HomeFive