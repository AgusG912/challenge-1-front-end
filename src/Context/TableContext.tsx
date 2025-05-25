import { createContext, useContext } from 'react';
import type { targetFields } from './TableContextProvider';

export type ProductTableEditable = {
    id: number;
    name: string;
    iva: number;
    costoFabricacion: number;
    activo: boolean;
    createdAt: string;
    comision: number;
    costoEnvio: number;
    lastUpdatedAt: string;
    originalPrice: number;
    price: number;
    productCode: string;
    profit: number;
};

interface TableConfigContextType {
  products: ProductTableEditable[];
  recalculateAllProfits: (id: number, value: number, title: targetFields) => void;
}

export const configContext = createContext<TableConfigContextType | undefined>(undefined);

export const useTableConfigContext = () => {
  const context = useContext(configContext);

  if (!context) {
    throw new Error('useTableConfigContext debe utilizarse dentro del TableProvider');
  }

  return context;
};