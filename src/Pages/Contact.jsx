import React from 'react'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

function Contact() {
  return (
        <div className='relative flex flex-col items-center justify-center w-full h-full gap-10 px-5 py-7 md:py-16 lg:py-22 lg:gap-16 xl:gap-20 md:px-10 lg:px-10 xl:px-36'>
            <h2 className=' text-4xl md:text-5xl lg:text-[3.5rem]'>Contact us</h2>
            <div className='grid items-center w-full h-full gap-10 py-5 font-sans gird-cols-1 grid-rows-auto md:grid-cols-2 lg:gap-16 lg:py-10'>
                <div className='flex flex-col items-start justify-start w-full h-full gap-y-5'>
                    <p className='text-lg md:text-xl '>Click here to become an amri global volunteer. Be a part of change</p>
                    <div className='flex items-start w-full h-auto gap-2 md:gap-5 lg:mt-10'>
                        <div className='bg-[#295e6e]  text-white rounded-xl p-2 text-xl md:text-xl'><FiPhoneCall/></div>
                        <div className='flex flex-col items-start w-full text-lg font-normal tracking-wide md:text-xl'>
                            <p>+91 984765 4069</p>
                            <p>+91 960565 5712</p>
                        </div>
                    </div>
                    <div className='flex items-start w-full h-auto gap-2 tracking-wide md:gap-5'>
                        <div className='bg-[#295e6e]  text-white rounded-xl p-2 text-xl  md:text-xl'><FiMail/></div>
                        <p className='text-lg font-normal md:text-xl'>info@amrifoundation.com</p>
                    </div>
                    <div className='flex items-start w-full h-auto gap-2 tracking-wide md:gap-5'>
                        <div className='bg-[#295e6e] text-white rounded-xl p-2 text-xl  md:text-xl'><FiMapPin/></div>
                        <div className='flex flex-col items-start w-full text-lg font-normal md:text-xl'>
                            <p>Chelavoor, Calicut, Kerala</p>
                            {/* <p>679 325 , MALAPPURAM, KERALA</p> */}
                        </div>
                    </div>
                </div>
                <iframe className='w-full h-full rounded' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15649.971542774587!2d75.8548959!3d11.29864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65d2266ae849b%3A0x630f5b99ff193d30!2sRAHA%20LIVING%20Home%20Decor!5e0!3m2!1sen!2sin!4v1703592709373!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  )
}

export default Contact