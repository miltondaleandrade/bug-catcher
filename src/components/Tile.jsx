
import { useEffect, useState } from "react"
export default function Tile(props) {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [selectedTile, setSelectedTile] = useState([0, 0]);
  



  const move = (dir, change) => {
      let coords = selectedTile;
      if ((coords[dir] + change) > -1 && (coords[dir] + change) < 4) {
          coords[dir] += change;
      }
      setSelectedTile({coords});
      props.setKeyPress((curr) => !curr);
  }
  const keyPress = (e) => {
    switch (e.keyCode) {
      case 37:
        move(0, 1);
        break;
      case 38:
        move(1, 1);
        break;
      case 39:
        move(0, -1);
        break;
      case 40:
        move(1, -1);
        break;
    }
  };
  //event listeners to window
 
  const onKeyPress = () => {
      window.addEventListener("keydown", keyPress)
  }

  return (
    <>
      {tiles.map((tile) => (
        <>
          <div
            className={
              selectedTile[0] === props.x &&
              selectedTile[1] === props.y
                ? "grid-inner selected light-green"
                : "grid-inner light-green"
            }
          >
            
          </div>
          <div
            className={
              selectedTile[0] === props.x &&
              selectedTile[1] === props.y
                ? "grid-inner selected green"
                : "grid-inner green"
            }
          >
            
          </div>
        </>
      ))}
    </>
  );
}
