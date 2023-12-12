import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header } = Layout;
// const items = new Array(4).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items = [
  {
    key: 1,
    label: "Home",
  },
  {
    key: 2,
    label: "About Us",
  },
  {
    key: 3,
    label: "What we do",
  },
  {
    key: 4,
    label: "Contact Us",
  },
];

export const NavBar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
