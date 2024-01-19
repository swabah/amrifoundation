import React, { useState } from 'react';

const DonationButton = ({ amount, selectedAmount, onClick }) => {
  const isSelected = amount === selectedAmount;

  return (
    <button
      onClick={() => onClick(amount)}
      className={`p-1 md:p-2 rounded-lg px-3 md:px-6 font-sans lg:text-lg border-2 border-[#295e6e] transition-all duration-400 ${
        isSelected
          ? 'border-[#295e6e] bg-[#1d434e] text-white'
          : 'hover:border-[#c8e5ed] hover:bg-[#295e6e] hover:text-white'
      } cursor-pointer font-semibold`}
    >
      ₹{amount}
    </button>
  );
};

function HomeFour() {
  const [amount, setAmount] = useState('');

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value.replace(/[^\d]/g, '')); // Allow only numeric input
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full px-3 py-10 md:py-16 lg:py-20 xl:py-24 md:px-10 lg:px-10 xl:px-36'>
      <div className='relative grid bg-[#c8e5ed] rounded-sm w-full h-full  grid-cols-1 md:grid-cols-5 p-10 gap-8 lg:p-16'>
        <div className='font-sans w-full flex flex-col items-start justify-between h-full gap-4 md:col-span-3'>
          <div className=' w-full flex flex-col gap-2 md:gap-5 h-full'>
            <p className='text-[#1d434e] text-2xl font-light'>Empower positive change with your support!</p>
            <h3 className='w-4/5 font-medium text-[#1d434e] lg:text-lg'>Your generosity propels us forward, making a difference one donation at a time. Together, let's create a world where every contribution counts and transforms lives.</h3>
          </div>
          <a href='tel:+91 9847654069' className='text-[#1d434e] text-sm md:text-base font-medium uppercase'>learn more</a>
        </div>
        <div className='flex flex-col w-auto md:col-span-2 gap-2'>
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
          <button className='active:bg-[#295e6ed6] w-full font-medium p-2 rounded-lg px-4 lg:px-6 font-sans text-base lg:text-lg  border-2 border-[#295e6e] bg-[#1d434e] text-white transition-all duration-400'>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeFour;
