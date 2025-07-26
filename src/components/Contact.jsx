import React from 'react'

const img = [
    {
        id: 1,
        src: 'contact/11.svg',
    },
    {
        id: 2,
        src: 'contact/13.svg',
    }
]

const Contact = () => {
    return (
        <div className='px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative'>
            <div>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-[#0c4764] to-[#0da7a4] bg-clip-text text-transparent py-3'>Ready To Get Started</h1>
                <h1 className='text-xl font-thin leading-9'>Connect with us to explore how we can deliver exceptional IT solutions for your needs.</h1>
                <div className='pt-8 md:pd-0 px-5 '>
                    <div className='pb-5'>
                        <h1 className='text-lg'>First Name<span className='text-red-800'>*</span></h1>
                        <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                    </div>
                    <div className='py-5'>
                        <h1 className='text-lg'>Last Name<span className='text-red-800'>*</span></h1>
                        <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                    </div>
                    <div className='py-5'>
                        <h1 className='text-lg'>Email<span className='text-red-800'>*</span></h1>
                        <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                    </div>
                    <div className='py-5'>
                        <h1 className='text-lg'>Phone No<span className='text-red-800'>*</span></h1>
                        <div className='flex items-center gap-2'>
                            <select className='w-[80px] border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'>
                                <option value="PAK">PAK</option>
                                <option value="IND">IND</option>
                                <option value="Uk">Uk</option>
                                <option value="KSA">KSA</option>
                            </select>
                            <input type='text' className='w-[calc(100%-80px)] border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary ml-2' placeholder='Enter your phone number' />
                        </div>
                        <div className='py-5'>
                            <h1 className='text-lg'>Your Budget<span className='text-red-800'>*</span></h1>
                            <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                        </div>
                        <div className='py-5'>
                            <h1 className='text-lg'>Company Name<span className='text-red-800'>*</span></h1>
                            <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                        </div>
                        <div className='py-5'>
                            <h1 className='text-lg'>Company Doman/Url</h1>
                            <input type='text' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' placeholder='Enter your first name' />
                        </div>
                        <div className='py-5'>
                            <h1 className='text-lg'>Your Region<span className='text-red-800'>*</span></h1>

                            <select className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'>
                                <option value="Pkistan">Pakistan</option>
                                <option value="India">India</option>
                                <option value="Uk">UK</option>
                                <option value="KSA">KSA</option>
                            </select>
                        </div>
                        <div className='py-5'>
                            <h1 className='text-lg'>Services You Are Looking For<span className='text-red-800'>*</span></h1>
                            <div className='py-3'>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='Remote' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="Remote">A</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='B' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="B">B</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='C' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="C">C</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='D' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="D">D</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='E' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="E">E</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='F' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="F">F</label>
                                </div>
                                <div className='flex items-center py-1'>
                                    <input type="checkbox" id='G' className='w-6 h-6 rounded-xl' />
                                    <label className='ml-2 text-xl' htmlFor="G">G</label>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h1>Project Details<span className='text-red-800'>*</span></h1>
                            <textarea className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' rows="4" placeholder='Enter your project details'></textarea>
                        </div>
                        <div className='py-5'>
                            <h1>I am looking for job in devsinc</h1>
                            <select className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'>
                                <option value="" disabled selected>Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='py-5'>
                            <input type="submit" className=' border bg-[#0c3a53] text-white cursor-pointer border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='secondblock flex flex-col  gap-20 items-center  md:mx-20  sticky  md:mt-100 md:top-30 md:self-start'>
                <div className='grid grid-cols-8'>
                    <div className='col-span-2'>
                        <img src={img[0].src} alt="Contact Us" className='size-13 md:size-30 object-cover' />
                    </div>
                    <div className='col-span-6 flex flex-col gap-3'>
                        <h1 className='text-3xl font-medium bg-gradient-to-r from-[#0c3a53] to-[#0c3a53] bg-clip-text text-transparent'>Global Presence</h1>
                        <h1 className=''>We're across 5 continents, explore our office nearest to you.</h1>
                        <button className='w-fit capitalize bg-primary px-4 py-3 md:py-4 md:px-8 md:rounded-4xl rounded-3xl text-white font-semibold hover:bg-[#0aa29b] transition duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
                 <div className='grid grid-cols-8'>
                    <div className='col-span-2'>
                        <img src={img[1].src} alt="Contact Us" className='size-10 md:size-30 object-cover' />
                    </div>
                    <div className='col-span-6 flex flex-col gap-3'>
                        <h1 className='text-3xl font-medium bg-gradient-to-r from-[#0c3a53] to-[#0c3a53] bg-clip-text text-transparent'>Global Leaders</h1>
                        <h1 className=''>Our capability and competencies are backed by diverse Global leadership.</h1>
                        <button className='w-fit capitalize bg-primary px-4 py-3 md:py-4 md:px-8 md:rounded-4xl rounded-3xl text-white font-semibold hover:bg-[#0aa29b] transition duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact