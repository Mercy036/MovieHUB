import { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/genres.css';


function Genres() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  useEffect(() => { 
    document.title = 'Genres | React Music App';
  }, []);
  return (
    <>
      <div className="genres">
       <h1 className="app-title" onClick={navigate("/")}>
          MovieHUB🎬
        </h1>
      </div>
      <h1 className='coming-soon'>⚡COMING SOON</h1>


    </>
  )
}

export default Genres;