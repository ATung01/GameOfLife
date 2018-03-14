import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid'

class App extends Component {

  state = {
    generation : 0
  }

  render() {
    return (
      <div className="App">
        <Grid/>
      </div>
    );
  }
}

export default App;
