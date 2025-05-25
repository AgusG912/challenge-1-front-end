import type { ColumnTemplate } from "../../Components/Table/EditableTableTypes";

export const tableColumnUsersConfig:ColumnTemplate[] = [
    { dataIndex: "createdAt", title: "Fecha de creación" },
    { dataIndex: "id", title: "Key ID" },
    { dataIndex: "email", title: "Email" },
    { dataIndex: "alias", title: "Alias" },
    { dataIndex: "role", title: "Rol", editable:true},
];

export const tableColumnSalesConfig:ColumnTemplate[] = [
    { dataIndex: "createdAt", title: "Fecha y hora" },
    { dataIndex: "productCode", title: "Codigo" },
    { dataIndex: "name", title: "Nombre del producto" },
    { dataIndex: "client", title: "Cliente" },
    { dataIndex: "location", title: "Ubicacion" },
    { dataIndex: "paymentMethod", title: "Metodo de pago" },
    { dataIndex: "salePrice", title: "Precio de venta" },
    { dataIndex: "paidShipping", title: "Delivery" },
];

export const tableColumnProductAtClientConfig:ColumnTemplate[] = [
    { dataIndex: "productCode", title: "productCode" },
    { dataIndex: "name", title: "name" },
    { dataIndex: "originalPrice", title: "originalPrice" },
    { dataIndex: "iva", title: "iva" },
    { dataIndex: "price", title: "price" },
    { dataIndex: "costoEnvio", title: "costoEnvio" },
];

export const tableColumHistoryChangesConfig:ColumnTemplate[] = [
    { dataIndex: "createdAt", title: "createdAt" },
    { dataIndex: "id", title: "Key ID" },
    { dataIndex: "product", title: "Producto" },
    { dataIndex: "field_change", title: "Campos afectados" },
    { dataIndex: "previous_value", title: "Valor Anterior" },
    { dataIndex: "new_value", title: "Nuevo valor" },
    { dataIndex: "modifiedBy", title: "Usuario" },
];

export const tableColumnProductAtInternalConfig = [
    //{ dataIndex: "id", title: "id", editable: true },
    { dataIndex: "lastUpdatedAt", title: "lastUpdatedAt", editable: false },
    { dataIndex: "productCode", title: "productCode", editable: false },
    { dataIndex: "name", title: "name", editable: true },
    { dataIndex: "price", title: "price", editable: true },
    { dataIndex: "iva", title: "iva", editable: true },
    { dataIndex: "costoEnvio", title: "costoEnvio", editable: true },
    { dataIndex: "comision", title: "comision", editable: true },
    //{ dataIndex: "costoFabricacion", title: "costoFabricacion", editable: true },
    //{ dataIndex: "createdAt", title: "createdAt", editable: true },
    //{ dataIndex: "originalPrice", title: "originalPrice", editable: true },
    //{ dataIndex: "activo", title: "activo", editable: true },
    { dataIndex: "profit", title: "Utilidad" },
];