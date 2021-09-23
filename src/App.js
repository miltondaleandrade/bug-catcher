import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Bug from "./components/Bug";
import Form from "./components/Form";
import "./sass/input.scss";
import Gameboard from "./components/Gameboard";
// import "./App.css";
import axios from "axios";
import { useHistory, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config, createEmptyBoard } from "./services";

import BugModal from "./components/BugModal";

function App() {
  const [bugs, setBugs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard());
  const [selectedTile, setSelectedTile] = useState([0, 0]);
  const history = useHistory();

  useEffect(() => {
    const move = (dir, change) => {
      setSelectedTile((coords) => {
        console.log(coords);
        if (coords[dir] + change > -1 && coords[dir] + change < 4) {
          coords[dir] += change;
        }
        return [...coords];
      });
    };
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
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []);
  useEffect(() => {
    const newTiles = createEmptyBoard();
    //for each bug
    bugs.forEach((bug) => {
      let randoTile = newTiles[Math.floor(Math.random() * newTiles.length)];
      while (
        (randoTile.x === 0 && randoTile.y === 0) ||
        randoTile.contents != null
      ) {
        randoTile = newTiles[Math.floor(Math.random() * newTiles.length)];
      }
      randoTile.contents = bug.id;
    });
    setTiles(newTiles);
  }, [bugs]);
  useEffect(() => {
    const [y, x] = selectedTile;
    const currentTile = tiles.find((tile) => tile.y === y && tile.x === x);

    if (currentTile.contents != null) {
      history.push(`/bug/${currentTile.contents}`);
    }
  }, [history, tiles, selectedTile]);

  useEffect(() => {
    const getBugs = async () => {
      const response = await axios.get(baseURL, config);
      setBugs(response.data.records);
      console.log(response.data.records);
    };
    getBugs();
  }, [toggleFetch]);

  return (
    <div id="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/">
          <Gameboard selectedTile={selectedTile} tiles={tiles} />
        </Route>
        <Route path="/bugs">
          {bugs.map((bug) => (
            <Bug key={bug.id} bug={bug} />
          ))}
        </Route>
        <Route path="/new-bug">
          <Form />
        </Route>
        <Route path="/bug/:id">
          <BugModal bugs={bugs} setToggleFetch={setToggleFetch} />
        </Route>

      </main>
      <Footer />
    </div>
  );
}

export default App;
