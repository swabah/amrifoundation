import React from 'react'
import AboutImg from '../assets/amriimg/aboutImg.jpg'
import supportImg from '../assets/amriimg/about-2.jpg'
import joinImg from '../assets/amriimg/about_3.jpg'
import PatternBg from '../assets/Img/bgPattern.jpg'
import Life1 from '../assets/amriimg/initiative/food1.jpeg'
import Life2 from '../assets/amriimg/initiative/edu1.jpeg'
import Life3 from '../assets/amriimg/initiative/saveP2.jpeg'
import Life4 from '../assets/amriimg/initiative/WhatsApp Image 2023-11-09 at 6.47.58 AM(2).jpeg'
import { FaCaretRight } from 'react-icons/fa'

function About() {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center w-full h-full py-12 bg-white space-y-7 lg:space-y-12 md:py-16 lg:py-22'>
        <h2 className=' text-4xl md:text-5xl lg:text-[3.5rem]'>About us</h2>
        <img src={AboutImg} className='object-cover w-full h-72 lg:h-96' alt="" />
        <p className='px-3 mt-4 font-sans text-base font-normal leading-snug tracking-wide text-center md:px-10 lg:px-10 xl:px-36 md:text-xl lg:text-2xl'>Amri Foundation, rooted in India with a global vision, operates with the philosophy of 'Vasudhaiva Kutumbakam' - the world is one family. With headquarters in Kerala, we channel the spirit of inclusivity to weave a tapestry of interconnectedness across nations, aiming to realize a unified, joyous global community by the year 2030</p>
      </div>

      {/* Join Amri and Support   */}

      <div style={{ backgroundImage: `url(${PatternBg})` }} className='relative flex flex-col items-center justify-center w-full h-full px-3 py-16 bg-no-repeat md:py-20 lg:py-24 gap-y-10 md:gap-y-12 xl:gap-y-20 md:px-10 lg:px-10 xl:px-36'>
        <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
        <div className='grid grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 md:gap-12 grid-rows-auto'>
          <div className='order-2 space-y-3 md:space-y-5 '>
            <h3 className='text-3xl md:text-4xl lg:text-[3rem] pb-4'>Join Amri Movement</h3>
            <p className='font-sans text-base font-normal leading-snug tracking-wide md:text-xl lg:text-2xl'>Be part of a transformative journey that begins with individual action and culminates in collective triumph. Support us through volunteering, partnerships, or donations, and help us build a world where joy, peace, and prosperity are a reality for all. At Amri Foundation, we don't just aspire for a better future; we're dedicated to creating it, one step at a time.</p>
            <p class="font-sans italic text-lg lg:text-xl ">
              Feel free to know about our initiatives
            </p>
            <ol class="font-sans text-[#3a869c] text-lg lg:text-xl font-semibold">
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Mind Talks</span></li>
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Zero Poverty</span></li>
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Global Peace</span></li>
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Smile Project</span></li>
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Education Support</span></li>
              <li className='flex items-center gap-2 '><i><FaCaretRight /></i><span>Amri Save Planet</span></li>
            </ol>
          </div>
          <img className='object-cover w-full rounded md:order-2 h-60 md:h-auto' src={joinImg} alt="" />
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-12 grid-rows-auto'>
          <img className='object-cover w-full rounded h-60 md:h-auto' src={supportImg} alt="" />
          <div className='space-y-3 md:space-y-4 lg:space-y-8'>
            <h3 className='text-3xl md:text-4xl lg:text-[3rem] '>Support our Cause</h3>
            <p className='font-sans text-base font-normal leading-snug tracking-wide md:text-xl lg:text-2xl'>Your generosity can be the catalyst for change. We humbly invite you to donate to Amri Foundation, where every contribution furthers our quest for global harmony. Your support enables us to continue our initiatives in mental health, education, environmental conservation, poverty eradication, and peace-building. Together, we can turn the vision of a united and happy global family into a reality. Stand with us in solidarity your donation today is an investment in a peaceful and prosperous tomorrow.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center w-full h-auto px-3 py-16 space-y-12 md:py-20 lg:py-24 md:px-10 lg:px-10 xl:px-36'>
        <h3 className='text-4xl md:text-5xl lg:text-[3rem]'>Amri Stories</h3>
        <div className='grid w-full h-full grid-cols-1 gap-3 grid-rows-auto md:grid-cols-2 md:gap-5 '>
          <img className='w-full  object-cover h-72 md:h-full lg:h-[80vh]' src={Life1} alt="" />
          <div className='grid grid-cols-2 h-[80vh] w-full gap-3 md:gap-5 grid-rows-2'>
            <img className='object-cover w-full h-full col-span-2' src={Life2} alt="" />
            <img className='object-cover w-full h-full' src={Life4} alt="" />
            <div className='relative flex items-center justify-center w-full h-full'>
              <img className='object-cover w-full h-full' src={Life3} alt="" />
              <h2 className='absolute text-6xl font-extrabold tracking-wider text-white'>22+</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About