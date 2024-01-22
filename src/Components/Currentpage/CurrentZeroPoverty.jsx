import React, { useState } from "react";
import food from '../../assets/amriimg/food.jpeg'

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

export default function CurrentZeroPoverty() {

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
              src={food}
              alt="Initiative image"
              className="object-cover w-full h-full transition-all duration-500 cursor-move hover:scale-105"
            />
          </div>
          <h2 className="text-4xl font-medium">Amri Mind Talks: Fostering Mental Well-being and Building Resilience</h2>
          <p className="w-full font-sans text-lg tracking-wide text-start" > The <strong>Amri Foundation's commitment to eradicating hunger by 2050</strong> through the <strong>Amri Zero Hunger initiative</strong> is deeply intertwined with a broader dedication to eliminating poverty. Acknowledging the intricate connections between hunger and poverty, our mission extends beyond the mere provision of food to address the structural inequalities perpetuating financial hardship. We firmly believe that achieving <strong>zero hunger is inherently linked to the eradication of poverty</strong>, showcasing our dedication to an integrated approach that tackles these interrelated challenges head-on. <br /><br /> Central to our strategy is the <strong>empowerment of communities, aiming to break free from the cyclical nature of poverty</strong>. The <strong>Amri Foundation invests in comprehensive development programs encompassing education, healthcare, and economic opportunities</strong>. Through initiatives fostering entrepreneurship and providing essential skills, we enable individuals and communities to forge sustainable livelihoods. This not only lifts them out of poverty but also enhances their capacity to secure an adequate and nutritious diet. Through these holistic efforts, our goal is to catalyze a positive cycle where <strong>reduced poverty contributes to decreased hunger, fostering long-term resilience. <br /><br /> </strong>  Our commitment to <strong>zero poverty is seamlessly woven into the fabric of the Amri Zero Hunger initiative, creating a formidable alliance against the twin challenges of deprivation</strong>. <strong>Strategic interventions address poverty's root causes, such as limited access to education and economic opportunities</strong>, paving the way for communities to achieve sustainable food security. The journey towards a future with <strong>zero hunger and zero poverty necessitates collective action</strong>, inviting stakeholders—individuals, governments, and organizations—to join hands in this transformative endeavor. Together, we can forge a path towards a future where every person not only breaks free from the shackles of hunger but also overcomes the burdens of poverty, building a legacy of shared prosperity.</p>
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
