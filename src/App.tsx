import NoteContainer from './components/NotesContainer';
import './App.scss';
import Sidebar from "./components/Sidebar";
import { ModalProvider, useModalContext } from './lib/Providers';
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {

  return (
    <ModalProvider>
      {/* <div className='flex'>
        <Sidebar />

        <NoteContainer />
      </div> */}

      <Login onLoginSuccessful={() => {

      }} />
      <SignUp onSignUpSuccessful={() => { }} />
    </ModalProvider>
  );
}

export default App;
