import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import logo from './Img/amri.png';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [fix, setFix] = useState(false);

  const location = useLocation();

  const navigations = [
    { option: 'Home', path: '/' },
    { option: 'About Us', path: '/AboutUs' },
    { option: 'Teams', path: '/Teams' },
    { option: 'Event', path: '/Events' },
    { option: 'Contact', path: '/Contacts' },
  ];

  const Navfix = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', Navfix);


  return (
    <div className={`w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-36 py-4 z-50 md:py-5  lg:py-6 ${location.pathname === '/' && 'fixed left-0 top-0 bg-[#ffffff] shadow-lg drop-shadow-md shadow-[#48a6c327] '}`}>
      <div className="flex items-center justify-between w-full h-full">
        <Link to='/'>
          <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className={`cursor-pointer w-40 md:w-44 xl:w-56`} src={logo} alt="" />
        </Link>
        <ul className="hidden xl:flex space-x-7">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-medium text-sm xl:text-base  font-sans tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                to={navigation.path}
                onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                className={`cursor-pointer text-[#555555] font-semibold hover:text-[#3a869c]`}
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-fit xl:hidden">
          <CgMenuRightAlt
            className={`text-[30px] lg:text-[40px] text-[#0d1d39]  font-bold cursor-pointer`}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>
      <div className={`xl:hidden w-full md:w-1/2 lg:w-1/2 md:shadow-lg h-screen ${navOpen ? 'flex opacity-100' : 'hidden opacity-0 -z-50  '} bg-white px-3 py-4 md:py-5  lg:py-6 md:px-10  lg:px-20 xl:px-36 flex-col border-b border-[#0d1d39] justify-start items-start z-50 right-0 top-0 md:right-0 absolute`}>
        <div className="flex items-center justify-between w-full h-auto md:justify-end">
          <Link to='/'>
            <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="cursor-pointer  w-40 md:w-44 xl:w-56 md:hidden" src={logo} alt="" />
          </Link>
          <CgClose
            className={`text-[30px] lg:text-[40px] text-[#0d1d39]  font-bold cursor-pointer`}
            onClick={() => setNavOpen(false)}
          />
        </div>
        <ul className={`flex flex-col items-start justify-start space-y-4 py-8 w-full h-full transition-all text-start duration-1000`}>
          {navigations.map((navigation, index) => (
            <li
              onClick={() => setNavOpen(false)}
              key={index}
              className={`font-semibold font-sans text-sm md:text-base hover:text-[#3a869c] text-[#555555] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                to={navigation.path}
                onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                className="cursor-pointer"
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
