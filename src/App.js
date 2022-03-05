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

  clearFilter = () => {
    this.setState({ penaltyFilter: false })
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
      <div>
        <header>Referee Hand Signals</header>
        <body className="App">
          <Switch>
            <Route exact path="/">
              {this.ifChecked()}
            </Route>
            <Route exact path="/handSignals/:id" render={(props) => {
              const chosenSignal = this.selectSignal(props.match.params.id);
              return <HandSignal chosenSignal={chosenSignal} clearFilter={this.clearFilter}/>;
            }}
            />
          </Switch>
        </body>
      </div>
    );
  }
}

export default App;
