import React from "react";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SingleCarousel = ({ imgSrc, description }) => {
  return (
    <div className="relative" style={contentStyle}>
      <h3 className="absolute text-white font-bold bottom-0 w-full h-20 text-center text-xl hidden md:block ">
        {description}
      </h3>
      <div>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default SingleCarousel;
