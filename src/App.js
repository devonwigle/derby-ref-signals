import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import { getHandSignals } from './apiCalls';
import './App.scss';
import AllSignals from './Components/AllSignals/AllSignals.js'
import HandSignal from './Components/HandSignal/HandSignal.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      handSignals: []
    }
  }

  // componentDidMount = () => {
  //   this.apicheck()
  // }

  // apicheck = () => {
  //   getHandSignals()
  //     .then((result) => {
  //       this.setState({handSignals: result})
  //   })
  //   console.log(this.state.handSignals)
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <AllSignals />
            </Route>
            <Route exact path="/handSignals/:id">
              <HandSignal />
            </Route>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
