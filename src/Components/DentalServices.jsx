import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from '../assets/greenteeth.png';

const DentalServices = () => {
  const services = [
    {
      id: 1,
      name: 'Teeth Cleaning',
      description: 'Professional teeth cleaning to keep your smile bright.',
      details: 'Teeth cleaning is essential for maintaining oral health. It removes plaque, tartar, and stains from the teeth.',
      image: image // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Tooth Extraction',
      description: 'Safe and painless tooth extraction services.',
      details: 'Tooth extraction involves removing a tooth from its socket in the bone. It is performed for various reasons such as decay, infection, or crowding.',
      image: image
    },
    {
      id: 3,
      name: 'Braces & Aligners',
      description: 'Orthodontic treatment for straightening teeth.',
      details: 'Braces and aligners help straighten teeth and correct bite issues. They apply continuous pressure over time to move teeth into the desired position.',
      image: image
    },
    {
      id: 4,
      name: 'Dental Implants',
      description: 'Permanent solution for missing teeth.',
      details: 'Dental implants are metal posts or frames surgically positioned into the jawbone beneath your gums. They allow your dentist to mount replacement teeth onto them.',
      image: image
    },
  ];

  return (
    <div className="py-10 px-5">
      <h1 className="text-center font-semibold text-5xl text-white mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <InViewMotionCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

const InViewMotionCard = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-30 text-white overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      transition={{ duration: 1.5 }}
    >
      {/* <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-t-lg mb-4" /> */}
      <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default DentalServices;
