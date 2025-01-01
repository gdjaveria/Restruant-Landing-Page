import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRestaurantMenu } from "react-icons/md"

function Navbar() {
    return (
<div className="container z-50 max-w-[1280px] py-2 px-6 fixed top-0 w-[100vw] bg-red-700 text-white ">
    
    <div className="flex justify-between items-center w-[100%]">
<Image src="/logo111.jpg" width={50} height={50} alt="logo"/>

<ul className="md:flex hidden gap-10 items-center hover:underline hover:text-gray-800 font-semibold text-[20px]">
    <li>
    <Link href={"/#"}>Home</Link></li>
    <li>
    <Link href={"/about"}>About</Link></li>
    <li>
    <Link href={"/menu"}>Menu</Link></li>
    <li>
    <Link href={"/services"}>Services</Link></li>
    <li>
    <Link href={"/contact"}>Contact</Link></li>

    <button className="bg-white text-red-600 px-6 py-1 rounded-3xl hover:text-gray-800">
        Sing Up
    </button>
</ul>

<MdOutlineRestaurantMenu className="menu-btn md:hidden text-accent font-[900]" 

size={40} />
</div>
</div>

    )
}
export default Navbar;