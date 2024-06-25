import React from 'react';
import image from '../assets/greenteeth.png';

const HeroSection = () => {
  return (
    
<div className='flex md:flex-row flex-col mt-8 '>
<div className='md:w-1/2'>
  <img src={image} alt="image" />
</div>
  <div className='md:w-1/2 md:pr-3 mt-10 p-8 md:p-0'>
  <h1 className="font-bold md:text-7xl text-4xl mb-6 text-white font-sans">Quality Care</h1>
          <p className="text-xl mb-6 text-white pr-10">
            Creating Beautiful Smiles Creating Beautiful Smiles Creating Beautiful Smiles
            Creating Beautiful Smiles Creating Beautiful Smiles
          </p>
          <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
</div>

</div>
  );
};

export default HeroSection;
