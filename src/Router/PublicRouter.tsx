import { useEffect } from "react";
import { Login } from "../Pages/Auth/views/Login";
import { AuthLayout } from "../Pages/Auth/AuthLayout";
import { PrivateRoutes } from "../Models/routes.model";
import { PublicRoutes } from "../Models/routes.model";
import { Register } from "../Pages/Auth/views/Register";
import RoutesWithNotFound from "./Views/RoutesWithNotFound";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useAuthStoreActions } from "../Store/Actions/useAuthStoreActions";

export const PublicRouter = () => {
  const {status} = useAuthStoreActions()
  const redirect = useNavigate();

  /** Este efecto evitara que el usuario pueda ingresar a las rutas publicas si esta autenticado. */
  useEffect(() => {
    if(status === 'authenticated') {
      redirect(`/${PrivateRoutes.PRIVATE}`, {replace:true});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);


  return (
    <RoutesWithNotFound>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />

        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.REGISTER} element={<Register />} />
      </Route>
    </RoutesWithNotFound>
  );
};
