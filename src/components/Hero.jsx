import React from 'react'

function Hero() {
  return (
    <div className='relative h-[90vh] w-full'>
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-start">
        <div className="w-[50%] p-4 text-white">
          <h1 className="text-4xl font-bold">"Discover the Wonders of India"</h1>
          <p className="mt-2 text-md">Embark on an unforgettable journey through India, a land of diverse cultures, vibrant traditions, and breathtaking landscapes.</p>
          <p className='mt-[12px] text-gray-300 text-[16px] font-light'>Let India captivate your heart and soul</p>
        </div>
      </div>
      <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1541810963-f253264c813c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" />
    </div>
  )
}

export default Hero
