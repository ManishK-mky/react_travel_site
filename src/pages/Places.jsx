import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Places() {
  return (
    <div>
        <Navbar />
        <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Best places to visit</h1>
            <h1 className="text-xl font-light">Discover stunning destinations, rich cultures, and unforgettable experiences.</h1>
        </div>
        {/* ✅ Grid Section - Starts Here 👇 */}
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {/*   ✅ Product card 1 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1522506209496-4536d9020ec4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-black truncate block capitalize">Kedarnath</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 1 - Ends Here  */}
            {/*   ✅ Product card 2 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1523980077198-60824a7b2148?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Taj mahal</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 2- Ends Here  */}
            {/*   ✅ Product card 3 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-black truncate block capitalize">Kerala</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 3 - Ends Here  */}
            {/*   ✅ Product card 4 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1665413791098-aca209040815?q=80&w=1578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-black truncate block capitalize">Banaras</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 4 - Ends Here  */}
            {/*   ✅ Product card 5 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-black truncate block capitalize">Waterfall(Goa)</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 5 - Ends Here  */}
            {/*   ✅ Product card 6 - Starts Here 👇 */}
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1667556759760-ac67d2cf8383?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-black truncate block capitalize">Red Fort</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs149</p>
                    <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
                </div>
            </a>
            </div>
            {/*   🛑 Product card 6 - Ends Here  */}
        </section>
        <Footer />
    </div>
  )
}

export default Places
