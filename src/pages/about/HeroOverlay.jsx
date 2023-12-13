import React from "react";

export default function () {
  return (
    <div className="h-[200px] w-full relative">
      <img
        src="https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-red-500 h-[200px] w-full">
        <h1>About Us</h1>
      </div>
    </div>
  );
}
