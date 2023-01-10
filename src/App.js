import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="code" />
        <footer className="App-footer">
          <small>Coded by <a href="https://tatyana-araya-webpage.netlify.app/" target="_blank" rel="noreferrer">Tatyana Araya</a> 👩🏽‍💻 and is open-sourced on <a href="https://github.com/taty1202/dictionary-project" target="_blank" rel="noreferrer">Github</a></small>
        </footer>
      </div>
    </div>
  );
}

