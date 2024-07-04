import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PlaceComponent from '../components/PlaceComponent'
import TopValues from '../components/TopValues'
import Divine from '../components/Divine'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Hero />
        <TopValues />
        <PlaceComponent/>
        <Divine />
        <Footer />
    </div>
  )
}

export default HomePage
