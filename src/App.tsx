import NoteContainer from './components/NotesContainer';
import './App.scss';
import Sidebar from "./components/Sidebar";
import { ModalProvider } from './lib/Providers';

import SignUp from "./components/Signup";

function App() {
  return (
    // <ModalProvider>
    //   <div className='flex'>
    //     <Sidebar />

    //     <NoteContainer />
    //   </div>
    // </ModalProvider>
    // <Login />
    <SignUp onSignUpSuccessful={() => { }} />
  );
}

export default App;
