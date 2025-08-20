const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";



export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      console.error("TMDB error:", response.status, response.statusText);
      return [];
    }
    const data = await response.json();
    return data.results || [];
  } catch (err) {
    console.error("Failed to fetch popular movies:", err);
    return [];
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      console.error("TMDB error:", response.status, response.statusText);
      return [];
    }
    const data = await response.json();
    return data.results || [];
  } catch (err) {
    console.error("Failed to search movies:", err);
    return [];
  }
};

export const getGenresWithImages = async () => {
  try {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();

    const genresWithImages = await Promise.all(
      data.genres.map(async (g) => {
        const movies = await getMoviesByGenre(g.id);
        const poster = movies[0]?.poster_path // first movie’s poster
          ? `${imageBaseUrl}${movies[0].poster_path}`
          : "https://via.placeholder.com/300x200?text=" + g.name;

        return { ...g, image: poster };
      })
    );

    return genresWithImages;
  } catch (err) {
    console.error("Error fetching genres with images:", err);
    return [];
  }
};

export const fetchMovies=async ()=>{
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export const displayMoviesByGenres = async () => {
  const genreMap = await getGenreMap();
  const movies = await fetchMovies();
  movies.forEach(movie => {
    const names = movie.genre_ids.map(id => genreMap[id]);
    console.log(`${movie.title}: ${names.join(', ')}`);
});
}

export const getMoviesByGenre = async (genreId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error fetching movies by genre:", err);
    return [];
  }
};
