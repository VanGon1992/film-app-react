import React from "react";

export default function Movie(movie) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <h3>{movie.id}</h3>
    </div>
  );
}
