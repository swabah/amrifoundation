import React, { useState } from "react";
import edu from '../../assets/amriimg/edu.jpeg'

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

export default function CurrentEducation() {

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
                            src={edu}
                            alt="Initiative image"
                            className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
                        />
                    </div>
                    <h2 className="text-4xl font-medium">Amri Education Support: Nurturing Minds, Transforming Futures</h2>
                    <p className="w-full font-sans text-lg tracking-wide text-start" > <strong>Amri Education Support</strong>, an unwavering commitment within the Amri Foundation, believes in the transformative power of <strong>education as a catalyst for unlocking human potential and advancing societal progress</strong>. Envisioning a global impact, our goal is to illuminate every corner of the world with the light of knowledge by <strong>2050</strong>. Education is not viewed merely as a privilege; it is upheld as a <strong>fundamental right accessible to every individual, irrespective of background or circumstance</strong>. <br /> <br /> At the heart of the <strong>Amri Education Support</strong> initiative is a dedicated mission to <strong>dismantle barriers obstructing the path to learning</strong>. Recognizing disparities in access to quality education, we strive to bridge these gaps by championing inclusivity. Our focus extends beyond providing educational opportunities to enhancing the supporting infrastructure, fostering an environment where <strong>knowledge knows no bounds</strong>. <strong>In the tapestry of education, each thread symbolizes a life transformed</strong>, and <strong>Amri Education Support aspires to weave a fabric of knowledge that transcends borders and socio-economic divides</strong>. <br /> <br /> Collaborative learning lies at the core of <strong>Amri Education Support's approach</strong>. Through partnerships with governments, NGOs, and local communities, we aim to create a global movement propelling education forward. Our vision is a world where every individual can access and benefit from education. By <strong>2050</strong>, we strive to witness the culmination of these collective efforts—a world where <strong>educational opportunities are boundless</strong>, enabling individuals to <strong>unlock their potential and contribute meaningfully to societal advancement</strong>. We extend an invitation to individuals, organizations, and governments to unite in this transformative journey, shaping a future where <strong>education flourishes as an instrument of empowerment</strong>, breaking down barriers and creating a world where <strong>knowledge is a universal right for all</strong>. </p>
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
