import { Button } from "antd";
import React, { useState } from "react";
import "@fontsource/bad-script";

const SingleCarousel = ({ imgSrc, description }) => {
  const readMore =
    "w-full text-center bg-opacity-60 text-center shadow-2xl shadow-black absolute bg-black h-full py-12 text-white px-2 overflow-auto font-badscript";
  const readLess =
    "md:w-1/4 md:right-0 text-center shadow-2xl shadow-black absolute bg-black bg-opacity-20 h-full py-12 text-white px-2 font-badscript";

  const [clamp, setClamp] = useState("line-clamp-5");
  const [read, setRead] = useState(readLess);

  const handleClick = () => {
    if (read === readLess) {
      setRead(readMore);
    } else {
      setRead(readLess);
    }
    if (clamp) {
      setClamp("");
    } else {
      setClamp("line-clamp-5");
    }
  };

  return (
    <div className="w-full h-[80vh]">
      <div className={read}>
        <h3 className={clamp}>{description}</h3>
        <Button className="my-4 bg-blue-100 " onClick={handleClick}>
          {clamp ? "Show More" : "Hide"}
        </Button>
      </div>
      <img src={imgSrc} className="object-cover w-full h-full" />
    </div>
  );
};

export default SingleCarousel;
