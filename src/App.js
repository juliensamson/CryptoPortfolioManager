import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction'

function App() {

  return (
    <div className="App">
      <h1>Crypto Portfolio Manager</h1>
      <Transaction/>
    </div>
  );
}

export default App;
