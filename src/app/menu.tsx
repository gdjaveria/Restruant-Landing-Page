import React from "react";
import Image from "next/image";
import Dash from "./dash";
import MenuCard from "./menuCard";

const menuData= [
    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },

    {
        img:"/img000.jpg",
        tittle:"mexican pizza",
        desc:"2x yummy , 1x cheese",
        price: "$29.50"
    },



]
function Menu () {
    return (
        <div className="container pt-40">
            <div className="space-y-4 w-fit mx-auto text-center">
         <h2 className="text-4xl md:text-6xl font-bold">
           Our <span className="text-accent"> Menu </span></h2>

         <p className="text-gray-700 pt-5 font-medium">
            A delightful journey through flavors
         our menu is crafted to excite every palate
                 <br/></p>
  <div className="w-fit mx-auto">
    <Dash />

</div>
 </div>
 <ul className="mt-8 hidden sm:flex  md:gap-10 w-fit px-8 mx-auto">
<li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer hover:text-slate-800 font-semibold text-xl p-1">
     Appetizers </li>
 <li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer  hover:text-slate-800 font-semibold text-xl p-1">
    Breakfast</li>
 <li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer  hover:text-slate-800 font-semibold text-xl p-1">
    Salad</li>
<li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer  hover:text-slate-800 font-semibold text-xl p-1">
    Nuggets & Fish</li>
<li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer  hover:text-slate-800 font-semibold text-xl p-1">
    Soups</li>
 <li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer hover:text-slate-800  font-semibold text-xl p-1">
    Desert</li>
<li className=" text-red-600 hover:underline hover:opacity-50 hover:cursor-pointer  hover:text-slate-800 font-semibold text-xl p-1">
    Cocktail</li>
        </ul>

        <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-20 px-20">
         <div className="w-fit mx-auto ">
<Image className="w-[100%] max-w-[400px] h-auto" 
src="/menu pic.jpg" 
width={500} 
height={500}
alt="dishes"/>
</div>

<div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
{menuData.map((items, index) => (
            <MenuCard
             key={index} 
             img={items.img}
             title={items.tittle}
             desc={items.desc}
             price={items.price}
             />
          ))}
        </div>
      </div>
    </div>

    )
}

export default Menu;