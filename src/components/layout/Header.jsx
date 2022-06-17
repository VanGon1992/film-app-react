import React from 'react'
import styled from 'styled-components'
import { navigation } from '../../theme'
import { Menu } from '../organisms'

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Header() {
  return (
    <HeaderStyled>
      <Menu navigation={navigation} />
    </HeaderStyled>
  )
}

export default Header
