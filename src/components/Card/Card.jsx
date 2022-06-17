import React from "react";
import "./cardStyle.scss";

export default function Card(movie) {
  console.log(movie.info);
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <img
        src={img_path + movie.info.poster_path}
        key={movie.id}
        alt="poster"
        className="imagen"
      ></img>
      <div>
        <div>
          <h2>{movie.info.title}</h2>
          <p>{movie.info.vote_average}</p>
        </div>
        <div>
          <h3>Overview</h3>
          <p>{movie.info.overview}</p>
        </div>
      </div>
    </div>
  );
}
