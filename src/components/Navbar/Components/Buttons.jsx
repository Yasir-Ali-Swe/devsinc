import React from 'react';

const Buttons = ({ theme }) => {
  return (
    <div className="w-screen md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-center pb-4 md:pb-0">
      <button
        className={`w-[85%] md:w-auto cursor-pointer py-3 md:py-1 md:px-2 px-4 rounded-3xl border border-primary ${
          theme
            ? "bg-primary text-white hover:bg-white hover:text-primary"
            : "bg-primary text-white hover:bg-white hover:text-primary"
        }`}
      >
        Explore careers
      </button>
      <button
        className={`w-[85%] md:w-auto cursor-pointer py-3  px-4 md:py-1 md:px-2 rounded-3xl border border-primary ${
          theme
            ? "bg-black text-primary"
            : "bg-white text-primary"
        }`}
      >
        Let's talk business
      </button>
    </div>
  );
};

export default Buttons;
