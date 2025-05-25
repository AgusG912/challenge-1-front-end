import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  loginSchema,
  type LoginSchemaType,
} from "../../../../Schemas/Forms/Auth/login.schema.ts";
import { InputCustomAntd } from "../../../../Components/Forms/Input/InputCustomAntd";
import { Button, Divider, Form } from "antd";
import { FormFooterButton } from "./FormFooterButton";
import { PublicRoutes } from "../../../../Models/routes.model";
import { useAuthStoreActions } from '../../../../Store/Actions/useAuthStoreActions.ts';

export const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  
  const { startLogin } = useAuthStoreActions();
  const onSubmit = (validateData:LoginSchemaType) => {
    startLogin(validateData);
  };

  return (
    <>
      <Form onFinish={handleSubmit(onSubmit)}>
        <div className="h-[190px] flex flex-col justify-between mb-3">
          <InputCustomAntd<LoginSchemaType>
            name="email"
            control={control}
            label="Correo electrónico"
            inputProps={{
              placeholder: "Ejemplo@contoso.com",
              type: "email",
            }}
            error={errors.email}
          />

          <InputCustomAntd<LoginSchemaType>
            name="password"
            control={control}
            label="Contraseña"
            inputProps={{
              placeholder: "*********",
              type: "password",
            }}
            error={errors.password}
          />
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Iniciar sesión
          </Button>
        </Form.Item>

        <Divider plain>o</Divider>

        <FormFooterButton
          linkLabel="Regístrate aquí"
          label="¿No tienes una cuenta?"
          url={PublicRoutes.REGISTER}
        />
      </Form>
    </>
  );
};
