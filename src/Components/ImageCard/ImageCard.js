import React from 'react';
import './ImageCard.scss'

const ImageCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default ImageCard