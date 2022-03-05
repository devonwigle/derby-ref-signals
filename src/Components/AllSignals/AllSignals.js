import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {Link} from 'react-router-dom'
import './AllSignals.scss'

const AllSignals = (props) => {
  const signalCards = props.signals.map(signal => {
    return (
      <Link to={`/handSignals/${signal.id}`}>
        <ImageCard
          key={signal.id}
          id={signal.id}
          name={signal.name}
          use={signal.use}
          image={signal.image}
        />  
      </Link>
    )
  })

  return (
    <div>
      <h2>Referee Hand Signals</h2>
      <label>Penalties Only
      <input type="checkbox" name="penaltiesOnly" onChange={props.onCheckboxClick}></input>
      </label>
      {signalCards}
    </div>
  )
}

export default AllSignals