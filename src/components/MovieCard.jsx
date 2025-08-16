import {imageBaseUrl} from "../services/api";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({movie}){
  const {isFavorites, addToFavorites, removeFromFavorites, favorites, addToWatchLater, isWatchLater} = useMovieContext()
  const favorite = isFavorites(movie.id)
  const watchLater = isWatchLater(movie.id)
  
  function onWatchLater(e){
    e.preventDefault() // Fixed: Added parentheses
    console.log("adding to watch later", movie)
    if (!watchLater) { // Only add if not already in watch later
      addToWatchLater(movie) // Fixed: Actually call the function
    }
  }

  function onFavorite(e){
    e.preventDefault()
    console.log("Current favorites:", favorites);
    if (favorite) {
      console.log("Removing from favorites:", movie.id);
      removeFromFavorites(movie.id)
    } else {
      console.log("Adding to favorites:", movie);
      addToFavorites(movie)
    }
  }
  
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          className="movie-img" 
          src={`${imageBaseUrl}${movie.poster_path}`} 
          alt={movie.title}   
          onError={(e) => {
            e.target.src = "https://www.ledr.com/colours/black.jpg";
          }}
        />
        <div className="movie-overlay">
          <button 
            className={`favorite-button ${favorite ? "favorited" : ""}`} 
            onClick={onFavorite}
          >
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button 
          className={`watch-later-button ${watchLater ? "added" : ""}`}
          onClick={onWatchLater}
          disabled={watchLater}
        >
          {watchLater ? "Added to\nWatch Later" : "Add to\nWatch Later"}
        </button>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard;