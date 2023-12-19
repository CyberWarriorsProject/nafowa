import { Button, Card, Carousel, Image } from "antd";
import React from "react";
import { carouselData, whatWeDo } from "../../data";
import SingleCarousel from "../../components/SingleCarousel";

export const Home = () => {
  return (
    <>
      <Carousel effect="fade" autoplay>
        {carouselData.map((item) => (
          <SingleCarousel {...item} key={item.slideID} />
        ))}
      </Carousel>

      {/* presidents section */}
      <section className="w-full mx-auto flex flex-col sm:flex-row gap-32 items-center p-8   shadow-sm  shadow-lighterNafowaBlue my-12 ">
        <div className="relative h-full">
          <Image
            width={400}
            className="h-full"
            src="https://placehold.jp/08C1FF/000000/400x400.png?text=President"
          />
          <h3 className="text-white w-full text-center pt-10 absolute bottom-0 z-10 font-semibold">
            NAFOWA PRESIDENT
          </h3>
        </div>

        <div className="w-[70%] space-y-10">
          <h2 className="text-nafowaBlue">WELCOME HERE</h2>
          <p className="text-justify">
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

      <section className="my-8 px-10">
        <div className="w-full space-y-5 mx-auto">
          <h2 className="text-xl text-nafowaBlue font-bold">WHAT WE DO</h2>
          {/* <p className=" text-lg ">
            NAFOWA provides a wide range of services to NAF personnel and their
            families, including:
          </p> */}
          <div className="flex justify-center flex-wrap gap-5">
            {whatWeDo.map((item) => {
              return (
                <Card
                  hoverable
                  key={item.id}
                  className="hover:shadow-lighterNafowaBlue border-lighterNafowaBlue hover:shadow-md w-[300px] "
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
                  <h2
                    title={item.heading}
                    className="text-md font-bold text-nafowaBlue  line-clamp-1"
                  >
                    {item.heading}
                  </h2>
                  <p className="line-clamp-3">{item.content}</p>
                  <Button type="link" className="text-nafowaBlue">
                    Read more
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-20 bg-lighterNafowaBlue h-[500px] flex items-center justify-center ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold">HOW WE DO IT</h2>
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
