import type { AutoColumnOptions, ColumnTemplate } from "./EditableTableTypes";


export const generateColumns = ({
  dataItem,
  columnTemplates = [],
}: AutoColumnOptions) => {
  // Crear mapeo de configuraciones personalizadas
  const templateMap = columnTemplates.reduce((acc, template) => {
    acc[template.dataIndex] = template;
    return acc;
  }, {} as Record<string, ColumnTemplate>);


  // Determinar el tipo de input basado en el tipo de dato
  const getInputType = (key: string, value: unknown): "text" | "number" | "boolean" => {
    if (templateMap[key]?.inputType) return templateMap[key].inputType!;
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    return "text";
  };

  // Generar columnas para cada propiedad del dataItem
const generatedColumns = Object.keys(templateMap).map((key) => {
    const value = dataItem[key];
    const template = templateMap[key];

    return {
      title: template.title || key.charAt(0).toUpperCase() + key.slice(1),
      dataIndex: key,
      editable: template.editable ? true : false,
      inputType: getInputType(key, value),
      ...(typeof value === "boolean" && {
        render: (val: boolean) => (val ? "Sí" : "No"),
      }),
    };
  });

  return { columns: generatedColumns };
};
