import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {    
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <Nav />
        <List />
      </div>
    );
  }
}

export default App;
