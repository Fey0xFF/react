import React, { Component } from 'react';
import './App.css';
import Cardlist from './Cardlist';

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
    const { partySize, randParty} = this.state;
    return (
      <div className='tc'>
        <h1>Star Wars Party Generator</h1>
        <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black" id="plus" onClick={this.addOne}>+1</button>
        <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black" id="minus" onClick={this.minusOne}>-1</button>        
        <p>Party Size: {partySize}</p>
        <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black" id="roll" onClick={this.onRoll}>Use The Force</button>
        <Cardlist partyArray={randParty}/>
      </div>
    );
  }
}

export default App;
