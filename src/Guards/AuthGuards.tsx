import { Navigate, Outlet } from "react-router-dom";
import { useAuthStoreActions } from "../Store/Actions/useAuthStoreActions";
import { PublicRoutes } from "../Models/routes.model";

/**
 * *GUARD AUTH
 * Es el protector de las rutas autenticadas, y va a estar ejecutandose
 * cada vez que se realice cualquier operacion ne la rutas privadas.
 *
 * - Cuenta con dos niveles de verificacion para ser mas amigable con el usuario,
 *   ya que por defecto es demasiado agresivo y al iniciar por primera vez va a
 *   realizar muchos saltos entre las rutas publicas y privadas.
 *
*/
export const AuthGuard = () => {
  const {status, checkAuthoritazion} = useAuthStoreActions()
  /** Desactiva el comentario si deseas ver la ejecucion del guard. */
  //console.log('GUARD')

  if (checkAuthoritazion()) {
    if(status === 'authenticated') {
      return <Outlet />
    }
    return <Outlet />
  }

  return <Navigate replace to={`${PublicRoutes.PUBLIC}/${PublicRoutes.LOGIN}`} />
};
