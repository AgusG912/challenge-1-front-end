import type { FormInstance } from "antd";
import type { Schema } from "./EditableTableTypes";
import { useDataStoreActions } from '../../Store/Actions/useDataStoreActions';

interface EditableTableHelpersProps {
  configUniqueKey: string;
  data: Schema<Record<string, unknown>>[];
  defaultEmptyValues: Record<string, string>;
  editingKey: string;
  form: FormInstance<unknown>;
  setData: React.Dispatch<
    React.SetStateAction<Schema<Record<string, unknown>>[]>
  >;
  setEditingKey: React.Dispatch<React.SetStateAction<string>>;
}

export const EditableTableHelpers = ({
  configUniqueKey,
  data,
  defaultEmptyValues,
  editingKey,
  form,
  setData,
  setEditingKey,
}: EditableTableHelpersProps) => {
  type RowType = {
    [x: string]: unknown;
  };

  const { syncUpdateField } = useDataStoreActions();

  /** Se utiliza para crear las referencias de la tabla en momento de constuccion (render) */
  const isEditing = (record: RowType) => record[configUniqueKey] === editingKey;

  const edit = (record: Partial<RowType>) => {
    // Llena el formulario con valores predeterminados y el registro actual
    form.setFieldsValue({ ...defaultEmptyValues, ...record });
    // Guarda la clave dinámica que identifica el registro en edición
    setEditingKey(record[configUniqueKey] as string);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (uniqueKey: React.Key) => {
    try {
      const row = (await form.validateFields()) as RowType;
      const newData = [...data];
      const index = newData.findIndex(
        (item) => uniqueKey === item[configUniqueKey]
      );

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }

      /** Hacemos la peticion al backend para actualizar los productos en la base de datos. */
      console.log({row, k:newData[0].id})
      await syncUpdateField(row, newData[0].id as number)
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  return {
    save,
    cancel,
    edit,
    isEditing,
  };
};
