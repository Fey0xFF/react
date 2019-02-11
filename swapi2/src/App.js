import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Roll from './Roll';

class App extends Component {
  

  render() {
    return (
      <div>
        <Roll />
        <Card />
      </div>
    );
  }
}

export default App;
