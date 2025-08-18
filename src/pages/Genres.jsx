import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/genres.css';
function Genres() {
    const [genres,setGenres] = useState([]);
    const navigate = useNavigate();

    return (
        <>
            <div className="genres-container">
                <h1 className="coming-soon">⚡ Coming Soon</h1>
                <div className="genres-list">
                    {genres.map((genre) => (
                        <div 
                            key={genre.id} 
                            className="genre-item" 
                            onClick={() => navigate(`/genres/${genre.id}`)}
                        >
                            <h2>{genre.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        
        
        
        </>

    )
}

export default Genres;