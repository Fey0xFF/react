import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Roll from './Roll';
import Settings from './Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        partySize: 0
    }
  }

  addOne = () => {
    this.setState(({ partySize }) => ({
      partySize: partySize + 1
    }));
    console.log('hello');
  }

  minusOne() {
    console.log('bye');
  }

  render() {
    const { partySize } = this.state;
    return (
      <div>
        <h1>Party Size</h1>
        <button id="plus" onClick={this.addOne}>+1</button>
        <button id="minus" onClick={this.minusOne}>-1</button>        
        <p>{partySize}</p>
        <Roll />
        <div>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
