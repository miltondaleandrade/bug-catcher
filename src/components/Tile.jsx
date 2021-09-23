import { useEffect, useState } from "react"
import { createEmptyBoard } from "../services";
import Bug from '../components/Bug';
export default function Tile(props) {
  const [tiles, setTiles] = useState(createEmptyBoard());
  const [selectedTile, setSelectedTile] = useState([0, 0]);

  useEffect(() => {
    const move = (dir, change) => {
      setSelectedTile((coords) => {
        console.log(coords);
        if ((coords[dir] + change) > -1 && (coords[dir] + change) < 4) {
          coords[dir] += change;
        }
        return [...coords];
      });
    }
    const keyPress = (e) => {
      e.preventDefault();
      switch (e.keyCode) {
          // left
        case 65:
          move(0, -1);
          break;
          // up
        case 87:
          move(1, -1);
          break;
          // right
        case 68:
          move(0, 1);
          break;
          // down
        case 83:
          move(1, 1);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", keyPress)
    return () => {
      window.removeEventListener("keydown", keyPress);
    }
  }, []);

  return (
    <>
      {tiles.map((tile, i) => (
        <div
          className={`grid-inner ${selectedTile[0] === tile.x && selectedTile[1] === tile.y && "selected"} ${i % 2 ? "light-green" : "green"} ${selectedTile}`
          }
        >
          {/* {players position === className="selected" ? display bug modal : null} */}
        </div>
      ))}
    </>
  );
}