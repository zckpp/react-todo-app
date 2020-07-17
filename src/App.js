import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <Nav />
        <TodoList/>
        <AddTodo />
      </div>
    );
  }
}

export default App;
