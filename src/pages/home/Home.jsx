import { Avatar, Button, Card, Carousel, Image } from "antd";
import React from "react";
import { carouselData, whatWeDo } from "../../data";
import SingleCarousel from "../../components/SingleCarousel";
import Meta from "antd/es/card/Meta";

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

      {/* presidents section */}
      <section>
        <div className="max-w-4xl mx-auto flex gap-10 items-center my-20">
          <div>
            <Image width={200} src="https://placehold.jp/x150.png" />
            <h2>NAFOWA PRESIDENT</h2>
          </div>

          <div>
            <h2>WELCOME HERE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              rem? Sed dolor, tempora ducimus sint, voluptates molestiae rem
              commodi autem possimus aliquid qui temporibus a nobis obcaecati
              facere error cupiditate! Blanditiis, hic? Harum repellendus
              laborum vitae sapiente. Dolor eius at, tenetur suscipit
              repudiandae illum provident debitis similique, voluptatum
              molestias ullam neque blanditiis? Eos iure sint officia expedita
              facere, sed eveniet.
            </p>
            <Button type="primary" className="bg-nafowaBlue">
              Read more
            </Button>
          </div>
        </div>
      </section>

      {/* what we do section */}

      <section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl ">WHAT WE DO</h2>
          <p></p>
          <div className="flex justify-center items-center gap-10">
            {whatWeDo.map((item) => {
              return (
                <Card
                  style={{
                    width: 700,
                  }}
                  size="small"
                  cover={<img alt="example" src={item.imgSrc} />}
                >
                  <h2
                    title={item.heading}
                    className="text-md font-bold  line-clamp-1"
                  >
                    {item.heading}
                  </h2>
                  <p className="line-clamp-3">{item.content}</p>
                  <Button> Read more</Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
