import React from 'react';
import logo from './amriimg/amri_logoWhite.png';
import { Link } from 'react-scroll';
import { Link as Tolink } from 'react-router-dom';
import { CgFacebook, CgInstagram, CgMail, CgPhone, CgWebsite } from 'react-icons/cg';
import { FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const navigations = [
    { option: 'Home', path: '/' },
    { option: 'About Us', path: '/AboutUs' },
    { option: 'Teams', path: '/Teams' },
    { option: 'Event', path: '/Events' },
    { option: 'Contact', path: '/Contacts' },
  ];

  return (
    <footer className="bg-[#2C2C2C] text-white px-3 md:px-10 lg:px-10 xl:px-36 py-7 md:py-16">
      <div className="grid items-end gap-5 font-sans md:gap-10 lg:gap-32 opacity-90 md:grid-cols-3">
        <div className="py-5 space-y-5">
        <Tolink to='/'>
        <img onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className='cursor-pointer w-64 lg:w-80' src={logo} alt="" />
        </Tolink>
          <p className="text-white">
          Click here to become an amri global volunteer. Be a part of change
          </p>
        </div>
        <div className='py-5'>
          <ul className="flex flex-col items-start justify-between h-full space-y-3">
            {navigations.map((navigation, index) => (
              <li
                key={index}
                className="font-normal text-sm md:text-base hover:text-[#eee] text-[#fff] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={navigation.path}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='py-5'>
          <h4 className="mb-5 text-lg font-semibold tracking-wide">Contact</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgPhone />
              </span>{' '}
              <a href='tel:+91 9847654069'>+91 984765 4069</a>
              <br /> 
              <a href="tel:+91 9605655712">+91 960565 5712</a>
            </li>
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgMail />
              </span>{' '}
              <a href='mailto:info@amrifoundation.com'>info@amrifoundation.com</a>
            </li>
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <FiMapPin />
              </span>{' '}
              <span>
               Chelavoor, Calicut, Kerala
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="font-sans text-base font-thin text-center md:text-left">
          © 2023 amrifoundation All Rights Reserved Privacy Policy
        </h1>
        <div className="flex items-center mt-5 space-x-8 text-xl md:mt-0">
          <a href="#">
            <CgInstagram />
          </a>
          <a href="#">
            <CgFacebook />
          </a>
          <a href="https://amrifoundation.com/">
            <CgWebsite />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
