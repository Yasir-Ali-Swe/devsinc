import React from 'react'

const industries = [
    { id: 1, tittle: "Travel & Hospitality", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg" },
    { id: 2, tittle: "Public Sector", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489ab9ff57ca6ca29c7e3c_Artboard%201.svg" },
    { id: 3, tittle: "Telicommunication", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489ac6e39d042f201a88ec_Artboard%201.svg" },
    { id: 4, tittle: "Retail & CPG", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489ad169e3410b5626a394_Artboard%201.svg" },
    { id: 5, tittle: "Oil, Gas and Energy  ", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489ad99f81ad131850be3f_Artboard%201.svg" },
    { id: 6, tittle: "Startups", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489ae2fbd0f9f3f80fe2a6_Artboard%201.svg" },
    { id: 7, tittle: "E-Commerce", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aef95eee1452d5dea90_Artboard%204.svg" },
    { id: 8, tittle: "Banking and Fintech", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489af814542fbafe9acef2_Artboard%205.svg" },
    { id: 9, tittle: "Healthcare and Phamaceuticals", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489b016ab8e1ba743df7f2_Artboard%201.svg" },
    { id: 10, tittle: "Gaming", src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489b0a2dc083d31fc5da34_Artboard%201.svg" },
];

const arrow = "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67330872fcc18762b4703730_right%20arrow.svg"
const Industries = () => {
    return (
        <div className='w-full overflow-x-hidden h-auto py-15 px-4'>
            <h1 className='text-4xl text-black font-black py-10 md:text-center '>Discover our Impact Across Industries</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-8'>
                {
                    industries.map((industry) => (
                        <div key={industry.id} className='group flex items-center gap-4 p-4 bg-white border-b'>
                            <img src={industry.src} alt={industry.tittle} className='w-16 h-16 object-contain' />
                            <div className='flex items justify-between w-full'>
                                <h2 className='text-xl font-semibold'>{industry.tittle}</h2>
                                <img src={arrow} alt="Right Arrow" className='size-5 opacity-0 group-hover:opacity-100' />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center my-10'>
                <button className='capitalize bg-primary px-4 py-3 md:py-4 md:px-8 md:rounded-4xl rounded-3xl text-white font-semibold hover:bg-[#0aa29b] transition duration-300  shadow-lg'>
                    Let's talk business
                </button>
            </div>
        </div>
    )
}

export default Industries