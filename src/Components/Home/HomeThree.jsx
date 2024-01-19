import React, { useState } from 'react';
import { useCountUp } from 'react-countup';
import { GlobalPresenceData } from '../../Data/GlobalPresenceData';
import GlobalCardTabs from '../../assets/GlobalCardTabs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// import required modules
import { Pagination } from 'swiper/modules';

function HomeThree() {
  const [activeTab, setActiveTab] = useState('Served_Food');

  useCountUp({ ref: '1', end: 3620, duration: 10 });
  useCountUp({ ref: '2', end: 2400, duration: 10 });
  useCountUp({ ref: '3', end: 12650, duration: 10 });
  useCountUp({ ref: '4', end: 36, duration: 10 });
  useCountUp({ ref: '5', end: 12, duration: 10 });


  const Tabs = [
    {
      tabKey: 'Served_Food',
      id: '1',
      title: 'Served Food'
    },
    {
      tabKey: 'Books_Study',
      id: '2',
      title: 'Books and Study Materials'
    },
    {
      tabKey: 'Trees_Planted',
      id: '3',
      title: 'Trees Planted'
    },
    {
      tabKey: 'Ongoing_Projects',
      id: '4',
      title: 'Ongoing Projects'
    },
    {
      tabKey: 'Global_Presence',
      id: '5',
      title: 'Global Presence'
    },
  ];

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-3 py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24 md:px-10 lg:px-10 xl:px-36">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Global Presence</h2>
      <div className='items-start justify-start hidden w-full h-full grid-cols-3 gap-5 pt-20 xl:gap-10 lg:grid'>
        <div className="w-full h-full col-span-1 ">
          <ul key={''} className="flex flex-col w-full h-full gap-2 list-none " role="tablist">
            {Tabs.map((tab) => (
              <li onClick={() => handleTabSelect(tab.tabKey)} role="tab" key={tab.tabKey} className={`flex flex-col ${activeTab === tab.tabKey ? 'bg-[#3e92ab19] border-l-[#3a869c] border-l-8' : ''} items-start justify-center w-full h-full p-5 transition-all border-2 cursor-pointer rounded-3xl px-7`}>
                <h3 className='font-sans font-medium tracking-wide uppercase text-md '>{tab.title}</h3>
                <h2 className='text-3xl'><span id={tab.id} /></h2>
              </li>
            ))}
          </ul>
        </div>
        <div className={`col-span-2  w-full h-full`} id={activeTab}>
          {GlobalPresenceData.map((global) => (
             activeTab === global.activeTab && <GlobalCardTabs global={global} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 pt-10 lg:hidden">
        <Swiper
           slidesPerView={1}
           spaceBetween={10}
           autoplay={{
             delay:200
           }}
           pagination={{
             clickable: true,
             dynamicBullets:true
           }}
           breakpoints={{
             '@0.00': {
               slidesPerView: 1,
               spaceBetween: 10,
             },
             '@0.75': {
               slidesPerView: 1,
               spaceBetween: 20,
             },
             '@1.00': {
               slidesPerView: 2,
               spaceBetween: 30,
             },
           }}
           modules={[Pagination]}
             className="w-full h-auto pb-8 overflow-y-visible"
           >
            {GlobalPresenceData.map((global)=>(
             <SwiperSlide className="w-full h-full">
                <GlobalCardTabs global={global} />
             </SwiperSlide>
            ))}
           </Swiper>
      </div>
    </div>
  );
}

export default HomeThree;