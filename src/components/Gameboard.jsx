import { useEffect, useState } from "react";
import Tile from "./Tile";

export default function Gameboard(props) {
  
  return (
    <div className={"grid-board"}>
        <Tile />
    </div>
  );
}
