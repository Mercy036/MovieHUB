const API_KEY = "8b4efcb180c500dc2bd57817c60941a0";
const BASE_URL = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
