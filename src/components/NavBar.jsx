import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const NavBar = () => {
  const menuItems = [
    { key: 1, label: <Link to="/">Home</Link> },
    { key: 2, label: <Link to={"/about"}>About Us</Link> },
    {
      key: 3,
      label: "What We Do",
      children: [
        {
          key: "wwd1",
          label: <Link to={"/services"}>Services</Link>,
        },
        {
          key: "wwd2",
          label: <Link to={"/news"}>News/Activities</Link>,
        },
      ],
    },
    ,
    { key: 4, label: <Link to={"/contact"}>Contact Us</Link> },
  ];

  return (
    <Header className="h-[80px] bg-white sticky top-0 z-50 px-10 shadow-md flex justify-between items-center ">
      <div className="demo-logo h-full ">
        <img className="h-full object-contain " src="/images/logo.jpeg" />
      </div>
      <Menu
        mode="horizontal"
        className="min-w-0 justify-end flex-auto"
        // defaultSelectedKeys="1"
        items={menuItems}
      />
    </Header>
  );
};
