import NoteContainer from './components/NotesContainer';
import './App.scss';
import Sidebar from "./components/Sidebar";
import { ModalProvider } from './lib/Providers';
import Login from './components/Login';
import Register from "./components/Register";

function App() {
  return (
    // <ModalProvider>
    //   <div className='flex'>
    //     <Sidebar />

    //     <NoteContainer />
    //   </div>
    // </ModalProvider>
    // <Login />
    <Register />
  );
}

export default App;
