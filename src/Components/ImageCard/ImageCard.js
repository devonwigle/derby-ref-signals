import React from 'react';
import './ImageCard.scss'

const ImageCard = (props) => {
  return (
    <div data-testid="image-div">
      <img data-testid="image" key={props.id + "-image"} src={props.image} alt={props.name} />
    </div>
  )
}

export default ImageCard

ImageCard.propTypes = {
  props: {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
}