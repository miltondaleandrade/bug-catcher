import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Bug from "./components/Bug";
import Form from "./components/Form";
import Button from "./components/Button";
import "./sass/input.scss";
import Gameboard from "./components/Gameboard";
import axios from "axios";
import { useHistory, Route, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { baseURL, config, createEmptyBoard } from "./services";

import BugModal from "./components/BugModal";
import ScreenController from "./components/ScreenController";
import CloseButton from "./components/CloseButton";

function App() {
  const [bugs, setBugs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard());
  const [selectedTile, setSelectedTile] = useState([0, 0]);
  const history = useHistory();
  const location = useLocation();
  const [caughtBugs, setCaughtBugs] = useState([]);
  const isNull = (currentTile) => currentTile.contents === null;

  //because keyPress is dependant on move, and we want the keypress to
  //not continue while the location is not equal to the root pathname -
  //we use "useCallBack" to "memorize" the pathlocation, and if that is
  //anything but the root path, we do not run the switch statement -
  //this also stops re-rendering / re-routing of the modal.
  const move = useCallback((dir, change) => {
    setSelectedTile((coords) => {
      if (coords[dir] + change > -1 && coords[dir] + change < 4) {
        coords[dir] += change;
      }
      return [...coords];
    });
  }, []);
  const keyPress = useCallback(
    (e) => {
      if (location.pathname !== "/") {
        return;
      }else if(caughtBugs.length === 5 && location.pathname === "/"){
        history.push("/bugs");
        return;
      } else {
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
      }
    },
    [location.pathname, move, history, caughtBugs]
  );
  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [keyPress, move, setSelectedTile]);
  useEffect(() => {
    const newTiles = createEmptyBoard();
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
      caughtBugs.push(currentTile.contents);
      history.push(`/bug/${currentTile.contents}`);
    }
    for (let i = 0; i < caughtBugs.length; i++) {
      if (caughtBugs[i] === currentTile.contents) {
        currentTile.contents = null;
      }
    }
  }, [history, tiles, selectedTile, caughtBugs]);

  useEffect(() => {});
  useEffect(() => {
    const getBugs = async () => {
      const response = await axios.get(baseURL, config);
      setBugs(response.data.records);
    };
    getBugs();
  }, [toggleFetch]);

  return (
    <div id="App">
      <header>
        <Nav caughtBugs={caughtBugs} />
      </header>
      <main>
        <Route exact path="/">
          <Button tiles={tiles} caughtBugs={caughtBugs} isNull={isNull} />
          <Gameboard
            selectedTile={selectedTile}
            tiles={tiles}
            isNull={isNull}
            caughtBugs={caughtBugs}
          />
          <ScreenController keyPress={keyPress} />
        </Route>
        <Route path="/bugs">
          <CloseButton />
          {bugs.map((bug) => (
            <Bug
              key={bug.id}
              bug={bug}
              caughtBugs={caughtBugs}
              tiles={tiles.contents}
            />
          ))}
        </Route>
        <Route path="/new-bug">
          <Form />
        </Route>
        <Route path="/bug/:id">
          <CloseButton />
          <BugModal bugs={bugs} setToggleFetch={setToggleFetch} />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
