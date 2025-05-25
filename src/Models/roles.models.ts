

/** Son los roles que maneja la base de datos */
export const Roles = {
    ADMIN: "admin",
    MODERADOR: "moderador",
    VISITANTE: "visitante"
} as const;

/** Hace referencia las keys designadas en los Roles. */
type RolesKeysType = keyof typeof Roles;
/** Tipo para los valores de los roles */
export type RolesValuesType = typeof Roles[RolesKeysType];

/** Es un arreglo de control para los roles, mas enfocado en el tema del menu dinamico. */
export type RoleAccessControlType = Record<RolesKeysType, RolesValuesType[]>;
/** Es el type para utilizar los respectivos items del role access */
export type RoleAccessControlItemType = RolesValuesType;

/** Es el arreglo con todas las key de roles. */
const accessControlKeys = Object.keys(Roles).reverse() as RolesKeysType[];

/** Obtiene los valores reales de los roles */
const getRoleValues = (keys: RolesKeysType[]) => {
    return keys.map(key => Roles[key]);
};

/** Construye el objeto base con los valores reales */
const BaseRoleAccessControl = accessControlKeys.reduce((acc, rol, index) => {
    acc[rol] = getRoleValues(accessControlKeys.slice(index));
    return acc;
}, {} as RoleAccessControlType);

export const RoleAccessControl = {
    ...BaseRoleAccessControl,
    ALL: getRoleValues(accessControlKeys)
};