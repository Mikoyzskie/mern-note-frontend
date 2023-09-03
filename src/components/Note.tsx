import { Note as NoteModel } from "../models/note";
import styles from "../styles/Note.module.scss";
import "../styles/global.scss"

interface NoteProps {
    note: NoteModel,
}

const Note = ({ note }: NoteProps) => {

    const {
        title,
        text,
        createdAt,
        updatedAt,
    } = note;

    return (
        <li className="sticky-notes rounded-md shadow-md bg-[#ffdada] flex flex-col justify-between">
            <div>
                <h3 className="sticky-notes__header text-xl font-bold p-6">{title}</h3>
                <p className="font-normal px-6">
                    {text}
                </p>
            </div>
            <p className="px-6 py-3 font-normal text-xs">
                Created At: {createdAt}
            </p>
        </li>
    )
}

export default Note;