import React, { createContext, ReactNode, useContext, useState } from "react";


interface Props {
    children: ReactNode
}

interface Modal {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<Modal>({
    isOpen: false,
    setIsOpen: () => { }
})

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>
    )
}

