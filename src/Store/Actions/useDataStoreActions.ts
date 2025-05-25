import { store } from "../store";
import productsApi from "../../Api/productsApi";
import type { Product } from "../types/syncDb";

export const useDataStoreActions = () => {
    const {
        allHistory,
        allProducts,
        allSales,
        allUsers,
        syncData,
    } = store();

    const syncProducts = async () => {
        await productsApi('/api/products')
            .then((resp) => {
                const { data } = resp;

                if(data.products.length > 0) {
                    syncData({
                        key:'allProducts',
                        data: data.products
                    });
                }
            })
            .finally(() => {
                /** Agrega los comentarios para ocultar la ruta de peticiones. */
                console.log('[GET] => Backend[Products] => Marketplace => Backend => Response')
            })
        };

    const syncSales = async () => {
        await productsApi('/api/sales')
            .then((resp) => {
                const { data } = resp;

                if(data.sales.length > 0) {
                    syncData({
                        key:'allSales',
                        data: data.sales
                    });
                }
            })
            .finally(() => {
                /** Agrega los comentarios para ocultar la ruta de peticiones. */
                console.log('[GET] => Backend[Sales] => Marketplace => Backend => Response')
            })
        };

    const syncUsers = async () => {
        await productsApi('/admin/users')
            .then((resp) => {
                const { data } = resp;

                if(data.users.length > 0) {
                    syncData({
                        key:'allUsers',
                        data: data.users
                    });
                }
            })
            .finally(() => {
                /** Agrega los comentarios para ocultar la ruta de peticiones. */
                console.log('[GET] => Backend[Users]')
            })

            return true;
        };

    const syncHistory = async () => {
        await productsApi('/admin/changes')
            .then((resp) => {
                const { data } = resp;
                const toProcess = data.changes;

                const newData = toProcess.map(({changes:historyChanges, ...rest}:{changes:Record<string, string[]>}) => {
                    const temp:Record<string, unknown> = {}
                    if(historyChanges) {
                        const keys = Object.keys(historyChanges);
                        if(keys.length === 1) {
                            const primaryKey = keys[0]
                            temp['field_change'] = primaryKey;
                            temp['previous_value'] = historyChanges[primaryKey][0];
                            temp['new_value'] = historyChanges[primaryKey][1];
                        }

                        if(keys.length > 1) {
                            keys.forEach((key, index) => {
                                const primaryKey = key;
                                temp['field_change'] = temp['field_change']
                                    ? `${ temp['field_change'] }, ${primaryKey}`
                                    : primaryKey;

                                temp['previous_value'] = temp['previous_value']
                                    ? `${ temp['previous_value'] }, ${ historyChanges[primaryKey][0] }`
                                    : historyChanges[primaryKey][index];

                                temp['new_value'] = temp['new_value']
                                    ? `${ temp['new_value'] }, ${ historyChanges[primaryKey][1] }`
                                    : historyChanges[primaryKey][1];
                            })
                        }
                    }
                    return {
                        ...rest,
                        field_change: temp.field_change,
                        new_value: temp.new_value,
                        previous_value: temp.previous_value,
                    }
                })

                if(data.changes.length > 0) {
                    syncData({
                        key:'allHistory',
                        data: newData
                    });
                }
            })
            .finally(() => {
                /** Agrega los comentarios para ocultar la ruta de peticiones. */
                console.log('[GET] => Backend[History]')
            });
        };

        const syncUpdateField = async (fields:Partial<Product>, id:number) => {
            const validToUpdate = [
                'activo',
                'costoFabricacion',
                'iva',
                'name',
                'originalPrice',
                'price'
            ];

            const keysAffected = Object.keys(fields)
                .filter((key) => validToUpdate.includes(key))
                .map((key) => key)
                .reduce((acc:Record<string, unknown>, key:string) => {
                    acc[key] = fields[key as keyof typeof fields];
                    return acc;
                },{});


            await productsApi.patch(`/api/products/${id}`, keysAffected)
                .then((resp) => {
                    const {data} = resp;
                    if(data.success) {
                        /** La lista de productos se ha actualizado. */
                        syncProducts();
                    }
                })
                .finally(() => {
                    console.log('[PATH] => Backend[Products] => Marketplace[Products]')
                });
        }




    return {
        allHistory,
        allProducts,
        allSales,
        allUsers,


        syncProducts,
        syncSales,
        syncUsers,
        syncHistory,
        syncUpdateField,
    }
}
