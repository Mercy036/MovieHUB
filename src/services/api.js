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
