import React from 'react'

function GlobalCardTabs({global}) {
    return (
        <div className='flex flex-col w-full h-auto '>
            <div className=' h-60 lg:h-72  rounded-t-3xl overflow-hidden border-2'>
            <img src={global.img} className='h-full object-cover w-full duration-300 bg-top hover:scale-110 transtion-all' alt="" />
            </div>
            <div className='flex flex-col w-full h-full gap-3 p-4 border-2 lg:p-8 rounded-b-3xl'>
                <h3 className='text-2xl lg:text-3xl underline-offset-2'>{global.title}</h3>
                <p className='font-sans tracking-wide text-md lg:text-lg'>{global.description}</p>
            </div>
        </div>
    )
}

export default GlobalCardTabs