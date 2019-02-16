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
        randVal: 0,
        randParty: [],
        randNumArray: [],
        randNum: 0,
        times: 0
    }
  }

  addOne = () => {
    this.setState(({ partySize }) => ({
      partySize: partySize + 1
    }));
  }

  minusOne = () => {
    this.setState(({ partySize }) => ({
      partySize: partySize - 1
    }));  
  }

  genRand = () => {
    return Math.floor(Math.random()*87 + 1)
  }

  generateTeam = (size, randNumArray) => {
    let workingArray = [];
    for (let i = 0; i < size; i++) {
      fetch(`https://swapi.co/api/people/${randNumArray[i]}`)
        .then(response => response.json())
        .then(char => workingArray[i] = char)
    }
    this.setState({ randParty: workingArray })
  }

  onRoll = (randNumArray, partySize, randParty) => {
    let times = 0;
    let timesToRun = this.state.partySize
    randNumArray = [];

    while (times < timesToRun) {
      console.log('running')
      while(true) {
        let newRand = this.genRand()
        if (randNumArray.includes(newRand) || newRand === 17) {
          console.log("duplicate")
        } else {
          randNumArray[times] = newRand
          break;
        }
      }
      times++;
    }

    this.generateTeam(timesToRun, randNumArray);
  }

  render() {
    const { partySize, randVal, randParty, randNumArray } = this.state;
    return (
      <div>
        <h1>Party Size</h1>
        <button id="plus" onClick={this.addOne}>+1</button>
        <button id="minus" onClick={this.minusOne}>-1</button>        
        <p>{partySize}</p>
        <button id="roll" onClick={this.onRoll}>Roll</button>
        <Cardlist party={partySize} partyArray={randParty} randPartyNums={randNumArray}/>
      </div>
    );
  }
}

export default App;
