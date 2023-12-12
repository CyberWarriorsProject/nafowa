import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const NavBar = () => {
  return (
    <Header className="h-[80px] bg-white flex justify-between items-center ">
      <div className="demo-logo h-full ">
        <img className="h-full object-contain " src="/images/logo.jpeg" />
      </div>
      <Menu
        mode="horizontal"
        className="min-w-0 justify-end flex-auto" //Width not fully responsive
        defaultSelectedKeys="1"
      >
        <Menu.Item key={1}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to={"/about"}>About Us</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to={"/services"}>What We Do</Link>
        </Menu.Item>
        <Menu.Item key={4}>
          <Link to={"/contact"}>Contact Us</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
