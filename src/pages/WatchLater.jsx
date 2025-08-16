import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../services/api";
import "../css/Watch_Later.css";
import {useMovieContext} from "../contexts/MovieContexts";

function WatchLater() {
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);

  const { addToWatchLater, removeFromWatchLater ,watchLater} = useMovieContext();

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("watchLater")) || [];
    setWatchLaterMovies(storedMovies);
  }, []);

  

  if (watchLaterMovies.length === 0 ) {
    return (
        <div className = "watch-later">
            <h2>
                NO MOVIES IN ADDED TO WATCH LATER
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