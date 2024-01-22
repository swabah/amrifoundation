import React, { useState } from 'react';
import { useCountUp } from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';
import { Pagination } from 'swiper/modules';
import GlobalCardTabs from '../GlobalCardTabs';

import { GlobalPresenceData } from '../../Data/GlobalPresenceData';

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

function HomeThree() {
  const [activeTab, setActiveTab] = useState('Served_Food');

  useCountUp({ ref: '1', end: 3620, duration: 10 });
  useCountUp({ ref: '2', end: 2400, duration: 10 });
  useCountUp({ ref: '3', end: 12650, duration: 10 });
  useCountUp({ ref: '4', end: 36, duration: 10 });
  useCountUp({ ref: '5', end: 12, duration: 10 });

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-5 py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24 md:px-10 lg:px-10 xl:px-36">
      <h2 className="text-4xl lg:text-5xl xl:text-6xl">Global Presence</h2>

      <div className="hidden w-full grid-cols-1 gap-6 pt-10 lg:grid md:grid-cols-3 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="col-span-1">
          <ul className="flex flex-col w-full gap-2 list-none ">
            {Tabs.map((tab) => (
              <li onClick={() => handleTabSelect(tab.tabKey)} role="tab" key={tab.tabKey} className={`flex flex-col ${activeTab === tab.tabKey ? 'bg-[#3e92ab19] border-l-[#3a869c] border-l-8' : ''} items-start justify-center w-full h-full p-5 transition-all border-2 cursor-pointer rounded-3xl px-7`}>
                <h3 className='font-sans font-medium tracking-wide uppercase text-md '>{tab.title}</h3>
                <h2 className='text-3xl'><span id={tab.id} /></h2>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full col-span-2">
          {GlobalPresenceData.map(
            (global) =>
              activeTab === global.activeTab && <GlobalCardTabs key={global.id} global={global} />
          )}
        </div>
      </div>

      <div className="flex flex-col w-full pt-10 gap-7 lg:hidden">
        <div className="flex flex-col w-full gap-2">
          {Tabs.map((tab) => (
            <li className={`flex flex-col hover:bg-[#3e92ab19] border-l-[#3a869c] border-l-8 items-start justify-center w-full h-full p-3 px-5 md:p-5 transition-all border-2 cursor-pointer rounded-xl`}>
              <h3 className="font-sans text-sm font-medium tracking-wide uppercase md:text-base "> {tab.title} </h3>
              <h2 className="text-2xl"><span id={tab.id} /></h2>
            </li>
          ))}
        </div>

        <div className="grid grid-cols-1 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 200
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10
              },
              '@0.75': {
                slidesPerView: 1,
                spaceBetween: 20
              },
              '@1.00': {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
            modules={[Pagination]}
            className="w-full h-auto pb-8 overflow-y-visible"
          >
            {GlobalPresenceData.map((global) => (
              <SwiperSlide className="w-full h-full">
                <GlobalCardTabs global={global} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
