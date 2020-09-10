import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction'
import TestExample from './components/TestExemple'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>Crypto Portfolio Manager</h1>
      <Transaction name='test'/>
      <TestExample/>
    </div>
  );
}

export default App;
