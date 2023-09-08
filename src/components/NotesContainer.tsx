import React, { useEffect, useState, Fragment, useRef } from 'react';
import { Note as NoteModel } from '../models/note';
import Note from './Note';
import { IoIosAdd } from 'react-icons/io';
import { Dialog, Transition } from '@headlessui/react'

import CreateNote from './CreateNote'
import { useModalContext } from '../lib/Providers';
import * as NotesApi from "./network/note_api"

const NoteContainer = () => {

    const { isOpen, setIsOpen } = useModalContext();
    const cancelButtonRef = useRef(null);
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


    return (
        <>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                                        <CreateNote onNoteSaved={(newNote) => {
                                            setNotes([...notes, newNote])
                                            setIsOpen(false)
                                        }} />
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className='sticky-container w-full flex flex-col'>
                <h1 className="sticky-container__header text-4xl mb-8">Sticky Wall</h1>
                <div className="sticky-container__main border rounded-md">
                    <ul className='sticky-container__content grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
                        {notes.map(note => (
                            <Note note={note} key={note._id} />
                        ))}
                        <li onClick={() => setIsOpen(true)} className='sticky-notes add p-6 rounded-md text-5xl flex justify-center items-center hover:cursor-pointer'>
                            <IoIosAdd className="plus" />
                        </li>

                    </ul>
                </div>
            </div>
        </>

    )
}

export default NoteContainer