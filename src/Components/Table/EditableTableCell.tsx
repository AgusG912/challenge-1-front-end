import { Form, Input, InputNumber, Switch } from "antd";
import type { EditableCellProps } from "./EditableTableTypes";

export const EditableTableCell: React.FC<React.PropsWithChildren<EditableCellProps<unknown>>> =
  ({ editing, dataIndex, inputType = 'text', children, ...restProps}) => {


  /** Definicion de los tipos de inputs que se renderizan dependiendo del valor que exista en la propiedad evaluada */
  const inputNode = inputType === "number" ? (
    <InputNumber
      type='number'
      className="w-full"
    />

  ) : inputType === "boolean" ? (
    <Switch
      checkedChildren="Sí"
      unCheckedChildren="No"
    />

  ) : (
    <Input />
  );


  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          valuePropName={inputType === "boolean" ? "checked" : "value"}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};