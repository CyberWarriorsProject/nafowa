import React from "react";

const SingleCarousel = ({ imgSrc, description }) => {
  return (
    <div className="relative mx-auto text-center w-full h-[60vh]">
      <h3 className="hover:bg-opacity-70 shadow-2xl shadow-black absolute w-1/4 font-semibold right-0 bg-black bg-opacity-20 h-full hidden md:block text-right py-12 text-white">
        {description}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quas
        saepe dolorem quia placeat corrupti magni repellendus, ad dolore,
        provident, aut iusto. Iure, temporibus rerum vero porro quam saepe
        asperiores?
      </h3>
      {/* <div> */}
      <img src={imgSrc} className="object-cover w-full h-full" />
      {/* </div> */}
    </div>
  );
};

export default SingleCarousel;
