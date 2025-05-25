import type { FormItemProps, InputProps } from "antd";
import type { Control, FieldError, FieldValues, Path, PathValue } from "react-hook-form";


export interface CustomInputProps<T extends FieldValues> {
    /** Nombre de la propiedad a validar [schema zod]. */
    name: Path<T>;
    /** Control de configuracion [React Hook Forms]. */
    control: Control<T>;
    /** Agrega un valor por defecto [React Hook Forms]. */
    defaultValue?: PathValue<T, Path<T>>;
    /** Puedes agregar todos los valores adicionales que iran dirigidos al controller [React Hook Forms]*/
    controllerProps?: Partial<{
        shouldUnregister: boolean;
        rules: object;
        disabled: boolean;
    }>;
    /** Puedes agregar todos los valores adicionales que iran dirigidos al controller [Input Antd]*/
    inputProps?: InputProps;
    /** Si agregas esta propiedad renderizara una etiqueta label con el contenido de la misma. [html]*/
    label?: string;
    /** Propiedades de tailwind aplicadas al wrapper de todo el componente. por defecto un height de 80px. */
    wrapperClassName?: string;
    /** Todas las props adicionales de Form.Item de Ant Design */
    formItemProps?: Omit<FormItemProps, 'name' | 'children'>;
    /**Mensaje de error opcional de react hook forms. */
    error?: FieldError;
    /** Define si el input sera aleatorio */
    optional?: boolean;
}