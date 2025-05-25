import { useState } from "react";
import { Layout, theme } from "antd";
import { Navbar } from "./Layout/Navbar";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Layout/Sidebar";
const { Content } = Layout;

export const PrivateLayout = () => {
  const [toggleSider, setToggleSider] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout className="overflow-auto">
      <Navbar
        backgroundContainer={colorBgContainer}
        setToggleSider={setToggleSider}
        toggleSider={toggleSider}
      />

      <Layout>
        <Sidebar toggle={toggleSider} />

        <Content
          className="mx-[24px] my-[24px] p-[24px]"
          style={{
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
