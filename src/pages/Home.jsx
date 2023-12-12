import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const Home = () => {
  return (
    <>
      <Carousel effect="fade" autoplay>
        {/* slide 1 */}
        <div className="relative" style={contentStyle}>
          <h3 className="absolute text-white font-bold bottom-0 w-full h-20 text-center text-xl hidden md:block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div>
            <img src="/images/image1.png" alt="" />
          </div>
        </div>

        {/* slide 2 */}
        <div className="relative" style={contentStyle}>
          <h3 className="absolute text-white font-bold bottom-0 w-full h-20 text-center text-xl hidden md:block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div>
            <img src="/images/image1.png" alt="" />
          </div>
        </div>

        {/* slide 3 */}
        <div className="relative" style={contentStyle}>
          <h3 className="absolute text-white font-bold bottom-0 w-full h-20 text-center text-xl hidden md:block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div>
            <img src="/images/image1.png" alt="" />
          </div>
        </div>

        {/* slide 4 */}
        <div className="relative" style={contentStyle}>
          <h3 className="absolute text-white font-bold bottom-0 w-full h-20 text-center text-xl hidden md:block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div>
            <img src="/images/image1.png" alt="" />
          </div>
        </div>
      </Carousel>
    </>
  );
};
