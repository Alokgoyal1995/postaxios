import React, { Component } from 'react';
import './App.css';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import Data from './Components/Data';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Data />
        {/* <PersonInput /> */}
        {/* <PersonList /> */}
      </div>
    );
  }
}

export default App;
