import { useState } from "react"
import Grid from "react-css-grid"

export default function Gameboard(props) {
    const [player, setPlayer] = useState("");
    const [board, setBoard] = useState({});
    const [tiles, setTiles] = useState([]);
    const [bugImg, setBugImg] = useState([]);

    
    //create a way to randomly assign 4 divs with the bug info modal
    return(
        <div className="grid-board">
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
                <div className="grid-inner"></div>
        </div>
    )
}