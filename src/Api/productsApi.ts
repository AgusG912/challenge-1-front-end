import axios, { type AxiosInstance, AxiosHeaders } from "axios";
import { getEnvVariables } from "../Helpers/getEnvVariables";
const { VITE_API_URL } = getEnvVariables();

/** Headers personalizados */
interface customHeaders extends AxiosHeaders {
  'x-user-token': string;
}

// Tipado correcto para la instancia de Axios
const productsApi: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

//Interceptor con tipado para la configuración de request
productsApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-user-token": localStorage.getItem("token") ?? "",
  } as customHeaders;

  return config;
});

export default productsApi;