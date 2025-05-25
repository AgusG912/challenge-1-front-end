import { Layout, Menu } from "antd";
import { useAuthStoreActions } from "../../../Store/Actions/useAuthStoreActions";
import { MenuOptionsSchema } from "../../../Schemas/MenuOptions/MenuOptions.schema";
import { type RolesValuesType } from '../../../Models/roles.models';
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

interface siderProps {
  toggle: boolean;
}

export const Sidebar = ({ toggle }: siderProps) => {
  const redirect = useNavigate()
  const {user} = useAuthStoreActions();

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

  return (
    <Sider className="hidden [@media(min-width:760px)]:block" trigger={null} collapsible collapsed={toggle}>
      <div className="mx-2">
        <Menu
          className="flex flex-col gap-3"
          theme="dark"
          defaultSelectedKeys={["1"]}
          items={itemList}
        />
      </div>
    </Sider>
  );
};
