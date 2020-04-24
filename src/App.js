import React, { Component } from 'react';
import Btn from './components/Btn';
import Input from './components/Input';
import ClearBtn from './components/ClearBtn';
import * as math from 'mathjs';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
  };

  addToInput = val => {
    this.setState({ input: this.state.input + val});
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".")) {
      this.setState({ input: this.state.input + val })
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) })
  };

  handleNegative = val => {
    if (this.state.input > 0) {
      this.setState({ input: this.state.input + math.evaluate(val * -1)
      })
    }
  }
  
  
  render() {
    return (
        <div className="app">
          <div className="calc-wrapper">
            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            <div className="row" style={{marginTop: '10px'}}>
              <ClearBtn handleClear={this.clearInput} >WIPE CLEAN</ClearBtn>
              {/* <Btn handleClick={this.handleNegative} >-/+</Btn>
              <Btn handleClick={this.addToInput} >%</Btn> */}
            </div>
            <div className="row" style={{marginTop: '5px'}}>
              <Btn handleClick={this.addToInput} >7</Btn>
              <Btn handleClick={this.addToInput} >8</Btn>
              <Btn handleClick={this.addToInput} >9</Btn>
              <Btn handleClick={this.addToInput} >/</Btn>d
            </div>
            <div className="row">
              <Btn handleClick={this.addToInput} >4</Btn>
              <Btn handleClick={this.addToInput} >5</Btn>
              <Btn handleClick={this.addToInput} >6</Btn>
              <Btn handleClick={this.addToInput} >*</Btn>
            </div>
            <div className="row">
              <Btn handleClick={this.addToInput} >1</Btn>
              <Btn handleClick={this.addToInput} >2</Btn>
              <Btn handleClick={this.addToInput} >3</Btn>
              <Btn handleClick={this.addToInput} >+</Btn>
            </div>
            <div className="row">
              <Btn handleClick={this.addDecimal} >.</Btn>
              <Btn handleClick={this.addZeroToInput} >0</Btn>
              <Btn handleClick={this.handleEqual} >=</Btn>
              <Btn handleClick={this.addToInput} >-</Btn>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
