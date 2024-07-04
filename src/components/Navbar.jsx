import React from 'react';
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full h-[10vh] flex justify-between items-center '>
      <div className="pl-[30px] text-3xl font-bold">Ghum🏔</div>
      <div className="w-[50%] md:w-[30%] text-gray-600 flex justify-between border-[2px] border-gray-300 px-[30px] py-[6px] rounded-[21px]">
        <Link to="/" className="cursor-pointer">Home</Link>
        <Link to="/places" className="cursor-pointer">Places</Link>
        <Link to="/blog" className="cursor-pointer">Blog</Link>
        <Link to="/about" className="cursor-pointer">About us</Link>
      </div>
      <Link to="/signup" className="pr-[30px] text-xl" ><IoIosLogIn /></Link>
    </div>
  )
}

export default Navbar
