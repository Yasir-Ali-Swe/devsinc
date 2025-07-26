import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Global = ({theme}) => {
  return (
    <div className='flex items-center justify-center gap-1 cursor-pointer'>
        <h1 className={`${theme ? "text-white" : "text-black"} text-md font-extralight`}>Global</h1>
        <IoIosArrowDown size={18} className={`${theme ? "text-white" : "text-black"}`}/>
    </div>
  )
}

export default Global