import React from 'react'
import '../CSS/BadUrl.scss'

const BadUrl = () => {
  return (
    <div>
      <h2 className="bad-url-error">Trouble processing your request. </h2>
      <Link to={'/'}><h2 onClick={(event) => props.clearFilter(event)} className='link-to-all'>To All Referee Signals</h2></Link>
    </div>
  )
}

export default BadUrl