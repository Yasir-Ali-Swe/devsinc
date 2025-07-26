import React from 'react';

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
    return (
        <div className='relative mt-20 px-5 z-10'>
            <div className='absolute right-0 bottom-0 w-[50%] h-[60%] bg-[#0aa29b]/80 blur-3xl rounded-tl-[5rem] z-0' />
            <div className='relative grid grid-cols-1 gap-4 lg:grid-cols-3 z-10'>
                <div className='flex flex-col items-start gap-2 my-4'>
                    <h1 className='text-2xl text-primary py-1 whitespace-nowrap'>Featured Insights</h1>
                    <h1 className='text-4xl bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent font-bold py-1'>
                        Stories of our transformations across Services and Industries
                    </h1>
                    <h1 className='text-xl font-thin py-1 whitespace-nowrap'>From Concept to Completion</h1>
                    <button className='capitalize bg-primary px-4 py-3 md:py-4 md:px-8 md:rounded-4xl rounded-3xl text-white font-semibold hover:bg-[#0aa29b] transition duration-300'>
                        Explore More
                    </button>
                </div>
                <div className='lg:col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {images.map((item) => (
                            <div
                                key={item.id}
                                className='relative group cursor-pointer overflow-hidden rounded-lg shadow-lg'
                            >
                                <img
                                    src={item.src}
                                    alt={item.tittle}
                                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
