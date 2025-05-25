import { useEffect } from "react";
import { useDataStoreActions } from "../../../Store/Actions/useDataStoreActions";
import EditableTable from "../../../Components/Table/EditableTable";
import { Skeleton } from "antd";
import { tableColumnSalesConfig } from "../../../Schemas/Tables/tableColumnConfig.schema";

export const Sales = () => {
  const { syncSales, allSales } = useDataStoreActions();

  useEffect(() => {
    if (allSales.length === 0) {
      syncSales();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return  (
    <>
      { allSales.length > 0 ?
        (<EditableTable
          dataSource={allSales}
          configUniqueKey="id"
          columnTemplates={tableColumnSalesConfig}
        />) : (<Skeleton />)
      }
    </>
  )
};
