import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save the world.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>Welcome to my app</h1>
      <MyButton />

    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    // <button>I'm a button, Add one.</button>
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}





export default App;


