import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {Link} from 'react-router-dom'
import './AllSignals.scss'

const AllSignals = (props) => {
  const signalCards = props.signals.map(signal => {
    return (
      <Link to={`/handSignals/${signal.id}`}>
        <div className='image-card'>
        <ImageCard
          key={signal.id}
          id={signal.id}
          name={signal.name}
          use={signal.use}
          image={signal.image}
        />  
        </div>
      </Link>
    )
  })

  return (
    <div className='signals-container'>
      <label>Penalties Only
      <input type="checkbox" name="penaltiesOnly" onChange={props.onCheckboxClick}></input>
      </label>
      <section className='card-holder'>
      {signalCards}
      </section>
    </div>
  )
}

export default AllSignals