import { Routes, Route, Link } from "react-router-dom";
import { User } from "../models/user";
import SignUp from "./Signup";
import Login from "./Login";
import Landing from "./Landing";

interface NavbarProps {
    loggedInUser?: User | null,

}

const Navbar = () => {
    return (
        <>
            <div className="h-[75px] fixed shadow-md p-5 flex items-center justify-between left-1/2 rounded-full max-w-2xl w-full bg-white translate-x-[-50%] z-50">
                <h1><Link to="/">Noted Po</Link></h1>
                <ul className="flex gap-2">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login onLoginSuccessful={() => { }} />} />
                <Route path="/signup" element={<SignUp onSignUpSuccessful={() => { }} />} />
            </Routes>
        </>

    )
}

export default Navbar;