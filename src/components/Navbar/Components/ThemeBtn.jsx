"use client";

const ThemeBtn = ({setTheme ,theme}) => {
 

  return (
    <div className="relative inline-block w-7.5 h-5">
      <label className="block w-full h-full cursor-pointer">
        <input
          type="checkbox"
          checked={theme}
          onChange={() => setTheme(!theme)}
          className="hidden"
        />
        <div
          className={`w-full h-full rounded-full transition-colors duration-300 ${
            theme ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full ${
            theme ? "bg-black" : "bg-white"
          } shadow-md transform transition-transform duration-300 ${
            theme ? "translate-x-3" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default ThemeBtn;
