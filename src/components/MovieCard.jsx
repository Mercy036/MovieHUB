import {imageBaseUrl} from "../services/api";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function movieCard({movie}){
  const {isFavorite ,addToFavorites,removeFromFavoritees} = useMovieContext()
  const favorite = isFavorite(movie.id)
  
  function onFavorite(){
    alert("CLICKED")
  }
  
  return <>
    <div className="movie-card">
      <div className="movie-poster">
        <img className="movie-img" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}   onError={(e) => {
    e.target.src = "https://www.ledr.com/colours/black.jpg";
  }}/>
        <div className="movie-overlay">
          <button className={`favorite-button ${favorite ? "active" : ""}`} onClick={onFavorite}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  </>
}


export default movieCard;