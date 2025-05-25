import { z } from "zod";

export const registerSchema = z
  .object({
    alias: z
      .string()
      .min(3, "Tu alias debe tener al menos 3 caracteres."),
    email: z
      .string()
      .email("El formato del correo electrónico es incorrecto.")
      .min(5, "El correo electrónico es obligatorio."),
    password: z
      .string()
      .min(8, "La contraseña debe tener más de 8 caracteres.")
      .regex(/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,{
        message: 'La contraseña debe contener una mayúscula, un número y un carácter especial.'
      }),
    confirmPassword: z
      .string()
      .min(8, "La contraseña debe tener más de 8 caracteres."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
