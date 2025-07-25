"use client";

const ThemeBtn = ({setIsOpen ,isOpen}) => {
 

  return (
    <div className="relative inline-block w-6 h-3.5">
      <label className="block w-full h-full cursor-pointer">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className="hidden"
        />
        <div
          className={`w-full h-full rounded-full transition-colors duration-300 ${
            isOpen ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 rounded-full ${
            isOpen ? "bg-black" : "bg-white"
          } shadow-md transform transition-transform duration-300 ${
            isOpen ? "translate-x-2.5" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default ThemeBtn;
