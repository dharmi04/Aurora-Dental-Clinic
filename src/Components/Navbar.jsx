import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between pl-8 pr-8 pt-4">
      <div className="flex items-center w-1/2 pl-4">
        <img src={logo} alt="Aurora Dental Logo" className="h-20 w-30" />
      </div>
      <div className="hidden md:flex items-center space-x-8 w-1/2 justify-end pr-10">
        <a href="/" className="text-white text-sm hover:text-green-500">Home</a>
        <a href="/aboutus" className="text-white text-sm hover:text-green-500">About Us</a>
        <a href="#about-us" className="text-white text-sm hover:text-green-500">Our Team</a>
        <a href="#reviews" className="text-white text-sm hover:text-green-500">Reviews</a>
        <a href="#contact" className="text-white text-sm hover:text-green-500">Contact</a>
        
      </div>
      <div className="md:hidden flex items-center pr-4">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4">
          <a href="/" className="text-white text-sm hover:text-green-500" onClick={toggleMobileMenu}>Home</a>
          <a href="/aboutus" className="text-white text-sm hover:text-green-500" onClick={toggleMobileMenu}>About Us</a>
          <a href="#reviews" className="text-white text-sm hover:text-green-500" onClick={toggleMobileMenu}>Reviews</a>
          <a href="#contact" className="text-white text-sm hover:text-green-500" onClick={toggleMobileMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
