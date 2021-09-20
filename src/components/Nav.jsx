import Logo from "../assets/logo.svg" 

export default function Nav() {
    return (
        <nav className="main-nav">
            <img id="logo" src={Logo} alt="Bug-Catcher Logo" />
        </nav>
    )
}