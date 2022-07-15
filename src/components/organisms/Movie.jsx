import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Title, Card } from '../atoms'
import { colors, fonts, dimensions } from '../../theme'
import Paragraph from '../atoms/Paragraph'

const imgPath = 'https://image.tmdb.org/t/p/w500'

const MovieStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  width: ${dimensions.width2}%;
  background-color: ${colors.secondary};
  font-family: ${fonts.Montserrat};
  border-radius: ${dimensions.borderRadius}rem;
  border: 5px solid ${colors.yellow};
  ${Title} {
    color: ${colors.yellow};
    font-weight: ${dimensions.fontMedium};
    height: 5rem;
    margin: 1rem 0;
  }
  ${Paragraph} {
    color: ${colors.yellow};
    margin-top: 1rem;
  }
`

function Movie({ id, info }) {
  return (
    <MovieStyled>
      <img src={imgPath + info.poster_path} key={id} alt="poster" />
      <div>
        <Title h={3}>{info.title}</Title>
        <Paragraph>{info.vote_average}</Paragraph>
      </div>
    </MovieStyled>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
}

export default Movie
