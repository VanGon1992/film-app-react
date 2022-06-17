import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./mainStyle.scss";

let apiKey = "&api_key=28fea17ae177cb0a80cedfdbb95dcfb9";
let baseUrl = "https://api.themoviedb.org/3";
let url = baseUrl + "/discover/movie?sort_by=popularity.desc" + apiKey;
let arr = ["Popular", "Thriller", "Kids", "Drama", "Comedy"];

export default function Main() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
        console.log(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = baseUrl + "/discover/movie?sort_by=popularity.desc" + apiKey;
    }
    if (movieType === "Thriller") {
      url =
        baseUrl +
        "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc" +
        +apiKey;
    }
    if (movieType === "Kids") {
      url =
        baseUrl +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        apiKey;
    }
    if (movieType === "Drama") {
      url =
        baseUrl +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        apiKey;
    }
    if (movieType === "Comedy") {
      url =
        baseUrl +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        apiKey;
    }
    setUrl(url);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchMovie = (e) => {
    if (e.key === "Enter") {
      url =
        baseUrl +
        "/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=" +
        search;
      setUrl(url);
      setSearch("");
    }
  };

  const handleClick = () => {
    url =
      baseUrl +
      "/search/movie?api_key=28fea17ae177cb0a80cedfdbb95dcfb9&query=" +
      search;
    setUrl(url);
    setSearch("");
  };

  return (
    <>
      <div className="header">
        <div></div>
        <nav className="navBar">
          <ul className="categorias">
            {arr.map((value) => {
              return (
                <li>
                  <a
                    href="#"
                    name={value}
                    key={value.id}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
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
            ></input>
            <button type="submit" onClick={handleClick} value={search}>
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div>
        {movieData.length === 0 ? (
          <p>Film Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
}
