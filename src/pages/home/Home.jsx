import { Button, Card, Carousel, Image } from "antd";
import React from "react";
import { carouselData, whatWeDo } from "../../data";
import SingleCarousel from "../../components/SingleCarousel";

export const Home = () => {
  return (
    <>
      <Carousel effect="fade" autoplay className="h-[60vh]">
        {carouselData.map((item) => (
          <SingleCarousel {...item} key={item.slideID} />
        ))}
      </Carousel>

      {/* presidents section */}
      <section className="w-full mx-auto flex flex-col sm:flex-row gap-8 items-center p-4 my-4 bg-[#CCD4D7] ">
        <div className="h-full">
          <Image
            className="max-w-xs "
            src="./images/WhatsApp Image 2023-12-22 at 09.58.56_cda8212a.jpg"
          />
          {/* <h3 className="text-white w-full text-center pt-10 absolute bottom-0 z-10 font-semibold">
            NAFOWA PRESIDENT
          </h3> */}
        </div>

        <div className="   space-y-4 px-4 flex-1">
          <h2 className="text-darkNafowaBlue">WELCOME HERE</h2>
          <p className="text-justify text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem?
            Sed dolor, tempora ducimus sint, voluptates molestiae rem commodi
            autem possimus aliquid qui temporibus a nobis obcaecati facere error
            cupiditate! Blanditiis, hic? Harum repellendus laborum vitae
            sapiente. Dolor eius at, tenetur suscipit repudiandae illum
            provident debitis similique, voluptatum molestias ullam neque
            blanditiis? Eos iure sint officia expedita facere, sed eveniet.
          </p>
          <Button type="primary">Read more</Button>
        </div>
      </section>

      {/* what we do section */}

      <section className="my-4 px-4">
        <div className="w-full space-y-5 mx-auto px-4">
          <h2 className="text-darkNafowaBlue">WHAT WE DO</h2>

          <div className="flex justify-center flex-wrap gap-5">
            {whatWeDo.map((item) => {
              return (
                <Card
                  hoverable
                  key={item.id}
                  className="hover:shadow-gray-500 hover:shadow-md w-[300px] "
                  size="small"
                  cover={
                    <img
                      alt="example"
                      src={
                        item.imgSrc[
                          Math.floor(Math.random() * item.imgSrc.length)
                        ].link
                      }
                    />
                  }
                >
                  <h2 title={item.heading} className="line-clamp-1">
                    {item.heading}
                  </h2>
                  <p className="line-clamp-3">{item.content}</p>
                  <Button type="link" className="text-nafowaBlue p-0">
                    Read more
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-20 bg-lighterNafowaBlue h-[40vh] grid place-items-center px-4 ">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold">HOW WE DO IT</h2> <br />
          <p className="text-lg">
            NAFOWA relies on its dedicated members and hardworking volunteers to
            carry out its mission. The association also partners with NAFHQ and
            other organizations within and outside of the country to achieve its
            goals
          </p>
        </div>
      </section>
    </>
  );
};
