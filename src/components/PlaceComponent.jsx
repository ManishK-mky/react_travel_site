import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function PlaceComponent() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-1 flex-col relative">
            {/* img_01 */}
            <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1522506209496-4536d9020ec4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 1"/>
            <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
              <span>Explore the beauty and secrets of Himalaya</span>
              <FaArrowRight />
            </div>
          </div>
          <div className="hidden md:flex flex-1 flex-row gap-2">
            <div className="flex flex-1 flex-col relative">
              {/* img_02 */}
              <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1572037539529-c9dc54be6d11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 2"/>
              <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
                <span>Explore the waterfalls</span>
                <FaArrowRight />
              </div>
            </div>
            <div className="hidden md:flex flex-1 flex-col relative">
              {/* img_03 */}
              <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1523980077198-60824a7b2148?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 3"/>
              <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
                <span>Explore Taj-Mahal</span>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="hidden md:flex flex-1 flex-row gap-2">
            <div className="flex flex-1 flex-col relative">
              {/* img_04 */}
              <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1667556759760-ac67d2cf8383?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 4"/>  
              <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
                <span>Explore Dil walo ki jaan Delhi</span>
                <FaArrowRight />
              </div>
            </div>
            <div className="hidden md:flex flex-1 flex-col relative">
              {/* img_05 */}
              <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 5"/>
              <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
                <span>Explore the Pink City Jaipur </span>
                <FaArrowRight />
              </div>
            </div>
          </div>                        
          <div className="flex flex-1 flex-col relative">
            {/* img_06 */}
            <img className="object-cover h-full cursor-pointer rounded-[12px]" src="https://images.unsplash.com/photo-1708944251380-0c74e68a8406?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place 6"/>
            <div className="absolute bottom-2 left-2 text-white flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded">
              <span className='text-[15px] cursor-pointer'>Explore Ganga Arti , Vishwanath Temple and many more places in Banaras</span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceComponent
