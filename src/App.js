import Nav from './components/Nav';
import Footer from './components/Footer';
import Bug from './components/Bug';
import Form from './components/Form';
import Gameboard from './components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <main>
        <Gameboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
