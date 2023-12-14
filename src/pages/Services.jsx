import React from "react";
export const Services = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto">
      <div className="education h-full grid p-8">
        {/* This is the heading element */}
        <h1 className="text-4xl font-bold">Education</h1>

        {/* this is the paragraph div */}
        <div className="flex flex-wrap text-justify">
          <p className="w-full sm:w-8/12 pt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cupiditate veniam rem tenetur, qui a cum ad, ipsa delectus quisquam
            quia natus. Unde, harum veritatis ratione distinctio alias
            blanditiis quibusdam. Nesciunt iure natus minus aperiam quos cum
            minima a! Sit dolores dicta aut nisi vitae amet laudantium error,
            tenetur adipisci voluptas minus nulla minima quisquam sequi nam
            aliquid iusto totam!
          </p>
        </div>
        <div className="flex flex-1 gap-4 w-full">
          <img src="https://www.placeholder.com/300x200" alt="" srcset="" />
          <img src="https://www.placeholder.com/300x200" alt="" srcset="" />
          <img src="https://www.placeholder.com/300x200" alt="" srcset="" />
        </div>
      </div>
    </section>
  );
};
