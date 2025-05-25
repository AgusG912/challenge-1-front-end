import { useState } from "react";
import { Form, Table } from "antd";
import { EditableTableCell } from "./EditableTableCell";
import type { Schema, MainTableProps, CustomColumnType } from "./EditableTableTypes";
import EditableTableActions from "./EditableTableActions";
import { EditableTableHelpers } from "./EditableTableHelpers";
import { generateColumns } from "./EditableTableGenerateColumns";
import type { ColumnsType } from "antd/es/table";
import './EditableTableStyles.css';


const EditableTable = ({ dataSource, configUniqueKey, columnTemplates, useUpdateCol = false }: MainTableProps) => {
  // Creacion de los types.
  const dataItem = dataSource[0];
  type RowType = Schema<typeof dataItem>;

  // Generamos los valores predeterminados en blanco.
  const defaultEmptyValues = Object.fromEntries(
    Object.keys(dataItem).map((key) => [key, ""])
  ) as Record<keyof typeof dataItem, string>;

  // Configuracion inicial de la tabla.
  const [form] = Form.useForm();
  const [data, setData] = useState<RowType[]>(dataSource);
  const [editingKey, setEditingKey] = useState("");

  //Estas son las acciones que ofrece la tabla.
  const { save, edit, isEditing, cancel } = EditableTableHelpers({
    configUniqueKey: configUniqueKey,
    data: data,
    defaultEmptyValues: defaultEmptyValues,
    editingKey: editingKey,
    form: form,
    setData: setData,
    setEditingKey: setEditingKey,
  });

  //Es la columna especial para modificar los valores.
  const editedColumn = {
    title: "Modificar",
    dataIndex: "admin_operation",
    render: (_: void, record: RowType) => (
      <EditableTableActions
        cancel={cancel}
        configUniqueKey={configUniqueKey}
        edit={edit}
        editingKey={editingKey}
        isEditing={isEditing}
        record={record}
        save={save}
      />
    ),
  };

  //Generamos las columnas en funcion del template que le pasamos al inicio.
  //El resultado lo obtemos como una variable temporal ya que la agregaremos solo si viene en las props.
  const { columns: tempColumns } = generateColumns({
    dataItem,
    configUniqueKey,
    columnTemplates,
  });

  //Aqui desestructuramos para mantener el orden original y la propiedad de edicion siempre este a la derecha
  const columns = useUpdateCol ? [...tempColumns, editedColumn] : [...tempColumns];

  //Dar con el type exacto es demasiado complicado y en vista de los retrasos con el desarrollo se dejo unknown
  const mergedColumns: unknown = columns.map((col) => {
    const typedCol = col as CustomColumnType<RowType>;

    if (!typedCol.editable) {
      return typedCol;
    }

    return {
      ...typedCol,
      onCell: (record: RowType) => ({
        record,
        inputType: typedCol.inputType || "text",
        dataIndex: typedCol.dataIndex,
        title: typedCol.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
<Form form={form} component={false}>
  <div className="table-container centered-table">
    <Table<RowType>
      components={{
        body: { cell: EditableTableCell },
      }}
      bordered
      dataSource={data}
      columns={
        mergedColumns as ColumnsType<Schema<Record<string, unknown>>> | undefined
      }
      pagination={{ onChange: cancel }}
      rowKey={(record) => String(record[configUniqueKey])}
    />
  </div>
</Form>

  );
};

export default EditableTable
