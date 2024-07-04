import React from 'react';
import { MdBookOnline } from "react-icons/md";
import { RiGuideLine } from "react-icons/ri";
import { GiPiggyBank } from "react-icons/gi";

function TopValues() {
  return (
    <div className='w-full h-[60vh] flex flex-col items-center mt-[45px]'>
        <div className="my-[21px] flex justify-center text-6xl font bold"> Top value for you</div>
        <div className="mt-[21px]  flex justify-center text-xl font-medium">Unleash the beauty of India by having best experience</div>
        <div className="flex my-[45px] justify-center items-center gap-x-[21px]">
            <div className="w-[30%] md:w-[20%]">
                <MdBookOnline className='ml-[48px] flex justify-center text-[45px]'/>
                Easy online booking
                <p className='text-[13px] mt-[21px]'>Book the tickets of your desired location from your home.</p>
            </div>
            <div className="w-[30%] md:w-[20%]">
                <RiGuideLine className='ml-[48px] flex justify-center text-[45px]'/>
                Best tour guides
                <p className='text-[13px] mt-[21px]'>Book the tickets of your desired location from your home.</p>
            </div>
            <div className="w-[30%] md:w-[20%]">
                <GiPiggyBank className='ml-[48px] flex justify-center text-[45px]'/>
                Budget friendly
                <p className='text-[13px] mt-[21px]'>Book the tickets of your desired location from your home.</p>
            </div>
        </div>
    </div>
  )
}

export default TopValues
