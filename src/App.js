import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { getHandSignals } from './apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      handSignals: []
    }
  }

  componentDidMount = () => {
    this.apicheck()
  }

  apicheck = () => {
    getHandSignals()
      .then((result) => {
        this.setState({handSignals: result})
    })
    console.log(this.state.handSignals)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
      
        </header>
      </div>
    );
  }
}

export default App;
