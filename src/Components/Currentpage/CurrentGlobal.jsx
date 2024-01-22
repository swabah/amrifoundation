import React, { useState } from "react";
import unity from '../../assets/amriimg/unity.jpeg'

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

export default function CurrentGlobal() {

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
                            src={unity}
                            alt="Initiative image"
                            className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
                        />
                    </div>
                    <h2 className="text-4xl font-medium">Amri Global Peace Initiative: Forging a Path to Harmony by 2050</h2>
                    <p className="w-full font-sans text-lg tracking-wide text-start" > The <strong>Amri Global Peace Initiative</strong> stands as a testament to the <strong>bold commitment</strong> of the Amri Foundation, envisioning a more <strong>peaceful world by 2050</strong>. Far from being an elusive dream, this initiative sets forth a clear path to achieve <strong>sustainable peace</strong>. Rooted in the belief that global peace is not just desirable but imperative for humanity's well-being, it dedicates itself to fostering <strong>understanding, cooperation, and unity</strong> among nations and peoples. <br /><br /> The heartbeat of the <strong>Amri Global Peace Initiative</strong> lies in its unwavering dedication to global peace. By tirelessly working to <strong>bridge divides</strong> and promote <strong>diplomatic solutions</strong>, it envisions a world where <strong>conflicts are resolved through dialogue, compassion prevails over hostility</strong>, and <strong>sustainable peace becomes the cornerstone</strong> of international relations. The initiative recognizes that lasting peace requires <strong>collaboration, empathy, and a shared commitment</strong> to respecting the dignity and rights of all individuals. <br /><br /> The <strong>symphony of nations</strong> finds a resolute tune in the <strong>Amri Global Peace Initiative</strong>—a call to action for <strong>understanding, unity, and compassion</strong>. It invites us to join hands in transforming the dream of a peaceful world into a tangible reality, where the echoes of diplomacy drown out the clamor of conflict. Through <strong>collaborative efforts and meaningful actions</strong>, the initiative actively paves the way for a brighter, more peaceful future for all. By fostering dialogue, advocating <strong>diplomatic solutions</strong>, and engaging in initiatives that promote <strong>unity</strong>, it seeks to bring about a profound shift in the global landscape by 2050. Join the transformative mission as we collectively work towards a world where <strong>peace and prosperity</strong> are not ideals but ingrained realities, inviting individuals, nations, and organizations to be active participants in fostering a <strong>harmonious coexistence for generations to come</strong>. </p>
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
