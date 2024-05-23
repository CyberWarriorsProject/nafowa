import React from "react";
import { whatWeDo } from "../../data";
import HeroOverlay from "../../components/HeroOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Services = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"Services"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />
      <section className="px-8 md:max-w-7xl sm:mx-auto my-8">
        {whatWeDo.map((items) => (
          <section key={items.id}>
            <div className="max-w-4xl">
              {/* This is the heading element */}
              <h1 className="text-3xl font-bold text-darkNafowaBlue">
                {items.heading}
              </h1>
              {/* this is the paragraph div */}
              <div className="w-full sm:w-9/12 ">
                <p className="text-base my-4">{items.content}</p>
              </div>
            </div>
            <Swiper
              loop={true}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              centeredSlides={true}
              modules={[Autoplay, Navigation]}
              className="my-12 sm:px-16 max-w-7xl "
              slidesPerView={1}
              breakpoints={{
                660: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              style={{
                "--swiper-navigation-color": "gray",
              }}
            >
              {items.imgSrc.map((imgItem) => (
                <SwiperSlide key={imgItem.link}>
                  <img
                    src={imgItem.link}
                    alt={imgItem.alt}
                    className="object-fit rounded w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </section>
    </>
  );
};
