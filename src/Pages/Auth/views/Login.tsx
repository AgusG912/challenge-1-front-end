import { Card } from "antd";
import { HeaderTitle } from "../components/general/HeaderTitle";
import { FormLogin } from "../components/auth/FormLogin";

export const Login = () => {
  return (
    <Card className="w-full min-w-[260px] max-w-[400px] p-[20px]">
      <HeaderTitle
        label="Iniciar sesión"
        msg="Ingresa tus credenciales para acceder"
      />

      <FormLogin />
    </Card>
  );
};
