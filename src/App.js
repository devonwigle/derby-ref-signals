import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { getAllHandSignals } from "./apiCalls";
import "./App.scss";
import AllSignals from "./Components/AllSignals/AllSignals.js"
import HandSignal from "./Components/HandSignal/HandSignal.js"
import BadUrl from "./Components/BadUrl/BadUrl.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      refereeSignals: [],
      penaltyFilter: false,
      filteredSignals: [],
      error: "",
      isChecked: false
    }
  }

  componentDidMount = () => {
    getAllHandSignals()
      .then(data => {
        this.setState({refereeSignals: data})
      })
      .catch(error => this.setState({error: error.message}))
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
    this.setState({isChecked: !this.state.isChecked})
  }

  filterSignals = () => {
    this.setState({ isChecked: !this.state.isChecked })
    this.setState({penaltyFilter: !this.state.penaltyFilter})
    const filteredSignals = this.state.refereeSignals.filter(signal => signal.use.includes("penalty assessment"))
    this.setState({ filteredSignals: filteredSignals })
  }

  ifChecked = () => {
    if (!this.state.penaltyFilter) {
      return <AllSignals key={Date.now() + "-AllSignals"} filter={this.state.penaltyFilter} signals={this.state.refereeSignals} onSignalClick={this.selectSignal} onCheckboxClick={this.filterSignals} isChecked={this.state.isChecked}/>
      } else {
      return <AllSignals key={Date.now() + "-allsignals"} signals={this.state.filteredSignals} onSignalClick={this.selectSignal} onCheckboxClick={this.filterSignals} isChecked={this.state.isChecked}/>
    }
  }

  render() {

    return (
      <div>
        <header data-testid="title">Referee Hand Signals</header>
        <section className="App">
          <Switch>
            <Route exact path="/">
              {this.ifChecked()}
            </Route>
            <Route exact path="/handSignals/:id" render={({match}) => {
              const chosenSignal = this.selectSignal(match.params.id);
              return <HandSignal id={match.params.id} chosenSignal={chosenSignal} clearFilter={this.clearFilter}/>;
            }}
            />
            <Route render={() => <BadUrl clearFilter={this.clearFilter}/>} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
