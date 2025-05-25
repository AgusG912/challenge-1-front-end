import { Navigate, Route } from "react-router-dom";
import { PrivateLayout } from "../Pages/Private/PrivateLayout";
import { PrivateRoutes } from "../Models/routes.model";
import { Home } from "../Pages/Private/views/Home";
import { Sales } from "../Pages/Private/views/Sales";
import { Products } from "../Pages/Private/views/Products";
import { Users } from '../Pages/Private/views/Users';
import { History } from "../Pages/Private/views/History";
import { RoleUserGuards } from "../Guards/RoleUserGuards";
import { RoleAccessControl } from "../Models/roles.models";
import RoutesWithNotFound from "./Views/RoutesWithNotFound";
import { UpdateProduct } from "../Pages/Private/views/UpdateProduct";

const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<PrivateLayout />}>

        {/* Todos los usuarios authenticados pueden pasar por aqui. */}
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />

        {/* Todos los usuarios authenticados con rol superior a Moderador */}
        <Route element={ <RoleUserGuards accessLevel={RoleAccessControl.MODERADOR} /> }>
          <Route path={PrivateRoutes.SALES} element={<Sales />} />
          <Route path={PrivateRoutes.PRODUCTS_UPDATE} element={<UpdateProduct />} />
        </Route>

        {/* Todos los usuarios authenticados con rol Administrador */}
        <Route element={ <RoleUserGuards accessLevel={RoleAccessControl.ADMIN} /> }>
          <Route path={PrivateRoutes.USERS} element={<Users />} />
          <Route path={PrivateRoutes.HISTORY} element={<History />} />
        </Route>
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRouter;
