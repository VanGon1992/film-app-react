import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 0.5rem;
    }
  }
`

function Menu({ navigation }) {
  return (
    <MenuStyled>
      <ul>
        {navigation.map((n) => (
          <li key={n.path}>
            <Link to={n.path}>{n.label}</Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  )
}

Menu.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default Menu
