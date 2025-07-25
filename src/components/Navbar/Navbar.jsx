"use client";
import React from 'react'
import ThemeBtn from "./Components/ThemeBtn"
import { useState } from "react";
import MenuLinks from "./Components/MenuLinks";
import Global from "./Components/Global";
import { IoMenuOutline } from "react-icons/io5";

//evsinc
// className={`${isOpen ? "text-white" : "text-black"} text-2xl font-thin text-center`}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`${isOpen ? "bg-black" : "bg-white"} h-17 flex items-center justify-between px-6 transition-all duration-800`}>
      <div className='relative'>
        <span className=' bg-primary w-6.5 h-7.5 rounded-r-full block'></span>
        <span className='block absolute bg-[#0a3a53] w-2 h-2 rounded-full top-0 right-0'></span>
      </div>
      <ThemeBtn setIsOpen={setIsOpen} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      <Global isOpen={isOpen} />
    </div>
  )
}

export default Navbar;