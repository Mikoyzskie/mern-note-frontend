import React, { createContext, ReactNode, useContext, useState } from "react";
import { Note } from '../models/note';

interface Props {
    children: ReactNode
}

interface Modal {
    createModal: boolean;
    setCreateModal: React.Dispatch<React.SetStateAction<boolean>>
    loginShow: string;
    setLoginShow: React.Dispatch<React.SetStateAction<string>>
    signupShow: string;
    setSignupShow: React.Dispatch<React.SetStateAction<string>>
    noteToEdit?: Note | null;
    setNoteToEdit: React.Dispatch<React.SetStateAction<Note | null>>
}

const ModalContext = createContext<Modal>({
    createModal: false,
    setCreateModal: () => { },
    loginShow: "block",
    setLoginShow: () => { },
    signupShow: "block",
    setSignupShow: () => { },
    noteToEdit: null,
    setNoteToEdit: () => { }
})

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: Props) => {
    const [createModal, setCreateModal] = useState<boolean>(false);
    const [loginShow, setLoginShow] = useState<string>("block");
    const [signupShow, setSignupShow] = useState<string>("block");
    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null)

    return (
        <ModalContext.Provider value={{ createModal, setCreateModal, noteToEdit, setNoteToEdit, loginShow, setLoginShow, signupShow, setSignupShow }}>{children}</ModalContext.Provider>
    )
}

