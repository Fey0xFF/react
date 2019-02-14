import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
// import Card from '../components/Card';
import Cardlist from '../components/Cardlist';
import Settings from '../components/Settings';
import PartyGenerate from '../components/PartyGenerate';

class App extends Component {
  constructor() {
    super()
    this.state = {
      character: '',
      size: 1,
      teamList: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(char => this.setState({ teamList: char }));
  }

  onSearchChange = (e) => {
    let partySizeN = e.target.value;
    if (partySizeN > 5) {
      this.setState({ size: 5 })
    } else if (partySizeN < 1) {
      this.setState({ size: 1 })
    } else {
      this.setState({ size: partySizeN })
    }
  }


  render() {
    const { character, size, teamList } = this.state;
    const currentChar = teamList.name;
    // console.log(currentChar);
    return (
      <div>
        <Settings partySize={this.onSearchChange}/>
        <PartyGenerate generateParty={this.onGenerateParty}/>
        <Cardlist currentChar={currentChar} size={size}/>
      </div>
    );
  }
}

export default App;
