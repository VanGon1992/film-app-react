import React, { useEffect, useState } from 'react'
import { Body } from '../components/layout'
import { Movie } from '../components/organisms'

const apiKey = '&api_key=28fea17ae177cb0a80cedfdbb95dcfb9'
const baseUrl = 'https://api.themoviedb.org/3'
const initialUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc${apiKey}`
const arr = ['Popular', 'Thriller', 'Kids', 'Drama', 'Comedy']

function Home() {
  const [movieData, setMovieData] = useState([])
  const [url, setUrl] = useState(initialUrl)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results)
      })
  }, [url])

  const getData = (movieType) => {
    let newUrl = ''
    if (movieType === 'Popular') {
      newUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc${apiKey}`
    }
    if (movieType === 'Thriller') {
      newUrl = `${baseUrl}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${+apiKey}`
    }
    if (movieType === 'Kids') {
      newUrl = `${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${apiKey}`
    }
    if (movieType === 'Drama') {
      newUrl = `${baseUrl}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10${apiKey}`
    }
    if (movieType === 'Comedy') {
      newUrl = `${baseUrl}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc${apiKey}`
    }
    setUrl(newUrl)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const searchMovie = (e) => {
    if (e.key === 'Enter') {
      const newUrl = `${baseUrl}/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=${search}`
      setUrl(newUrl)
      setSearch('')
    }
  }

  const handleClick = () => {
    const newUrl = `${baseUrl}/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=${search}`
    setUrl(newUrl)
    setSearch('')
  }

  return (
    <>
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
        <div>
          {movieData.length === 0 ? (
            <p>Film Not Found</p>
          ) : (
            movieData.map((res, pos) => <Movie id={res.id} info={res} />)
          )}
        </div>
      </Body>
    </>
  )
}

export default Home
