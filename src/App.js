import React, { Component } from 'react';
import Btn from './components/Btn';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
        <Btn>7</Btn>
        <Btn>8</Btn>
        <Btn>9</Btn>
        <Btn>/</Btn>
        </div>

      </div>
    </div>
  );
}

export default App;
