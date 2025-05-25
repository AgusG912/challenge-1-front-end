export type Product = {
    id: number;
    name: string;
    iva: number;
    costoFabricacion: number;
    activo: boolean;
    createdAt: string; // Puede ser Date si se transforma antes de usar
    comision: number;
    costoEnvio: number;
    lastUpdatedAt: string; // Puede ser Date si se transforma antes de usar
    originalPrice: number;
    price: number;
    productCode: string;
};

type Sale = {
    id: number;
    location: string;
    client: string;
    paymentMethod: string;
    paidShipping: boolean;
    salePrice: number;
    createdAt: string; // Puede ser `Date` si lo conviertes antes de usarlo
    productId: number;
};

type DataRecord = {
    id: string;
    createdAt: string; // Puede ser `Date` si se convierte antes de usarlo
    changes: object[];
    product: string;
    modifiedBy: string;
};

type User = {
    id: string;
    email: string;
    alias: string;
    createdAt: string; // Puede ser Date si lo conviertes antes de usarlo
    updatedAt: string; // Puede ser Date si lo conviertes antes de usarlo
    role: string;
};

export interface dbDataState {
    allProducts: Product[];
    allSales: Sale[];
    allHistory: DataRecord[];
    allUsers: User[];
    syncData: ({ key, data }: {
        key: string;
        data: unknown;
    }) => void;
};