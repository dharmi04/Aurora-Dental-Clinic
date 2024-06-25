// import React, { useState, useRef } from 'react';
// import Header from './Header';
// import Nav from './Nav';
// import Footer from './Footer';
// import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
// import Instagram from '../assets/instagram.svg' 
// // import emailjs from '@emailjs/browser'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     companyName: '',
//     category: 'dealer',
//     subject: '',
//     content: '',
//     email: '',
//   });

//   const form = useRef();


//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_wie1poi', 'template_26vxi6q', form.current, 'EIoH3GIVRKiTHEom9')
//       // .sendForm('service_mff766b', 'template_nnpw6mo', form.current, 'aWuKHrieh55Peg4KN')
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Mail successfully sent!! ");
//         },
//         (error) => {
//           console.error(error.text);
//           alert("Error in sending mail..Try again! ");
//         }
//       );
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:shreyawatertechllp@gmail.com?subject=Contact%20Form&body=
//       Name: ${formData.name}%0D%0A
//       Phone: ${formData.phone}%0D%0A
//       Subject: ${formData.subject}%0D%0A
//       Company Name: ${formData.companyName}%0D%0A
//       Category: ${formData.category}%0D%0A
//       Email: ${formData.email}`;

//     window.location.href = mailtoLink;
//   };

//   return (
//     <div>
//       <Header />
//       <Nav />
//       <div className="flex flex-col lg:flex-row">
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-4xl font-bold mb-6 text-primary text-center md:mt-10">Contact Us</h2>
//           {/* <p className='text-center text-xl mt-10 '>Need to get in touch? Fill out this contact form.</p> */}
//           <div className='space-y-2'>
//             <div className="social-links flex text-2xl space-x-2  ">
//               <span className={`social-link flex items-center  `}>
//                 <a href="https://wa.me/919898406504" className="ml-1 text-green-600 font-semibold"> <FaWhatsapp className="social-icon text-green-600" /></a>
//               </span>
//               <span className="social-link flex items-center">

//                 <a href="https://www.instagram.com/shreyawatertech?igsh=MTRja2V5c3g1dTNzNg==" className="ml-1 text-purple-600 font-semibold">
//                   <img src={Instagram} className='h-8 w-10' />
//                 </a>
//               </span>
//               <span className="social-link flex items-center">
//                 <a href="https://www.facebook.com/profile.php?id=100054358338007&mibextid=LQQJ4d" className="ml-1 text-blue-600 font-semibold"><FaFacebook className="social-icon text-blue-600" /></a>
//               </span>
//             </div>
//             <p className='text-xl font-bold' id="contactus">Office Address: </p>
//             <p>22, Vrindavan Residency Behind  Dwarkesh Haveli</p>
//             <p>Nikol, Ahmedabad, 382350 </p>
//             <p>Phone Number: 9898650485, 7383221905</p>
//             <p>shreyawatertechllp@gmail.com</p>
//             <br></br>
//             <p className='text-xl font-bold' id="contactus">Factory Address: </p>
//             <p>Plot 1  Prince Industrial Hub-1 </p>
//             <p> Kuha -Kothiya road , Kuha</p>
//             <p> Ahmedabad, 380001</p>
//             <p>Phone Number: 9898405604</p>
//             <br></br>


//             {/* <p>Gujarat, India</p> */}
//           </div>
//         </div>
//         <div className="md:w-1/2 p-4 h-auto">
//           <div className="container mx-auto mt-4 p-5 bg-gray-100 rounded-md shadow-md flex">
//             <form ref={form} onSubmit={sendEmail}className="w-full">
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="mb-4">
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                     placeholder="Your Phone Number"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                     placeholder="Your Email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                   placeholder="Your Company Name"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="category" className="block text-sm font-medium text-gray-600">
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 >
//                   <option value="dealer">Dealer</option>
//                   <option value="individual">Individual</option>
//                   <option value="technician">Technician</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                   placeholder="Your Subject"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="content" className="block text-sm font-medium text-gray-600">
//                   Content
//                 </label>
//                 <textarea
//                   name="content"
//                   value={formData.content}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                   placeholder="Your Content"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;