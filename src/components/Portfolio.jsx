"use client";
import React from 'react'
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { useTheme } from '@/context/ThemeContext';

const images = [
    {
        id: 1,
        src: "projects/11.png",
        h1: "Solarize",
        p: "A platform to manage and monitor solar projects efficiently."
    },
    {
        id: 2,
        src: "projects/12.png",
        h1: "Starterpals",
        p: "A platform for managing and funding projects."
    },
    {
        id: 3,
        src: "projects/13.png",
        h1: "SMB Leads",
        p: "A lead generation platform for small and medium businesses."
    },
    {
        id: 4,
        src: "projects/14.png",
        h1: "Impoix",
        p: "A rental system to manage properties and bookings.",
    },
    {
        id: 5,
        src: "projects/13.png",
        h1: "SMB Leads",
        p: "A lead generation platform for small and medium businesses."
    },
    {
        id: 6,
        src: "projects/14.png",
        h1: "Impoix",
        p: "A rental system to manage properties and bookings.",
    }
];

const Portfolio = () => {
    const { theme } = useTheme();

    return (
        <div className={`py-10 md:px-20 px-4 ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h1 className="text-2xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent py-3 lg:py-8">
                A small selection of recent projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item) => (
                    <div
                        key={item.id}
                        className={`p-5 shadow-xl rounded-lg h-full flex flex-col justify-between ${
                            theme ? 'bg-[#1a1919]' : 'bg-white'
                        }`}
                    >
                        <div>
                            <div className="pb-6">
                                <img src={item.src} alt="projectImg" className="w-full h-auto rounded" />
                            </div>
                            <h1 className="text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent break-words">
                                {item.h1}
                            </h1>
                            <p className="text-sm md:text-base font-medium bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent break-words whitespace-normal">
                                {item.p}
                            </p>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <div className="flex flex-wrap gap-2">
                                <RiNextjsLine className="size-6 md:size-7 text-white bg-gradient-to-r from-[#0c4764] to-[#0da7a4] p-1 rounded-full" />
                                <RiTailwindCssFill className="size-6 md:size-7 text-white bg-gradient-to-r from-[#0c4764] to-[#0da7a4] p-1 rounded-full" />
                                <SiTypescript className="size-6 md:size-7 text-white bg-gradient-to-r from-[#0c4764] to-[#0da7a4] p-1 rounded-full" />
                                <TbBrandFramerMotion className="size-6 md:size-7 text-white bg-gradient-to-r from-[#0c4764] to-[#0da7a4] p-1 rounded-full" />
                            </div>
                            <div className="flex items-center gap-1">
                                <h1 className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent">
                                    Visit Site
                                </h1>
                                <IoIosSend className="size-5 md:size-6 text-[#0da7a4]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
