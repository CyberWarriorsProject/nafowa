import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import HeroOverlay from "./HeroOverlay";

export const NotFound = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"404"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />

      <p>Sorry, page not Found</p>
      <Link to={"/"}>
        <Button>Back to home</Button>
      </Link>
    </>
  );
};
