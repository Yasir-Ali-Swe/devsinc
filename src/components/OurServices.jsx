"use client";
import React, { useState ,useEffect } from 'react';

const services = [
  { id: 1, title: 'Generative AI', img: 'services/101.webp' },
  { id: 2, title: 'Dynamics 365', img: 'services/102.webp' },
  { id: 3, title: 'Mobile App Development', img: 'services/103.webp' },
  { id: 4, title: 'Staff Augmentation', img: 'services/104.webp' },
  { id: 5, title: 'Web Development', img: 'services/105.webp' },
  { id: 6, title: 'UI/UX Design', img: 'services/106.webp' },
  { id: 7, title: 'Cloud Solutions', img: 'services/107.webp' },
  { id: 8, title: 'DevOps', img: 'services/108.jpg' },
  { id: 9, title: 'Quality Assurance', img: 'services/109.webp' },
  { id: 10, title: 'Blockchain Development', img: 'services/110.webp' },
  { id: 11, title: 'E-commerce Solutions', img: 'services/111.webp' },
  { id: 12, title: 'Digital Marketing', img: 'services/112.webp' },
  { id: 13, title: 'Data Analytics', img: 'services/113.webp' },
  { id: 14, title: 'CRM Solutions', img: 'services/114.webp' },
  { id: 15, title: 'ERP Solutions', img: 'services/115.webp' },
  { id: 16, title: 'Cybersecurity', img: 'services/116.webp' },
  { id: 17, title: 'AI Chatbots', img: 'services/117.webp' },
  { id: 18, title: 'AR/VR Development', img: 'services/118.webp' },
  { id: 19, title: 'IoT Solutions', img: 'services/119.webp' },
  { id: 20, title: 'Custom Software Development', img: 'services/120.webp' },
  { id: 21, title: 'API Development', img: 'services/121.webp' },
  { id: 22, title: 'Game Development', img: 'services/122.webp' },
  { id: 23, title: 'ChatGPT Integration', img: 'services/123.webp' },
  { id: 24, title: 'Robotic Process Automation', img: 'services/124.jpg' },
  { id: 25, title: 'IT Consulting', img: 'services/125.jpg' },
  { id: 26, title: 'SaaS Development', img: 'services/126.webp' },
  { id: 27, title: 'Video Streaming Solutions', img: 'services/127.webp' },
  { id: 28, title: 'Content Management Systems', img: 'services/128.jpg' },
];
const OurServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 390); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getVisibleServices = () => {
    if (showAll) return services;
    return isMobile ? services.slice(0, 1) : services.slice(0, 4);
  };

  const visibleServices = getVisibleServices();

  return (
    <div className="bg-[linear-gradient(to_right,white_0%,#dbf4f3_50%,white_100%)] py-16 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-[#0ebab1] tracking-wide uppercase font-medium text-lg mb-2">
          Our Services
        </h1>
        <h2 className="text-4xl text-black font-bold">Transform Your Business</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-[300px] rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <h3 className="absolute bottom-4 left-4 z-20 text-white text-xl font-semibold">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 text-white bg-[#0ebab1] rounded-full hover:bg-[#0aa29b] transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default OurServices;