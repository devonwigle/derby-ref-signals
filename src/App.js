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
      refereeSignals: [],
    }
  }

  componentDidMount = () => {
    getAllHandSignals()
      .then(data => this.setState({refereeSignals: data}))
  }

  selectSignal = (id) => {
    let chosenSignal = this.state.refereeSignals.find(refereeSignal => refereeSignal.id === id)
    if (chosenSignal !== undefined) {
      return [
        {
          id: chosenSignal.id,
          name: chosenSignal.name,
          use: chosenSignal.use,
          motion: chosenSignal.motion,
          image: chosenSignal.image
        }
      ]
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <AllSignals signals={this.state.refereeSignals} onSignalClick={() => this.selectSignal()}/>
            </Route>
            <Route exact path="/handSignals/:id" render={(props) => {
              const chosenSignal = this.selectSignal(props.match.params.id);
              return <HandSignal chosenSignal={chosenSignal}/>;
            }}
            />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
