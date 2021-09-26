import { useHistory, useLocation } from "react-router";

export default function StartButton(props) {
    const history = useHistory();
    const local = useLocation();
    const bugs = props.caughtBugs;
    const handleClick = (e) => {
        if (local.pathname === "/" && bugs.length > 5 ){
            window.location.reload();
        }
        console.log(local.pathname)
    }
    return (
        <div>
            <button className={`reload-button ${bugs.length > 5 ? null : "hide"} `} onClick={() => handleClick()}>
                New Game!
            </button>
        </div>
    )
}