import React from 'react';

const images = [
  { id: 1, img: 'featured/1.png' },
  { id: 2, img: 'featured/2.png' },
  { id: 3, img: 'featured/3.png' },
  { id: 4, img: 'featured/4.png' },
  { id: 5, img: 'featured/5.png' },
  { id: 6, img: 'featured/6.png' },
  { id: 7, img: 'featured/7.png' },
  { id: 8, img: 'featured/8.png' },
  { id: 9, img: 'featured/9.jpg' }
];

const Featured = () => {
  return (
    <div className="mt-4">
        <h1 className='pl-30 text-3xl font-black mb-4'>
            Featured In
        </h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((item) => (
          <div key={item.id} className=" p-2 flex items-center justify-center">
            <img src={item.img} alt={`Image ${item.id}`} className="w-[40%] h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
