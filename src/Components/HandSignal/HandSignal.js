import React from 'react'
import {Link} from 'react-router-dom'
import './HandSignal.scss'

const HandSignal = (props) => {
  console.log(props.chosenSignal[0].name)
  return (
    <div>
      <h2 className='chosen-title'>{`${props.chosenSignal[0].name}`}</h2>
      <img src={`${props.chosenSignal[0].image} alt=${props.chosenSignal[0].name}`} />
      <p className='chosen-title'>Use:</p>
      <p>{`${props.chosenSignal[0].use}`}</p>
      <p className='chosen-title'>Motion:</p>
      <p>{`${props.chosenSignal[0].motion}`}</p>
      <Link to={'/'}><h2 className='link-to-all'>Back to All Referee Signals</h2></Link>
    </div>
  )
}

export default HandSignal