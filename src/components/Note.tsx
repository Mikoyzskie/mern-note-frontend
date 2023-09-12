import { Note as NoteModel } from "../models/note";
import DateComponent from "./DateComponent";
import "../styles/global.scss"
import { BiTrashAlt } from 'react-icons/bi';
import { useModalContext } from "../lib/Providers";



interface NoteProps {
    note: NoteModel,
    onNoteCliked: (note: NoteModel) => void,
    onDeleteNoteClicked: (note: NoteModel) => void,
}

const Note = ({ note, onDeleteNoteClicked, onNoteCliked }: NoteProps) => {

    const { setCreateModal } = useModalContext();

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
        <>

            <li className="sticky-notes rounded-md shadow-md bg-[#ffdada] flex flex-col justify-between hover:cursor-pointer" onClick={() => {
                onNoteCliked(note);
                setCreateModal(true)
            }}>
                <div>
                    <h3 className="sticky-notes__header text-xl font-bold p-6">
                        {title}
                    </h3>
                    <p className="font-normal px-6">
                        {text}
                    </p>
                </div>
                <div className="flex justify-between items-center px-6 py-3 gap-2">
                    <span className="font-normal text-xs">
                        {createdOrUpdated}<DateComponent timestamp={date} />
                    </span>
                    <div className="flex gap-2">
                        {/* <MdOutlineEdit className="hover:cursor-pointer hover:scale-110" onClick={() => { onNoteCliked(note) }} /> */}
                        <BiTrashAlt className="hover:cursor-pointer hover:scale-110" onClick={(e) => {
                            onDeleteNoteClicked(note);
                            e.stopPropagation();
                        }} />
                    </div>

                </div>
            </li>
        </>
    )
}

export default Note;