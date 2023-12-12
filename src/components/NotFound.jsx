import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Sorry, page not Found</p>
      <Link to={"/"}>
        <Button>Back to home</Button>
      </Link>
    </>
  );
};
