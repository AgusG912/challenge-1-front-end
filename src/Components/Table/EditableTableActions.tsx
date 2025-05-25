import { Typography, Popconfirm } from "antd";
import type { Schema } from "./EditableTableTypes";

interface EditableTableActionsProps {
  cancel: () => void;
  configUniqueKey: string;
  edit: (record: Partial<Schema<Record<string, unknown>>>) => void;
  editingKey: string;
  isEditing: (record: Schema<Record<string, unknown>>) => boolean;
  record: Schema<Record<string, unknown>>;
  save: (uniqueKey: React.Key) => Promise<void>;
}

const EditableTableActions = ({
  cancel,
  configUniqueKey,
  edit,
  editingKey,
  isEditing,
  record,
  save,
}: EditableTableActionsProps) => {
  const editable = isEditing(record);
  return editable ? (
    <span className="flex flex-col justify-center gap-1.5">
      <Typography.Link
        onClick={() => save(record[configUniqueKey] as React.Key)}
      >
        Guardar
      </Typography.Link>
      <Popconfirm title="¿Descartar cambios?" onConfirm={cancel}>
        <a>Cancelar</a>
      </Popconfirm>
    </span>
  ) : (
    <Typography.Link disabled={editingKey !== ""} onClick={() => edit(record)}>
      Editar
    </Typography.Link>
  );
};

export default EditableTableActions;
