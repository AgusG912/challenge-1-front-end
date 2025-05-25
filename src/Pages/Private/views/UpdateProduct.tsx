import { useEffect, useState } from "react";
import { useDataStoreActions } from "../../../Store/Actions/useDataStoreActions";
import { Skeleton, notification } from "antd";
import { tableColumnProductAtInternalConfig } from "../../../Schemas/Tables/tableColumnConfig.schema";
import { TableConfigProvider } from "../../../Context/TableContextProvider";
import type { Product } from "../../../Store/types/syncDb";
import EditableTableWithContext from "../../../Components/Table/EditableTableWithContext";

export const UpdateProduct = () => {
  const { syncProducts, allProducts } = useDataStoreActions();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeProducts = async () => {
      try {
        setLoading(true);
        if (allProducts.length === 0) {
          await syncProducts();
        }
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Error al cargar los productos");
        notification.error({
          message: "Error",
          description: "No se pudieron cargar los productos",
        });
      } finally {
        setLoading(false);
      }
    };

    initializeProducts();
  }, [allProducts.length, syncProducts]);

  if (loading) {
    return <Skeleton active paragraph={{ rows: 10 }} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Preparar datos con profit inicial
  const productsWithProfit = allProducts.map(product => ({
    ...product,
    profit: calculateProfit(product) // Calculamos el profit inicial
  }));

  return (
    <TableConfigProvider initialValue={productsWithProfit}>
      <EditableTableWithContext
        dataSource={productsWithProfit}
        configUniqueKey="id"
        columnTemplates={tableColumnProductAtInternalConfig}
        useUpdateCol
      />
    </TableConfigProvider>
  );
};

// Función para calcular el profit inicial
function calculateProfit(product: Product): number {
  return product.price - (product.price * product.iva) - product.costoEnvio - product.comision;
}