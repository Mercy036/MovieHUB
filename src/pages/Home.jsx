import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../services/api";
import "../css/Home.css";
function Home() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);
  


  function onSearch(e) {
    e.preventDefault();
    setSearchQuery("");
    console.log("searching for :", searchQuery);
  }

  return (
    <>
      <div className="Home">
        <form onSubmit={onSearch} className="search-form">
          <input
            type="text"
            placeholder="Search "
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Search
          </button>
        </form>
        <div className="movie-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
