import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { getAllHandSignals } from './apiCalls';
import './App.scss';
import AllSignals from './Components/AllSignals/AllSignals.js'
import HandSignal from './Components/HandSignal/HandSignal.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      refereeSignals: []
    }
  }

  componentDidMount = () => {
    getAllHandSignals()
      .then(data => this.setState({refereeSignals: data}))
  }

  selectSignal = (id) => {
    this.state.refereeSignals.find(refereeSignal => refereeSignal.id === id)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <AllSignals signals={this.state.refereeSignals} onSignalClick={() => this.selectSignal()}/>
            </Route>
            <Route exact path="/handSignals/:id" >
              <HandSignal />
            </Route>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
