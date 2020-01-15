import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Default Backend </h1>
          Requested URI
          <h2> {window.location.href} </h2>
        </p>
      </header>
    </div>
  );
}

export default App;
