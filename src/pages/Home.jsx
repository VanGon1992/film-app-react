import qs from 'qs'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout'
import { Movie } from '../components/organisms'
import MoviesGrid from '../components/organisms/MoviesGrid'

const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`

const apiKey = '&api_key=28fea17ae177cb0a80cedfdbb95dcfb9'
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?'
const initialUrl = `${baseUrl}sort_by=popularity.desc${apiKey}`
const arr = ['Popular', 'Thriller', 'Kids', 'Drama', 'Comedy']

const getUrl = (p) => {
  const params = qs.stringify({ ...p }, { skipNulls: true })
  return `${baseUrl}${params}${apiKey}`
}

const SORT_FILTER = {
  asc: 'popularity.asc',
  desc: 'popularity.desc',
}

function Home() {
  const [popularity, setPopularity] = useState(SORT_FILTER.desc)
  const [country, setCountry] = useState(undefined)
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const url = getUrl({ sort_by: popularity, certification_country: country })
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('changed')
        setMovieData(data.results)
      })
  }, [popularity, country])

  const handleCountry = (e) => {
    const val = e.target.value
    if (val === 'none') {
      setCountry(undefined)
    } else {
      setCountry(val)
    }
  }

  //   const getData = (movieType) => {
  //     let newUrl = ''
  //     if (movieType === 'Popular') {
  //       newUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc${apiKey}`
  //     }
  //     if (movieType === 'Thriller') {
  //       newUrl = `${baseUrl}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${+apiKey}`
  //     }
  //     if (movieType === 'Kids') {
  //       newUrl = `${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${apiKey}`
  //     }
  //     if (movieType === 'Drama') {
  //       newUrl = `${baseUrl}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10${apiKey}`
  //     }
  //     if (movieType === 'Comedy') {
  //       newUrl = `${baseUrl}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc${apiKey}`
  //     }
  //     setUrl(newUrl)
  //   }

  //   const handleChange = (e) => {
  //     setSearch(e.target.value)
  //   }

  //   const searchMovie = (e) => {
  //     if (e.key === 'Enter') {
  //       const newUrl = `${baseUrl}/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=${search}`
  //       setUrl(newUrl)
  //       setSearch('')
  //     }
  //   }

  //   const handleClick = () => {
  //     const newUrl = `${baseUrl}/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=${search}`
  //     setUrl(newUrl)
  //     setSearch('')
  //   }

  return (
    <HomeStyled>
      {/* <div className="header">
        <nav className="navBar">
          <ul className="categorias">
            {arr.map((value) => (
              <li key={value}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* <a
                  href="#"
                  name={value}
                  onClick={(e) => {
                    getData(e.target.name)
                  }}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <form>
          <div className="searchBtn">
            <input
              className="inputText"
              type="text"
              placeholder="Buscar"
              value={search}
              onKeyPress={searchMovie}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleClick} value={search}>
              Buscar
            </button>
          </div>
        </form> */}
      {/* </div> */}
      <Body>
        <input
          type="checkbox"
          name="change-movies"
          id="change-movies"
          onChange={() => {
            if (popularity === SORT_FILTER.asc) {
              setPopularity(SORT_FILTER.desc)
            } else {
              setPopularity(SORT_FILTER.asc)
            }
          }}
        />
        <select name="country" id="country" onChange={handleCountry}>
          <option value="none">All</option>
          <option value="US">US</option>
          <option value="ES">Spain</option>
        </select>
        <MoviesGrid>
          {movieData.length === 0 ? (
            <p>Film Not Found</p>
          ) : (
            movieData.map((data) => <Movie id={data.id} info={data} />)
          )}
        </MoviesGrid>
      </Body>
    </HomeStyled>
  )
}

export default Home
