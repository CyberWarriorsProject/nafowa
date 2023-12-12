import { Carousel } from "antd";
import React from "react";
import { carouselData } from "../data";
import SingleCarousel from "../components/SingleCarousel";

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
        {carouselData.map((item) => (
          <SingleCarousel {...item} key={item.slideID} />
        ))}
      </Carousel>
    </>
  );
};
