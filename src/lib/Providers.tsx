import React, { createContext, ReactNode, useContext, useState } from "react";
import { Note } from '../models/note';

interface Props {
    children: ReactNode
}

interface Modal {
    createModal: boolean;
    setCreateModal: React.Dispatch<React.SetStateAction<boolean>>
    noteToEdit?: Note | null;
    setNoteToEdit: React.Dispatch<React.SetStateAction<Note | null>>
}

const ModalContext = createContext<Modal>({
    createModal: false,
    setCreateModal: () => { },
    noteToEdit: null,
    setNoteToEdit: () => { }
})

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: Props) => {
    const [createModal, setCreateModal] = useState<boolean>(false);

    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null)

    return (
        <ModalContext.Provider value={{ createModal, setCreateModal, noteToEdit, setNoteToEdit }}>{children}</ModalContext.Provider>
    )
}

