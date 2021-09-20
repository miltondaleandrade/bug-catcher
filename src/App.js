import Logo from "./assets/logo.svg" 
import Github from "./assets/github.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <nav>
          <img id="logo" src={Logo} alt="Bug-Catcher Logo" />
        </nav>
      </header>
      <main></main>
      <footer>
        &copy; Ben Lowry 2021
        <img id="github" src={Github} alt="Github logo" />
      </footer>
    </div>
  );
}

export default App;
