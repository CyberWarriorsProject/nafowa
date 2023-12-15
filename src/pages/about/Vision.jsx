import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Vision() {
  function Mission({ title, description, children }) {
    return (
      <div className="flex flex-col shadow-lg rounded-md w-3/4 lg:w-3/5 p-5 items-center text-center">
        <div className="w-[90px] h-[90px] rounded-full bg-nafowaBlue bg-opacity-20 flex items-center justify-center">
          {children}
        </div>

        <h1 className="text-nafowaBlue text-[30px] font-bold font-sans">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-10 mx-2 md:max-w-7xl sm:mx-auto py-5 items-center justify-around mt-16">
      <Mission
        title="Vision"
        description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa
          est accusamus in incidunt iusto dolor optio nemo nesciunt placeat,
          magni magnam praesentium provident. Labore dicta consequuntur"
      >
        <FaHandHoldingHeart className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
      <Mission
        title="Mission"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa
          est accusamus in incidunt iusto dolor optio nemo nesciunt placeat,
          magni magnam praesentium provident. Labore dicta consequuntur"
      >
        <HiOutlineLightBulb className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
      <Mission
        title="Core Values"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa
          est accusamus in incidunt iusto dolor optio nemo nesciunt placeat,
          magni magnam praesentium provident. Labore dicta consequuntur"
      >
        <HiOutlineLightBulb className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
    </div>
  );
}
