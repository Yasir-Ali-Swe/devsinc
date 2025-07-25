import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const MenuLinks = ({ isOpen }) => {
    return (
        <div>
            <ul className={`uppercase flex justify-between items-center gap-6 ${isOpen ? "text-white" : "text-black"} text-[10px] font-thin`}>
                <li>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <h1>what we do</h1>
                        <IoIosArrowDown size={12} className={isOpen ? "text-white" : "text-black"} />
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <h1>who we help</h1>
                        <IoIosArrowDown size={12} className={isOpen ? "text-white" : "text-black"} />
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <h1>who we are</h1>
                        <IoIosArrowDown size={12} className={isOpen ? "text-white" : "text-black"} />
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <h1>how we deliver</h1>
                        <IoIosArrowDown size={12} className={isOpen ? "text-white" : "text-black"} />
                    </div>
                </li>
                <li>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <h1>join devsinc</h1>
                        <IoIosArrowDown size={12} className={isOpen ? "text-white" : "text-black"} />
                    </div>
                </li>
                <li>
                    <button className='capitalize text-[12px] font-extralight bg-primary text-white px-3 py-2 rounded-4xl hover:bg-white hover:text-black hover:border-1 hover:border-primary transition-all duration-700' >Explore careers</button>
                </li>
                <li>
                    <button className={`capitalize px-3 py-2 ${isOpen ? "bg-black hover:bg-primary text-primary hover:text-white" : "bg-white text-primary hover:bg-primary hover:text-white"} text-[12px]  rounded-4xl border-1 border-primary transition-all duration-700`}>Let's talk business</button>
                </li>
            </ul>
        </div>
    )
}

export default MenuLinks

