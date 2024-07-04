import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Blog() {
  return (
  <div className="blog">
    <Navbar />
        <div className="bg-gray-200 flex justify-center items-center">
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Place u visit</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <Link to="/blog/absd212" className="pr-2 text-sm font-medium leading-none">Read More</Link>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1643388797219-1cbf7e8f2673?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="chair" />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Place u visit</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1676390253760-0ddb26c06393?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="wall design" />
                </div>
                </div>
                <div className="relative">
                <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Place u visit</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1655306160334-ddedcbb5f431?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative">
                <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Place u visit</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1588356295620-3a53c9e50ba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sitting place" className="w-full sm:block hidden" />
                <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                </div>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Place u visit</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="chair" />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white"></h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1531698451051-18c97580aeb2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="wall design" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    <Footer />
  </div>
  )
}

export default Blog
