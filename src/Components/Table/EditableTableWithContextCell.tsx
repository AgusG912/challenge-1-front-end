import { Form, Input, InputNumber, Switch } from "antd";
import type { EditableCellProps } from "./EditableTableTypes";
import type { valueType } from "antd/es/statistic/utils";
import { useTableConfigContext } from "../../Context/TableContext";
import type { Product } from "../../Store/types/syncDb";

export const EditableTableWithContextCell: React.FC<React.PropsWithChildren<EditableCellProps<unknown>>> =
  ({ editing, dataIndex, title, record, inputType = 'text',  children,  ...restProps}) => {
    const {recalculateAllProfits} = useTableConfigContext();


    const handlerStateProfit = (editedField:valueType | null) => {
        const {
            id, //index item
            price,
            iva,
            costoEnvio,
            comision,
            //costoFabricacion,
            //originalPrice,
            //profit
        } = record as Partial<Product>;

        const temp = { price, iva, costoEnvio, comision };
        /** Target data es un objeto de tip o clave valor, el cual amarra las dos propiedades objetivo del evento. */
        const targetField = {[title]:editedField};
        /** Es un arreglo que referencia a todos los campos de fila actual. */
        const syncValues = {
            ...temp,
            ...targetField
        }

        console.log('Calculo de beneficio en tiempo real')
        const newPrice = syncValues.price! - (syncValues.price! * syncValues.iva!) - syncValues.costoEnvio! - syncValues.comision!;

        recalculateAllProfits((id! - 1), newPrice, targetField);
    }






  /** Definicion de los tipos de inputs que se renderizan dependiendo del valor que exista en la propiedad evaluada */

  const inputNode = inputType === "number" ? (
    <InputNumber
      type='number'
      className="w-full"
      onChange={(e) => handlerStateProfit(e)}
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
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};