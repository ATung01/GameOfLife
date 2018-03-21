import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid'

class App extends Component {

  state = {
    generation : 0,
    rows: 30,
    columns: 30
  }

  render() {
    return (
      <div className="App">
        <h1> The Game of Life </h1>
        <Grid
        rows = {this.state.rows}
        columns = {this.state.columns}/>
        <h2>Generations: {this.state.generation} </h2>
      </div>
    );
  }
}

export default App;
