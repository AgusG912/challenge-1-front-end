import { useEffect } from "react";
import EditableTable from "../../../Components/Table/EditableTable";
import { useDataStoreActions } from "../../../Store/Actions/useDataStoreActions";
import { Skeleton } from "antd";
import { tableColumnProductAtClientConfig } from "../../../Schemas/Tables/tableColumnConfig.schema";

export const Products = () => {
  const { syncProducts, allProducts } = useDataStoreActions();

  useEffect(() => {
    if (allProducts.length === 0) {
      syncProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return  (
    <>
      { allProducts.length > 0 ?
        (<EditableTable
          dataSource={allProducts}
          configUniqueKey="id"
          columnTemplates={tableColumnProductAtClientConfig}
        />) : (<Skeleton />)
      }
    </>
  )
};
