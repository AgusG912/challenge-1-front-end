import { type ReactNode, useState, useCallback } from 'react';
import type { ProductTableEditable } from './TableContext';
import { configContext } from './TableContext';
import type { valueType } from 'antd/es/statistic/utils';

interface TableConfigProviderProps {
  initialValue: ProductTableEditable[];
  children: ReactNode;
}

export type targetFields = {
    [x: string]: valueType | null;
}

export const TableConfigProvider = ({ initialValue, children }: TableConfigProviderProps) => {
  const [products, setProducts] = useState<ProductTableEditable[]>(initialValue);

  const recalculateAllProfits = useCallback((id:number, profit:number, target:targetFields) => {
    setProducts((prevState) => {
        const indexController = id;
        const saveState = [...prevState];
        console.log( { ...saveState[ indexController ], ...target, profit })
        saveState[ indexController ] = { ...saveState[ indexController ], ...target, profit };
        return saveState;
    });
  }, [setProducts]);

  const contextValue = {
    products,
    recalculateAllProfits
  };

  return (
    <configContext.Provider value={contextValue}>
      {children}
    </configContext.Provider>
  );
};