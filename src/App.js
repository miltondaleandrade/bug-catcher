import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Bug from "./components/Bug";
import Form from "./components/Form";
import "./sass/input.scss";
import Gameboard from "./components/Gameboard";
import axios from "axios";
import { useHistory, Route, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { baseURL, config, createEmptyBoard } from "./services";

import BugModal from "./components/BugModal";
import ScreenController from "./components/ScreenController";

function App() {
  const [bugs, setBugs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard());
  const [selectedTile, setSelectedTile] = useState([0, 0]);
  const history = useHistory();
  const location = useLocation();


  //because keyPress is dependant on move, and we want the keypress to 
  //not continue while the location is not equal to the root pathname - 
  //we use "useCallBack" to "memorize" the pathlocation, and if that is 
  //anything but the root path, we do not run the switch statement - 
  //this also stops re-rendering / re-routing of the modal.  
  const move = useCallback( (dir, change) => {
    setSelectedTile((coords) => {
      if (coords[dir] + change > -1 && coords[dir] + change < 4) {
        coords[dir] += change;
      }
      return [...coords];
    });
  }, [])
  const keyPress = useCallback( (e) => {
    
    if(location.pathname !== "/"){
       return;
      }else {
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
  }, [location.pathname, move])
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
      history.push(`/bug/${currentTile.contents}`);
    }
  }, [history, tiles, selectedTile]);

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
        <Nav />
      </header>
      <main>
        <Route exact path="/">
          
          <Gameboard selectedTile={selectedTile} tiles={tiles} />
          <ScreenController keyPress={keyPress}/>
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
