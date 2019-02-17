import React, { Component } from 'react';
import './App.css';
import NewsList from './components/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsList/>
      </div>
    );
  }
}

export default App;
