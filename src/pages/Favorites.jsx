import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  
  console.log("Favorites in component:", favorites);
  
  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <h2>NO FAVORITE MOVIES YET</h2>
        <h3>Add your Favorite Movies Now...</h3>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>My Favorite Movies</h2>
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;