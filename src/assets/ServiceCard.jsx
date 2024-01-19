import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function ServiceCard({ img, title }) {
  return (
    <div className='w-full h-auto text-center bg-white lg:text-start'>
      <div className='w-full h-64 overflow-hidden '>
        <img src={img} className='object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-110' alt="" />
      </div>
      <div className="flex items-center justify-between p-3 px-5 bg-white cursor-pointer">
        <h3 className="font-sans text-xl truncate">{title}</h3>
        <IoIosArrowForward className='text-2xl' />
      </div>
      <div className='w-full p-2 bg-[#295e6e]'></div>
    </div>
  )
}

export default ServiceCard