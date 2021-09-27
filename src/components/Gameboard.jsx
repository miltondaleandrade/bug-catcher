import Tile from "./Tile";

export default function Gameboard(props) {
  return (
    <div
      className={`grid-board ${props.caughtBugs.length === 5 ? "hide" : null}`}
    >
      <Tile {...props} />
    </div>
  );
}
