"use client";
import React from 'react'
import ThemeBtn from "./Components/ThemeBtn"
import { useState } from "react";
import MenuLinks from "./Components/MenuLinks";
import Global from "./Components/Global";
import Buttons from "./Components/Buttons";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${theme ? "bg-black" : "bg-white"} w-screen fixed top-0 z-50 px-5 md:px-10 `}>
      <div className={`flex items-center justify-between h-24`}>
        <div className='relative'>
          <span className=' bg-primary w-8.5 h-9.5 md:w-9.5 md:h-10.5 rounded-r-full block'></span>
          <span className='block absolute bg-[#0a3a53] w-3 h-3 rounded-full top-0 right-0'></span>
        </div>
        <ThemeBtn theme={theme} setTheme={setTheme} />
        <div className='hidden lg:block'>
          <MenuLinks theme={theme} />
        </div>
        <div className='hidden md:block'>
          <Buttons theme={theme} />
        </div>
        <div className=''>
          <Global theme={theme} />
        </div>
        <div className='lg:hidden'>
          {
            isOpen ? <IoClose onClick={toggleMenu} className={`${theme ? "text-white" : "text-black"} size-8 cursor-pointer`} />
              : <IoMenuOutline onClick={toggleMenu} className={`${theme ? "text-white" : "text-black"} size-8 cursor-pointer`} />
          }
        </div>
      </div>
      {
        isOpen && <div className='flex flex-col gap-8 '>
          <MenuLinks theme={theme} />
          <div className='md:hidden'>
            <Buttons theme={theme} />
          </div>
        </div>
      }
    </div>
  )
}
export default Navbar;

