import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {Link} from 'react-router-dom'
import './AllSignals.scss'

const AllSignals = (props) => {
  const signalCards = props.signals.map(signal => {
    return (
      <Link to={`/handSignals/${signal.id}`} data-testid='link' key={signal.id + "-link"}>
        <div data-testid='card' className='image-card'>
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
    <div data-testid='signals-container' className='signals-container'>
      <label>Penalties Only
        <input data-testid="checkbox" type="checkbox" name="penaltiesOnly" onChange={props.onCheckboxClick}></input>
      </label>
      <section data-testid='card-holder'  className='card-holder'>
      {signalCards}
      </section>
    </div>
  )
}

export default AllSignals