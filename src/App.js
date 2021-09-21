import Nav from './components/Nav';
import Footer from './components/Footer';
import Bug from './components/Bug';
import Form from './components/Form';
import Gameboard from './components/Gameboard';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseURL, config } from './services';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const getBugs = async () => {
      const response = await axios.get(baseURL, config);
      setBugs(response.data.records)
      console.log(response.data.records);
    }
    getBugs();
    console.log(bugs)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <Route exact path="/">
      <main>
        <Gameboard />
      </main>
      </Route>
      <Route path="/bugs">
        {bugs.map((bug) => (
          <Bug key={bug.id} bug={bug}/>
          
        ))}
      </Route>
      <Route>
      <Footer />
      </Route>
    </div>
  );
}

export default App;
