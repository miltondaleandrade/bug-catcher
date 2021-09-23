export default function Tile(props) {
  return (
    <>
      {props.tiles.map((tile, i) => (
        <div
          className={`grid-inner ${
            props.selectedTile[0] === tile.x &&
            props.selectedTile[1] === tile.y &&
            "selected"
          } ${i % 2 ? "light-green" : "green"} ${props.selectedTile}`}
        ></div>
      ))}
    </>
  );
}
