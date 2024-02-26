import React from 'react';
import { useEvents } from '../Hooks/Posts';
import { SingleEvent } from '../Components/Events/SingleEvent';
import PatternBg from '../assets/Img/bgPattern.jpg';

function Events() {
  const { Events, isEventLoading } = useEvents();

  if (isEventLoading) {
    return <div className="flex flex-col items-center justify-center w-full h-screen font-sans text-xl">Loading</div>;
  }

  const featuredEvent = Events?.[0];

  return (
    <>
    {Events ? 
    (<div className='w-full h-full min-h-screen bg-white'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-10 px-5 text-center py-7 md:py-16 lg:py-22 md:gap-16 lg:gap-12 md:px-10 lg:px-10 xl:px-36'>
        <h2 className='text-3xl md:px-8 lg:px-16 xl:px-24 md:text-4xl lg:text-5xl xl:text-6xl'>{featuredEvent?.Heading}</h2>
        <img className='w-full h-[60vh] rounded object-cover' src={featuredEvent?.EventImgUrl} alt='' />
      </div>
      <div style={{ backgroundImage: `url(${PatternBg})` }} className='relative px-5 py-8 bg-no-repeat space-y-7 md:px-10 lg:px-10 xl:px-36 md:py-14 lg:space-y-12'>
        <h3 className='w-full text-2xl capitalize text-start md:text-4xl lg:text-4xl xl:text-5xl'>Recent Highlights</h3>
        <div className='grid w-full h-full grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
          <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
          {Events?.slice(1).map((event) => (
            <SingleEvent key={event.created} created={event.created} Heading={event.Heading} EventImgUrl={event.EventImgUrl} Paragraph={event.Paragraph} />
          ))}
        </div>
      </div>
    </div>)
    :
    (<div className='w-full h-full min-h-screen bg-white'>
      Waiting for internet...
    </div>)
    }
    </>
  );
}

export default Events;
