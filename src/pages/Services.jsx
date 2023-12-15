import React from "react";
import { whatWeDo } from "../data";
import HeroOverlay from "../components/HeroOverlay";

export const Services = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"Services"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />
      <section className="px-8 md:max-w-7xl sm:mx-auto">
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

            <div className="flex flex-wrap my-8 gap-6 w-full justify-center object-contain">
              <img
                src="https://placehold.co/300x350/skyblue/white"
                alt=""
                className="object-contain rounded-2xl"
              />
              <img
                src="https://placehold.co/300x350/skyblue/white"
                alt=""
                className="object-contain rounded-2xl"
              />
              <img
                src="https://placehold.co/300x350/skyblue/white"
                alt=""
                className="object-contain rounded-2xl"
              />
            </div>
          </section>
        ))}
      </section>
    </>
  );
};
