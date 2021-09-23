import Tile from "./Tile";

export default function Gameboard(props) {
  
  return (
    <div className={"grid-board"}>
        <Tile {...props} />
    </div>
  );
}
