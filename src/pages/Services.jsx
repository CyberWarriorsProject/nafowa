import React from "react";
import { whatWeDo } from "../data";
import HeroOverlay from "../components/HeroOverlay";
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
              <h1 className="text-4xl font-bold">{items.heading}</h1>
              {/* this is the paragraph div */}
              <div className="w-full sm:w-9/12 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur cupiditate veniam rem tenetur, qui a cum ad, ipsa
                  delectus quisquam quia natus. Unde, harum veritatis ratione
                  distinctio alias blanditiis quibusdam. Nesciunt iure natus
                  minus aperiam quos cum minima a! Sit dolores dicta aut nisi
                  vitae amet laudantium error, tenetur adipisci voluptas minus
                  nulla minima quisquam sequi nam aliquid iusto totam!
                </p>
              </div>
            </div>
            <Swiper
              loop={true}
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper my-12 px-16 text-center max-w-7xl "
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
                "--swiper-navigation-color": "black",
              }}
            >
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://placehold.co/300x350/skyblue/white"
                  alt=""
                  className="object-contain rounded-2xl"
                />
              </SwiperSlide>
            </Swiper>
          </section>
        ))}
      </section>
    </>
  );
};
