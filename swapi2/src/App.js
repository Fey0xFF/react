import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Cardlist from './Cardlist';
import Roll from './Roll';
import Settings from './Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        partySize: 0,
        randVal: 0
    }
  }

  addOne = () => {
    this.setState(({ partySize }) => ({
      partySize: partySize + 1
    }));
    console.log('add');
  }

  minusOne = () => {
    this.setState(({ partySize }) => ({
      partySize: partySize - 1
    }));
    console.log('minus');    
  }

  onRoll = () => {
    this.setState(({ randVal }) => ({
      randVal: Math.floor(Math.random()*87 + 1)
    }))
  }

  render() {
    const { partySize, randVal } = this.state;
    return (
      <div>
        <h1>Party Size</h1>
        <button id="plus" onClick={this.addOne}>+1</button>
        <button id="minus" onClick={this.minusOne}>-1</button>        
        <p>{partySize}</p>
        <button id="roll" onClick={this.onRoll}>Roll</button>
        <div>
          <Cardlist party={partySize} randCharValue={randVal}/>
        </div>
      </div>
    );
  }
}

export default App;
