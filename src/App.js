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
      penaltyFilter: false,
      filteredSignals: [],
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

  filterSignals = () => {
    this.setState({penaltyFilter: !this.state.penaltyFilter})
    const filteredSignals = this.state.refereeSignals.filter(signal => signal.use.includes('penalty assessment'))
    this.setState({filteredSignals: filteredSignals})
    console.log(this.state)
  }

  ifChecked = () => {
    if (!this.state.penaltyFilter) {
        return <AllSignals signals={this.state.refereeSignals} onSignalClick={this.selectSignal} onCheckboxClick={this.filterSignals} />
      } else {
        return <AllSignals signals={this.state.filteredSignals} onSignalClick={this.selectSignal} onCheckboxClick={this.filterSignals}/>
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              {this.ifChecked()}
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
