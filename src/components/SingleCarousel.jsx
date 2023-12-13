import React from "react";

const SingleCarousel = ({ imgSrc, description }) => {
  return (
    <div className="relative mx-auto text-white text-center bg-slate-600">
      <h3 className="absolute font-semibold bottom-0 w-full h-20 text-xl hidden md:block ">
        {description}
      </h3>
      <div>
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default SingleCarousel;