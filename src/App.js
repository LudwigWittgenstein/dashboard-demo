import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    };

  }

render(){
  return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
