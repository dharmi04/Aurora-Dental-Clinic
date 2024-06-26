import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'

const Aboutus = () => {
  return (
    <div className='bg-custom-gradient'>
        <Navbar />
        <Slider />
        <div >
        <h1 className='text-white font-bold md:text-5xl text-3xl text-center justify-center mt-8'> Welcome to Aurora Dental Clinic!</h1>
        <div className='text-white justify-center p-10 text-xl font-serif'>
            <p>Welcome to Aurora Dental Clinic, where your smile is our top priority. Located in Regina, our clinic combines modern technology with a compassionate approach to provide the highest quality dental care. Our experienced team of dental professionals is dedicated to creating a comfortable and welcoming environment for every patient.</p>
            <br></br>
            <p>At Aurora Dental Clinic , our mission is to deliver exceptional dental care that exceeds our patients' expectations. We believe in preventive care and education to ensure long-term dental health. Our goal is to make every visit a positive experience, fostering trust and promoting overall well-being.</p>
        </div>
        </div>
    </div>
    
  )
}

export default Aboutus
