import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import List from './List';

const listItems = [
  {
    nid: 201,
    title: "My stuff to do",
    date: "September 14, 2020",
    body: "I need to do some stuff."
  },
  {
    nid: 202,
    title: "My stuff to do # 2",
    date: "August 14, 2020",
    body: "Some stuff to do."
  }
];

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleTitleUpdate = (title, nid) => {
    console.log('update ' + title + ' for ' + nid);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <Nav />
        <List listData={listItems} handleTitleUpdate={this.handleTitleUpdate} />
      </div>
    );
  }
}

export default App;
