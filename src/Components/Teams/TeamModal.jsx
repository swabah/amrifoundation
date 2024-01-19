import React from 'react';
import { FiX, FiXCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Teamimodal({ onClose, onRequest, closePath, item }) {
  const navigate = useNavigate();

  return (
    <div className='fixed inset-0 z-30 transition-all duration-500 font-general-medium'>
      {/* Modal Backdrop */}
      <div onClick={onClose} className='absolute inset-0 z-20 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm bg-filter'></div>

      {/* Modal Content */}
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='z-30 flex items-center modal-wrapper'>
          <div className='relative   border-b-[18px] rounded-b-3xl border-[#295e6e] grid max-w-md max-h-screen grid-rows-2 gap-5 p-5 mx-5 bg-white shadow-lg md:grid-rows-1 md:grid-cols-5 pt-9 md:pt-0 lg:p-10 lg:gap-10 rounded-3xl modal lg:max-w-3xl md:max-w-2xl bg-opacity-90'>
              <div className='bg-[#E5E7EB] md:col-span-2 cursor-pointer h-full w-full  overflow-hidden relative'>
               <img className='absolute inset-0 bottom-0 object-cover w-full h-full' src={item.img} alt='' />
             </div>
              <div className='flex flex-col items-start w-full h-full space-y-3 md:col-span-3'>
                <div className='-space-y-1 '>
                  <h3 className='text-base font-normal select-none md:text-xl lg:text-2xl'>{item.name}</h3>
                  <h1 className='font-sans text-sm font-normal select-none opacity-90 md:text-lg '>{item.position}</h1>
                </div>
                <p className='font-sans text-xs sm:text-base lg:text-lg'>{item.about}</p>
              </div>
              <div onClick={onClose}>
              <FiXCircle className='absolute text-xl font-light cursor-pointer top-3 right-3 md:top-7 md:right-7 opacity-70' onClick={() => navigate(closePath) } />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamimodal;
