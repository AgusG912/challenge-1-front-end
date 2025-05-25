import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { AuthState } from "./types/authStore";
import type { ModalState } from "./types/uiStore";
import type { dbDataState } from "./types/syncDb";

type AppState = AuthState & ModalState & dbDataState;

export const store = create<AppState>()(
    devtools(
        (set) => ({
            /** Estado de la aplicación (Selectors) */
                //* AUTH STORE */
                    status: "not-authenticated",
                    user: {},
                    err: undefined,

            /** Reducers... */
                /** Actualiza el estado a una transaccion. */
                    onChecking: () => {
                        set((state) => ({
                            ...state,
                            status: "checking",
                            user: {},
                            err: undefined,
                        }));
                    },

                /** Sirve para actualizar el estado al iniciar sesion. */
                    onLogin: (payload: Record<string, unknown>) => {
                        set((state) => ({
                            ...state,
                            status: "authenticated",
                            user: payload,
                            err: undefined,
                        }));
                    },

                /** Sirve para actualizar el estado al cerrar la iniciar sesion. */
                    onLogout: (payload?: string) => {
                        set((state) => ({
                            ...state,
                            status: "not-authenticated",
                            user: {},
                            err: payload,
                        }))
                    },

                /** Limpia todos los mensajes de errors que retorna utilizar la authenticacion. */
                    clearErrorMessage: () => {
                        set((state) => ({
                            ...state,
                            err: undefined,
                        }))
                    },

            /******************************************************************************************************/
            /******************************************************************************************************/
            /******************************************************************************************************/
            /** Estado de la aplicación (Selectors) */
                //* UI STORE */
                    isModalOpen: false,

            /** Reducers... */
                /** Abrir modal */
                    onOpenModal: () => {
                        set((state) => ({
                            ...state,
                            isModalOpen: true,
                        }))
                    },

                    onCloseModal: () => {
                        set((state) => ({
                            ...state,
                            isModalOpen: false,
                        }))
                    },
            /******************************************************************************************************/
            /******************************************************************************************************/
            /******************************************************************************************************/
            /** Estado de la aplicación (Selectors) */
                //* SYNC DB
                    allProducts: [],
                    allSales: [],
                    allHistory: [],
                    allUsers: [],

            /** Reducers... */
                    syncData: ({key, data}) => {
                        set((state) => ({
                            ...state,
                            [key]: data
                        }))
                    }

        })
    )
);