import {imageBaseUrl} from "../services/api";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({movie}){
  const {isFavorites, addToFavorites, removeFromFavorites, favorites, addToWatchLater, isWatchLater, removeFromWatchLater} = useMovieContext()
  const favorite = isFavorites(movie.id)
  const watchLater = isWatchLater(movie.id)
  
  function onWatchLater(e){
    e.preventDefault() // Fixed: Added parentheses
    console.log("toggling watch later for", movie.title)
    if (watchLater) {
      console.log("Removing from watch later:", movie.id)
      removeFromWatchLater(movie.id) // Remove if already in watch later
    } else {
      console.log("Adding to watch later:", movie.title)
      addToWatchLater(movie) // Add if not in watch later
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
        >
          {watchLater ? "Remove from\nWatch Later" : "Add to\nWatch Later"}
        </button>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard;