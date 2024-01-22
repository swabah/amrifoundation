import React, { useState } from "react";
import tree from '../../assets/amriimg/treePlant.jpg'

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

export default function CurrentSavePlanet() {

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
                            src={tree}
                            alt="Initiative image"
                            className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
                        />
                    </div>
                    <h2 className="text-4xl font-medium">Safeguarding Our Planet: Amri Save Planet for Sustainable Development</h2>
                    <p className="w-full font-sans text-lg tracking-wide text-start" > The <strong>Save Planet for Sustainable Development initiative</strong> spearheaded by the Amri Foundation serves as a compelling call to action, symbolizing our determined stride towards securing a more environmentally sustainable future. Faced with escalating environmental challenges, we have committed to planting 1000 trees annually, with an ambitious target of half a million trees by 2050. This initiative underscores our steadfast dedication to environmental stewardship, showcasing the profound impact that concerted efforts can wield in nurturing our planet.<br /><br /> Going beyond mere reforestation, the <strong>Save Planet initiative</strong> adopts a comprehensive approach to environmental care. In addition to our tree-planting initiatives, we actively address the critical issue of <strong>plastic pollution</strong>, engaging in efforts that contribute to a cleaner and healthier planet. By embracing a holistic strategy for environmental conservation, we not only combat climate change through reforestation but also respond to the imperative of sustainable waste management. <strong>Save Planet</strong> embodies a multifaceted endeavor envisioning a world where nature thrives, and the blight of plastic pollution is minimized.<br /><br /> The <strong>Save Planet for Sustainable Development initiative</strong> extends an invitation to individuals, communities, and organizations to partake in this transformative journey. As we strive towards a greener Earth by 2050, we acknowledge the potency of collective action in shaping our shared destiny. Each tree planted, each piece of plastic responsibly managed, and every conscientious choice made plays a pivotal role in realizing a sustainable and thriving planet. Join us in safeguarding the environment, ensuring a sustainable future for generations to come, and collectively striving towards a world where our legacy is one of environmental harmony and ecological equilibrium.</p>
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
