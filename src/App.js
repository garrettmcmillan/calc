import React, { Component } from 'react';
import Btn from './components/Btn';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="row">
            <Btn>7</Btn>
            <Btn>8</Btn>
            <Btn>9</Btn>
            <Btn>/</Btn>
          </div>
          <div className="row">
            <Btn>4</Btn>
            <Btn>5</Btn>
            <Btn>6</Btn>
            <Btn>*</Btn>
          </div>
          <div className="row">
            <Btn>1</Btn>
            <Btn>2</Btn>
            <Btn>3</Btn>
            <Btn>+</Btn>
          </div>
          <div className="row">
            <Btn>.</Btn>
            <Btn>0</Btn>
            <Btn>=</Btn>
            <Btn>-</Btn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
