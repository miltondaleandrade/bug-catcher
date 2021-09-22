import { useEffect, useState } from "react";
import Tile from './Tile';

export default function Gameboard(props) {
    const [keyPress, setKeyPress] = useState(false);

  
  useEffect(()=>{
  const createBoard = () => {
    let arr = [];
    let key = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push(
          <Tile
            x={j}
            y={i}
            key={key++}
            tile={8[Math.floor(Math.random() * 16)]}
            selectedTile={props.selectedTile}
          />
        );
      }
    }
    return arr;
  }
  createBoard();
}, [keyPress])

//   };
console.log(props.bugs.fields)
  return (
    <div className="grid-board" onKeyDown={() => (props.move)}>
      <Tile setKeyPress={setKeyPress}/>
    </div>
  );
}
