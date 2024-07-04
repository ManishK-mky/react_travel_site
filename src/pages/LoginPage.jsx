import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

function LoginPage() {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 flex flex-col p-8">
            <Link to="/" className="self-start mb-4">
                <FaArrowLeft className='text-xl text-gray-700 mb-[12px]'/>
            </Link>
          <div className="pl-4">
            <p className='text-3xl font-bold'>Login</p>
            <p className='py-4'>If you are already a member, easily log in.</p>
          </div>
          <div className="pl-4">
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full h-10 px-3 bg-gray-100 rounded-md"/>
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="w-full h-10 px-3 bg-gray-100 rounded-md"/>
            </div>
            <button className="w-full h-10 border bg-gray-900 rounded-[12px] text-white">Login</button>
            <div className="mt-4 text-center border-b relative mt-[36px]">
              <span className="bg-white px-2 absolute left-1/2 transform -translate-x-1/2 -top-3">OR</span>
            </div>
            <div className="mt-4 text-center mt-[27px]">Already a member? <Link to="/signup" className='text-red-500 cursor-pointer'>Signup</Link></div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img className='w-[100%] h-[80vh] object-cover rounded-lg' src="https://images.unsplash.com/photo-1572782252655-9c8771392601?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login"/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
