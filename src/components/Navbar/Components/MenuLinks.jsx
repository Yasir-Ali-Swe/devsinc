import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const MenuLinks = ({theme}) => {
  return (
    <div className='py-6 pl-8 '>
        <ul className='flex flex-col items-start lg:flex-row lg:items-center lg:justify-center md:gap-5 gap-8'>
            <li>
                <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                    <h1 className={`${theme ? "text-white" : "text-black"} uppercase text-base lg:text-sm font-thin`}>What we do</h1>
                    <IoIosArrowDown className={`${theme ? "text-white" : "text-black"} size-6 lg:size-4`} />
                </div>
            </li>
            <li>
                <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                    <h1 className={`${theme ? "text-white" : "text-black"} uppercase text-base lg:text-sm font-thin`}>Who we help</h1>
                    <IoIosArrowDown className={`${theme ? "text-white" : "text-black"} size-6 lg:size-4`} />
                </div>
            </li>
            <li>
                <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                    <h1 className={`${theme ? "text-white" : "text-black"} uppercase text-base lg:text-sm font-thin`}>Who we are</h1>
                    <IoIosArrowDown className={`${theme ? "text-white" : "text-black"} size-6 lg:size-4`} />
                </div>
            </li>
            <li>
                <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                    <h1 className={`${theme ? "text-white" : "text-black"} uppercase text-base lg:text-sm font-thin`}>how we deliver</h1>
                    <IoIosArrowDown className={`${theme ? "text-white" : "text-black"} size-6 lg:size-4`} />
                </div>
            </li>
            <li>
                <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                    <h1 className={`${theme ? "text-white" : "text-black"} uppercase text-base lg:text-sm font-thin`}>join devsinc</h1>
                    <IoIosArrowDown className={`${theme ? "text-white" : "text-black"} size-6 lg:size-4`} />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default MenuLinks



    // < li >
    // <button className='capitalize text-[12px] font-extralight bg-primary text-white px-3 py-2 rounded-4xl hover:bg-white hover:text-black hover:border-1 hover:border-primary transition-all duration-700' >Explore careers</button>
    //             </li >
    // <li>
    //     <button className={`capitalize px-3 py-2 ${isOpen ? "bg-black hover:bg-primary text-primary hover:text-white" : "bg-white text-primary hover:bg-primary hover:text-white"} text-[12px]  rounded-4xl border-1 border-primary transition-all duration-700`}>Let's talk business</button>
    // </li>