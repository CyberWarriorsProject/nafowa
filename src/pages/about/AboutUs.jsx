import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-24 md:flex-row font-sans items-center 2xl:items-start mt-16 px-5">
      <div className="flex-1 bg-red-200 h-[500px]">
        <img
          src="https://airforce.mil.ng/uploads/news/images/thumb_767393872IMG-20220428-WA0029.jpg"
          className="w-full h-full object-cover rounded-lg self-center"
        />
      </div>
      <div className="flex-1 pt-5 2xl:pt-10">
        <h1 className="text-4xl font-bold pb-5">Who We Are</h1>
        <p className="leading-7 text-gray-800 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          sequi laboriosam impedit est laudantium quae qui ut illum
          exercitationem earum totam natus, eveniet, quas soluta ratione!
          Aliquam, voluptatum, ducimus libero quisquam veritatis enim officia
          quibusdam voluptates necessitatibus unde in, modi quo expedita. Fugit,
          ipsa? Accusamus, aspernatur asperiores? Velit, aperiam illum. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Expedita sequi
          laboriosam impedit est laudantium quae qui ut illum exercitationem
          earum totam natus, eveniet, quas soluta ratione!
        </p>
      </div>
    </div>
  );
}
