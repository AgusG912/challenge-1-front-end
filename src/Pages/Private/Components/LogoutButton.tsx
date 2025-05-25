import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthStoreActions } from "../../../Store/Actions/useAuthStoreActions";

const LogoutButton = () => {

  const { startLogout, user } = useAuthStoreActions();

  return (
    <>
      <h4>Hoy sera un gran día {user.alias}</h4>
      <Button
        className=" [@media(max-width:760px)]:hidden"
        type="primary"
        danger
        onClick={startLogout}
        icon={<LogoutOutlined />}
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
