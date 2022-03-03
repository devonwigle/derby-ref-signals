import React from 'react';
import {Link} from 'react-router-dom';

const ImageCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default ImageCard