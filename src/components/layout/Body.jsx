import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

function Body({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Body
