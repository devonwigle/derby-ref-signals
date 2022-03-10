import React from "react"
import ImageCard from "../ImageCard/ImageCard"
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./AllSignals.scss"

const AllSignals = (props) => {
  const signalCards = props.signals.map(signal => {
    return (
      <Link to={`/handSignals/${signal.id}`} data-testid="link" key={signal.id + "-link"}>
        <div data-testid="card" className="image-card">
        <ImageCard
          key={signal.id}
          id={signal.id}
          name={signal.name}
          motion={signal.motion}
          use={signal.use}
          rule={signal.rule}
          image={signal.image}
        />  
        </div>
      </Link>
    )
  })

  return (
    <div data-testid="signals-container" className="signals-container">
      <label>Penalties Only
        <input data-testid="checkbox" type="checkbox" name="penaltiesOnly" onChange={props.onCheckboxClick} checked={props.isChecked}/>
      </label>
      <section data-testid="card-holder"  className="card-holder">
      {signalCards}
      </section>
    </div>
  )
}

export default AllSignals

AllSignals.propTypes = {
  signals: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSignalClick: PropTypes.func.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
}