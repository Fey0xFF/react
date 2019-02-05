import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Card from '../components/Card';

class App extends Component {
  constructor() {
    super()
    this.state = {
      character: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(name => this.setState({ character: name }));
  }

  render() {
    const { character } = this.state;
    const currentChar = character.name;
    return (
      <Card character={currentChar}/>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
