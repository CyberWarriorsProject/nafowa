import React from "react";
import HeroOverlay from "../../components/HeroOverlay";
import Vision from "./Vision";
import AboutUs from "./AboutUs";

export const About = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"About Us"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />
      <AboutUs />
      <Vision />
    </>
  );
};
