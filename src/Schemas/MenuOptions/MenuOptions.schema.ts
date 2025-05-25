import { type RoleAccessControlItemType, RoleAccessControl as rol } from "../../Models/roles.models";
import { PrivateRoutes as path } from "../../Models/routes.model";

interface MenuOptionsSchemaType {
    key: string;
    label: string;
    path: string;
    rolAccess: RoleAccessControlItemType[];
}

export const MenuOptionsSchema:MenuOptionsSchemaType[] = [
    {
        key: 'home',
        label: 'Inicio',
        path: path.HOME,
        rolAccess: rol.ALL
    },
    {
        key: 'products',
        label: 'Productos',
        path: path.PRODUCTS,
        rolAccess: rol.ALL
    },
    {
        key: 'sales',
        label:'Ventas',
        path: path.SALES,
        rolAccess: rol.MODERADOR
    },
    {
        key: 'updateProduct',
        label: 'Modificar producto',
        path: path.PRODUCTS_UPDATE,
        rolAccess: rol.MODERADOR
    },
    {
        key: 'users',
        label: 'Usuarios registrados',
        path: path.USERS,
        rolAccess: rol.ADMIN
    },
    {
        key: 'history',
        label: 'Historial de cambios',
        path: path.HISTORY,
        rolAccess: rol.ADMIN
    }
]