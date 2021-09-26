import { useLocation } from "react-router";

export default function StartButton(props) {
    const local = useLocation();
    const bugs = props.caughtBugs;
    const handleClick = (e) => {
        if (local.pathname === "/"){
            window.location.reload();
        }
        console.log(local.pathname)
        
    }
    return (
        <div>
            <button className={`reload-button ${bugs.length >  5  ? null : "hide"} `} onClick={() => handleClick()}>
                New Game!
            </button>
            </div>
    )
}