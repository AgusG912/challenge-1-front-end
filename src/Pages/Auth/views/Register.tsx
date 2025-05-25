import { Card } from "antd";
import { HeaderTitle } from "../components/general/HeaderTitle";
import { FormRegister } from "../components/auth/FormRegister";

export const Register = () => {
  return (
    <Card className="w-full min-w-[260px] max-w-[400px] p-[20px]">
      <HeaderTitle
        label="Crea una cuenta"
        msg="Ya casi formas parte de nuestro equipo"
      />

      <FormRegister />
    </Card>
  );
};
