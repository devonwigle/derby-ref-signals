import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './HandSignal.scss'

const HandSignal = (props) => {
  return (
    <div key={props.id + "single"}>
      <h2 data-testid="chosen-title" className='chosen-title'>{`${props.chosenSignal[0].name}`}</h2>
      <img data-testid="chosen-image" src={`${props.chosenSignal[0].image} alt=${props.chosenSignal[0].name}`} />
      <p data-testid="use-title" className='chosen-title'>Use:</p>
      <p data-testid="use-description" className='chosen-description'>{`${props.chosenSignal[0].use}`}</p>
      <p data-testid="motion-title" className='chosen-title'>Motion:</p>
      <p data-testid="motion-description" className='chosen-description'>{`${props.chosenSignal[0].motion}`}</p>
      <Link to={'/'}><h2 onClick={(event) => props.clearFilter(event)} className='link-to-all'>Back to All Referee Signals</h2></Link>
    </div>
  )
}

export default HandSignal;

HandSignal.propTypes = {
  props:  {
    chosenSignal: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
  }
}