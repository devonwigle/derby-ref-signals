import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './HandSignal.scss'
import { getSingleHandSignal } from '../../apiCalls';
import BadUrl from '../BadUrl/BadUrl';

class HandSignal extends Component {
  constructor () {
    super()
    this.state = {
      signal: undefined,
    }
  }
  componentDidMount() {
    getSingleHandSignal(this.props.id)
      .then((data) => {
        this.setState({ signal: data })
      })
  }

  render() {
    console.log(this.state.signal)
    if (!this.state.signal) {
      return <BadUrl />
    }
    return (
      <div key={this.state.signal.id + "single"}>
        <h2 data-testid="chosen-title" className='chosen-title'>{`${this.state.signal.name}`}</h2>
        <img data-testid="chosen-image" src={`${this.state.signal.image} alt=${this.state.signal.name}`} />
        <p data-testid="use-title" className='chosen-title'>Use:</p>
        <p data-testid="use-description" className='chosen-description'>{`${this.state.signal.use}`}</p>
        <p data-testid="motion-title" className='chosen-title'>Motion:</p>
        <p data-testid="motion-description" className='chosen-description'>{`${this.state.signal.motion}`}</p>
        <Link to={{pathname: "https://rules.wftda.com/"}}>See rules</Link>
        <Link to={'/'}><h2 onClick={(event) => this.props.clearFilter(event)} className='link-to-all'>Back to All Referee Signals</h2></Link>
      </div>
    )
  }
}

export default HandSignal;

HandSignal.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  use: PropTypes.string,
  image: PropTypes.string,
  motion: PropTypes.string,
  clearFilter: PropTypes.func
}