import React from "react";

export default function ({ pageTitle, overlayURL }) {
  return (
    <div className="h-[200px] w-full relative">
      <img src={overlayURL} className="w-full h-full object-cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-nafowaBlue bg-opacity-50 h-[200px] w-full flex items-center px-4">
        <h1 className="text-[30px] font-sans font-extrabold text-gray-800 ">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}
