import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Title, Card } from '../atoms'
import { colors } from '../../theme'

const imgPath = 'https://image.tmdb.org/t/p/w500'

const MovieStyled = styled(Card)`
  ${Title} {
    color: ${colors.primary};
  }
`

function Movie({ id, info }) {
  return (
    <MovieStyled>
      <img src={imgPath + info.poster_path} key={id} alt="poster" className="imagen" />
      <div>
        <div>
          <Title h={2}>{info.title}</Title>
          <p>{info.vote_average}</p>
        </div>
        <div>
          <Title h={2}>Overview</Title>
          <p>{info.overview}</p>
        </div>
      </div>
    </MovieStyled>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
}

export default Movie
