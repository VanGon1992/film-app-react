import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { InputText, Label } from '../atoms'

const InputTextGroupStyled = styled.div`
  display: flex;

  ${Label} {
    color: ${(props) => props.isError && 'red'};
  }

  ${InputText} {
    border-color: ${(props) => props.isError && 'red'};
  }
`

function InputTextGroup({
  id,
  name,
  placeholder = '',
  value = '',
  defaultValue,
  onChange = () => {},
  label,
  isError = false,
}) {
  return (
    <InputTextGroupStyled isError={isError}>
      <Label id={id} text={label} />
      <InputText
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </InputTextGroupStyled>
  )
}

InputTextGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  isError: PropTypes.bool,
}

export default InputTextGroup
