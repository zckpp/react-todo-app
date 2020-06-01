import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import NoteList from './NoteList';
import CreateNote from './CreatNote'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      listItems: []
    };
  }

  handleTitleUpdate = (title, nid) => {
    console.log('update ' + title + ' for ' + nid);
  }

  handleBodyUpdate = (body, nid) => {
    console.log('update ' + body + ' for ' + nid);
  }

  componentDidMount() {
    fetch("/list.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            listItems: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
          console.log(this.state);
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <Nav />
        <NoteList listData={this.state.listItems} handleTitleUpdate={this.handleTitleUpdate} handleBodyUpdate={this.handleBodyUpdate} />
        <CreateNote />
      </div>
    );
  }
}

export default App;
