import React, { useState } from "react";
import amri_mind from '../../assets/amriimg/amri_mind.jpeg'

const DonationButton = ({ amount, selectedAmount, onClick }) => {
  const isSelected = amount === selectedAmount;

  return (
    <button
      onClick={() => onClick(amount)}
      className={`p-1 md:p-2 rounded-lg px-3 md:px-6 font-sans lg:text-lg border-2 border-[#295e6e] transition-all duration-400 ${isSelected
        ? 'border-[#295e6e] bg-[#1d434e] text-white'
        : 'hover:border-[#c8e5ed] hover:bg-[#295e6e] hover:text-white'
        } cursor-pointer font-semibold`}
    >
      ₹{amount}
    </button>
  );
};

export default function CurrentAmriMindtalks() {
  const [amount, setAmount] = useState('');

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value.replace(/[^\d]/g, '')); // Allow only numeric input
  };

  return (
    <div className="w-full min-h-screen h-full p-7 text-[#3f2d23] lg:px-10 py-16 lg:py-20 xl:px-32">
      <div className="flex flex-col w-full h-full gap-5 xl:flex-row md:gap-10">
        <div className="flex flex-col w-full h-full gap-7">
          <div className='w-full overflow-hidden rounded-2xl h-96'>
            <img
              src={amri_mind}
              alt="Initiative image"
              className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
            />
          </div>
          <h2 className="text-4xl font-medium">Amri Mind Talks: Fostering Mental Well-being and Building Resilience</h2>
          <p className="w-full font-sans text-lg tracking-wide text-start" ><b>Amri Mind Talks</b>, nestled within the compassionate embrace of the Amri Foundation, emerges as a beacon of hope and understanding in the uncharted territory of mental health. This initiative provides a dedicated space for fostering <b>mental well-being</b>, embracing <b>healing</b> , and unleashing the transformative power of conversation. Grounded in the belief that healing is facilitated through open, honest dialogues that destigmatize mental health challenges, Amri Mind Talks illuminates the journey to recovery. Recognizing mental well-being as an integral facet of overall health, the initiative embarks on a collective journey of self-discovery and resilience. In this collective journey, Amri Mind Talks shatters the silence surrounding mental health, creating an environment where individuals openly share their experiences, triumphs, and struggles. Through the amplification of stories depicting strength and recovery, the initiative inspires hope and solidarity, fostering a community that supports and uplifts one another on the path to mental well-being. The initiative envisions a world where the complexities of the human mind are embraced, and empathy becomes the guiding force.  <br /><br />   Amri Mind Talks establishes itself as a safe haven for open dialogues about mental health, where vulnerability is not only embraced but flourishes into an environment rich in <b>empathy</b>. The community invites individuals to join in breaking down barriers that hinder understanding and acceptance of mental health challenges. Engaging in thoughtful conversations becomes a means to not only reduce the stigma surrounding mental health but also collectively contribute to building a <b>mentally healthier</b> and happier world. <br /><br /> Within the sanctuary of Amri Mind Talks, a tapestry of shared experiences is woven, with each thread representing a story of courage, resilience, and healing. The narrative created embraces the complexities of the human mind, fostering empathy and understanding. As Amri Mind Talks is unveiled, an invitation is extended to all to be part of a movement that transcends the boundaries of silence, fosters empathy, and builds a bridge towards a mentally healthier and happier world. Together, the community cultivates a space where conversations become powerful catalysts for <b>healing, empowerment</b>, and positive change.</p>
        </div>
        <div className=' relative grid bg-[#3e92ab19] rounded-sm w-full h-full  xl:w-[30%]  grid-cols-1 md:grid-cols-5 xl:grid-cols-1 p-5 py-10 gap-10 '>
          <div className='flex flex-col w-auto gap-2 md:col-span-2 xl:col-span-1'>
            <div className='grid items-center justify-center grid-cols-2 gap-3 text-center '>
              {[1000, 2000, 5000, 10000].map((donationAmount) => (
                <DonationButton
                  key={donationAmount}
                  amount={donationAmount}
                  selectedAmount={amount}
                  onClick={handleButtonClick}
                />
              ))}
            </div>
            <label htmlFor='donationAmount' className='sr-only'>
              Donation Amount
            </label>
            <input
              id='donationAmount'
              onChange={handleInputChange}
              value={`₹ ${amount}`}
              className='text-2xl py-3 w-full outline-none font-sans bg-transparent border-[#295e6e] placeholder:text-[#295e6e] border-b-4 placeholder:text-2xl placeholder:font-medium font-medium'
              type='text'
              placeholder='₹'
            />
            <button className='active:bg-[#295e6ed6] w-full font-medium p-2 rounded-lg px-4 font-sans text-base  border-2 border-[#295e6e] bg-[#1d434e] text-white transition-all duration-400'>
              Donate
            </button>
          </div>
          <div className='flex flex-col items-start justify-between w-full h-full gap-4 font-sans md:col-span-3 xl:col-span-1'>
            <div className='flex flex-col w-full h-full gap-2 '>
              <p className='text-[#1d434e] text-2xl font-light'>Empower positive change with your support!</p>
              <h3 className='w-4/5 font-medium text-[#1d434e] '>Your generosity propels us forward, making a difference one donation at a time. Together, let's create a world where every contribution counts and transforms lives.</h3>
            </div>
            <a href='tel:+91 9847654069' className='text-[#1d434e] text-sm  font-medium uppercase'>learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
