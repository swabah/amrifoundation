import React, { useState } from 'react';
import { useCountUp } from 'react-countup';
import 'tailwindcss/tailwind.css';
import { GlobalPresenceData } from '../../Data/GlobalPresenceData';
import GlobalCardTabs from '../GlobalCardTabs';

const Tabs = [
  { tabKey: 'Served_Food', id: '1', title: 'Served Food' },
  { tabKey: 'Books_Study', id: '2', title: 'Books and Study Materials' },
  { tabKey: 'Trees_Planted', id: '3', title: 'Trees Planted' },
  { tabKey: 'Ongoing_Projects', id: '4', title: 'Ongoing Projects' },
  { tabKey: 'Global_Presence', id: '5', title: 'Global Presence' },
];

function HomeThree() {
  const [activeTab, setActiveTab] = useState('Served_Food');
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useCountUp({ ref: '1', end: 3620, duration: 10 });
  useCountUp({ ref: '2', end: 2400, duration: 10 });
  useCountUp({ ref: '3', end: 12650, duration: 10 });
  useCountUp({ ref: '4', end: 36, duration: 10 });
  useCountUp({ ref: '5', end: 12, duration: 10 });

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
    if (!swiperLoaded) {
      setSwiperLoaded(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-5 py-10 bg-no-repeat md:py-16 lg:py-20 xl:py-24 md:px-10 xl:px-36">
      <h2 className="w-full text-4xl text-center md:text-5xl xl:text-6xl">Global Presence</h2>

      <div className="grid grid-cols-1 pt-10 gap-y-6 lg:pt-20 lg:grid md:grid-cols-3 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="md:col-span-1">
          <ul className="grid w-full grid-cols-2 gap-2 lg:grid-cols-1">
            {Tabs.map((tab) => (
              <li
                onClick={() => handleTabSelect(tab.tabKey)}
                key={tab.tabKey}
                className={`flex flex-col hover:bg-[#3e92ab19] lg:border-l-[#3a869c] lg:border-l-8 items-start justify-start lg:justify-center w-full h-full p-5 transition-all border-2 cursor-pointer rounded-3xl lg:px-7 ${
                  activeTab === tab.tabKey ? 'bg-[#3e92ab19] lg:border-l-[#3a869c] lg:border-l-8' : ''
                }`}
              >
                <h3 className="font-sans text-sm font-medium tracking-wide uppercase md:text-md">{tab.title}</h3>
                <h2 className="text-2xl md:text-3xl">
                  <span id={tab.id} />
                </h2>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:col-span-2">
          {GlobalPresenceData.map(
            (global) => activeTab === global.activeTab && <GlobalCardTabs key={global.id} global={global} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
