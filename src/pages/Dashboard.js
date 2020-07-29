import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

function Dashboard(props) {
  return (      
    <div>
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <Nav />
      <TodoList/>
      <AddTodo />
    </div>
  )
}

export default Dashboard;