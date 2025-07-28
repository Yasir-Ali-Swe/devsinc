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


