import React from 'react'
import {Link} from 'react-router-dom'
import './HandSignal.scss'

const HandSignal = (props) => {
  console.log(props.chosenSignal[0].name)
  return (
    <div>
      <Link to={'/'}><h2>All Ref Signals</h2></Link>
      <h2>{`${props.chosenSignal[0].name}`}</h2>
      <img src={`${props.chosenSignal[0].image} alt=${props.chosenSignal[0].name}`} />
      <p>{`${props.chosenSignal[0].use}`}</p>
      <p>{`${props.chosenSignal[0].motion}`}</p>
    </div>
  )
}

export default HandSignal