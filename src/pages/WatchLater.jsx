import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Watch_Later.css";
import {useMovieContext} from "../contexts/MovieContexts";
import { useNavigate } from "react-router-dom";
function WatchLater() {
  const { watchLater } = useMovieContext();
  const navigate = useNavigate();

  if (watchLater.length === 0) {
    return (
        <div className="watch-later">
          <h1 className="watch-later-title-nomovies" onClick={()=> navigate("/")}>MovieHUB🎬</h1>
          <h2>
              NO MOVIES ADDED TO WATCH LATER
          </h2>
        </div>
    )
  }

  return (
    <div className="watch-later">
      <h1 className="watch-later-title-nomovies" onClick={()=> navigate("/")}>MovieHUB🎬</h1>
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