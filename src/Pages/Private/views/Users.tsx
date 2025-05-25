import { useEffect } from "react";
import { useDataStoreActions } from "../../../Store/Actions/useDataStoreActions";
import { tableColumnUsersConfig } from "../../../Schemas/Tables/tableColumnConfig.schema";
import { Skeleton } from "antd";
import EditableTable from "../../../Components/Table/EditableTable";

export const Users = () => {
  const { syncUsers, allUsers } = useDataStoreActions();

  useEffect(() => {
    if (allUsers.length === 0) {
      syncUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return  (
    <>
      { allUsers.length > 0 ?
        (<EditableTable
          dataSource={allUsers}
          configUniqueKey="id"
          columnTemplates={tableColumnUsersConfig}
          useUpdateCol
        />) : (<Skeleton />)
      }
    </>
  )
}