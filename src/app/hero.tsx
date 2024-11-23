import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

 function Hero() {
    return (
      <div className="relative min-h-screen">
<Image className="lg:w-[500px} xl:w-[600px] h-auto absolute right-0 top-0 -z-10 " 
src="/hero2.png" 
width={1000} 
height={600} 
alt="hero bg"/>
    
<Navbar/>

<div className="container px-8 h-[calc(100vh-3px)]  sm:h-[calc(100vh-30px) grid items-center">
<div className="space-y-4 bg-white w-fit p-4">
<p className="uppercase font-medium px-7">with option of choice</p>

<h2 className="text-4xl sm:text-6xl font-bold uppercase">
   Delicious  <span className="text-red-700">
      Food</span></h2>

<p className="text-gray-700 font-medium text-[14px] sm:text-[16px]">
     Delicious foof color,aroma and taste<br/>
     What are you waiting for?
     </p>

     <button className="bg-red-700 text-white px-6 py-2 rounded-3xl 
     text-[14px] sm:text-[16px]  font-semibold
     hover:duration-[0.3s] ease-in hover:bg-[#3a3a35]">
         View More View More</button>
</div>
</div>
</div>


    );
  };

  export default Hero;