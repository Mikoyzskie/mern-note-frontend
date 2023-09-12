import React, { useEffect, useState } from 'react';
import { Note as NoteModel } from '../models/note';
import Note from './Note';
import { IoIosAdd } from 'react-icons/io';
import CreateEditNote from './CreateEditNote'
import { useModalContext } from '../lib/Providers';
import * as NotesApi from "./network/note_api";

import ModalContainer from './ModalContainer';

const NoteContainer = () => {

    const { setCreateModal } = useModalContext();
    const { noteToEdit, setNoteToEdit } = useModalContext();
    // const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null)

    const [notes, setNotes] = useState<NoteModel[]>([]);

    useEffect(() => {
        async function loadNotes() {
            try {
                const notes = await NotesApi.fetchNotes();
                setNotes(notes);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }
        loadNotes();
    }, []);

    async function deleteNote(note: NoteModel) {
        try {
            await NotesApi.deleteNote(note._id);
            setNotes(notes.filter(existingNote => existingNote._id !== note._id));
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <>
            <ModalContainer>
                {noteToEdit &&
                    <CreateEditNote noteToEdit={noteToEdit} onNoteSaved={(updateNote) => {

                        setNotes(notes.map(existingNote => existingNote._id === updateNote._id ? updateNote : existingNote))
                        setNoteToEdit(null)
                        setCreateModal(false)

                    }} />
                }
                {!noteToEdit &&
                    <CreateEditNote onNoteSaved={(newNote) => {

                        setNotes([...notes, newNote])
                        setCreateModal(false)

                    }} />
                }



            </ModalContainer>

            <div className='sticky-container w-full flex flex-col'>
                <h1 className="sticky-container__header text-4xl mb-8">Sticky Wall</h1>
                <div className="sticky-container__main border rounded-md">
                    <ul className='sticky-container__content grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
                        {notes.map(note => (
                            <Note note={note} key={note._id} onDeleteNoteClicked={deleteNote} onNoteCliked={setNoteToEdit} />
                        ))}
                        <li onClick={() => setCreateModal(true)} className='sticky-notes add p-6 rounded-md text-5xl flex justify-center items-center hover:cursor-pointer'>
                            <IoIosAdd className="plus" />
                        </li>

                    </ul>
                </div>
            </div>

        </>

    )
}

export default NoteContainer