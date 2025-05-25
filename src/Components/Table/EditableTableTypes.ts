import type { ColumnType } from "antd/es/table";

/** Iterador sobre el objeto */
export type Schema<T> = {
  [key in keyof T]: T[key];
}

/** Tabla principal */
export type MainTableProps = {
    dataSource: Record<string, unknown>[];
    configUniqueKey: string;
    columnTemplates: ColumnTemplate[];
    useUpdateCol?: boolean;
}

/** Celdas */
export interface EditableCellProps<T> extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text' | 'boolean';
  record: Schema<T>;
  index: number;
}

/** Es la referencia del objeto que se utilizara para controlar la tabla. */
export interface ColumnTemplate {
  /** Hace referencia a la columna con la cual se gestionara la indexacion interna de la tabla [ANTD Req] */
  dataIndex: string;
  /** El nombre personalizado de la columna */
  title?: string;
  /** Determina si esta habilitada para la edicion. */
  editable?: boolean;
  /** Este campo es de inferencia automatica, si deseas agregarlo manualmente no tendra ninguna repercusion directa. */
  inputType?: "text" | "number" | "boolean";
}

export interface AutoColumnOptions {
  dataItem: Record<string, unknown>;
  configUniqueKey: string;
  columnTemplates?: ColumnTemplate[];
}

export interface CustomColumnType<T> extends ColumnType<T> {
  editable?: boolean; // 🔥 Agregar `editable`
  inputType?: "text" | "number" | "boolean"; // 🔥 Agregar `inputType`
}