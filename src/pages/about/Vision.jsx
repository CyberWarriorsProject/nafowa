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
        description="NAFOWA vision is embedded in the Association’s motto which is “Service to Humanity”"
      >
        <FaHandHoldingHeart className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
      <Mission
        title="Mission"
        description="To make life easy and meaningful to its members and the general public at large most especially children and women through various charity projects."
      >
        <HiOutlineLightBulb className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
      <Mission
        title="Core Values"
        description="Our core values are Transparency, Compassion and Service to Humanity"
      >
        <HiOutlineLightBulb className="text-[50px] text-center text-nafowaBlue" />
      </Mission>
    </div>
  );
}
