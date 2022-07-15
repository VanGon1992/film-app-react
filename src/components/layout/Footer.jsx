import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../theme'
import iconInsta from '../../assets/icons/Logo-insta.png'
import iconFace from '../../assets/icons/Logo-face.png'
import iconTwitter from '../../assets/icons/Logo-twiter.png'

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  background-color: ${colors.secondary};
  p {
    color: white;
    font-size: 0.9rem;
    font-family: ${fonts.Montserrat};
    margin-left: 7rem;
  }
  .social-icons {
    margin-right: 5rem;
    img {
      width: 2rem;
      height: auto;
      margin-right: 2rem;
    }
  }
`

function Footer() {
  return (
    <FooterStyled>
      <p className="copyright">All rights reserved 2022 &copy;</p>
      <div className="social-icons">
        <img src={iconInsta} alt="iconInsta" href="#" />
        <img src={iconFace} alt="iconInsta" href="#" />
        <img src={iconTwitter} alt="iconInsta" href="#" />
      </div>
    </FooterStyled>
  )
}

export default Footer
