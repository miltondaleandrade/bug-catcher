import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg" 

export default function Nav() {
    return (
        <nav className="main-nav">
            <Link to="/"><img id="logo" src={Logo} alt="Bug-Catcher Logo" /></Link>
            <Link to="/bugs">Bugs</Link>
            <Link to="/new-bug">Create a New Bug</Link>
        </nav>
    )
}