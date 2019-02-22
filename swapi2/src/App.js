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

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  } 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { partySize, randParty} = this.state;
    return (
      <div id="main" className='tc'>
        <p className="starText starYellow f1 dim">Star Wars Party Generator</p>
        <button className="f3 grow mh2 ba bw2 dib black" id="plus" onClick={this.addOne}>+</button>
        <button className="f3 grow mh2 ba bw2 dib black" id="minus" onClick={this.minusOne}>-</button>        
        <p className="starText starYellow f2">Party Size: {partySize}</p>
        <button className="starText f3 grow no-underline ba bw2 ph3 pv2 mb2 dib black " id="roll" onClick={this.onRoll}>Use The Force</button>
        <Cardlist className="starText" partyArray={randParty}/>
      </div>
    );
  }
}

export default App;
