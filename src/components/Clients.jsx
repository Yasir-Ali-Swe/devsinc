import React from "react";

const images = [
  { id: 1, src: "pics/1.png", alt: "Client 1" },
  { id: 2, src: "pics/2.png", alt: "Client 2" },
  { id: 3, src: "pics/3.png", alt: "Client 3" },
  { id: 4, src: "pics/4.png", alt: "Client 4" },
  { id: 5, src: "pics/5.png", alt: "Client 5" },
  { id: 6, src: "pics/6.png", alt: "Client 6" },
  { id: 7, src: "pics/7.png", alt: "Client 7" },
  { id: 8, src: "pics/8.png", alt: "Client 8" },
  { id: 9, src: "pics/9.png", alt: "Client 9" },
  { id: 10, src: "pics/10.png", alt: "Client 10" },
  { id: 11, src: "pics/11.png", alt: "Client 11" },
  { id: 12, src: "pics/12.png", alt: "Client 12" },
  { id: 13, src: "pics/13.png", alt: "Client 13" },
  { id: 14, src: "pics/14.png", alt: "Client 14" },
  { id: 15, src: "pics/15.png", alt: "Client 15" },
  { id: 16, src: "pics/16.png", alt: "Client 16" },
  { id: 17, src: "pics/17.png", alt: "Client 17" },
  { id: 18, src: "pics/18.png", alt: "Client 18" },
  { id: 19, src: "pics/19.png", alt: "Client 19" },
  { id: 20, src: "pics/20.png", alt: "Client 20" },
  { id: 21, src: "pics/21.png", alt: "Client 21" },
  { id: 22, src: "pics/22.png", alt: "Client 22" },
  { id: 23, src: "pics/23.png", alt: "Client 23" },
  { id: 24, src: "pics/24.png", alt: "Client 24" },
  { id: 25, src: "pics/25.png", alt: "Client 25" },
];

const Clients = () => {
  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <div className="whitespace-nowrap animate-scroll-left">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="inline-block w-30 object-contain mx-4"
          />
        ))}
      </div>
      <div className="whitespace-nowrap animate-scroll-right mt-6">
        {images.map((img) => (
          <img
            key={`row2-${img.id}`}
            src={img.src}
            alt={img.alt}
            className="inline-block w-24 h-24 object-contain mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
