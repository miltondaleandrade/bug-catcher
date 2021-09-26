import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Nav(props) {
  return (
    <nav className="main-nav">
      <Link id="logo" to="/">
        <img id="logo" src={Logo} alt="Bug-Catcher Logo" />
      </Link>
      <Link id="bugs" to="/bugs" className={`${props.caughtBugs.length > 1 ? null : "hide"}`}>
        Bugs
      </Link>
      <Link id="new-bug" to="/new-bug">
        Create a New Bug
      </Link>
    </nav>
  );
}
