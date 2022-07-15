import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import { colors } from '../../theme'

const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightGray};
`

function Body({ children }) {
  return (
    <BodyStyled>
      <Header />
      {children}
      {/* Porque se pone children? no valdria simplemente con poner el Header? */}
      <Footer />
    </BodyStyled>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Body
