import React from 'react'

const Achievments = () => {
    return (
        <div className='py-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h1 className='text-primary text-2xl py-3'>Pioneering Trust and Innovation</h1>
                <h1 className='text-5xl font-black py-3'>Devsinc’s Achievements</h1>
                <h1 className='py-3 text-base font-thin'>We take pride in empowering businesses worldwide with innovative solutions.</h1>
                <h1 className='pt-4 text-base font-thin'>Devinc's bring an unwavering commitment to excellence, backed by a global presence.</h1>
                <button className='py-2 bg-primary text-white px-3 mt-2 lg:mt-4 lg:px-6 lg:py-3 cursor-pointer rounded-3xl'>Get in Touch</button>
            </div>
            <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='py-3'>
                    <h1 className='text-center text-4xl text-primary font-black'>3000+</h1>
                    <h1 className='text-center text-2xl font-medium mt-2'>Successful Projects</h1>
                </div>
                <div className='py-3'>
                    <h1 className='text-center text-4xl text-primary font-black'>23+</h1>
                    <h1 className='text-center text-2xl font-medium mt-2'>Countries</h1>
                </div>
                <div className='py-3'>
                    <h1 className='text-center text-4xl text-primary font-black'>236+</h1>
                    <h1 className='text-center text-2xl font-medium mt-2'>Active Clients</h1>
                </div>
                <div className='py-3'>
                    <h1 className='text-center text-4xl text-primary font-black'>15+</h1>
                    <h1 className='text-center text-2xl font-medium mt-2'>Years of Enablement Experience</h1>
                </div>
            </div>

        </div>
    )
}

export default Achievments;