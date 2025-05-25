import { useEffect } from "react";
import { useDataStoreActions } from "../../../Store/Actions/useDataStoreActions";
import EditableTable from "../../../Components/Table/EditableTable";
import { Skeleton } from "antd";
import { tableColumHistoryChangesConfig } from '../../../Schemas/Tables/tableColumnConfig.schema';

export const History = () => {
  const { syncHistory, allHistory } = useDataStoreActions();

  useEffect(() => {
    if (allHistory.length === 0) {
      syncHistory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return  (
    <>
      { allHistory.length > 0 ?
        (<EditableTable
          dataSource={allHistory}
          configUniqueKey="id"
          columnTemplates={tableColumHistoryChangesConfig}
        />) : (<Skeleton />)
      }
    </>
  )
};
