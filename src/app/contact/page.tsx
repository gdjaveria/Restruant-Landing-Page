import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 mt-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl px-12 font-bold mb-4 pt-14">Contact Us</h2>
        <p className="mb-4 text-gray-900 px-12">
          We would love to hear from you<br/> 
         If you have any questions or feedback,<br/>
         please reach out to us</p>

  <div className='mb-4 text-black mt-10 px-8'>
    <FaEnvelope  size={20}  className='inline-block tex-black mx-5'/>
     <span className='hover:underline'>support@foodwebsite.com </span>
    </div>
        
    <div className='mb-4 px-8'>
   <FaPhone size={20} className='inline-block text-black mx-5'/>
    <span className="text-black">(123) 456-7890</span>
   </div>
  <div className='mb-4 px-8'>
 <FaMapMarkedAlt  size={20} className='inline-block text-black mx-5'/>
 <span className="text-black">
 Address: 123 Food Street, Flavor Town, FT 12345</span>
  </div>
  </div>
       
      <div className="md:w-2/4 mt-20">
        <form className="bg-red-600 p-6 rounded shadow-md">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h3>
          <div className="mb-4">
       <label className="block text-gray-900  font-semibold mb-2" htmlFor="name">Name</label>
       <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name"
        placeholder="Your Name"required />
          </div>

          <div className="mb-4">
         <label className="block text-gray-900  font-semibold mb-2" htmlFor="email">Email</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email"
        placeholder="Your Email"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="message" placeholder="Your Message"required></textarea>
    </div>
    <button className="w-full bg-black text-white text-xl font-bold p-2 rounded hover:bg-slate-700"
     type="submit">Send Message
  </button>
  </form>
  </div>
    </div>

  );
};

export default Contact;
