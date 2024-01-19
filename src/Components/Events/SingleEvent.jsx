import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export const SingleEvent = ({ Heading, created, EventImgUrl }) => {

    const { seconds, nanoseconds } = created;
    // Convert Firebase timestamp to JavaScript Date object
    const date = new Date(seconds * 1000 + nanoseconds / 1000000);

    return (
        <>
            <div className="relative w-full h-full font-sans">
                <div className="overflow-hidden h-72 lg:h-80">
                    <img src={EventImgUrl} alt="" className="object-cover w-full h-full transition-all duration-300 hover:scale-110 " />
                </div>
                <div className="absolute bottom-0 w-full p-2 ">
                    <div className="flex items-center justify-between p-1.5 px-3 md:p-3 lg:px-5 bg-white cursor-pointer">
                        <h3 className="text-lg lg:text-xl font-medium truncate">Read More</h3>
                        <IoIosArrowForward className='text-lg lg:text-2xl' />
                    </div>
                    <div className="bg-[#295e6e] h-3 lg:h-5"></div>
                </div>
            </div>
        </>
    );
};
