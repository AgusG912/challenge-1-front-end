// src/components/RouteMenuButton.tsx

import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import "./RouteMenuButton.css";
import { useAuthStoreActions } from "../../../Store/Actions/useAuthStoreActions";
import { MenuOptionsSchema } from "../../../Schemas/MenuOptions/MenuOptions.schema";
import type { RolesValuesType } from "../../../Models/roles.models";

const RouteMenuButton = () => {
  const redirect = useNavigate()
  const {user, startLogout} = useAuthStoreActions();

  const itemList = MenuOptionsSchema
    .filter((item) => item.rolAccess.includes(user.role as RolesValuesType))
    .map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {rolAccess, path, ...rest} = item;
      return {
        ...rest,
        onClick: () => redirect(path)
      };
    });

    const items: MenuProps['items'] = [
      ...itemList,
      {type: "divider"},
      {
        key:'Logout_KEY_UNIQUE',
        label:'Cerrar sesión',
        onClick: () => startLogout()
      }]
  return (
    <Dropdown
      className="block [@media(min-width:760px)]:hidden"
      menu={{items}}
      placement="bottomLeft"
      arrow
    >
      <Button
        shape="circle"
        className="flex flex-col "
        icon={<MenuOutlined />}
        size="large"
        type="default"
      />
    </Dropdown>
  );
};

export default RouteMenuButton;
