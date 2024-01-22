import React, { useState } from "react";
import smile from '../../assets/amriimg/smile.jpeg'

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

export default function CurrentSmile() {

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
                            src={smile}
                            alt="Initiative image"
                            className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
                        />
                    </div>
                    <h2 className="text-4xl font-medium">Smile Project: Spreading Joy, Building a Happier World</h2>
                    <p className="w-full font-sans text-lg tracking-wide text-start" >
                        The <strong>Smile Project</strong>, an endearing initiative spearheaded by the <strong>Amri Foundation</strong>,
                        transcends being a mere campaign; it stands as a heartfelt endeavor with a lofty vision—to spread happiness globally by the year 2050.
                        Rooted in the belief that <strong>smiles possess transformative power</strong>, this initiative seeks to uplift spirits and contribute to the
                        creation of a more joyful and compassionate world. More than a testament to the impact of small acts of kindness,
                        the <strong>Smile Project</strong> serves as a beacon of positivity, showcasing the profound influence that individual happiness can have on society at large.
                        <br /><br />
                        At the core of the <strong>Smile Project</strong> lies a mission to <strong>inspire and generously share happiness</strong>.
                        Understanding the contagious nature of joy, the initiative strives to bring smiles to faces and warmth to hearts.
                        Going beyond superficial gestures, the vision extends to making a positive impact on the lives of <strong>2050 individuals</strong>
                        through deliberate acts of kindness and unwavering support. By championing compassion and empathy, the <strong>Smile Project</strong>
                        is dedicated to brightening the lives of those facing challenges, reinforcing the belief that a single smile can create powerful ripples of positivity.
                        <br /><br />
                        The essence of the <strong>Smile Project</strong> is embodied in a symphony of dedicated projects and activities designed to
                        <strong>uplift spirits, promote inclusivity, and foster a more caring society</strong>. From supporting communities in need
                        to engaging in random acts of kindness, each initiative is meticulously crafted to create a ripple effect of positivity
                        that extends far beyond individual gestures. As the <strong>Smile Project</strong> embarks on this transformative journey,
                        individuals from all walks of life are invited to join this global movement, contributing to a future where
                        <strong>smiles are abundant, hope is ever-present, and the world is illuminated by the collective warmth of compassionate hearts</strong>.
                    </p>
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
