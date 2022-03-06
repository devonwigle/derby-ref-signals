import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './BadUrl.scss'

const BadUrl = (props) => {
  return (
    <div>
      <h2 data-testid="bad-url-title" className="bad-url-error">Trouble processing your request. </h2>
      <Link data-testid="bad-url-home-link" to={'/'}><h2 onClick={(event) => props.clearFilter(event)} className='link-to-all'>Go To All Referee Signals</h2></Link>
    </div>
  )
}

export default BadUrl

BadUrl.propTypes = {
  clearFilter: PropTypes.func
}