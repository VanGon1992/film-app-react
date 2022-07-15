import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors, fonts } from '../../theme'
import LogoFilmer from '../../assets/img/Logo-Filmer-01.png'

const MenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15rem, 5rem;
  width: 100%;
  background-color: ${colors.secondary};
  height: 8rem;
  .logo-filmer {
    width: 12rem;
    height: auto;
    margin: 0;
    margin-left: 7rem;
  }
  ul {
    display: flex;
    list-style: none;
    color: white;
    text-decoration: none;
    margin-right: 3rem;
    .link-nav {
      margin-right: 4rem;
      text-decoration: none;
      color: ${colors.primary};
      font-size: 0.9rem;
      font-family: ${fonts.Montserrat};
    }
  }
`

function Menu({ navigation }) {
  return (
    <MenuStyled>
      <div>
        <img alt="logoFilmer" src={LogoFilmer} className="logo-filmer" />
      </div>
      <ul>
        {navigation.map((n) => (
          <li key={n.path}>
            <Link className="link-nav" to={n.path}>
              {n.label}
            </Link>
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
