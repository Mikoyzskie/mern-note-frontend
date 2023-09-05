import { Note as NoteModel } from "../models/note";
import DateComponent from "./DateComponent";
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

    let createdOrUpdated;
    let date;
    if (createdAt === updatedAt) {
        createdOrUpdated = "";
        date = createdAt
    } else {
        createdOrUpdated = "Last Updated: "
        date = updatedAt;
    }

    return (
        <li className="sticky-notes rounded-md shadow-md bg-[#ffdada] flex flex-col justify-between">
            <div>
                <h3 className="sticky-notes__header text-xl font-bold p-6">{title}</h3>
                <p className="font-normal px-6">
                    {text}
                </p>
            </div>
            <span className="px-6 py-3 font-normal text-xs">
                {createdOrUpdated}<DateComponent timestamp={date} />
            </span>
        </li>
    )
}

export default Note;