import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Global = ({isOpen}) => {
  return (
    <div className='flex items-center justify-center gap-1 cursor-pointer'>
        <h1 className={`${isOpen ? "text-white" : "text-black"} text-[12px] font-thin`}>Global</h1>
        <IoIosArrowDown className={isOpen ? "text-white" : "text-black"}/>
    </div>
  )
}

export default Global