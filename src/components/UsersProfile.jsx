"use client";
import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft, FaLinkedin } from "react-icons/fa6";
import { useTheme } from '@/context/ThemeContext';

const images = [
    { id: 1, src: "UsersProfile/101.png", firstname: "Usman", lastname: "Asif", title: "Founder, CEO" },
    { id: 2, src: "UsersProfile/102.png", firstname: "Ali", lastname: "Khan", title: "CTO" },
    { id: 3, src: "UsersProfile/103.png", firstname: "Sara", lastname: "Ahmed", title: "COO" },
    { id: 4, src: "UsersProfile/104.png", firstname: "Zain", lastname: "Iqbal", title: "CFO" },
    { id: 5, src: "UsersProfile/105.png", firstname: "Aisha", lastname: "Rehman", title: "CMO" },
    { id: 6, src: "UsersProfile/106.png", firstname: "Bilal", lastname: "Hussain", title: "CTO" },
];

const UsersProfile = () => {
    const { theme } = useTheme();
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
    };

    return (
        <div className={`transition-all duration-1000 py-10 px-10 md:px-20 md:py-20 ${theme ? 'bg-black' : 'bg-white'}`}>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent leading-12 md:mt-8'>Our Global Leadership</h1>
                <div className='flex items-center gap-5'>
                    <div
                        onClick={scrollLeft}
                        className='w-16 h-16 border-2 border-dotted border-primary rounded-full flex items-center justify-center cursor-pointer text-primary'
                    >
                        <FaArrowLeft className='size-6' />
                    </div>
                    <div
                        onClick={scrollRight}
                        className='w-16 h-16 border-2 border-dotted border-primary rounded-full flex items-center justify-center cursor-pointer text-primary'
                    >
                        <FaArrowRight className='size-6' />
                    </div>
                </div>
            </div>

            <div
                ref={scrollRef}
                className='py-5 md:pl-100 lg:pl-90 flex flex-row gap-6 overflow-x-auto scroll-smooth scrollbar-hide'
            >
                {images.map((item) => (
                    <div key={item.id} className={`min-w-[360px] md:min-w-[400px] lg:min-w-[600px] ${theme ? 'bg-black text-white' : 'bg-white text-black'} p-4`}>
                        <div>
                            <img src={item.src} alt="UserImg" className='w-full' />
                        </div>
                        <h1 className='text-2xl font-bold py-2'>
                            {item.firstname} <span className='text-primary'>{item.lastname}</span>
                        </h1>
                        <h2 className='text-lg font-light pb-2'>{item.title}</h2>
                        <FaLinkedin size={30} className={`${theme ? 'text-white' : 'text-black'}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersProfile;
