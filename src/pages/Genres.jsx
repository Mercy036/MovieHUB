import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/genres.css';


function Genres() {

  return (
    <>
      <h1 className='coming-soon'>⚡COMING SOON</h1>
    </>
  )
//   const [genres, setGenres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Genre descriptions for better UX
//   const genreDescriptions = {
//     28: "High-octane thrills and explosive sequences",
//     12: "Epic journeys and exciting expeditions",
//     16: "Colorful worlds of imagination and wonder",
//     35: "Laughter and lighthearted entertainment",
//     80: "Dark mysteries and criminal investigations",
//     99: "Real stories that inform and inspire",
//     18: "Emotional narratives and human experiences",
//     10751: "Entertainment for the whole family",
//     14: "Magical realms and supernatural adventures",
//     36: "Stories from the past brought to life",
//     27: "Spine-chilling thrills and frightening tales",
//     10402: "Rhythm, melody, and musical storytelling",
//     9648: "Puzzling plots and suspenseful investigations",
//     10749: "Love stories and romantic adventures",
//     878: "Futuristic worlds and technological wonders",
//     10770: "Made-for-television entertainment",
//     53: "Edge-of-your-seat tension and excitement",
//     10752: "Epic battles and military conflicts",
//     37: "Wild west adventures and frontier stories"
//   };

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         setLoading(true);
//         const genresWithImages = await getGenresWithImages();
        
//         // Add descriptions to genres
//         const enhancedGenres = genresWithImages.map(genre => ({
//           ...genre,
//           description: genreDescriptions[genre.id] || "Discover amazing movies in this genre",
//           movieCount: Math.floor(Math.random() * 500) + 50 // Simulated movie count
//         }));
        
//         setGenres(enhancedGenres);
//       } catch (err) {
//         setError('Failed to load genres. Please try again later.');
//         console.error('Error fetching genres:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGenres();
//   }, []);

//   const handleGenreClick = (genreId, genreName) => {
//     navigate(`/genres/${genreId}`, { 
//       state: { genreName } 
//     });
//   };

//   const handleTitleClick = () => {
//     navigate("/");
//   };

//   if (loading) {
//     return (
//       <div className="genres">
//         <h1 className="app-title" onClick={handleTitleClick}>
//           MovieHUB🎬
//         </h1>
//         <h2>Loading Genres...</h2>
//         <div className="empty-state">
//           <h3>Discovering movie genres...</h3>
//           <p>Please wait while we load all available genres for you.</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="genres">
//         <h1 className="app-title" onClick={handleTitleClick}>
//           MovieHUB🎬
//         </h1>
//         <h2>Genres</h2>
//         <div className="empty-state">
//           <h3>Oops! Something went wrong</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="genres"> 
//       <h1 className="app-title" onClick={handleTitleClick}>
//         MovieHUB🎬
//       </h1>
//       <h2 className="genres-title">Explore Movie Genres</h2>
      
//       {genres.length === 0 ? (
//         <div className="empty-state">
//           <h3>No genres available</h3>
//           <p>We couldn't find any movie genres at the moment. Please try again later.</p>
//         </div>
//       ) : (
//         <div className="genres-list">
//           {genres.map((genre, index) => (
//             <div 
//               key={genre.id} 
//               className="genre-item" 
//               onClick={() => handleGenreClick(genre.id, genre.name)}
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               <img 
//                 src={genre.image} 
//                 alt={`${genre.name} genre`}
//                 className="genre-image"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/400x300/1a1a2e/ffffff?text=No+Image';
//                 }}
//               />
              
//               <div className="genre-overlay">
//                 <div className="genre-count">
//                   {genre.movieCount}+ movies
//                 </div>
//               </div>

//               <div className="genre-info">
//                 <h3>{genre.name}</h3>
//               </div>

//               <div className="genre-description">
//                 <h4>About {genre.name}</h4>
//                 <p>{genre.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
}

export default Genres;