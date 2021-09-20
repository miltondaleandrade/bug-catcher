import Nav from './components/pageComponents/Nav';
import Footer from './components/pageComponents/Footer';
import Header from './components/pageComponents/Header';
import Bug from './components/Bug';
import Form from './components/Form';
import Gameboard from './components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
    </div>
  );
}

export default App;
