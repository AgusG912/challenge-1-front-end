import { store } from "../store";
import productsApi from "../../Api/productsApi";
import type { LoginSchemaType } from "../../Schemas/Forms/Auth/login.schema";
import type { RegisterSchemaType } from "../../Schemas/Forms/Auth/register.schema";
import { AxiosError, isAxiosError } from "axios";

export const useAuthStoreActions = () => {
    const {
        /** Propiedades */
        status,
        user,
        err,

        /** Reducers */
        onChecking,
        onLogin,
        onLogout,
        clearErrorMessage,
     } = store();

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */

    const startLogin = async({ email, password }:LoginSchemaType) => {
        onChecking();
        await productsApi.post('/auth',{ email, password })
            .then((resp) => {
                const { data } = resp;
                localStorage.setItem('token', data.user.token );
                localStorage.setItem('token-init-date', String(new Date().getTime()) );
                onLogin(data.user);
            })
            .catch((err: Error | AxiosError) => {
                if(isAxiosError(err)){
                    onLogout('Credenciales incorrectas');
                    setTimeout(() => {
                        clearErrorMessage();
                    }, 10);
                } else {
                    console.log(err)
                }
            });
    };

    const startRegister = async({ email, password, alias }:RegisterSchemaType) => {
        onChecking();
        await productsApi.post('/auth/new',{ email, password, alias })
            .then((resp) => {
                const { data } = resp;
                localStorage.setItem('token', data.user.token );
                localStorage.setItem('token-init-date', String(new Date().getTime()));
                onLogin(data.user);
            })
            .catch((err: Error | AxiosError) => {
                const { response } = err as AxiosError<Record<string, string>>;
                onLogout(response?.data.error || 'Algo ha salido mal...');
                setTimeout(() => {
                    clearErrorMessage();
                }, 10);
            });
    };

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return onLogout();
        await productsApi.get('auth/renew')
            .then((resp) => {
                const { data } = resp;
                localStorage.setItem('token', data.user.token );
                localStorage.setItem('token-init-date', String(new Date().getTime()));
                onLogin(data.user)
            })
            .catch(() => {
                localStorage.clear();
                onLogout();
        });
    };

    /** Primera validacion del guard al recargar la pagina o realizar cualquier operacion. */
    const checkAuthoritazion = () => {
        const token = localStorage.getItem('token');
        return (token) ? true : false;
    };

    const startLogout = () => {
        localStorage.clear();
        //dispatch( onLogoutCalendar() );
        onLogout();
    };

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */




    return {
        //* Propiedades
        err,
        user,
        status,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
        checkAuthoritazion
    }
}