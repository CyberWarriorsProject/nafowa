import React from "react";
import { NavBar } from "../components/NavBar";
import { FooterSec } from "../components/Footer";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Layout className="bg-white">
        <NavBar />
        <Outlet />
        <FooterSec />
      </Layout>
    </>
  );
};
