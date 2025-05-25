import { store } from "../store";


export const useUiStoreActions = () => {
    const {
        isModalOpen,
        onOpenModal,
        onCloseModal,
    } = store();

    const openModal = () => {
        onOpenModal();
    }

    const closeModal = () => {
        onCloseModal()
    }

    const toggleModal = () => {
        if (isModalOpen) {
            openModal();
        } else {
            closeModal();
        }
    }

    return {
        //* Propiedades
        modal:isModalOpen,

        //* Métodos
        closeModal,
        openModal,
        toggleModal,
    }

}