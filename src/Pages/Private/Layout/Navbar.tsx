import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Typography } from "antd";
import type { Dispatch, SetStateAction } from "react";
import LogoutButton from "../Components/LogoutButton";
import RouteMenuButton from "../Components/RouteMenuButton";
const { Header } = Layout;

interface navbarProps {
  backgroundContainer: string;
  toggleSider: boolean;
  setToggleSider: Dispatch<SetStateAction<boolean>>;
}
const { Title } = Typography;

export const Navbar = ({
  backgroundContainer,
  setToggleSider,
  toggleSider,
}: navbarProps) => {
  return (
    <Header style={{ padding: 0, background: backgroundContainer }}>
      <Row className="h-full flex flex-row items-center justify-between w-full px-4">
        <Row className="flex flex-row gap-4 items-center">
          <Button
            className="hidden [@media(min-width:760px)]:block"
            type="text"
            icon={toggleSider ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setToggleSider(!toggleSider)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Title level={3} className="m-0">
            Contoso
          </Title>
        </Row>
        <Row className="flex flex-row gap-5 justify-around items-center">
          <LogoutButton />
          <RouteMenuButton />
        </Row>
      </Row>
    </Header>
  );
};