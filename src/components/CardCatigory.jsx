import React from 'react';

function CardCategory(props) {
  return (
    <div className="relative flex flex-col justify-center w-[30%] max-md:w-full">
      <div
        className={`group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto max-w-sm sm:rounded-lg sm:px-10 w-full sm:max-w-full`}
      >
        <div className="relative flex items-center justify-center h-24 w-24 mx-auto">
          <span
            className={`absolute inset-0 h-24 w-24 rounded-full bg-${props.bgColor} transition-all duration-300 group-hover:scale-[10]`}
          ></span>
          <img
            src={props.img}
            alt=""
            className="relative z-10 h-20 w-20 object-cover rounded-full"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-md">
          <div className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className="text-center text-xl">{props.title}</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7"></div>
        </div>
      </div>
    </div>
  );
}

export default CardCategory;
