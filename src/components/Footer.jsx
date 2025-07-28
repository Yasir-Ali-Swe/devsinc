import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const img = [
    {
        id: 1,
        src: "countries/11.webp", H1: "Pakistan",
        SPAN: "(Global Delivery Center)",
        ADDRESS: "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab"
    },
    {
        id: 2,
        src: "countries/12.webp",
        H1: "USA",
        SPAN: "(Regional Office)",
        ADDRESS: "18 S 2nd Street #120\nSan Jose, CA, 95113, United States"
    },
    {
        id: 3,
        src: "countries/13.webp",
        H1: "UAE",
        SPAN: "(Regional Office)",
        ADDRESS: "Office 1002, Al Shafar Tower 1, Tecom, Dubai, UAE"
    },
    {
        id: 4,
        src: "countries/14.webp",
        H1: "UK",
        SPAN: "(Regional Office)",
        ADDRESS: "2nd Floor, 1-3, 1-3, High St, London W3 6NG, United Kingdom"
    },
    {
        id: 5,
        src: "countries/15.webp",
        H1: "KSA",
        SPAN: "(Regional Office)",
        ADDRESS: "Al Murjanah Tower, Al Murjanah St, Al Murjanah, Riyadh 13315, Saudi Arabia"
    },
]
const Footer = () => {
    return (
        <div className='my-8 px-10 relative z-30' >
            <div>
                <div className='relative z-20'>
                    <span className=' bg-primary w-15 h-15 rounded-r-full block'></span>
                    <span className='block absolute bg-[#0a3a53] w-5 h-5 rounded-full -top-1 left-8'></span>
                </div>
                <div className='my-10'>
                    <ul className='flex flex-col gap-12'>
                        <li>
                            <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                                <h1 className='text-black text-xl'>Company</h1>
                                <IoIosArrowDown className={`text-primary  size-6 lg:size-4`} />
                            </div>
                        </li>
                        <li>
                            <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                                <h1 className='text-black text-xl'>Industries We Serve</h1>
                                <IoIosArrowDown className={`text-primary  size-6 lg:size-4`} />
                            </div>
                        </li>
                        <li>
                            <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                                <h1 className='text-black text-xl'>Services And Solution</h1>
                                <IoIosArrowDown className={`text-primary  size-6 lg:size-4`} />
                            </div>
                        </li>
                        <li>
                            <div className='cursor-pointer flex gap-2 lg:gap-[1px] items-center'>
                                <h1 className='text-black text-xl'>Resources</h1>
                                <IoIosArrowDown className={`text-primary  size-6 lg:size-4`} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-10 py-10 md:flex-row relative z-20">
                    {img.map((item) => (
                        <div
                            key={item.id}
                            className="w-full md:w-[45%] lg:w-[30%]   "
                        >
                            <div className='flex gap-2 items-center'>
                                <h1 className="text-2xl font-semibold mb-2">{item.H1}</h1>
                                <h1 className='text-nowrap whitespace-nowrap'>{item.SPAN}</h1>
                                <img
                                    src={item.src}
                                    alt={item.H1}
                                    className="w-15 object-cover "
                                />
                            </div>
                            <p className="text-gray-600 whitespace-pre-line">{item.ADDRESS}</p>
                        </div>
                    ))}
                </div>
                <h1 className='text-xl font-semibold text-black my-4'>
                    global.business@devsinc.com
                </h1>
                <div className='flex items-center justify-between  md:pr-30'>
                    <div className='flex flex-col md:flex-row md:gap-15 gap-3'>
                        <h1 className='text-xl'>
                            Terms and Conditions
                        </h1>
                        <h1 className='text-xl'>
                            Privacy Policy
                        </h1>
                    </div>
                    <div className='flex gap-4 text-2xl md:pr-20  md:mb-20'>
                        <FaFacebookSquare className='md:size-10' />
                        <FaLinkedin className='md:size-10' />
                        <FaInstagramSquare className='md:size-10' />
                        <FaXTwitter className='md:size-10' />
                    </div>
                </div>
            </div>
            <img src="featured/bg1.avif" alt="bgimg" className='w-130 absolute bottom-0 right-0 z-0' />
        </div>
    )
}

export default Footer;