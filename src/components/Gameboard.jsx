import { useEffect, useState } from "react";
import Grid from "react-css-grid";

export default function Gameboard(props) {
  // const [player, setPlayer] = useState("");
  // const [board, setBoard] = useState({});
  // const [tiles, setTiles] = useState([]);
  // const [bugImg, setBugImg] = useState([]);
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//   const createBoard = () => {
//     for (let counter = 16; counter > 0; counter--) {
//       tiles.push(counter);
//       console.log(tiles);
//     }
//     createBoard(tiles);
//   };

  return (
    <div className="grid-board">
      {tiles.map((tile) => (
        <div className="grid-inner">{tile}</div>
      ))}
    </div>
  );
}
