export default function Tile(props) {
  //if found tile contents not null
  //redirect use to bug modal with matching id use bug id interpolated
  //if()

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

//get bugs
//populate game board
//
