import React, { useEffect, useState } from 'react';
import './App.scss';
import { Note as NoteModel } from './models/note';
import Note from './components/Note';
import { IoIosAdd } from 'react-icons/io';
import Sidebar from "./components/Sidebar";

function App() {

  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", { method: "GET" });

        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='sticky-container w-full flex flex-col'>
        <h1 className="sticky-container__header text-4xl mb-8">Sticky Wall</h1>
        <div className="sticky-container__main border rounded-md">
          <ul className='sticky-container__content grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
            {notes.map(note => (
              <Note note={note} key={note._id} />
            ))}
            <li className='sticky-notes add p-6 rounded-md text-5xl flex justify-center items-center hover:cursor-pointer'>
              <IoIosAdd className="plus" />
            </li>
          </ul>
        </div>
      </div>
    </div>


  );
}

export default App;
