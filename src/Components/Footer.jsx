import React from 'react';
import dentist from '../assets/Dentist.jpg'
const Footer = () => {
    // Updated latitude and longitude values for a new location
    // const newLatitude = 23.159362504362317; // Replace with the new latitude
    // const newLongitude = 72.6654679605087; // Replace with the new longitude

    // const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d${newLongitude}!3d${newLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU3JzA4LjAiTiA3MsKwMzknNTguOSJF!5e0!3m2!1sen!2sus!4v1642662791234!5m2!1sen!2sus`;




    return (
        <div className='pl-8 pr-8 bg-footer'>
            <div className=' flex md:flex-row flex-col md:space-x-20 md:space-y-0 space-y-6  text-white p-5'>
                {/* <div>
                    <img src={dentist} alt="Aurora Dental Logo" className="h-30 w-30 rounded-3xl" />
                </div> */}
            <div className='space-y-2'>
                    <p className='text-xl font-semibold' id="contactus">Contact</p>
                    <p>Dr. Ravi Patel</p>
                    <p>+1 (306) 111-111</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-semibold' id="contactus">Location</p>
                    <p>Aurora Dental Clinic</p>
                    <p>Regina, SK, Canada</p>
                    <br></br>
                </div>

                <div className='space-y-2'>
                    <p className='text-xl font-semibold'>Key Pages</p>
                    <p >Home</p>
                    <p >About</p>
                    <p>Services</p>
                </div>
                

                <div className='space-y-2'>
                    <p className='text-xl font-semibold'>Social Media</p>
                    <p >Instagram</p>
                    <p >Tik Tok</p>
                    <p>Twitter</p>
                </div>
                
                {/* Google Map Embed at the right end */}
                {/* <div className='md:pl-24 pl-0'>
                    <iframe
                        title='Google Map'
                        className='w-full h-64'
                        loading='lazy'
                        allowFullScreen
                        src={mapUrl}
                    ></iframe>
                </div> */}
            </div>

            {/* <div className='bg-black text-white text-center p-2'>
            Designed and Managed By Infolanze
            </div> */}
        </div>
    );
};

export default Footer;