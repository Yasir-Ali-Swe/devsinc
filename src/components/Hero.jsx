"use client";
import React from 'react';
import { motion } from "framer-motion";

const containerAnimation = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5
        }
    }
};

const textAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }
};


const Hero = () => {
    return (
        <div className='h-screen relative overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='h-screen w-screen lg:h-[100%] object-cover'
            >
                <source
                    src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67988ed24841623ccd9affd6_homepage%20global%20(1)-transcode.webm"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 w-full h-[100%] lg:h-[100%] bg-black opacity-70 z-20'></div>
            <button  className="fixed top-1/2 right-[-55px] lg:right-[-65px] lg:-translate-y-1/2 rotate-90 z-50 px-3 lg:px-6 py-2 lg:py-3 cursor-pointer text-black rounded-xl bg-primary">
                Let's Talk Business
            </button>
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                className='absolute top-[40%] md:top-[10%] left-6 lg:top-1/3 lg:left-20 z-40 text-white'
            >
                <motion.h1 variants={textAnimation} className='text-4xl lg:text-6xl font-bold mb-1 lg:mb-3'>
                    Drive Tomorrow’s
                </motion.h1>

                <motion.h1 variants={textAnimation} className='text-4xl lg:text-6xl font-bold mb-2 lg:mb-6'>
                    Possibilities
                </motion.h1>

                <motion.h1 variants={textAnimation} className='text-2xl font-thin lg:text-4xl lg:mb-2 mt-5'>
                    We help companies redefine the future
                    <span className='lg:hidden'> through technology</span>
                </motion.h1>

                <motion.h1 variants={textAnimation} className='hidden lg:block lg:text-2xl lg:mb-6'>
                    through technology
                </motion.h1>

                <motion.button
                    variants={textAnimation}
                    className='px-6 py-4 md:py-6 text-2xl mt-6 lg:mt-6 lg:px-6 lg:py-3 cursor-pointer text-white rounded-4xl bg-primary'
                >
                    Get in Touch
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Hero;
