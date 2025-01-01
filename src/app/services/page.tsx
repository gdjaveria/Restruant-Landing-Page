import React from "react";
import Dash from "../dash";
import ServiceCard from "../serviceCard"; 
import Image from "next/image";

const servicesData = [
    {
      img: "/services__1.png",
      title: "Professonal Kitchen",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__2.png",
      title: "Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__3.png",
      title: "Wine List",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__4.png",
      title: "Free Wifi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
  ];

function Services (){
    return(

        <div className="container pt-40">
       <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold">
        Choose Our Best<span className="text-red-800"> Services </span>
        </h2>
        <p className="text-gray-700 pt-5 font-medium text-center">
        Our services are designed to bring exceptional dining experiences to your table<br/>
        From dine-in and takeout to catering for special occasions, we ensure every meal<br/>
        is crafted with care, using only the finest ingredients. Whether you are hosting<br/>
        a celebration, planning a corporate event, or simply indulging in your favorite<br/> 
        dishes, we re here to make every moment delicious and memorable
        </p>
        <div className="w-fit mx-auto">
            <Dash />

        </div>
    </div>
    <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8 font-medium ">
    {servicesData.map((item, index) => (
          <ServiceCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
    </div>


 <div className="container pt-20 px-20 mb-11">
            <div className="grid lg:grid-cols-[50%,1fr] gap-10">
    <div>
    <Image className="w-[100%] h-auto lg:w-auto lg:h-[90vh] hover:scale-[1.03] cursor-pointer
     ease-linear duration-[0.3s] hover:shadow-2xl shadow-gray-950"
    src="/survey.1.jpg"
     width={1000} 
    height={600}
    alt="survey image"/> 
    </div>

<div className="self-center">
        <h2 className="text-4xl md:text-7xl font-bold">Survey About</h2>
        <h2 className="text-4xl md:text-7xl font-bold pt-5">
         our  <span className="text-red-700 font-semibold pt-3">
            Food </span></h2>

        <p className="text-gray-700 font-medium  text-center pt-10">
        Your feedback helps us serve you better Share your thoughts 
        and let us know how we can enhance your dining experience We value your opinion
        Tell us how we did and help us make every visit even more memorable
        </p>


</div>
            </div>
        </div>









        </div>














    )
    }

    export default Services;