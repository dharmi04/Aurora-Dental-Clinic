import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import DentalServices from '../Components/DentalServices'

const MainPage = () => {
  return (
    <div>
 <div className='bg-custom-gradient'>
      <Navbar />
      <HeroSection />
      <DentalServices />
      

    </div>
    <Footer />
    </div>
   
  )
}

export default MainPage
