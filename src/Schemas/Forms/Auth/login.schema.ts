import { z } from "zod";

// Esquema de validación
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Este campo es obligatorio.")
    .email("El formato del correo electrónico es incorrecto.")
    .min(5, "El correo electrónico es obligatorio."),
  password: z
    .string()
    .nonempty("Este campo es obligatorio.")
    .min(8, "La contraseña debe tener 8 caracteres o más."),
});

// Inferencia del tipo en TypeScript
export type LoginSchemaType = z.infer<typeof loginSchema>;
