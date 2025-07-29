// "use client";
// import React from 'react'
// import ThemeBtn from "./Components/ThemeBtn"
// import { useState } from "react";
// import MenuLinks from "./Components/MenuLinks";
// import Global from "./Components/Global";
// import Buttons from "./Components/Buttons";
// import { IoMenuOutline } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";


// const Navbar = () => {
//   const [theme, setTheme] = useState(true);
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className={`${theme ? "bg-black" : "bg-white"} w-screen fixed top-0 z-50 px-5 md:px-10 `}>
//       <div className={`flex items-center justify-between h-24`}>
//         <img src="techXenLogo.png" alt="logo" />
//         <ThemeBtn theme={theme} setTheme={setTheme} />
//         <div className='hidden lg:block'>
//           <MenuLinks theme={theme} />
//         </div>
//         <div className='hidden md:block'>
//           <Buttons theme={theme} />
//         </div>
//         <div className=''>
//           <Global theme={theme} />
//         </div>
//         <div className='lg:hidden'>
//           {
//             isOpen ? <IoClose onClick={toggleMenu} className={`${theme ? "text-white" : "text-black"} size-8 cursor-pointer`} />
//               : <IoMenuOutline onClick={toggleMenu} className={`${theme ? "text-white" : "text-black"} size-8 cursor-pointer`} />
//           }
//         </div>
//       </div>
//       {
//         isOpen && <div className='flex flex-col gap-8 '>
//           <MenuLinks theme={theme} />
//           <div className='md:hidden'>
//             <Buttons theme={theme} />
//           </div>
//         </div>
//       }
//     </div>
//   )
// }
// export default Navbar;




'use client';
import React, { useState } from 'react';
import ThemeBtn from './Components/ThemeBtn';
import MenuLinks from './Components/MenuLinks';
import Global from './Components/Global';
import Buttons from './Components/Buttons';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import { useTheme } from '@/context/ThemeContext'; 

const Navbar = () => {
  const { theme, setTheme } = useTheme(); 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`${theme ? 'bg-black' : 'bg-white'} w-screen fixed top-0 z-50 px-5 md:px-10`}>
      <div className='flex items-center justify-between h-24'>
        {/* <img src='techXenLogo.png' alt='logo' /> */}
        <h1 className={`text-2xl font-bold bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent py-3`}>TECHXEN SOLUTIONS</h1>
        <ThemeBtn theme={theme} setTheme={setTheme} />
        <div className='hidden lg:block'>
          <MenuLinks theme={theme} />
        </div>
        <div className='hidden md:block'>
          <Buttons theme={theme} />
        </div>
        <div>
          <Global theme={theme} />
        </div>
        <div className='lg:hidden'>
          {isOpen ? (
            <IoClose
              onClick={toggleMenu}
              className={`${theme ? 'text-white' : 'text-black'} size-8 cursor-pointer`}
            />
          ) : (
            <IoMenuOutline
              onClick={toggleMenu}
              className={`${theme ? 'text-white' : 'text-black'} size-8 cursor-pointer`}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-8'>
          <MenuLinks theme={theme} />
          <div className='w-60 flex justify-center items-center md:hidden'>
            <Buttons theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
