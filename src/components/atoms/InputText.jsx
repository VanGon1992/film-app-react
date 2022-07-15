import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputStyled = styled.input``

function InputText({ id, name, placeholder = '', value = '', defaultValue, onChange = () => {} }) {
  return (
    <InputStyled
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}

export default styled(InputText)``
