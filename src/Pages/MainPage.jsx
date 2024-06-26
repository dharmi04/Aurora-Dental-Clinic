import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import DentalServices from '../Components/DentalServices'
import Reviews from '../Components/Reviews'

const MainPage = () => {
  return (
    <div>
 <div className='bg-custom-gradient'>
      <Navbar />
      <HeroSection />
      <DentalServices />
      <Reviews />
      

    </div>
    <Footer />
    </div>
   
  )
}

export default MainPage
