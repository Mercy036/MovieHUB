import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../services/api";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setError("Failed to fetch movie");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovie();
  }, []);

  function onSearch(e) {
    e.preventDefault();
    if(!searchQuery.trim()){
      return;
    }
    if(loading) return;

    setLoading(true);
    try{
      const searchResults = searchMovie(searchQuery);
      searchResults.then((results) => {
        setMovies(results);
        if (results.length === 0) {
          setError("No movies found");
        } else {
          setError(null);
        }
      });
    }catch(error) {
      console.error("Failed to search movies:", error);
      setError("Failed to search movie");
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <>
      <div className="Home">
        <h1 className="home-title">MovieHUB🎬</h1>
        <div className="search-container">
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
          {error && <div className="error">{error}</div>}

          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="movie-grid">
              {movies.map((movie) =>
                    <MovieCard movie={movie} key={movie.id} />
                  )
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
