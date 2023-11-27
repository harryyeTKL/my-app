import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterSizeGenerator from './components/CounterSizeGenerator';
import CounterGroup from './components/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CounterSizeGenerator />
        <CounterGroup><Counter /></CounterGroup>
      </header>
    </div>
  );
}

export default App;
