import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SingleBlog() {
  return (
    <div>
        <Navbar />
<div>
  {/* Component Code */}
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="bg-cover bg-center h-64" style={{height: 450, backgroundImage: 'url("https://images.unsplash.com/photo-1655306160334-ddedcbb5f431?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}} title="Woman holding a mug">
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <a href="#"><img className="rounded-full relative top-0 -mt-16 mx-auto h-24 w-24 rounded-full border-4 object-cover" src="https://plus.unsplash.com/premium_photo-1661963991154-cecd5254a979?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></a>
        <div className="mt-5 text-center">
          <a href="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            Peace
          </a>, <a href="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            Places
          </a>
          <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">Discover the peace with place(Bodh Gaya)</h1>
          <p className="text-gray-700 text-xs mt-2">Written By: <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              Shubham Kumar
            </a></p>
        </div>
        <div className>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            #Election
          </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            #people
          </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            #Election2020
          </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            #trump
          </a>,<a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
            #Joe
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Credit: Componentity.com */}
</div>

  
        <Footer />
    </div>
  )
}

export default SingleBlog
