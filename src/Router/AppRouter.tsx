import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../Models/routes.model";
import RoutesWithNotFound from "./Views/RoutesWithNotFound";
import { PublicRouter } from "./PublicRouter";
import { AuthGuard } from "../Guards/AuthGuards";
import { useAuthStoreActions } from "../Store/Actions/useAuthStoreActions";
import { lazy, useLayoutEffect } from "react";

/**
 * El lazy loading aplicado para las rutas privadas ya que si el usuario no cuenta
 * con ningun tipo de verificacion previa. no es necesario cargar las rutas privadas.
 */
const PrivateRouter = lazy(() => import('./PrivateRouter'));

export const AppRouter = () => {
  const { checkAuthToken } = useAuthStoreActions();

  /**
   * Aqui utilizamos una function autoejecutada para validar que todo este bien con el JWT.
   * Se ejecutara cuando se inicie la aplicacion.
   */
  useLayoutEffect(() => {
    (async () => {
      /** Desactiva el comentario si deseas ver la ejecucion del checkJWT */
      //Console.log('Checking JWT...')
      await checkAuthToken();
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoutesWithNotFound>
      <Route path="*" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
      <Route path={`${PublicRoutes.PUBLIC}/*`} element={<PublicRouter />} />
      <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRouter />} />
      </Route>
    </RoutesWithNotFound>
  );
};