import React from 'react'

const Carriers = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-15'>
            <div>
                <video
                    className="w-full h-screen object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/6798985ffa243f5e7673e433_careers%20(1)-transcode.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='pl-8 pt-5 md:py-35'>
                <h1 className='py-1 text-2xl md:text-2xl font-medium text-primary uppercase'>careers</h1>
                <h1 className='py-2 text-4xl md:text-6xl md:leading-16 font-black leading-12 text-black'>Human-first is our foundation.</h1>
                <h1 className='py-2 pr-3 text-xl md:text-3xl text-stone-700 font-thin'>Join a culture that celebrates excellence and diversity, Globally!</h1>
                <button className='py-4 bg-primary text-white text-xl px-9 mt-2 lg:mt-4 lg:px-6 lg:py-3 cursor-pointer rounded-4xl'>Join Us</button>
            </div>
        </div>
    )
}

export default Carriers;