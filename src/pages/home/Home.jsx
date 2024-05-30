import { Button, Card, Carousel, Image } from "antd";
import React from "react";
import { carouselData, whatWeDo } from "../../data";
import SingleCarousel from "../../components/SingleCarousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "@fontsource/mogra";

export const Home = () => {
  return (
    <>
      {/* <Swiper
        loop={true}
        autoplay={{
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="w-full shadow-2xl shadow-blue-100"
        style={{
          "--swiper-navigation-color": "gray",
        }}
      >
        {carouselData.map((imgItem) => (
          <SwiperSlide key={imgItem.slideID} className="h-[60vh]">
            <img
              src={imgItem.imgSrc}
              alt={imgItem.description}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Carousel effect="fade" autoplay className="shadow-2xl shadow-blue-100">
        {carouselData.map((item) => (
          <SingleCarousel {...item} key={item.slideID} />
        ))}
      </Carousel>

      {/* presidents section */}
      <section
        className="w-full mx-auto flex flex-col sm:flex-row gap-8 items-center p-4 my-4 bg-blue-50 shadow-2xl shadow-blue-50"
        data-aos="fade-right"
      >
        <div className="h-full">
          <Image
            className="max-w-xs "
            src="./images/WhatsApp Image 2023-12-22 at 09.58.56_cda8212a.jpg"
            data-aos="zoom-out-right"
          />
        </div>

        <div className="space-y-4 px-4 flex-1" data-aos="fade-right">
          <h2 className="text-gray-700 text-3xl font-mogra ">WELCOME HERE</h2>
          <p className="text-justify text-base">
            The Nigerian Air Force Officers’ Wives Association (NAFOWA) whose
            motto is “Service to Humanity” is a philanthropic, Non-Governmental
            Organization whose membership is voluntary and open to the wives of
            all serving Nigerian Air Force officers. Traditionally, the wife of
            the incumbent Chief of the Air Staff is the National President of
            the Association, while the Headquarters of the Association is
            located in Abuja. NAFOWA is also very active at all Air Force
            Command levels and in various Air Force formations throughout the
            country. The Association was established in 1968 with the primary
            objective of promoting the socio-cultural and educational well-being
            of the wider air force community and the general public especially
            the less-privileged.
          </p>
        </div>
      </section>

      {/* what we do section */}

      <section className="my-4 px-4 py-4 shadow-2xl shadow-blue-50">
        <div className="w-full space-y-5 mx-auto px-4">
          <h2 className="text-gray-700 text-center mb-12 font-mogra text-4xl">
            What We Do
          </h2>
          <div className="flex justify-center flex-wrap gap-5 ">
            {whatWeDo.map((item) => {
              return (
                <Card
                  hoverable
                  key={item.id}
                  className="hover:shadow-gray-500 hover:shadow-md w-[300px] text-gray-600 hover:text-black"
                  size="small"
                  cover={
                    <img
                      alt="example"
                      src={
                        item.imgSrc[
                          Math.floor(Math.random() * item.imgSrc.length)
                        ].link
                      }
                      data-aos="zoom-in-down"
                    />
                  }
                >
                  <h2 title={item.heading} className="line-clamp-1">
                    {item.heading}
                  </h2>
                  <p className="line-clamp-3">{item.content}</p>

                  <Link to={`/services/#${item.heading}`}>Read more</Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we do it section */}

      <section className=" bg-blue-50 h-[40vh] grid place-items-center px-4 shadow-2xl shadow-blue-50 mb-4">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl text-gray-700 font-mogra">HOW WE DO IT</h2>{" "}
          <br />
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
