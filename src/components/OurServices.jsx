import React from 'react';

const services = [
  { id: 1, title: 'Generative AI', img: 'services/101.webp' },
  { id: 2, title: 'Dynamics 365', img: 'services/102.webp' },
  { id: 3, title: 'Mobile App Development', img: 'services/103.webp' },
  { id: 4, title: 'Staff Augmentation', img: 'services/104.webp' },
  // Add more services if needed
];

const OurServices = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto  mb-12">
        <h1 className="text-[#0ebab1] tracking-wide uppercase font-medium text-sm mb-2">
          Our Services
        </h1>
        <h2 className="text-4xl font-black text-white">Transform Your Business</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-[300px] rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            {/* Title Overlay */}
            <h3 className="absolute bottom-4 left-4 z-20 text-white text-xl font-semibold">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
