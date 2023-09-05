import NoteContainer from './components/NotesContainer';
import './App.scss';


import Sidebar from "./components/Sidebar";
import { ModalProvider } from './lib/Providers';

function App() {
  return (
    <ModalProvider>
      <div className='flex'>
        <Sidebar />

        <NoteContainer />
      </div>
    </ModalProvider>

  );
}

export default App;
