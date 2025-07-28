"use client";
import React from 'react';
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
const images = [
    {
        id: 1,
        src: 'insights/11.avif',
        tittle: 'Blog',
        description: 'Enabling Seamless Resale Operations Across E-Commerce',
    },
    {
        id: 2,
        src: 'insights/12.webp',
        tittle: 'Blog',
        description: 'How Cloud Computing Can Transform Small Businesses',
    },
    {
        id: 3,
        src: 'insights/13.avif',
        tittle: 'Blog',
        description: 'Custom Web Application Development: Everything You Need to Know',
    },
    {
        id: 4,
        src: 'insights/14.avif',
        tittle: 'Blog',
        description: "Trends of Mobile Design: What's Next for Your Business?",
    },
    {
        id: 5,
        src: 'insights/15.avif',
        tittle: 'Blog',
        description: 'How Generative AI is Transforming Business Operations',
    },
    {
        id: 6,
        src: 'insights/16.avif',
        tittle: 'Blog',
        description: 'Empowering XQUIC for Automated Financial Accuracy',
    },
    {
        id: 7,
        src: 'insights/17.avif',
        tittle: 'Blog',
        description: 'KUDO’s Journey to Bridging Global Communications',
    },
    {
        id: 8,
        src: 'insights/18.avif',
        tittle: 'Blog',
        description: 'Automating Financial Insights for Smarter Business Decisions',
    },
];
const Insights = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Split images into 3 columns
    const column1 = images.slice(0, 2);
    const column2 = images.slice(2, 5);
    const column3 = images.slice(5);

    // Parallax transforms
    const rawY1 = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);
    const y1 = useSpring(rawY1, { stiffness: 50, damping: 20 });

    const rawY2 = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
    const y2 = useSpring(rawY2, { stiffness: 50, damping: 20 });

    const rawY3 = useTransform(scrollYProgress, [0, 1], ["-50px", "60px"]);
    const y3 = useSpring(rawY3, { stiffness: 50, damping: 20 });



    return (
        <div ref={containerRef} className='relative mt-20 px-5 z-10'>
            <img src="featured/bg1.avif" alt="bgimg" className='absolute bottom-0 right-0 z-0' />

            <div className='relative grid grid-cols-1 gap-4 lg:grid-cols-3 z-10'>
                <div className='flex flex-col items-start gap-2 my-4'>
                    <h1 className='text-2xl text-primary py-1 whitespace-nowrap'>Featured Insights</h1>
                    <h1 className='text-4xl  lg:text-7xl bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent font-bold py-1'>
                        Stories of our transformations across Services and Industries
                    </h1>
                    <h1 className='text-xl font-thin py-1 whitespace-nowrap'>From Concept to Completion</h1>
                    <button className='capitalize bg-primary px-4 py-3 md:py-4 md:px-8 md:rounded-4xl rounded-3xl text-white font-semibold hover:bg-[#0aa29b] transition duration-300'>
                        Explore More
                    </button>
                </div>

                <div className='lg:col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <motion.div style={{ y: y1 }} className='flex flex-col gap-4'>
                            {column1.map((item) => (
                                <ImageCard key={item.id} item={item} />
                            ))}
                        </motion.div>
                        <motion.div style={{ y: y2 }} className='flex flex-col gap-4'>
                            {column2.map((item) => (
                                <ImageCard key={item.id} item={item} />
                            ))}
                        </motion.div>
                        <motion.div style={{ y: y3 }} className='flex flex-col gap-4'>
                            {column3.map((item) => (
                                <ImageCard key={item.id} item={item} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const ImageCard = ({ item }) => (
    <div className='relative group cursor-pointer overflow-hidden rounded-lg shadow-lg'>
        <img
            src={item.src}
            alt={item.tittle}
            className='w-full h-64  object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition duration-300' />
        <div className='absolute top-6 left-6 right-6 z-20'>
            <h1 className='text-white text-lg font-semibold'>{item.tittle}</h1>
            <p className='text-white text-base font-medium mt-2'>{item.description}</p>
        </div>
        <button className='absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 bg-primary px-4 py-2 text-white rounded-3xl transition duration-300'>
            Explore More
        </button>
    </div>
);

export default Insights;







