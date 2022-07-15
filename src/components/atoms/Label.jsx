import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LabelStyled = styled.label``

function Label({ id, text }) {
  return <LabelStyled htmlFor={id}>{text}</LabelStyled>
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default styled(Label)``
