import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.scss';
import { useModalContext } from '../lib/Providers';
import { Note } from '../models/note';
import { NoteInput } from './network/note_api';
import * as NoteApi from "./network/note_api";

interface AddEditNoteDialogProps {
    onNoteSaved: (note: Note) => void,
    noteToEdit?: Note,
}

const CreateEditNote = ({ onNoteSaved, noteToEdit }: AddEditNoteDialogProps) => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NoteInput>({
        defaultValues: {
            title: noteToEdit?.title || "",
            text: noteToEdit?.text || "",
        }
    });

    async function onSubmit(input: NoteInput) {
        try {
            let noteResponse: Note;
            if (noteToEdit) {
                noteResponse = await NoteApi.updateNote(noteToEdit._id, input);
            } else {
                noteResponse = await NoteApi.createNote(input);
            }
            onNoteSaved(noteResponse);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    const { setCreateModal, setNoteToEdit } = useModalContext();

    return (
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">{
                        noteToEdit ? "Edit Note" : "Create a New Note"
                    }</h2>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Note Title</label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input type="text" id="title" autoComplete="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" {...register("title", { required: "Required" })} />


                                </div>
                                <span className='text-sm text-red-500'>{errors.title?.message}</span>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Note Description</label>
                            <div className="mt-2">
                                <textarea id="description" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register("text")}></textarea>
                            </div>

                        </div>
                        {/* <div className="sm:col-span-full flex gap-3">
                            <div className='basis-1/2'>
                                <label htmlFor="list" className="block text-sm font-medium leading-6 text-gray-900">List</label>
                                <div className="mt-2">
                                    <select id="list" name="list" autoComplete="list-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Personal</option>
                                        <option>Work</option>
                                        <option>Chores</option>
                                    </select>
                                </div>
                            </div>

                            <div className='basis-1/2'>
                                <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">Tag</label>
                                <div className="mt-2">
                                    <select id="tag" name="tag" autoComplete="tag-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Personal</option>
                                        <option>Work</option>
                                        <option>Chores</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => {
                    setCreateModal(false);
                    setNoteToEdit(null)
                }}>Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isSubmitting}>Save</button>
            </div>
        </form>
    )
}

export default CreateEditNote