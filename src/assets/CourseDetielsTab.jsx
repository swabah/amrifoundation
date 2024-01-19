import React, { useState } from 'react'
import icon2 from './Img/icon2.svg'
import instructorImg from './Img/Faculties/FacultiesImg2.png'

function CourseDetielsTab() {
    const [activeTab, setActiveTab] = useState('AboutCourse');

  const Tabs = [
    {
      tabKey: 'AboutCourse',
      title: 'About Course'
    },
    {
      tabKey: 'Syllabus',
      title: 'Syllabus'
    },
    {
      tabKey: 'instructor',
      title: 'instructor'
    },
  ];

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <div>
      <div className="w-full py-4 border-b-2 border-[#5555553e] md:py-5 lg:py-8">
        <ul className="flex items-start  justify-between md:justify-start w-full h-full px-2 list-none  md:gap-10 lg:gap-14 xs:text-xl sm:text-2xl lg:text-3xl" role="tablist">
          {Tabs.map((tab) => (
            <li key={tab.tabKey} className="text-center cursor-pointer">
              <button
                className={`hover:text-[#CCA65D] text-[#CCA65D]  ${activeTab === tab.tabKey ? 'border-[#6E8B3D] border-b-2 lg:border-b-4' : ''}`}
                onClick={() => handleTabSelect(tab.tabKey)}
                role="tab"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-full py-12 h-full`} id={activeTab}>
        {activeTab === 'AboutCourse' && (
            <div className='flex flex-col items-center md:items-start text-center w-full h-full gap-8 md:gap-6   md:text-start'>
                <div className='flex flex-col md:flex-row  items-center justify-start w-full gap-5 md:gap-10 '>
                    <h2 className='text-[#555555] text-3xl md:text-5xl lg:text-[3.5rem]' >Certificate Courese in <br /> maqasid Al Sharia</h2>
                    <div className='flex items-center gap-4 md:gap-6'>
                        <div className=' text-[#555555] justify-center  cursor-pointer w-auto font-normal px-3 lg:px-4 space-x-1.5 flex items-center  py-1 bg-[#CDCDCD] rounded-lg '>
                            <img src={icon2} alt="" className='w-4 lg:w-5'/>
                            <p class=" text-sm lg:text-base  font-sans tracking-wide">2 weeks</p>
                        </div>
                        <div className=' text-[#555555] justify-center  cursor-pointer w-auto font-normal px-3 lg:px-4 space-x-1.5 flex items-center  py-1 bg-[#CDCDCD] rounded-lg '>
                             <img src={icon2} alt="" className='w-4 lg:w-5 h-4 lg:h-5 '/>
                            <p class=" text-sm lg:text-base  font-sans tracking-wide">1200/-</p>
                        </div>
                    </div>
                </div>
                <p className='pb-2 font-sans xs:text-base sm:text-lg  lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uns of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the industry's standard dumm the 1500s, when an unknown printer took a galley of type and scrambled it to make a type splly unchanged. versions of Lorem Ipsum.</p>
                <div className='justify-center  cursor-pointer w-auto px-4 lg:px-6 flex items-center  py-1.5 lg:py-2 bg-[#CCA65D] rounded-md lg:rounded-lg'>
                     <p class="text-white text-base font-normal font-sans tracking-wide">Apply Now</p>
                </div>
            </div>
        )}
        {activeTab === 'Syllabus' && (
            <div className='flex flex-col items-start w-full h-full gap-6 md:gap-8 text-start'>
                <h2 className='text-[#555555] text-3xl md:text-5xl lg:text-[3.5rem]' >Certificate Courese in <br /> maqasid Al Sharia</h2>
                <ul className=' font-sans text-base md:text-lg list-disc list-inside'>
                    <li>How to begin working as a UX Designer using Figma.</li>
                    <li>How to use Figma for Essential UX Design & UI Design</li>
                    <li>How to make fully interactive prototypes.</li>
                    <li>How to work with a UX personas.</li>
                    <li>You will be able to add UX designer to your CV.</li>
                    <li>Build a UX project from beginning to end.</li>
                    <li>What the client expects of you as a UX designer.</li>
                    <li>How to create simple wireframes.</li>
                    <li>How to implement colours & images properly in your designs.</li>
                    <li>The dos & don'ts around choosing fonts for web & mobile apps.</li>
                    <li>How to create your own icons, buttons & other UI components.</li>
                    <li>Terms such as Components, Constraints & Multi Dimensional Variants.</li>
                    <li>Free UI kits & plugins for Figma which will speed up our workflow dramatically!</li>
                    <li>How to build a simple style guide, ready for client handoff.</li>
                    <li>How to make both simple & advanced micro interactions, page transitions & animations.</li>
                    <li>Learn to design websites & mobile phone apps.</li>
                    <li>Work with fonts & colors.</li>
                    <li>Test on mobile phones.</li>
                    <li>Export production ready assets.</li>
                    <li>Create your first UX brief & persona.</li>
                    <li>Learn professional workflow tricks & shortcuts.</li>
                    <li>Forum support from me and the rest of the BYOL crew.</li>
                    <li>All the techniques used by UX professionals.</li>
                </ul>
            </div>
        )}
        {activeTab === 'instructor' && (
            <div className='flex flex-col md:flex-row items-start w-full h-full gap-8 md;gap-10 lg:p-12'>
                <img src={instructorImg} className='w-full md:auto object-cover h-80 md:h-auto rounded-xl lg:rounded-3xl' alt="" />
                <div className='flex flex-col items-start w-full h-full gap-4 md:gap-6 text-start'>
                    <h2 className='text-2xl font-normal text-[#CCA65D] select-none lg:text-3xl xl:text-4xl'>Dr Abduslam Ahmed</h2>
                    <p className='font-sans text-base lg:text-lg xl:text-xl'>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uns of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the industry's standard dumm the 1500s, when an unknown printer took a galley of type and scrambled it to make a type splly unchanged. versions of Lorem Ipsum. electronic typesetting, remaining essentially uns of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the industry's standard dumm the 1500s, when an unknown printer took a galley of type and scrambled it to make a type splly unchanged. versions of Lorem Ipsum.</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default CourseDetielsTab