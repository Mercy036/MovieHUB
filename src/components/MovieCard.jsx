import {imageBaseUrl} from "../services/api";
import "../css/MovieCard.css";


function movieCard({movie}){
  
  function onFavorite(){
    alert("CLICKED")
  }
  
  return <>
    <div className="movie-card">
      <div className="movie-poster">
        <img className="movie-img" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
          <button className="favorite-button" onClick={onFavorite}>
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