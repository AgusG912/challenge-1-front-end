import { Navigate, Outlet } from "react-router-dom";
import { useAuthStoreActions } from "../Store/Actions/useAuthStoreActions";

interface RoleGuardSetting {
    accessLevel: string[]
}

export const RoleUserGuards = ({ accessLevel }:RoleGuardSetting) => {
    const { user } = useAuthStoreActions();

  return accessLevel.includes( String(user.role) ) ? <Outlet /> : (<Navigate replace to={ `/` } />);
}