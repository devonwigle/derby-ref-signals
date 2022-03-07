import React from "react";
import PropTypes from "prop-types";
import "./ImageCard.scss"

const ImageCard = (props) => {
  return (
    <div data-testid="image-div">
      <img data-testid="image" key={props.id + "-image"} src={props.image} alt={props.name} />
    </div>
  )
}

export default ImageCard

ImageCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}