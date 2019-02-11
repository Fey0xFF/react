import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Roll from './Roll';
import Settings from './Settings';

class App extends Component {
  

  render() {
    return (
      <div>
        <Settings />
        <Roll />
        <div>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
