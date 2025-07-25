import React from 'react';

const Hero = () => {
    return (
        <div className='h-screen relative overflow-hidden'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className='w-screen h-[93%] object-cover'
            >
                <source
                    src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67988ed24841623ccd9affd6_homepage%20global%20(1)-transcode.webm"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay with light black color */}
            <div className='absolute top-0 left-0 w-full h-[93%] bg-black opacity-40 z-20'></div>

            {/* Let's Talk Business button - rotated and aligned to right edge */}
            <button className="fixed top-1/2 right-[-65px] -translate-y-1/2 rotate-90 z-50 px-6 py-3 cursor-pointer text-black rounded-xl bg-primary">
                Let's Talk Business
            </button>


            {/* Text content */}
            <div className='absolute top-1/3 left-20 z-40 text-white'>
                <h1 className='text-6xl font-bold mb-3'>Drive Tomorrow’s</h1>
                <h1 className='text-6xl font-bold mb-6'>Possibilities</h1>
                <h1 className='text-2xl mb-2'>We help companies redefine the future</h1>
                <h1 className='text-2xl mb-6'>through technology</h1>
                <button className='mt-4 px-6 py-3 cursor-pointer text-white rounded-3xl bg-primary'>
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default Hero;
