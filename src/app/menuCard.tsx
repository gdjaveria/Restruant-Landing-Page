import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const MenuCard: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="flex gap-10">
      <Image
        className="w-[80px] h-[80px]"
        src={img}
        width={80}
        height={80}
        alt={"dish"}
      />

      <div className="space-y-3">
        <div>
          <h2 className="font-bold font-2xl">{title}</h2>
          <p className="text-[14px] text-gray-700 font-medium">{desc}</p>
        </div>
        <p className="text-accent text-red-700 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;