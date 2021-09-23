import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Bug from "./components/Bug";
import Form from "./components/Form";
import "./sass/input.scss";
import Gameboard from "./components/Gameboard";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import BugModal from "./components/BugModal";

function App() {
  const [bugs, setBugs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getBugs = async () => {
      const response = await axios.get(baseURL, config);
      setBugs(response.data.records);
      console.log(response.data.records);
    };
    getBugs();
    console.log(bugs);
  }, [toggleFetch]);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Route exact path="/">
        <main>
          <Gameboard bugs={bugs} />
        </main>
      </Route>
      <Route path="/bugs">
        {bugs.map((bug) => (
          <Bug key={bug.id} bug={bug} />
        ))}
      </Route>
      <Route path="/new-bug">
        <Form />
      </Route>
      <Route path="/bug:id">
        {bugs.map((bug) => (
          <BugModal bug={bug} setToggleFetch={setToggleFetch}/>
        ))}
        
      </Route>
      <Route>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
