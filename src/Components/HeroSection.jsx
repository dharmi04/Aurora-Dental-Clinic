import React from 'react';
import image from '../assets/greenteeth.png';

const HeroSection = () => {
  return (
    
<div className='flex md:flex-row flex-col mt-8 '>
<div className='md:w-1/2'>
  <img src={image} alt="image" />
</div>
  <div className='md:w-1/2 md:pr-3 mt-10 p-8 md:p-0'>
  <h1 className="font-bold md:text-7xl text-4xl mb-6 text-secondary font-sans">Quality Care</h1>
          <p className="text-xl mb-6 text-white pr-10">
          Welcome to our dental clinic, where your smile is our priority. Our expert team uses advanced technology to ensure a comfortable, personalized dental experience for patients of all ages.
          </p>
          <a href="/aboutus" className="bg-secondary hover:primary text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </a>
</div>

</div>
  );
};

export default HeroSection;
