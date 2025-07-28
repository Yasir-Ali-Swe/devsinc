"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Achievments = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`${theme ? "bg-black text-white" : "bg-white text-black"} transition-all duration-1000 py-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-2`}
        >
            {/* LEFT SECTION */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <h1 className='text-primary text-2xl py-3'>Pioneering Trust and Innovation</h1>
                <h1 className='text-5xl font-black py-3'>Devsinc’s Achievements</h1>
                <h1 className='py-3 text-base font-thin'>
                    We take pride in empowering businesses worldwide with innovative solutions.
                </h1>
                <h1 className='pt-4 text-base font-thin'>
                    Devinc's bring an unwavering commitment to excellence, backed by a global presence.
                </h1>
                <button className='py-2 bg-primary text-white px-3 mt-2 lg:mt-4 lg:px-6 lg:py-3 cursor-pointer rounded-3xl'>
                    Get in Touch
                </button>
            </motion.div>

            {/* RIGHT STATS GRID */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='my-8 grid grid-cols-1 md:grid-cols-2 gap-4'
            >
                {[
                    { count: "3000+", label: "Successful Projects" },
                    { count: "23+", label: "Countries" },
                    { count: "236+", label: "Active Clients" },
                    { count: "15+", label: "Years of Enablement Experience" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className='py-3'
                    >
                        <h1 className='text-center text-4xl text-primary font-black'>{item.count}</h1>
                        <h1 className='text-center text-2xl font-medium mt-2'>{item.label}</h1>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Achievments;
