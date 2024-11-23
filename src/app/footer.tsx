import React from "react";
import { FaFacebook,FaTwitter,FaLinkedinIn,FaPinterest } from "react-icons/fa";


function Footer () {
    return (
    <div  className="container pt-20  bg-red-700 text-white max-w-[1280px]">
      <div className="grid md:grid-cols-3 gap-20 mb-9">
        <div className="space-y-4">
          <h2 className="text-xl font-bold px-10">About Us</h2>

     <p className="leading-[1.8] font-medium px-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className="space-y-4 mb-9">
          <h2 className="text-xl font-bold ">The Restaurant</h2>

          <ul className="space-y-2 font-medium">
            <li className="hover:underline hover:opacity-70  hover:cursor-pointer hover:text-gray-600">
              About Us</li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer  hover:text-gray-600">
              Chefs</li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer  hover:text-gray-600">
              Events</li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer  hover:text-gray-600">
              Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-white text-2xl items-center sm:pt-16">
            <FaFacebook className="hover:underline hover:cursor-pointer hover:text-gray-600" />
            <FaTwitter className="hover:underline hover:cursor-pointer hover:text-gray-600"/>
            <FaLinkedinIn className="hover:underline hover:cursor-pointer hover:text-gray-600"/>
            <FaPinterest className="hover:underline hover:cursor-pointer hover:text-gray-600"/>


          
        
            
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};



export default Footer;