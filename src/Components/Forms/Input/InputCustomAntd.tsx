import { Controller, type FieldValues } from "react-hook-form";
import type { CustomInputProps } from "./InputCustomAntdTypes";
import { Form, Input } from "antd";

export const InputCustomAntd = <T extends FieldValues>({
    name,
    control,
    defaultValue,
    controllerProps,
    inputProps,
    label,
    formItemProps,
    error,
    wrapperClassName = "flex flex-col gap-[8px] h-[90px]",
    optional,
}: CustomInputProps<T>) => (
    <div className={wrapperClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            {...controllerProps}
            render={({ field }) => (
                <Form.Item
                    name={name as string}
                    validateStatus={error && "error"}
                    help={
                        error && (
                        <p className="truncate overflow-hidden whitespace-nowrap">
                            {error?.message}
                        </p>
                    )}
                    rules={[
                        {
                            required: false,
                            message: !optional ? "Este campo es obligatorio." : undefined,
                        },
                    ]}
                    {...formItemProps}
                >
                    {
                        (typeof name === 'string' && !name.toLowerCase().includes('password'))
                            ? (<Input {...field} {...inputProps} />)
                            : (<Input.Password {...field} {...inputProps} />)
                    }
                </Form.Item>
            )}
        />
    </div>
);
