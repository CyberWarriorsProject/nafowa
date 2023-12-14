import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Vision() {
  function Mission({ title, description, Icon, children }) {
    return (
      <div className="flex flex-col shadow-md rounded-md w-1/3 p-5 items-center text-center">
        {Icon}
        {children}
        <h1 className="text-nafowaBlue text-[30px] font-bold font-sans">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-3 mx-2 md:max-w-7xl sm:mx-auto py-5 items-center justify-around pt-10 space-y-6">
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
    </div>
  );
}
