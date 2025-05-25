import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputCustomAntd } from "../../../../Components/Forms/Input/InputCustomAntd";
import { Button, Divider, Form } from "antd";
import { FormFooterButton } from "./FormFooterButton";
import { PublicRoutes } from "../../../../Models/routes.model";
import {
  registerSchema,
  type RegisterSchemaType,
} from "../../../../Schemas/Forms/Auth/register.schema";
import { useAuthStoreActions } from "../../../../Store/Actions/useAuthStoreActions";

export const FormRegister = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const { startRegister } = useAuthStoreActions()
  const onSubmit = (validateData: RegisterSchemaType) => {
    startRegister(validateData);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <div className="h-[380px] flex flex-col justify-between mb-3">
        <InputCustomAntd<RegisterSchemaType>
          name="alias"
          control={control}
          label="Alias"
          inputProps={{
            placeholder: "¿Tu apodo favorito quizá?",
            type: "text",
          }}
          error={errors.alias}
        />

        <InputCustomAntd<RegisterSchemaType>
          name="email"
          control={control}
          label="Correo electrónico"
          inputProps={{
            placeholder: "Ejemplo@contoso.com",
            type: "email",
          }}
          error={errors.email}
        />

        <InputCustomAntd<RegisterSchemaType>
          name="password"
          control={control}
          label="Contraseña"
          inputProps={{
            placeholder: "*********",
            type: "password",
          }}
          error={errors.password}
        />

        <InputCustomAntd<RegisterSchemaType>
          name="confirmPassword"
          control={control}
          label="Confirmar contraseña"
          inputProps={{
            placeholder: "*********",
            type: "password",
          }}
          error={errors.confirmPassword}
        />
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Iniciar sesión
        </Button>
      </Form.Item>

      <Divider plain>o</Divider>

      <FormFooterButton
        linkLabel="Inicia sesión aquí"
        label="¿Ya tienes una cuenta?"
        url={PublicRoutes.LOGIN}
      />
    </Form>
  );
};
