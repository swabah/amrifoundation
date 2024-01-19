import React from 'react'

function CourseCard({ img, title, description, buttonTo }) {
  return (
    <div className='w-full h-auto text-center transition-all duration-500 bg-white rounded-md shadow-md hover:shadow-xl lg:text-start cursor-grabbing lg:rounded-3xl'>
        <img src={img} className='object-cover w-full h-auto rounded-t-md' alt="" />
        <div className='p-3 md:p-3 xl:py-5 xl:px-8 space-y-1.5 lg:space-y-2.5'>
            <h2 className='text-[#CCA65D] text-xl md:text-[1.35rem] lg:text-3xl'>{title}</h2>
            <p className='font-sans text-sm line-clamp-3 lg:text-lg'>{description}</p>
            <div className='w-full py-1.5 lg:py-2.5 cursor-pointer text-center'>
                <a herf={buttonTo} className='rounded-lg w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 lg:pt-1 px-5 pb-1.5 text-sm lg:text-lg font-sans  '>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default CourseCard