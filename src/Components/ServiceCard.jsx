import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function ServiceCard({ img, title, buttonTo }) {
  return (
    <div className='w-full h-full text-center bg-white lg:text-start'>
      <div className='w-full h-64 overflow-hidden'>
        <img src={img} className='object-cover w-full h-full transition-all duration-500 hover:scale-110 ' alt="" />
      </div>
      <Link to={buttonTo} onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className='cursor-pointer'>
        <div className="flex items-center justify-between p-3 px-5 bg-white ">
          <h3 className="font-sans text-xl truncate">{title}</h3>
          <IoIosArrowForward className='text-2xl' />
        </div>
        <div className='w-full p-2 bg-[#295e6e]'></div>
      </Link>
    </div>
  )
}

export default ServiceCard