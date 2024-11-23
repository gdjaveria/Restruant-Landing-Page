import React from "react";
import Dash from "./dash";
import ServiceCard from "./serviceCard";

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

        <div className="container px-10 pt-10">
       <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
        Choose Our Best<span className="text-red-800"> Services </span>
        </h2>
        <p className="text-gray-700 pt-5 font-medium">
        Exceptional service, unforgettable dining—where 
        every detail is crafted for your perfect experience!
            <br/>
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
        </div>
    )
    }

    export default Services;