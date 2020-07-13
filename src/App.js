import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import CreateNote from './components/CreatNote'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <Nav />
        <TodoList/>
        <CreateNote />
      </div>
    );
  }
}

export default App;
