import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Watch_Later.css";
import {useMovieContext} from "../contexts/MovieContexts";

function WatchLater() {
  const { watchLater } = useMovieContext();

  if (watchLater.length === 0) {
    return (
        <div className="watch-later">
            <h2>
                NO MOVIES ADDED TO WATCH LATER
            </h2>
        </div>
    )
  }

  return (
    <div className="watch-later">
      <h2>Watch Later</h2>
      <div className="movie-list">
        {watchLater.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default WatchLater;