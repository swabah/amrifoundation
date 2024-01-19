import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatternBg from '../assets/Img/bgPattern.jpg';
import { Leadershipdata, TeamData } from '../Data/TeamData';
import TeamCard from '../Components/Teams/TeamCard';
import TeamModal from '../Components/Teams/TeamModal';

function Teams() {
  const [showModalId, setShowModalId] = useState(null);
  const navigate = useNavigate();

  function showEventModal(itemId,itemName) {
    navigate(`/Teams/${itemName}`)
    if (!showModalId) {
      document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
    }
    setShowModalId(itemId);
  }

  function closeModal() {
    document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
    setShowModalId(null);
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center w-full h-full bg-white space-y-7 lg:space-y-12 py-7 md:py-16 lg:py-22'>
        <h2 className='  text-4xl md:text-5xl lg:text-[3.5rem]'>Our Teams</h2>
        <p className='px-3 font-sans md:px-10 lg:px-10 xl:px-36 mt-4 text-center text-[#555555] text-base md:text-xl lg:text-2xl font-normal leading-snug tracking-wide'>Our team comprises diverse and passionate individuals, each bringing unique skills, experiences, and perspectives to collectively drive our mission forward with unwavering dedication</p>
      </div>

      <div style={{ backgroundImage: `url(${PatternBg})` }} className='relative flex flex-col items-center justify-center w-full h-full gap-10 px-3 py-16 bg-no-repeat md:py-20 lg:py-24 lg:gap-16 xl:gap-20 md:px-10 lg:px-10 xl:px-36'>
        <div className='w-full h-full bg-[#619A46] opacity-5 absolute top-0 left-0'></div>
        {/* <h1 className='text-[#CCA65D] text-3xl md:text-4xl lg:text-5xl'>Our Leadership</h1> */}
        <div className='z-10 grid w-full h-full grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5 grid-rows-auto'>
          {Leadershipdata.map((item) => (
            <div className='w-full h-full' key={item.id} onClick={() => showEventModal(item.id , item.name)}>
              <TeamCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col w-full h-full gap-10 px-3 py-16 text-center lg:gap-20 md:px-10 lg:px-10 xl:px-36 md:py-20 lg:py-24'>
        <h1 className='text-3xl  md:text-4xl lg:text-5xl'>Our Advisors</h1>
        <div className='grid w-full h-full grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 grid-rows-auto'>
          {TeamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {Leadershipdata.map((item) => (
        <React.Fragment key={item.id}>
          {showModalId === item.id && (
            <TeamModal
              onClose={closeModal}
              onRequest={() => showEventModal(item.id)}
              closePath='/Teams'
              item={item} // Pass the selected item to the modal
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Teams;
