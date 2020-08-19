import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name="Karsten" age="43">Hobby: Badminton</Person>
        <Person name="Kristina" age="40"/>
        <Person name="Frida" age="4">Hobby: Malen</Person>
      </header>
    </div>
  );
}

export default App;
