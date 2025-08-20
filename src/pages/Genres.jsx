import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/genres.css';
import { getGenresWithImages } from '..services/api';

function Genres() {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      const genresWithImages = await getGenresWithImages();
      setGenres(genresWithImages);
    };
    fetchGenres();y
  }, []);

  return (
    <div className="genres"> 
      <h1 className="app-title" onClick={() => navigate("/")}>MovieHUB🎬</h1>
      <h2 className="genres-title">Genres</h2>
      <div className="genres-list">
        {genres.map((genre) => (
          <div 
            key={genre.id} 
            className="genre-item" 
            onClick={() => navigate(`/genres/${genre.id}`)}
          >
            <img src={genre.image} alt={genre.name} />
            <h3>{genre.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genres;
